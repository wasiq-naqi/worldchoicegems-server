const BaseService = require('../base/base.service');
const db = require('./../../../../database/models');
// const { Pagination } = require('../../../../core/utils');
const TypeRepository = require('../../repositories/type.repository');

class TypeService extends BaseService{

    constructor( ){
        super(db.Type)
        this.model = db.Type;
        this.TypeRepository = new TypeRepository();
    }

}

module.exports = TypeService;