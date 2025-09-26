import type { User } from "#shared/schema";
export declare const requireAuth: (req: any, res: any, next: any) => any;
export declare const getCurrentUser: (req: any) => User | null;
