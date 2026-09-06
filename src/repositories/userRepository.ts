import BaseRepository from "./base/baseRepository";
import AppDataSource from "../config/database";
import { User } from "../entities/User";

class UserRepository extends BaseRepository {

    constructor() {
        super(AppDataSource.getRepository(User));
    }

        async findByEmail(email: string) {
        return AppDataSource.getRepository(User)
        .createQueryBuilder("user")
        .addSelect("user.password")
        .where("user.email = :email", { email })
        .getOne();
    }
}

export default UserRepository;
