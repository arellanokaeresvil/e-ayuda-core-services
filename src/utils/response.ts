import { Response } from "express";

class ApiResponse {

        static success(res: Response, data: any = null, message:string, statusCode?: number)
    {
        return res.status(statusCode || 200).json({
            success:true,
            message,
            data
        })
    }

    static created(res: Response, data : any = null, message: string){
         return this.success(res, data, message, 201);
    }

    static error(res: Response, message: string, statusCode: number, errors: any = null)
    {
        return res.status(statusCode).json({
            success: false,
            message,
            errors
        })
    }


}

export default ApiResponse;