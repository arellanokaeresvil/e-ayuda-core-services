class AppError extends Error {
    
    public statusCode: number;
    public errors: any;

    constructor(
        message: string,
        statusCode: number = 500,
        errors: any = null
    ) {
        super(message);

        this.name = 'AppError';
        this.statusCode = statusCode;
        this.errors = errors;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
