class BaseRepository {

    protected model:any
    
    constructor(model: any) {
        this.model = model;
    }

   async findAll() {
       return await this.model.find();
   }

   async findById(id: string) {
       return await this.model.findById(id);
   }

   async create(data: any) {
       const newDocument = new this.model(data);
       return await newDocument.save();
   }

   async update(id: string, data: any) {
       return await this.model.findByIdAndUpdate(id, data, { new: true });
   }

   async delete(id: string) {
       return await this.model.findByIdAndDelete(id);
   }
}

export default BaseRepository;
