import { Request, Response, NextFunction} from 'express'
import ApiResponse from '../utils/response';
import AppError from '../utils/appError';

const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (error instanceof AppError) {
        return ApiResponse.error(
            res,
            error.message,
            error.statusCode,
            error.errors
        );
    }


    return ApiResponse.error(
        res,
        'Internal server error',
        500,
        error
    );

}

export default errorHandler