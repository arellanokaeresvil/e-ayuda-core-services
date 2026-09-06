import { ObjectLiteral, Repository, SelectQueryBuilder } from "typeorm";
import Pagination from "../../utils/pagination";


class PaginationRepository<T extends ObjectLiteral>{
      protected model: Repository<T>;

    constructor(model:Repository<T>) {
        this.model = model;
    }


    async paginate(
        query: SelectQueryBuilder<T>,
        page: number,
        limit: number,
        sortBy: string,
        orderBy: string
    ){

        const skip = ( page - 1) * limit 
        const [data, total] = await query
        .skip(skip)
        .take(limit)
        .getManyAndCount();


        return {
            list:data,
            pagination: Pagination(page,limit,total)
        }

    }
}

export default PaginationRepository