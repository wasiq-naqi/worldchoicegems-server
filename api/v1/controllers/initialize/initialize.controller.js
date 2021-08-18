const db = require('./../../../../database/models');

class InitializeController {
    
    constructor(){ }

    async getAppInfo(req, res, next){

        try{

            await db.sequelize.authenticate()
            res.send( {
                Environment: process.env.NODE_ENV,
                Databse: 'connected',
            } );

        }
        catch(Excp){

            next(Excp);

        }

    }
    
}

module.exports = InitializeController;