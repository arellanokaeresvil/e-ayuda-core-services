import UserRepository from "../repositories/userRepository";
import bcrypt from 'bcryptjs';
import AppError from "../utils/appError";
import generateToken from "../utils/generateToken";


class AuthService {

    constructor(private userRepository: UserRepository) {
        this.userRepository = userRepository;

    }

    async login(email: string, password: string) {

        const user = await this.userRepository.findByEmail(email);

        const isPasswordValid = user && (await bcrypt.compare(password, user.password));

        if (!isPasswordValid) {
            throw new AppError('Invalid password', 401);
        }

      const token = generateToken(user.id);
        return { user, token };
    }
}

export default AuthService;
