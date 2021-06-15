/* eslint-disable no-constant-condition */
const BaseService = require('../base/base.service');
const db = require('./../../../../database/models');
const { Pagination } = require('../../../../core/utils');
const ProductViewRepository = require('../../repositories/product.repository');

class ProductService extends BaseService{

    constructor( ){
        super(db.ProductView)
        this.model = db.ProductView;
        this.ProductViewRepository = new ProductViewRepository();
    }

    async getAllByPagination( _PAGE, _LIMIT, _FILTERS ){

        let where = {
            live: 'Y',
        };

        // let filterCategories = { };

        if( _FILTERS.category ){
            let options = _FILTERS.category.split(',');
            options = options.filter((ele) => Boolean(ele));
            // options = options.map( ele => ({ slug: ele }));
            // console.log('Options:',  options);
            // filterCategories = { slug: { [db.Sequelize.Op.in]: options } };
            where['$Categories.Category.slug$'] = { [db.Sequelize.Op.in]: options };
            // where['$Categories.Category.slug$'] = { 
            //     [db.Sequelize.Op.and]: options 
            // };
            // console.log(filterCategories)
        }

        if( _FILTERS.type ){
            let options = _FILTERS.type.split(',');
            options = options.filter((ele) => Boolean(ele));
            where['$Type.slug$'] = { [db.Sequelize.Op.in]: options };
        }
        
        if( _FILTERS.rangeMin && typeof(+_FILTERS.rangeMin) == 'number' ){
            if(!Object.prototype.hasOwnProperty.call(where, db.Sequelize.Op.and)) where[db.Sequelize.Op.and] = [];
            where[db.Sequelize.Op.and].push({ price: { [db.Sequelize.Op.gte]: +_FILTERS.rangeMin } });
        }

        if( _FILTERS.rangeMax && typeof(+_FILTERS.rangeMax) == 'number' ){
            if(!Object.prototype.hasOwnProperty.call(where, db.Sequelize.Op.and)) where[db.Sequelize.Op.and] = [];
            where[db.Sequelize.Op.and].push({ price: { [db.Sequelize.Op.lte]: +_FILTERS.rangeMax } });
        }

        if( _FILTERS.feature ){
            if(!Object.prototype.hasOwnProperty.call(where, db.Sequelize.Op.and)) where[db.Sequelize.Op.and] = [];
            where[db.Sequelize.Op.and].push({ feature: (_FILTERS.feature == 'false') ? 'N' : 'Y' });
        }


        let association = {
            where: where,
            include: [
                {
                    as: 'Categories',
                    model: db.ProductCategory, // will create a left join
                    // paranoid: false, 
                    // required: (Object.keys(filterCategories).length > 0) ? true : false,
                    require: false,
                    // eslint-disable-next-line no-constant-condition
                    attributes: { exclude: (true) ? this.excludedFields : [] },
                    include: {
                        as: 'Category',
                        // required: (Object.keys(filterCategories).length > 0) ? true : false,
                        require: false,
                        model: db.Category,
                        attributes: { exclude: (true) ? this.excludedFields : [] },
                        // where: filterCategories
                    },
                    
                },
                {
                    as: 'Type',
                    model: db.Type,
                    attributes: { exclude: (true) ? this.excludedFields : [] },
                }
            ],
            attributes: { exclude: (true) ? this.excludedFields : [] },
            distinct: true,
            subQuery: false
        }
    
        try{

            return await Pagination(_PAGE, _LIMIT, this.model, association);

        }
        catch( Excp ){
            console.log(Excp);
            throw new Error(Excp);

        }

    }

    async getAllFeatureByPagination( _PAGE, _LIMIT ){

        let association = {
            where: {
                live: 'Y',
                feature: 'Y'
            }
        }
    
        try{

            return await Pagination(_PAGE, _LIMIT, this.model, association);

        }
        catch( Excp ){

            return new Error(Excp);

        }

    }

    async getProductById( _ID ){
    
        let options = {
            include: [
                {
                    as: 'Categories',
                    model: db.ProductCategory, // will create a left join
                    paranoid: false, 
                    required: false,
                    include: {
                        as: 'Category',
                        model: db.Category,
                    }
                },
                {
                    as: 'Images',
                    model: db.ProductImage, // will create a left join
                    paranoid: false, 
                    required: false,
                },
            ]
        }

        return await this.ProductViewRepository.findById( _ID, options );

    }

}

module.exports = ProductService;