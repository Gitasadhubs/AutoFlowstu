import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { storage } from "./storage";
if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.warn("GitHub OAuth credentials not found. Please set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET environment variables.");
    console.warn("Authentication will be disabled until credentials are provided.");
}
else {
    // Normalize BACKEND_URL (strip wrapping quotes and trailing slashes) and build callback
    const normalizeUrl = (u) => (u || "").trim().replace(/^['"]|['"]$/g, "").replace(/\/+$/, "");
    const backendBase = normalizeUrl(process.env.BACKEND_URL);
    const devBase = "http://localhost:5000";
    const callbackBase = backendBase || (process.env.NODE_ENV === "production" ? devBase : devBase);
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `${callbackBase}/api/auth/github/callback`
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const githubUser = {
                username: profile.username,
                email: profile.emails?.[0]?.value || `${profile.username}@users.noreply.github.com`,
                githubId: profile.id,
                avatar: profile.photos?.[0]?.value,
                accessToken
            };
            let user = await storage.getUserByGithubId(githubUser.githubId);
            if (!user) {
                user = await storage.createUser(githubUser);
            }
            else {
                user = await storage.updateUser(user.id, {
                    accessToken: githubUser.accessToken,
                    avatar: githubUser.avatar
                });
            }
            return done(null, user);
        }
        catch (error) {
            return done(error, null);
        }
    }));
}
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const user = await storage.getUser(id);
        done(null, user);
    }
    catch (error) {
        done(error, null);
    }
});
// Middleware to ensure user is authenticated
export const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: "Authentication required" });
};
// Middleware to get current user
export const getCurrentUser = (req) => {
    return req.user || null;
};
