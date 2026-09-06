

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
           throw new Error('Not found');
       }
       return find;
   }

   async create(data: object) {

        try {
            return await this.model.save(data);
        } catch (error) {
            throw new Error(`Validation failed: ${error}`);
        }

   }

    async update(id:string, data:object) {
        try {
            const find = await this.findById(id);
            if(!find) throw  new Error(`Resource not found`);
            return await this.model.update(id, data);
        } catch (error) {
            throw new Error(`Error updating item: ${error}`);
        }
    }

   async delete(id: string) {
       try {
           const find = await this.findById(id);
           if(!find) throw  new Error(`Resource not found`);
           return await this.model.softDelete(id);
       } catch (error) {
           throw new Error(`Error deleting item: ${error}`);
       }
   }

       async restore(id:string) {
        try {
            const find = await this.findDeletedById(id);
            if(!find) throw new Error("Resource not found");
            return this.model.restore(id);
        } catch (error) {
            throw new Error(`Error restoring item: ${error}`);
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
            throw new Error(`Error finding deleted item: ${error}`);
        }
    }
}

export default BaseRepository;
