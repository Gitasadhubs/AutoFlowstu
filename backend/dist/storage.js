import { users, projects, deployments, activities } from "./src/schema.js";
import { db } from "./db.js";
import { eq, desc } from "drizzle-orm";
export class DatabaseStorage {
    // User methods
    async getUser(id) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user || undefined;
    }
    async getUserByGithubId(githubId) {
        const [user] = await db.select().from(users).where(eq(users.githubId, githubId));
        return user || undefined;
    }
    async createUser(insertUser) {
        const [user] = await db
            .insert(users)
            .values(insertUser)
            .returning();
        return user;
    }
    async updateUser(id, updates) {
        const [user] = await db
            .update(users)
            .set(updates)
            .where(eq(users.id, id))
            .returning();
        return user || undefined;
    }
    // Project methods
    async getProject(id) {
        const [project] = await db.select().from(projects).where(eq(projects.id, id));
        return project || undefined;
    }
    async getProjectsByUserId(userId) {
        return await db
            .select()
            .from(projects)
            .where(eq(projects.userId, userId))
            .orderBy(desc(projects.createdAt));
    }
    async createProject(insertProject) {
        const [project] = await db
            .insert(projects)
            .values(insertProject)
            .returning();
        return project;
    }
    async updateProject(id, updates) {
        const [project] = await db
            .update(projects)
            .set(updates)
            .where(eq(projects.id, id))
            .returning();
        return project || undefined;
    }
    async deleteProject(id) {
        const result = await db.delete(projects).where(eq(projects.id, id));
        return result.rowCount ? result.rowCount > 0 : false;
    }
    // Deployment methods
    async getDeployment(id) {
        const [deployment] = await db.select().from(deployments).where(eq(deployments.id, id));
        return deployment || undefined;
    }
    async getDeploymentsByProjectId(projectId) {
        return await db
            .select()
            .from(deployments)
            .where(eq(deployments.projectId, projectId))
            .orderBy(desc(deployments.startedAt));
    }
    async createDeployment(insertDeployment) {
        const [deployment] = await db
            .insert(deployments)
            .values(insertDeployment)
            .returning();
        return deployment;
    }
    async updateDeployment(id, updates) {
        const [deployment] = await db
            .update(deployments)
            .set(updates)
            .where(eq(deployments.id, id))
            .returning();
        return deployment || undefined;
    }
    // Activity methods
    async getActivitiesByUserId(userId, limit = 10) {
        return await db
            .select()
            .from(activities)
            .where(eq(activities.userId, userId))
            .orderBy(desc(activities.createdAt))
            .limit(limit);
    }
    async createActivity(insertActivity) {
        const [activity] = await db
            .insert(activities)
            .values(insertActivity)
            .returning();
        return activity;
    }
}
export const storage = new DatabaseStorage();
