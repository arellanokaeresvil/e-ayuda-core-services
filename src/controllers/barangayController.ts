import BarangayRepository from "../repositories/barangayRepository";

import { Request, Response } from "express";
import ApiResponse from "../utils/response";
class BarangayController {

    constructor(private barangayRepository: BarangayRepository){
        this.barangayRepository = barangayRepository;
    }

    index = async (req: Request, res: Response) => {
        const barangays = await this.barangayRepository.list(req.query);
       return ApiResponse.success(res, barangays, 'Barangays retrieved successfully');
    }

    store = async (req: Request, res: Response) => {
        const barangay = await this.barangayRepository.create(req.body);
        return ApiResponse.created(res, barangay, 'Barangay created successfully');
    }

    show = async (req: Request, res: Response) => {
        const { id } = req.params;
        const barangay = await this.barangayRepository.findById(id as string);
       return ApiResponse.success(res, barangay, 'Barangay retrieved successfully');
    }

    update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const updatedBarangay = await this.barangayRepository.update(id as string, req.body);
       return ApiResponse.success(res, updatedBarangay, 'Barangay updated successfully');
    }

    destroy = async (req: Request, res: Response) => {
        const { id } = req.params;
        await this.barangayRepository.delete(id as any);
        return ApiResponse.success(res, null, 'Barangay deleted successfully');
    }

    restore = async (req: Request, res: Response) => {
       const { id } = req.params;
       const result = await this.barangayRepository.restore(id as string);
       return ApiResponse.success(res, result, 'Barangay restored successfully');
   }

    getOptions = async (req: Request, res: Response) => {
        console.log('getOptions called');
        const result = await this.barangayRepository.findAll();
        return ApiResponse.success(res, result, 'Barangay options retrieved successfully');
    }

}

export default BarangayController;