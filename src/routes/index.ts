import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from './user';
import barangayRoutes from './barangay'

const router = Router();

router.use("/", authRoutes);
router.use("/users", userRoutes);
router.use("/barangays", barangayRoutes);

router.get("/core", (req, res) => {
  res.send(`E-Ayuda CORE API reached ${new Date().toISOString()}`);
});

export default router;
