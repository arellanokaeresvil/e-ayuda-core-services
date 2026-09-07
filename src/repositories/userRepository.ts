import BaseRepository from "./base/baseRepository";
import AppDataSource from "../config/database";
import { User } from "../entities/User";
import PaginationRepository from "./base/paginationRepository";
import QueryOptions from "../interfaces/queryOptions";

class UserRepository extends BaseRepository {

    private pagination = new PaginationRepository<User>(this.model)
    private table = "user";

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

    async list(options: QueryOptions ){ 

        const query = this.model.createQueryBuilder(this.table).orderBy({
            "user.updated_at":options.orderBy ?? 'DESC'
        })

        if(options.search){
            query.andWhere(
                `(
                    user.name LIKE :search
                    OR user.email LIKE :search
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
