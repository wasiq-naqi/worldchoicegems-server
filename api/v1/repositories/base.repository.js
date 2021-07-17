class BaseRepository{

    constructor( model, modelName = 'Entity' ) {
        this.model = model;
        this.modelName = modelName;
    }

    async findById( id, options = {} ){

        let conditions = {
            where: {
                id: id,
                live: 'Y'
            }
        }

        Object.assign(conditions, options);

        let response = await this.model.findOne(conditions);

        return new Promise((resolve, reject) => {

            if( response ) resolve( response );
            else reject( new Error(`${this.modelName} not found having id '${id}'`) );

        });

    }

    async create( _OBJECT ){

        let success, error;

        try{
            success = await this.model.create( _OBJECT );
        }
        catch( Excp ){
            error = Excp;
        }
        

        return new Promise((resolve, reject) => {

            if( success ) resolve( success );
            else reject( new Error( error ) );

        });

    }

}

module.exports = BaseRepository;