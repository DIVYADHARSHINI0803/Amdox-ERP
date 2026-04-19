// Type definitions for Express Request object to include user information after authentication
import { Role } from "../../constants/roles";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: Role;
      };
    }
  }
}

export {};