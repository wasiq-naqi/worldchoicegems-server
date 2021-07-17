const BaseRepository = require("./base.repository");
const db = require('./../../../database/models');

class CategoryRepository extends BaseRepository{

    constructor(){
        super(db.Category, 'Category')
    }

}

module.exports = CategoryRepository;