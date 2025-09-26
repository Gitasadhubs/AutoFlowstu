"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const routes_js_1 = require("./routes.js");
require("./auth.js"); // Import passport configuration
const app = (0, express_1.default)();
// Trust proxy for Railway
app.set('trust proxy', 1);
// Security middleware
app.use((0, helmet_1.default)({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
}));
// CORS configuration - allow frontend domain
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === "production"
        ? [
            process.env.FRONTEND_URL || "https://autoflow-frontend.vercel.app",
            /\.vercel\.app$/,
            /\.railway\.app$/
        ]
        : ["http://localhost:5000", "http://localhost:3000", "http://localhost:4173"],
    credentials: true,
}));
// Rate limiting - Configure trust proxy properly for security
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    skip: (req) => process.env.NODE_ENV === "development",
    // Use standard headers for Railway deployment
    standardHeaders: true,
    legacyHeaders: false,
});
app.use("/api", limiter);
// Body parsing middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Session configuration
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
}));
// Passport middleware
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Request logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse = undefined;
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
(async () => {
    const server = await (0, routes_js_1.registerRoutes)(app);
    app.use((err, _req, res, _next) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
        console.error(err);
    });
    // Use Railway's PORT environment variable or default to 3000
    const port = parseInt(process.env.PORT || "3000", 10);
    server.listen(port, "0.0.0.0", () => {
        console.log(`Backend server running on port ${port}`);
    });
})();
