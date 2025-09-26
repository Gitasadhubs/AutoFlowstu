"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertActivitySchema = exports.insertDeploymentSchema = exports.insertProjectSchema = exports.insertUserSchema = exports.activitiesRelations = exports.deploymentsRelations = exports.projectsRelations = exports.usersRelations = exports.activities = exports.deployments = exports.projects = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
const drizzle_orm_1 = require("drizzle-orm");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    username: (0, pg_core_1.text)("username").notNull().unique(),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    githubId: (0, pg_core_1.text)("github_id").unique(),
    avatar: (0, pg_core_1.text)("avatar"),
    accessToken: (0, pg_core_1.text)("access_token"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
exports.projects = (0, pg_core_1.pgTable)("projects", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull(),
    name: (0, pg_core_1.text)("name").notNull(),
    description: (0, pg_core_1.text)("description"),
    repositoryUrl: (0, pg_core_1.text)("repository_url").notNull(),
    repositoryName: (0, pg_core_1.text)("repository_name").notNull(),
    branch: (0, pg_core_1.text)("branch").default("main").notNull(),
    framework: (0, pg_core_1.text)("framework").notNull(), // react, node, python, etc.
    deploymentUrl: (0, pg_core_1.text)("deployment_url"),
    status: (0, pg_core_1.text)("status").default("pending").notNull(), // pending, building, deployed, failed
    lastDeploymentAt: (0, pg_core_1.timestamp)("last_deployment_at"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
exports.deployments = (0, pg_core_1.pgTable)("deployments", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    projectId: (0, pg_core_1.integer)("project_id").notNull(),
    status: (0, pg_core_1.text)("status").default("pending").notNull(), // pending, building, success, failed
    commitHash: (0, pg_core_1.text)("commit_hash"),
    commitMessage: (0, pg_core_1.text)("commit_message"),
    buildLogs: (0, pg_core_1.text)("build_logs"),
    deploymentUrl: (0, pg_core_1.text)("deployment_url"),
    startedAt: (0, pg_core_1.timestamp)("started_at").defaultNow().notNull(),
    completedAt: (0, pg_core_1.timestamp)("completed_at"),
});
exports.activities = (0, pg_core_1.pgTable)("activities", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull(),
    projectId: (0, pg_core_1.integer)("project_id"),
    type: (0, pg_core_1.text)("type").notNull(), // deployment, build, error, etc.
    description: (0, pg_core_1.text)("description").notNull(),
    metadata: (0, pg_core_1.jsonb)("metadata"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
// Relations
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    projects: many(exports.projects),
    activities: many(exports.activities),
}));
exports.projectsRelations = (0, drizzle_orm_1.relations)(exports.projects, ({ one, many }) => ({
    user: one(exports.users, {
        fields: [exports.projects.userId],
        references: [exports.users.id],
    }),
    deployments: many(exports.deployments),
    activities: many(exports.activities),
}));
exports.deploymentsRelations = (0, drizzle_orm_1.relations)(exports.deployments, ({ one }) => ({
    project: one(exports.projects, {
        fields: [exports.deployments.projectId],
        references: [exports.projects.id],
    }),
}));
exports.activitiesRelations = (0, drizzle_orm_1.relations)(exports.activities, ({ one }) => ({
    user: one(exports.users, {
        fields: [exports.activities.userId],
        references: [exports.users.id],
    }),
    project: one(exports.projects, {
        fields: [exports.activities.projectId],
        references: [exports.projects.id],
    }),
}));
// Insert schemas
exports.insertUserSchema = (0, drizzle_zod_1.createInsertSchema)(exports.users);
exports.insertProjectSchema = (0, drizzle_zod_1.createInsertSchema)(exports.projects);
exports.insertDeploymentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.deployments);
exports.insertActivitySchema = (0, drizzle_zod_1.createInsertSchema)(exports.activities);
