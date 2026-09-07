import AppError from "../../utils/appError";


class BaseRepository {

    protected model:any
    
    constructor(model: any) {
        this.model = model;
    }

   async findAll() {
       return await this.model.find();
   }

   async findById(id: string) {
       const find = await this.model.findOneBy({id});
       if (!find) {
           throw new AppError('Resource not found', 404);
       }
       return find;
   }

   async create(data: object) {

        try {
            return await this.model.save(data);
        } catch (error) {
             throw new AppError(`Error creating item`, 500 ,error);
        }

   }

    async update(id:string, data:object) {
        try {
            const find = await this.findById(id);
            if(!find) throw  new AppError("Resource not found",404);
            return await this.model.update(id, data);
        } catch (error) {
            throw new AppError(`Error updating item: ${error}`, 500);
        }
    }

   async delete(id: string) {
       try {
           const find = await this.findById(id);
           if(!find) throw  new AppError("Resource not found",404);
           return await this.model.softDelete(id);
       } catch (error) {
           throw new AppError(`Error deleting item: ${error}`, 500);
       }
   }

       async restore(id:string) {
        try {
            const find = await this.findDeletedById(id);
            if(!find) throw new AppError("Resource not found",404);
            return this.model.restore(id);
        } catch (error) {
            throw new AppError(`Error restoring item: ${error}`, 500);
        }
    }

        async findDeletedById(id:string) {
        try {
            return await this.model.findOne({
                where: {
                    id
                },
                withDeleted: true
            });
        } catch (error) {
            throw new AppError(`Error finding deleted item: ${error}`, 500);
        }
    }
}

export default BaseRepository;
