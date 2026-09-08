import express from "express";
import AuthController from "../containers/authContainers";
import { loginRateLimiter } from "../middlewares/rateLimiter";

const router = express.Router();

// LGU login
router.post('/login', loginRateLimiter, AuthController.login)
router.post('/logout', AuthController.logout)

// Barangay portal login
router.post("/barangay/login", AuthController.login)

export default router;
