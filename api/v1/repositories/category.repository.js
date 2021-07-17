const BaseRepository = require("./base.repository");
const db = require('./../../../database/models');

class TypeRepository extends BaseRepository{

    constructor(){
        super(db.Type, 'Type')
    }

}

module.exports = TypeRepository;