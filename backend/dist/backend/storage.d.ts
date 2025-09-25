import { type User, type InsertUser, type Project, type InsertProject, type Deployment, type InsertDeployment, type Activity, type InsertActivity } from "../shared/schema";
export interface IStorage {
    getUser(id: number): Promise<User | undefined>;
    getUserByGithubId(githubId: string): Promise<User | undefined>;
    createUser(user: InsertUser): Promise<User>;
    updateUser(id: number, updates: Partial<InsertUser>): Promise<User | undefined>;
    getProject(id: number): Promise<Project | undefined>;
    getProjectsByUserId(userId: number): Promise<Project[]>;
    createProject(project: InsertProject): Promise<Project>;
    updateProject(id: number, updates: Partial<InsertProject>): Promise<Project | undefined>;
    deleteProject(id: number): Promise<boolean>;
    getDeployment(id: number): Promise<Deployment | undefined>;
    getDeploymentsByProjectId(projectId: number): Promise<Deployment[]>;
    createDeployment(deployment: InsertDeployment): Promise<Deployment>;
    updateDeployment(id: number, updates: Partial<InsertDeployment>): Promise<Deployment | undefined>;
    getActivitiesByUserId(userId: number, limit?: number): Promise<Activity[]>;
    createActivity(activity: InsertActivity): Promise<Activity>;
}
export declare class DatabaseStorage implements IStorage {
    getUser(id: number): Promise<User | undefined>;
    getUserByGithubId(githubId: string): Promise<User | undefined>;
    createUser(insertUser: InsertUser): Promise<User>;
    updateUser(id: number, updates: Partial<InsertUser>): Promise<User | undefined>;
    getProject(id: number): Promise<Project | undefined>;
    getProjectsByUserId(userId: number): Promise<Project[]>;
    createProject(insertProject: InsertProject): Promise<Project>;
    updateProject(id: number, updates: Partial<InsertProject>): Promise<Project | undefined>;
    deleteProject(id: number): Promise<boolean>;
    getDeployment(id: number): Promise<Deployment | undefined>;
    getDeploymentsByProjectId(projectId: number): Promise<Deployment[]>;
    createDeployment(insertDeployment: InsertDeployment): Promise<Deployment>;
    updateDeployment(id: number, updates: Partial<InsertDeployment>): Promise<Deployment | undefined>;
    getActivitiesByUserId(userId: number, limit?: number): Promise<Activity[]>;
    createActivity(insertActivity: InsertActivity): Promise<Activity>;
}
export declare const storage: DatabaseStorage;
