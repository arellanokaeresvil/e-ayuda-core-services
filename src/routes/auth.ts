import express from "express";
import AuthController from "../containers/authContainers";

const router = express.Router();

// LGU login
router.post('/login', AuthController.login)

// Barangay portal login
router.post("/barangay/login", AuthController.login)

export default router;
