import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../utils/appError";

interface JwtPayload {
    userId: number;
}

const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AppError('No token provided', 401)

    }

    const token = authHeader.split(" ")[1];

    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new AppError('JWT secret is not configured', 500)

    }

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;


        console.log(`Authenticated user `);

        next();
    } catch (error) {
        throw new AppError('Unauthorized: Invalid token',401)

    }
};

export default authMiddleware;