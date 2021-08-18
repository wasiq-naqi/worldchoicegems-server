const db = require('./../../../../database/models');

class InitializeController {
    
    constructor(){ }

    async getAppInfo(req, res, next){

        try{

            await db.sequelize.authenticate();
            await db.sequelize.sync();
            
            res.send( {
                Environment: process.env.NODE_ENV || 'development',
                Databse: 'connected',
                Syncronize: true,
            } );

        }
        catch(Excp){

            next(Excp);

        }

    }
    
}

module.exports = InitializeController;