const BaseRepository = require("./base.repository");
const db = require('./../../../database/models');

class ProductViewRepository extends BaseRepository{

    constructor(){
        super(db.ProductView, 'Product')
    }

}

module.exports = ProductViewRepository;