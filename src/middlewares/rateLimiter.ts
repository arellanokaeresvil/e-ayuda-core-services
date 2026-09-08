import rateLimit from "express-rate-limit";

 const loginRateLimiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
        error: "Too many login attempts. Please try again later.",
    },
});

 const generalRateLimiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
        error: "Too many requests. Please try again later.",
    },
});

export { loginRateLimiter, generalRateLimiter };