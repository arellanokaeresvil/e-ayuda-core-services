import UserRepository from "../repositories/userRepository";
import UserService from "../services/userService";

import { Request, Response } from "express";
import ApiResponse from "../utils/response";

class UserController {

    private name = 'User'

    constructor(private userRepository: UserRepository, private userService: UserService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    index = async (req: Request, res: Response) => {
        const users = await this.userRepository.list(req.query);
       return ApiResponse.success(res, users, 'Users retrieved successfully');
    }

    store = async (req: Request, res: Response) => {
        const user = await this.userService.create(req.body);
        return ApiResponse.created(res, user, 'User created successfully');
    }

    show = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.userRepository.findById(id as string);
       return ApiResponse.success(res, user, 'User retrieved successfully');
    }

    update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const updatedUser = await this.userRepository.update(id as string, req.body);
       return ApiResponse.success(res, updatedUser, 'User updated successfully');
    }

    destroy = async (req: Request, res: Response) => {
        const { id } = req.params;
        await this.userRepository.delete(id as any);
        return ApiResponse.success(res, null, 'User deleted successfully');
    }

       restore = async (req: Request, res: Response) => {
       const { id } = req.params;
       const result = await this.userRepository.restore(id as string);
       return ApiResponse.success(res, result, 'User restored successfully');
   };
}

export default UserController;
