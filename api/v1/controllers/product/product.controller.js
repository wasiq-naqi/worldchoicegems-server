const ProductService = require('./product.service');

class ProductController {
    
    constructor(){ }

    async getAllByPagination(req, res, next){

        let service = new ProductService();
        let { pageNo, pageSize, category, type, rangeMin, rangeMax, feature } = req.query

        try{
            
            let response = await service.getAllByPagination(pageNo, pageSize, { category, type, rangeMin, rangeMax, feature });
            res.send(response);

        }
        catch(Excp){

            next(Excp);

        }

    }

    async getAllFeatureByPagination(req, res, next){

        let service = new ProductService();

        let pageNo = req.query.pageNo;
        let pageSize = req.query.pageSize;

        try{

            let response = await service.getAllFeatureByPagination(pageNo, pageSize);
            res.send(response);

        }
        catch(Excp){

            next(Excp);

        }

    }

    async getProductById(req, res, next){

        if( isNaN(req.params.id) ){
            let error = new Error('ID must be a number');
            next(error);
        }

        let service = new ProductService();

        try{

            let response = await service.getProductById(req.params.id);
            res.send(response);

        }
        catch(Excp){

            console.log(Excp);

            next(Excp);

        }

    }
    
}

module.exports = ProductController;