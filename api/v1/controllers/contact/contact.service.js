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

    async createContactMessage(){


    }

}

module.exports = ContactService;