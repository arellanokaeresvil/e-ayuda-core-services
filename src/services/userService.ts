import UserRepository from "../repositories/userRepository"
import bcrypt from 'bcryptjs'

class UserService {

    constructor(private userRepository: UserRepository) {
         this.userRepository = userRepository;
    }

    async create(data: any) {
        const find = await this.userRepository.findByEmail(data.email)
        if (find) {
            throw new Error('Email already exists');
        }
        data.password = await bcrypt.hash(data.password, 10); // to hassh password
        return this.userRepository.create(data);
    }

}

export default UserService