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
        try {
            const response  = this.model.destroy({
                where:{
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD repository: destroy');
            throw error;
        }
    }

    async get(data){
        try {
            const response  = this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD repository: get');
            throw error;
        }
    }

    async getAll(){
        try {
            const response  = this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD repository: getAll');
            throw error;
        }
    }

    async update(id,data){
        try {
            const response  = this.model.update(data, {
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD repository: update');
            throw error;
        }
    }
}

module.exports = CrudRepository;