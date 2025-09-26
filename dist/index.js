var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// server/index.ts
import express2 from "express";
import session from "express-session";
import passport3 from "passport";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// server/routes.ts
import { createServer } from "http";
import passport2 from "passport";
import { Octokit } from "@octokit/rest";

// shared/schema.ts
import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  githubId: text("github_id").unique(),
  avatar: text("avatar"),
  accessToken: text("access_token"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  repositoryUrl: text("repository_url").notNull(),
  repositoryName: text("repository_name").notNull(),
  branch: text("branch").default("main").notNull(),
  framework: text("framework").notNull(),
  // react, node, python, etc.
  deploymentUrl: text("deployment_url"),
  status: text("status").default("pending").notNull(),
  // pending, building, deployed, failed
  lastDeploymentAt: timestamp("last_deployment_at"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var deployments = pgTable("deployments", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").notNull(),
  status: text("status").default("pending").notNull(),
  // pending, building, success, failed
  commitHash: text("commit_hash"),
  commitMessage: text("commit_message"),
  buildLogs: text("build_logs"),
  deploymentUrl: text("deployment_url"),
  startedAt: timestamp("started_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at")
});
var activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  projectId: integer("project_id"),
  type: text("type").notNull(),
  // deployment, build, error, etc.
  description: text("description").notNull(),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
  activities: many(activities)
}));
var projectsRelations = relations(projects, ({ one, many }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.id]
  }),
  deployments: many(deployments),
  activities: many(activities)
}));
var deploymentsRelations = relations(deployments, ({ one }) => ({
  project: one(projects, {
    fields: [deployments.projectId],
    references: [projects.id]
  })
}));
var activitiesRelations = relations(activities, ({ one }) => ({
  user: one(users, {
    fields: [activities.userId],
    references: [users.id]
  }),
  project: one(projects, {
    fields: [activities.projectId],
    references: [projects.id]
  })
}));
var insertUserSchema = createInsertSchema(users);
var insertProjectSchema = createInsertSchema(projects);
var insertDeploymentSchema = createInsertSchema(deployments);
var insertActivitySchema = createInsertSchema(activities);

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";

// shared/schema.js
var schema_exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertActivitySchema = exports.insertDeploymentSchema = exports.insertProjectSchema = exports.insertUserSchema = exports.activitiesRelations = exports.deploymentsRelations = exports.projectsRelations = exports.usersRelations = exports.activities = exports.deployments = exports.projects = exports.users = void 0;
var pg_core_1 = __require("drizzle-orm/pg-core");
var drizzle_zod_1 = __require("drizzle-zod");
var drizzle_orm_1 = __require("drizzle-orm");
exports.users = (0, pg_core_1.pgTable)("users", {
  id: (0, pg_core_1.serial)("id").primaryKey(),
  username: (0, pg_core_1.text)("username").notNull().unique(),
  email: (0, pg_core_1.text)("email").notNull().unique(),
  githubId: (0, pg_core_1.text)("github_id").unique(),
  avatar: (0, pg_core_1.text)("avatar"),
  accessToken: (0, pg_core_1.text)("access_token"),
  createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull()
});
exports.projects = (0, pg_core_1.pgTable)("projects", {
  id: (0, pg_core_1.serial)("id").primaryKey(),
  userId: (0, pg_core_1.integer)("user_id").notNull(),
  name: (0, pg_core_1.text)("name").notNull(),
  description: (0, pg_core_1.text)("description"),
  repositoryUrl: (0, pg_core_1.text)("repository_url").notNull(),
  repositoryName: (0, pg_core_1.text)("repository_name").notNull(),
  branch: (0, pg_core_1.text)("branch").default("main").notNull(),
  framework: (0, pg_core_1.text)("framework").notNull(),
  // react, node, python, etc.
  deploymentUrl: (0, pg_core_1.text)("deployment_url"),
  status: (0, pg_core_1.text)("status").default("pending").notNull(),
  // pending, building, deployed, failed
  lastDeploymentAt: (0, pg_core_1.timestamp)("last_deployment_at"),
  createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull()
});
exports.deployments = (0, pg_core_1.pgTable)("deployments", {
  id: (0, pg_core_1.serial)("id").primaryKey(),
  projectId: (0, pg_core_1.integer)("project_id").notNull(),
  status: (0, pg_core_1.text)("status").default("pending").notNull(),
  // pending, building, success, failed
  commitHash: (0, pg_core_1.text)("commit_hash"),
  commitMessage: (0, pg_core_1.text)("commit_message"),
  buildLogs: (0, pg_core_1.text)("build_logs"),
  deploymentUrl: (0, pg_core_1.text)("deployment_url"),
  startedAt: (0, pg_core_1.timestamp)("started_at").defaultNow().notNull(),
  completedAt: (0, pg_core_1.timestamp)("completed_at")
});
exports.activities = (0, pg_core_1.pgTable)("activities", {
  id: (0, pg_core_1.serial)("id").primaryKey(),
  userId: (0, pg_core_1.integer)("user_id").notNull(),
  projectId: (0, pg_core_1.integer)("project_id"),
  type: (0, pg_core_1.text)("type").notNull(),
  // deployment, build, error, etc.
  description: (0, pg_core_1.text)("description").notNull(),
  metadata: (0, pg_core_1.jsonb)("metadata"),
  createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull()
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
  projects: many(exports.projects),
  activities: many(exports.activities)
}));
exports.projectsRelations = (0, drizzle_orm_1.relations)(exports.projects, ({ one, many }) => ({
  user: one(exports.users, {
    fields: [exports.projects.userId],
    references: [exports.users.id]
  }),
  deployments: many(exports.deployments),
  activities: many(exports.activities)
}));
exports.deploymentsRelations = (0, drizzle_orm_1.relations)(exports.deployments, ({ one }) => ({
  project: one(exports.projects, {
    fields: [exports.deployments.projectId],
    references: [exports.projects.id]
  })
}));
exports.activitiesRelations = (0, drizzle_orm_1.relations)(exports.activities, ({ one }) => ({
  user: one(exports.users, {
    fields: [exports.activities.userId],
    references: [exports.users.id]
  }),
  project: one(exports.projects, {
    fields: [exports.activities.projectId],
    references: [exports.projects.id]
  })
}));
exports.insertUserSchema = (0, drizzle_zod_1.createInsertSchema)(exports.users);
exports.insertProjectSchema = (0, drizzle_zod_1.createInsertSchema)(exports.projects);
exports.insertDeploymentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.deployments);
exports.insertActivitySchema = (0, drizzle_zod_1.createInsertSchema)(exports.activities);

// server/db.ts
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq, desc } from "drizzle-orm";
var DatabaseStorage = class {
  // User methods
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByGithubId(githubId) {
    const [user] = await db.select().from(users).where(eq(users.githubId, githubId));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async updateUser(id, updates) {
    const [user] = await db.update(users).set(updates).where(eq(users.id, id)).returning();
    return user || void 0;
  }
  // Project methods
  async getProject(id) {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || void 0;
  }
  async getProjectsByUserId(userId) {
    return await db.select().from(projects).where(eq(projects.userId, userId)).orderBy(desc(projects.createdAt));
  }
  async createProject(insertProject) {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }
  async updateProject(id, updates) {
    const [project] = await db.update(projects).set(updates).where(eq(projects.id, id)).returning();
    return project || void 0;
  }
  async deleteProject(id) {
    const result = await db.delete(projects).where(eq(projects.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }
  // Deployment methods
  async getDeployment(id) {
    const [deployment] = await db.select().from(deployments).where(eq(deployments.id, id));
    return deployment || void 0;
  }
  async getDeploymentsByProjectId(projectId) {
    return await db.select().from(deployments).where(eq(deployments.projectId, projectId)).orderBy(desc(deployments.startedAt));
  }
  async createDeployment(insertDeployment) {
    const [deployment] = await db.insert(deployments).values(insertDeployment).returning();
    return deployment;
  }
  async updateDeployment(id, updates) {
    const [deployment] = await db.update(deployments).set(updates).where(eq(deployments.id, id)).returning();
    return deployment || void 0;
  }
  // Activity methods
  async getActivitiesByUserId(userId, limit = 10) {
    return await db.select().from(activities).where(eq(activities.userId, userId)).orderBy(desc(activities.createdAt)).limit(limit);
  }
  async createActivity(insertActivity) {
    const [activity] = await db.insert(activities).values(insertActivity).returning();
    return activity;
  }
};
var storage = new DatabaseStorage();

// server/auth.ts
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  console.warn("GitHub OAuth credentials not found. Please set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET environment variables.");
  console.warn("Authentication will be disabled until credentials are provided.");
} else {
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV === "production" ? `${process.env.BACKEND_URL}/api/auth/github/callback` : "http://localhost:5000/api/auth/github/callback"
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
      } else {
        user = await storage.updateUser(user.id, {
          accessToken: githubUser.accessToken,
          avatar: githubUser.avatar
        });
      }
      return done(null, user);
    } catch (error) {
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
  } catch (error) {
    done(error, null);
  }
});
var requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authentication required" });
};
var getCurrentUser = (req) => {
  return req.user || null;
};

// server/routes.ts
import { z } from "zod";
async function createGitHubActionsWorkflow(accessToken, project) {
  const octokit = new Octokit({ auth: accessToken });
  const [owner, repo] = project.repositoryName.split("/");
  const workflowContent = generateWorkflowYaml(project);
  try {
    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: ".github/workflows/autoflow-deploy.yml",
      message: "Add AutoFlow CI/CD workflow",
      content: Buffer.from(workflowContent).toString("base64")
    });
  } catch (error) {
    if (error.status === 422) {
      const { data: existingFile } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: ".github/workflows/autoflow-deploy.yml"
      });
      await octokit.rest.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: ".github/workflows/autoflow-deploy.yml",
        message: "Update AutoFlow CI/CD workflow",
        content: Buffer.from(workflowContent).toString("base64"),
        sha: existingFile.sha
      });
    } else {
      throw error;
    }
  }
}
async function triggerGitHubActionsWorkflow(accessToken, project, deploymentId) {
  const octokit = new Octokit({ auth: accessToken });
  const [owner, repo] = project.repositoryName.split("/");
  await octokit.rest.actions.createWorkflowDispatch({
    owner,
    repo,
    workflow_id: "autoflow-deploy.yml",
    ref: project.branch,
    inputs: {
      deployment_id: deploymentId.toString(),
      webhook_url: process.env.NODE_ENV === "production" ? `${process.env.BACKEND_URL}/api/webhooks/github` : `http://localhost:5000/api/webhooks/github`
    }
  });
}
function generateWorkflowYaml(project) {
  return `name: AutoFlow CI/CD

on:
  workflow_dispatch:
    inputs:
      deployment_id:
        description: 'Deployment ID'
        required: true
      webhook_url:
        description: 'Webhook URL for status updates'
        required: true
  push:
    branches: [ ${project.branch} ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: \${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: \${{ secrets.ORG_ID }}
        vercel-project-id: \${{ secrets.PROJECT_ID }}
        working-directory: ./
        
    - name: Notify deployment success
      if: success()
      run: |
        curl -X POST "\${{ github.event.inputs.webhook_url }}" \\
          -H "Content-Type: application/json" \\
          -d '{"deployment_id": "\${{ github.event.inputs.deployment_id }}", "status": "success", "logs": "Deployment completed successfully"}'
          
    - name: Notify deployment failure
      if: failure()
      run: |
        curl -X POST "\${{ github.event.inputs.webhook_url }}" \\
          -H "Content-Type: application/json" \\
          -d '{"deployment_id": "\${{ github.event.inputs.deployment_id }}", "status": "failed", "logs": "Deployment failed. Check the logs for details."}'`;
}
async function registerRoutes(app2) {
  app2.get("/api/auth/user", (req, res) => {
    const user = getCurrentUser(req);
    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    res.json(user);
  });
  app2.get("/api/auth/github", passport2.authenticate("github", {
    scope: ["user:email", "repo", "workflow"]
  }));
  app2.get(
    "/api/auth/github/callback",
    passport2.authenticate("github", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect("/");
    }
  );
  app2.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });
  app2.get("/api/projects", requireAuth, async (req, res) => {
    try {
      const user = getCurrentUser(req);
      if (!user) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      const projects2 = await storage.getProjectsByUserId(user.id);
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  app2.post("/api/projects", requireAuth, async (req, res) => {
    try {
      const user = getCurrentUser(req);
      if (!user || !user.accessToken) {
        return res.status(401).json({ message: "GitHub access token not found" });
      }
      const projectData = insertProjectSchema.parse({
        ...req.body,
        userId: user.id
      });
      const project = await storage.createProject(projectData);
      try {
        await createGitHubActionsWorkflow(user.accessToken, project);
      } catch (workflowError) {
        console.error("Failed to create GitHub Actions workflow:", workflowError);
      }
      await storage.createActivity({
        userId: user.id,
        projectId: project.id,
        type: "project_created",
        description: `Project "${project.name}" created`
      });
      res.status(201).json(project);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid project data", errors: error.errors });
      }
      console.error("Project creation error:", error);
      res.status(500).json({ message: "Failed to create project" });
    }
  });
  app2.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });
  app2.patch("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const project = await storage.updateProject(id, updates);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to update project" });
    }
  });
  app2.delete("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteProject(id);
      if (!deleted) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete project" });
    }
  });
  app2.get("/api/projects/:id/deployments", async (req, res) => {
    try {
      const projectId = parseInt(req.params.id);
      const deployments2 = await storage.getDeploymentsByProjectId(projectId);
      res.json(deployments2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch deployments" });
    }
  });
  app2.post("/api/projects/:id/deploy", requireAuth, async (req, res) => {
    try {
      const projectId = parseInt(req.params.id);
      const user = getCurrentUser(req);
      if (!user || !user.accessToken) {
        return res.status(401).json({ message: "GitHub access token not found" });
      }
      const project = await storage.getProject(projectId);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      const deployment = await storage.createDeployment({
        projectId,
        status: "building",
        commitHash: req.body.commitHash || "latest",
        commitMessage: req.body.commitMessage || "Deploy to production"
      });
      await storage.updateProject(projectId, {
        status: "building"
      });
      await storage.createActivity({
        userId: user.id,
        projectId,
        type: "deployment_started",
        description: `Deployment started for "${project.name}"`
      });
      try {
        await triggerGitHubActionsWorkflow(user.accessToken, project, deployment.id);
      } catch (workflowError) {
        console.error("Failed to trigger GitHub Actions workflow:", workflowError);
        await storage.updateDeployment(deployment.id, {
          status: "failed",
          buildLogs: `Failed to trigger deployment: ${workflowError instanceof Error ? workflowError.message : String(workflowError)}`
        });
        await storage.updateProject(projectId, {
          status: "failed"
        });
        await storage.createActivity({
          userId: user.id,
          projectId,
          type: "deployment_failed",
          description: `Failed to trigger deployment for "${project.name}"`
        });
      }
      res.status(201).json(deployment);
    } catch (error) {
      console.error("Deploy error:", error);
      res.status(500).json({ message: "Failed to start deployment" });
    }
  });
  app2.get("/api/activities", requireAuth, async (req, res) => {
    try {
      const user = getCurrentUser(req);
      if (!user) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      const limit = parseInt(req.query.limit) || 10;
      const activities2 = await storage.getActivitiesByUserId(user.id, limit);
      res.json(activities2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch activities" });
    }
  });
  app2.get("/api/github/repositories", requireAuth, async (req, res) => {
    try {
      const user = getCurrentUser(req);
      if (!user || !user.accessToken) {
        return res.status(401).json({ message: "GitHub access token not found" });
      }
      const octokit = new Octokit({
        auth: user.accessToken
      });
      const { data: repositories } = await octokit.rest.repos.listForAuthenticatedUser({
        sort: "updated",
        per_page: 100
      });
      const formattedRepos = repositories.map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description || "",
        private: repo.private,
        html_url: repo.html_url,
        language: repo.language || "Unknown",
        default_branch: repo.default_branch,
        updated_at: repo.updated_at
      }));
      res.json(formattedRepos);
    } catch (error) {
      console.error("GitHub API error:", error);
      res.status(500).json({ message: "Failed to fetch repositories from GitHub" });
    }
  });
  app2.get("/api/stats", requireAuth, async (req, res) => {
    try {
      const user = getCurrentUser(req);
      if (!user) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      const projects2 = await storage.getProjectsByUserId(user.id);
      const stats = {
        totalProjects: projects2.length,
        successfulDeployments: projects2.filter((p) => p.status === "deployed").length,
        avgBuildTime: "2.3min",
        successRate: projects2.length > 0 ? Math.round(projects2.filter((p) => p.status === "deployed").length / projects2.length * 100) + "%" : "0%"
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });
  app2.post("/api/webhooks/github", async (req, res) => {
    try {
      const { deployment_id, status, logs, deployment_url } = req.body;
      if (!deployment_id) {
        return res.status(400).json({ message: "deployment_id is required" });
      }
      const deployment = await storage.updateDeployment(parseInt(deployment_id), {
        status,
        buildLogs: logs,
        deploymentUrl: deployment_url
      });
      if (!deployment) {
        return res.status(404).json({ message: "Deployment not found" });
      }
      const project = await storage.getProject(deployment.projectId);
      if (project) {
        await storage.updateProject(deployment.projectId, {
          status: status === "success" ? "deployed" : status,
          deploymentUrl: status === "success" ? deployment_url : void 0
        });
        await storage.createActivity({
          userId: project.userId,
          projectId: deployment.projectId,
          type: status === "success" ? "deployment_success" : "deployment_failed",
          description: `Deployment ${status === "success" ? "completed successfully" : "failed"} for "${project.name}"`
        });
      }
      res.json({ message: "Webhook processed successfully" });
    } catch (error) {
      console.error("Webhook error:", error);
      res.status(500).json({ message: "Failed to process webhook" });
    }
  });
  app2.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app2.all("/api/*", (req, res) => {
    res.status(404).json({ message: "API endpoint not found" });
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer } from "vite";

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer())
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      error: (msg, options) => {
        console.error(msg);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
function validateEnvironment() {
  const requiredVars = ["DATABASE_URL"];
  const missingVars = requiredVars.filter((varName) => !process.env[varName]);
  if (missingVars.length > 0) {
    console.error(`Missing required environment variables: ${missingVars.join(", ")}`);
    console.error("Please check your environment configuration and try again.");
    process.exit(1);
  }
  if (!process.env.SESSION_SECRET && process.env.NODE_ENV === "production") {
    console.warn("SESSION_SECRET not set. Using default secret (not recommended for production)");
  }
  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.warn("GitHub OAuth credentials not found. Please set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET environment variables.");
    console.warn("Authentication will be disabled until credentials are provided.");
  }
}
validateEnvironment();
var app = express2();
app.set("trust proxy", 1);
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === "production" ? void 0 : false
}));
app.use(cors({
  origin: process.env.NODE_ENV === "production" ? [process.env.FRONTEND_URL || "https://your-frontend.vercel.app"] : ["http://localhost:5000", "http://localhost:3000"],
  credentials: true
}));
var limiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  // 15 minutes
  max: 100,
  // limit each IP to 100 requests per windowMs
  skip: (req) => process.env.NODE_ENV === "development"
});
app.use("/api", limiter);
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || "your-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1e3
    // 24 hours
  }
}));
app.use(passport3.initialize());
app.use(passport3.session());
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
