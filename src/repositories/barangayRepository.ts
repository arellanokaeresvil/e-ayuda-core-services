import AppDataSource from "../config/database";
import BaseRepository from "./base/baseRepository";


import QueryOptions from "../interfaces/queryOptions";
import PaginationRepository from "./base/paginationRepository";
import { Barangay } from "../entities/Barangay";

class BarangayRepository extends BaseRepository {

    private pagination = new PaginationRepository<Barangay>(this.model)
    private table = "barangay";

    constructor() {
        super(AppDataSource.getRepository("barangays"));
    }

    async list(options: QueryOptions ){ 

        const query = this.model.createQueryBuilder(this.table).orderBy({
            "barangay.updated_at":options.orderBy ?? 'DESC'
        })

        if(options.search){
            console.log('search', options.search)
            query.andWhere(
                `(
                    barangay.brgy ILIKE :search
                    OR barangay.municipality ILIKE :search
                    OR barangay.province ILIKE :search
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

export default BarangayRepository;
