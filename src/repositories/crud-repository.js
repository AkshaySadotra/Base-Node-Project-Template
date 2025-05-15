const {Logger} = require('../config')
class CrudRepository{
    constructor(model){
        this.model = model; // stores the incoming model in model variable
    }

    async create(data){
     const response  = this.model.create(data);
     return response;
    }



    async destroy(data){
        
        const response  = this.model.destroy({
                where:{
                    id: data
                }
            });
        return response;
       
    }

    async get(data){
        
        const response  = this.model.findByPk(data);
        return response;
        
    }

    async getAll(){
       
        const response  = this.model.findAll();
        return response;
       
    }

    async update(id,data){
        
        const response  = this.model.update(data, {
                where:{
                    id:id
                }
            });
        return response;
      
    }
}

module.exports = CrudRepository;