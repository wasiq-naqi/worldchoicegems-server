const BaseRepository = require("./base.repository");
const db = require('./../../../database/models');

class ContactRepository extends BaseRepository{

    constructor(){
        super(db.Contact, 'Contact')
    }

}

module.exports = ContactRepository;