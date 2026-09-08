import BaseRepository from "./base/baseRepository";
import AppDataSource from "../config/database";
import { User } from "../entities/User";
import PaginationRepository from "./base/paginationRepository";
import QueryOptions from "../interfaces/queryOptions";
import AppError from "../utils/appError";

class UserRepository extends BaseRepository {

    private pagination = new PaginationRepository<User>(this.model)
    private table = "user";

    constructor() {
        super(AppDataSource.getRepository(User));
    }

    async findByEmail(email: string) {
        const user = await AppDataSource.getRepository(User)
        .createQueryBuilder("user")
        .addSelect("user.password")
        .where("user.email = :email", { email })
        .getOne();

        if(!user) {
            throw new AppError('User not found', 404);
        }

        return user;
    }

    async list(options: QueryOptions ){ 

        const query = this.model.createQueryBuilder(this.table).orderBy({
            "user.updated_at":options.orderBy ?? 'DESC'
        })

        if(options.search){
            query.andWhere(
                `(
                    user.name ILIKE :search
                    OR user.email ILIKE :search
                )`,
                {
                    search: `%${options.search}%`
                }
            )
        }

        return this.pagination.paginate(
            query,
            options.page ?? 1,
            options.limit ?? 10,
            options.sortBy ?? 'updated_at',
            options.orderBy?? 'DESC'
        )
    }


}

export default UserRepository;
