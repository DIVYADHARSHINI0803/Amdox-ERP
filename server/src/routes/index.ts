// Main router for handling API routes, including authentication and authorization for protected endpoints
import { Router, Request, Response } from "express";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import { Role } from "../constants/roles";

const router = Router();

// Public route accessible to everyone
router.get("/profile", authenticate, (req: Request, res: Response) => {
  res.status(200).json({
    message: "Profile fetched successfully",
    user: req.user,
  });
});

router.post(
  "/content",
  authenticate,
  authorize([Role.ADMIN, Role.EDITOR]),
  (req: Request, res: Response) => {
    res.status(200).json({
      message: "Content created successfully",
    });
  }
);

router.delete(
  "/system",
  authenticate,
  authorize([Role.ADMIN]),
  (req: Request, res: Response) => {
    res.status(200).json({
      message: "System deleted successfully",
    });
  }
);

export default router;