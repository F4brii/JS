
//Modules of node
import express from 'express';

import index from './routes/index';
import {connect} from './database/connection';

const app = express();

//connection of the data base mongoDB

connect();

//middlewares
app.set('json spaces', 4);
app.set('port', process.env.PORT || 3000);

//routes
app.use('/', index);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});