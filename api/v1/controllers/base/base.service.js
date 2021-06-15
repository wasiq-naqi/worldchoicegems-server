const { Pagination } = require('./../../../../core/utils');

class BaseService {

    constructor( modelName ) {
        this.model = modelName; 
        this.excludedFields = ['createdBy', 'updatedBy', 'createdAt' ,'updatedAt', 'live']
    }

    async getAllByPagination( _PAGE, _LIMIT ){

        let association = {
            where: {
                live: 'Y'
            }
        }
    
        try{

            return await Pagination(_PAGE, _LIMIT, this.model, association);

        }
        catch( Excp ){

            return new Error(Excp);

        }

    }

    async getById( _ID ){

        try{

            return await this.model.findOne({
                live: 'Y',
                id: _ID
            });

        }
        catch( Excp ){

            return new Error(Excp);

        }

    }

}

module.exports = BaseService;