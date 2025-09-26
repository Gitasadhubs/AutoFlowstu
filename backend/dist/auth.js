"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = exports.requireAuth = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_github2_1 = require("passport-github2");
const storage_1 = require("./storage");
if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.warn("GitHub OAuth credentials not found. Please set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET environment variables.");
    console.warn("Authentication will be disabled until credentials are provided.");
}
else {
    passport_1.default.use(new passport_github2_1.Strategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.NODE_ENV === "production"
            ? `${process.env.BACKEND_URL}/api/auth/github/callback`
            : "http://localhost:5000/api/auth/github/callback"
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const githubUser = {
                username: profile.username,
                email: profile.emails?.[0]?.value || `${profile.username}@users.noreply.github.com`,
                githubId: profile.id,
                avatar: profile.photos?.[0]?.value,
                accessToken
            };
            let user = await storage_1.storage.getUserByGithubId(githubUser.githubId);
            if (!user) {
                user = await storage_1.storage.createUser(githubUser);
            }
            else {
                user = await storage_1.storage.updateUser(user.id, {
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
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await storage_1.storage.getUser(id);
        done(null, user);
    }
    catch (error) {
        done(error, null);
    }
});
// Middleware to ensure user is authenticated
const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: "Authentication required" });
};
exports.requireAuth = requireAuth;
// Middleware to get current user
const getCurrentUser = (req) => {
    return req.user || null;
};
exports.getCurrentUser = getCurrentUser;
