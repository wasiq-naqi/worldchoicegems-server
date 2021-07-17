const express = require('express');
const cors = require('cors');
const path = require('path');
const { ErrorHandler } = require('./core/middlewares');
const config = require('./config')();
const app = express();
var morgan = require('morgan')

// Initializing Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Middleware for adding delaying
// app.use(function(req,res,next){setTimeout(next,3000)});

app.use('/public', express.static( path.join( __dirname, '../public') ));
// app.use('/', express.static( path.join( __dirname, './frontend') ));


// IMPORTING DATABASE
require('./database/models/index');

// REGISTERING ROUTES
const routes = require('./api/v1/routes/index');
app.use('/api/v1', routes);
app.use(ErrorHandler);

// HANDLING WILD CARD ROUTE
// app.get('*', (req, res) => {
//     if(!req.xhr && req.headers['postman-token'] == undefined) return res.sendFile( path.join( __dirname, './frontend/index.html') );
//     new Errors(res, { status: 404, error: 'Not Found', message: ''});
// });

// STARTING SERVER
app.listen(config.APP.PORT, ()=> {
    console.log(`App is listning on Port: ${config.APP.PORT}`)
});