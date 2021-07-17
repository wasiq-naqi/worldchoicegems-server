const TypeService = require('./type.service');

class CategoryController {
    
    constructor(){ }

    async getAllByPagination(req, res, next){

        let service = new TypeService();

        let pageNo = req.query.pageNo;
        let pageSize = req.query.pageSize;

        try{

            let response = await service.getAllByPagination(pageNo, pageSize);
            res.send(response);

        }
        catch(Excp){

            next(Excp);

        }

    }

    async getById(req, res, next){

        if( isNaN(req.params.id) ){
            let error = new Error('ID must be a number');
            next(error);
        }

        let service = new TypeService();

        try{

            let response = await service.getById(req.params.id);
            res.send(response);

        }
        catch(Excp){

            console.log(Excp);

            next(Excp);

        }

    }
    
}

module.exports = CategoryController;