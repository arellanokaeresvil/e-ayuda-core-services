import UserRepository from "../repositories/userRepository";
import UserService from "../services/userService";

import { Request, Response } from "express";

class UserController {

    private name = 'User'

    constructor(private userRepository: UserRepository, private userService: UserService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    index = async (req: Request, res: Response) => {
        const users = await this.userRepository.findAll();
        res.json(users);
    }

    store = async (req: Request, res: Response) => {
        const user = await this.userService.create(req.body);
        res.status(201).json(user);
    }

    show = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.userRepository.findById(id as string);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }

    update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.userRepository.findById(id as string);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updatedUser = await this.userRepository.update(id as string, req.body);
        res.json(updatedUser);
    }

    destroy = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.userRepository.findById(id as any);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await this.userRepository.delete(id as any);
        res.status(204).send();
    }

       restore = async (req: Request, res: Response) => {
       const { id } = req.params;
       const result = await this.userRepository.restore(id as string);
       res.send(result);
   };
}

export default UserController;
