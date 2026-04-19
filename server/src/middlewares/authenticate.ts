// Middleware to authenticate users based on Bearer token in the Authorization header
import { Request, Response, NextFunction } from "express";
import { Role } from "../constants/roles";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = {
    id: "1",
    role: Role.CONTRIBUTOR,
  };

  next();
};