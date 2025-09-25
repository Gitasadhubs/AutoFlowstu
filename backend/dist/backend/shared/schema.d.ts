import { z } from "zod";
export declare const users: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "users";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        username: import("drizzle-orm/pg-core").PgColumn<{
            name: "username";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        email: import("drizzle-orm/pg-core").PgColumn<{
            name: "email";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        githubId: import("drizzle-orm/pg-core").PgColumn<{
            name: "github_id";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        avatar: import("drizzle-orm/pg-core").PgColumn<{
            name: "avatar";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        accessToken: import("drizzle-orm/pg-core").PgColumn<{
            name: "access_token";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "users";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const projects: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "projects";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "projects";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: import("drizzle-orm/pg-core").PgColumn<{
            name: "user_id";
            tableName: "projects";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        name: import("drizzle-orm/pg-core").PgColumn<{
            name: "name";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        description: import("drizzle-orm/pg-core").PgColumn<{
            name: "description";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        repositoryUrl: import("drizzle-orm/pg-core").PgColumn<{
            name: "repository_url";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        repositoryName: import("drizzle-orm/pg-core").PgColumn<{
            name: "repository_name";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        branch: import("drizzle-orm/pg-core").PgColumn<{
            name: "branch";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        framework: import("drizzle-orm/pg-core").PgColumn<{
            name: "framework";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        deploymentUrl: import("drizzle-orm/pg-core").PgColumn<{
            name: "deployment_url";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        status: import("drizzle-orm/pg-core").PgColumn<{
            name: "status";
            tableName: "projects";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        lastDeploymentAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "last_deployment_at";
            tableName: "projects";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "projects";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const deployments: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "deployments";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "deployments";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        projectId: import("drizzle-orm/pg-core").PgColumn<{
            name: "project_id";
            tableName: "deployments";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        status: import("drizzle-orm/pg-core").PgColumn<{
            name: "status";
            tableName: "deployments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        commitHash: import("drizzle-orm/pg-core").PgColumn<{
            name: "commit_hash";
            tableName: "deployments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        commitMessage: import("drizzle-orm/pg-core").PgColumn<{
            name: "commit_message";
            tableName: "deployments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        buildLogs: import("drizzle-orm/pg-core").PgColumn<{
            name: "build_logs";
            tableName: "deployments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        deploymentUrl: import("drizzle-orm/pg-core").PgColumn<{
            name: "deployment_url";
            tableName: "deployments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        startedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "started_at";
            tableName: "deployments";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        completedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "completed_at";
            tableName: "deployments";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const activities: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "activities";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "activities";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        userId: import("drizzle-orm/pg-core").PgColumn<{
            name: "user_id";
            tableName: "activities";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        projectId: import("drizzle-orm/pg-core").PgColumn<{
            name: "project_id";
            tableName: "activities";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        type: import("drizzle-orm/pg-core").PgColumn<{
            name: "type";
            tableName: "activities";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        description: import("drizzle-orm/pg-core").PgColumn<{
            name: "description";
            tableName: "activities";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        metadata: import("drizzle-orm/pg-core").PgColumn<{
            name: "metadata";
            tableName: "activities";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "activities";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const usersRelations: import("drizzle-orm").Relations<"users", {
    projects: import("drizzle-orm").Many<"projects">;
    activities: import("drizzle-orm").Many<"activities">;
}>;
export declare const projectsRelations: import("drizzle-orm").Relations<"projects", {
    user: import("drizzle-orm").One<"users", true>;
    deployments: import("drizzle-orm").Many<"deployments">;
    activities: import("drizzle-orm").Many<"activities">;
}>;
export declare const deploymentsRelations: import("drizzle-orm").Relations<"deployments", {
    project: import("drizzle-orm").One<"projects", true>;
}>;
export declare const activitiesRelations: import("drizzle-orm").Relations<"activities", {
    user: import("drizzle-orm").One<"users", true>;
    project: import("drizzle-orm").One<"projects", false>;
}>;
export declare const insertUserSchema: import("zod/v4").ZodObject<{
    [x: string]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
    [x: number]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
}, {
    out: {};
    in: {};
}>;
export declare const insertProjectSchema: import("zod/v4").ZodObject<{
    [x: string]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
    [x: number]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
}, {
    out: {};
    in: {};
}>;
export declare const insertDeploymentSchema: import("zod/v4").ZodObject<{
    [x: string]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
    [x: number]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
}, {
    out: {};
    in: {};
}>;
export declare const insertActivitySchema: import("zod/v4").ZodObject<{
    [x: string]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
    [x: number]: import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>> | import("zod/v4").ZodOptional<import("zod/v4").ZodNullable<import("zod/v4").ZodArray<import("zod/v4").ZodUUID | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodTuple<[import("zod/v4").ZodNumber, import("zod/v4").ZodNumber, import("zod/v4").ZodNumber], null> | import("zod/v4").ZodCoercedDate<unknown> | import("zod/v4").ZodType<Buffer<ArrayBufferLike>, unknown, import("zod/v4/core").$ZodTypeInternals<Buffer<ArrayBufferLike>, unknown>> | import("zod/v4").ZodArray<import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>> | import("zod/v4").ZodType<any, any, import("zod/v4/core").$ZodTypeInternals<any, any>> | import("zod/v4").ZodObject<{
        [x: string]: import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>;
    }, {
        out: {};
        in: {};
    }> | import("zod/v4").ZodType<import("drizzle-zod").Json, unknown, import("zod/v4/core").$ZodTypeInternals<import("drizzle-zod").Json, unknown>> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedNumber<unknown> | import("zod/v4").ZodCoercedBigInt<unknown> | import("zod/v4").ZodCoercedBoolean<unknown> | import("zod/v4").ZodCoercedString<unknown> | import("zod/v4").ZodType<unknown, unknown, import("zod/v4/core").$ZodTypeInternals<unknown, unknown>>>>>;
}, {
    out: {};
    in: {};
}>;
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Deployment = typeof deployments.$inferSelect;
export type InsertDeployment = z.infer<typeof insertDeploymentSchema>;
export type Activity = typeof activities.$inferSelect;
export type InsertActivity = z.infer<typeof insertActivitySchema>;
