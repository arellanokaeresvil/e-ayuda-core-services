import UserRepository from "../repositories/userRepository"
import bcrypt from 'bcryptjs'
import AppError from "../utils/appError";

class UserService {

    constructor(private userRepository: UserRepository) {
         this.userRepository = userRepository;
    }

    async create(data: any) {
        const find = await this.userRepository.findByEmail(data.email)
        if (find) {
            throw new AppError('Email already exists', 404);
        }
        data.password = await bcrypt.hash(data.password, 10); // to hassh password
        return this.userRepository.create(data);
    }

}

export default UserService