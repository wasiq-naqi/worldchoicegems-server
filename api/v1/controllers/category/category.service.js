const BaseService = require('../base/base.service');
const db = require('./../../../../database/models');
// const { Pagination } = require('../../../../core/utils');
const CategoryRepository = require('../../repositories/category.repository');

class ProductService extends BaseService{

    constructor( ){
        super(db.Category)
        this.model = db.Category;
        this.CategoryRepository = new CategoryRepository();
    }

    // async getProductById( _ID ){
    
    //     let options = {
    //         include: [
    //             {
    //                 as: 'Categories',
    //                 model: db.ProductCategory, // will create a left join
    //                 paranoid: false, 
    //                 required: false,
    //                 include: {
    //                     as: 'Category',
    //                     model: db.Category,
    //                 }
    //             },
    //         ]
    //     }

    //     return await this.ProductViewRepository.findById( _ID, options );

    // }

}

module.exports = ProductService;