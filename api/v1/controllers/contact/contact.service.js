/* eslint-disable no-constant-condition */
const ContactRepository = require('../../repositories/contact.repository');
const BaseService = require('../base/base.service');
const db = require('./../../../../database/models');

class ContactService extends BaseService{

    constructor( ){
        super(db.ContactMessage)
        this.model = db.ContactMessage;
        this.ContactRepository = new ContactRepository();
    }

    async createContactMessage( _OBJECT ){

        try{

            await this.ContactRepository.create( _OBJECT );
            
        }
        catch( Excp ){

            return new Error(Excp);

        }

    }

}

module.exports = ContactService;