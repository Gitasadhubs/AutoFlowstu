import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import passport from "passport";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { registerRoutes } from "./routes";
import "./auth"; // Import passport configuration

const app = express();

// Trust proxy for Railway
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
}));

// CORS configuration - allow frontend domain
// Ensure we normalize FRONTEND_URL to an origin (strip trailing slashes/paths)
const frontendOrigin = process.env.FRONTEND_URL ? new URL(process.env.FRONTEND_URL).origin : undefined;
app.use(cors({
  origin: process.env.NODE_ENV === "production" 
    ? [
        frontendOrigin || "https://autoflow-frontend.vercel.app",
        /\.vercel\.app$/,
        /\.railway\.app$/
      ]
    : ["http://localhost:5000", "http://localhost:3000", "http://localhost:4173"],
  credentials: true,
}));

// Rate limiting - Configure trust proxy properly for security
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  skip: (req) => process.env.NODE_ENV === "development",
  // Use standard headers for Railway deployment
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", limiter);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session configuration (production-ready: Postgres-backed store and cross-site cookie settings)
const PgSession = connectPgSimple(session);
app.use(session({
  store: new PgSession({
    conString: process.env.DATABASE_URL as string,
    createTableIfMissing: true,
    tableName: "session",
  }),
  secret: process.env.SESSION_SECRET || "your-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    // Allow cross-site requests from your frontend domain (Vercel -> Railway)
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// Health check endpoint for Railway
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

(async () => {
  try {
    console.log('🚀 Starting AutoFlow backend...');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Database URL set:', !!process.env.DATABASE_URL);
    console.log('Session secret set:', !!process.env.SESSION_SECRET);
    console.log('GitHub client set:', !!process.env.GITHUB_CLIENT_ID);
    console.log('Backend URL:', process.env.BACKEND_URL);
    console.log('Frontend URL:', process.env.FRONTEND_URL);
    
    const server = await registerRoutes(app);
    console.log('✅ Routes registered successfully');

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      console.error('❌ Server error:', err);
    });

    // Use Railway's PORT environment variable or default to 3000
    const port = parseInt(process.env.PORT || "3000", 10);
    server.listen(port, "0.0.0.0", () => {
      console.log(`✅ Backend server running on port ${port}`);
      console.log(`🔗 Health check: http://0.0.0.0:${port}/api/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
})();
