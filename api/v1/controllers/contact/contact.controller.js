const ContactService = require('./contact.service');
const Joi = require('@hapi/joi');

const Schema = Joi.object({

    patientId: Joi.number().required(),
    appointment: Joi.boolean().required(),
    checkUpPrice: Joi.number().required().allow(0),
    description: Joi.string().required(),
    assignTo: Joi.number().required().min(1).allow(null),
    
});

class ContactController {
    
    constructor(){ }

    async createContactMessage(req, res, next){

        let service = new ContactService();
        try{

            let response = await service.createContactMessage();
            res.send(response);

        }
        catch(Excp){
            console.log(Excp);
            next(Excp);

        }

    }
    
}

module.exports = ContactController;