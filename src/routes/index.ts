import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from './user';

const router = Router();

router.use("/", authRoutes);
router.use("/users", userRoutes);

router.get("/core", (req, res) => {
  res.send(`E-Ayuda CORE API reached ${new Date().toISOString()}`);
});

export default router;
