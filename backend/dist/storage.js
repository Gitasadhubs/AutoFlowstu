"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.DatabaseStorage = void 0;
const schema_1 = require("#shared/schema");
const db_1 = require("./db");
const drizzle_orm_1 = require("drizzle-orm");
class DatabaseStorage {
    // User methods
    async getUser(id) {
        const [user] = await db_1.db.select().from(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.id, id));
        return user || undefined;
    }
    async getUserByGithubId(githubId) {
        const [user] = await db_1.db.select().from(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.githubId, githubId));
        return user || undefined;
    }
    async createUser(insertUser) {
        const [user] = await db_1.db
            .insert(schema_1.users)
            .values(insertUser)
            .returning();
        return user;
    }
    async updateUser(id, updates) {
        const [user] = await db_1.db
            .update(schema_1.users)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema_1.users.id, id))
            .returning();
        return user || undefined;
    }
    // Project methods
    async getProject(id) {
        const [project] = await db_1.db.select().from(schema_1.projects).where((0, drizzle_orm_1.eq)(schema_1.projects.id, id));
        return project || undefined;
    }
    async getProjectsByUserId(userId) {
        return await db_1.db
            .select()
            .from(schema_1.projects)
            .where((0, drizzle_orm_1.eq)(schema_1.projects.userId, userId))
            .orderBy((0, drizzle_orm_1.desc)(schema_1.projects.createdAt));
    }
    async createProject(insertProject) {
        const [project] = await db_1.db
            .insert(schema_1.projects)
            .values(insertProject)
            .returning();
        return project;
    }
    async updateProject(id, updates) {
        const [project] = await db_1.db
            .update(schema_1.projects)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema_1.projects.id, id))
            .returning();
        return project || undefined;
    }
    async deleteProject(id) {
        const result = await db_1.db.delete(schema_1.projects).where((0, drizzle_orm_1.eq)(schema_1.projects.id, id));
        return result.rowCount ? result.rowCount > 0 : false;
    }
    // Deployment methods
    async getDeployment(id) {
        const [deployment] = await db_1.db.select().from(schema_1.deployments).where((0, drizzle_orm_1.eq)(schema_1.deployments.id, id));
        return deployment || undefined;
    }
    async getDeploymentsByProjectId(projectId) {
        return await db_1.db
            .select()
            .from(schema_1.deployments)
            .where((0, drizzle_orm_1.eq)(schema_1.deployments.projectId, projectId))
            .orderBy((0, drizzle_orm_1.desc)(schema_1.deployments.startedAt));
    }
    async createDeployment(insertDeployment) {
        const [deployment] = await db_1.db
            .insert(schema_1.deployments)
            .values(insertDeployment)
            .returning();
        return deployment;
    }
    async updateDeployment(id, updates) {
        const [deployment] = await db_1.db
            .update(schema_1.deployments)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema_1.deployments.id, id))
            .returning();
        return deployment || undefined;
    }
    // Activity methods
    async getActivitiesByUserId(userId, limit = 10) {
        return await db_1.db
            .select()
            .from(schema_1.activities)
            .where((0, drizzle_orm_1.eq)(schema_1.activities.userId, userId))
            .orderBy((0, drizzle_orm_1.desc)(schema_1.activities.createdAt))
            .limit(limit);
    }
    async createActivity(insertActivity) {
        const [activity] = await db_1.db
            .insert(schema_1.activities)
            .values(insertActivity)
            .returning();
        return activity;
    }
}
exports.DatabaseStorage = DatabaseStorage;
exports.storage = new DatabaseStorage();
