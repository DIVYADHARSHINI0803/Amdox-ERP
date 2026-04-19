// Middleware to authorize users based on their roles, ensuring they have the necessary permissions to access certain routes
import { Request, Response, NextFunction } from "express";
import { Role } from "../constants/roles";

export const authorize = (allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};