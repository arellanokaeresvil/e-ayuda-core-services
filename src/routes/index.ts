import { Router } from "express";
import authRoutes from "./auth";

const router = Router();

router.use("/", authRoutes);

router.get("/core", (req, res) => {
  res.send("E-Ayuda CORE API reached");
});

export default router;
