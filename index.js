const express = require('express');

const cors = require('cors'); //Use cors to solve : No 'Access-Control-Allow-Origin'

const app = express();

app.use(cors());

const db = require('./mysql');
const restaurantsRouter = require('./routers/restaurants')
const membersRouter = require('./routers/members');
const tableRouter = require('./routers/table');
const logger = require('./middleware/logger');



//middleware when the user request will make read the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Custom middleware
app.use(logger);

// Router
app.use('/apis/restaurants', restaurantsRouter);
app.use('/apis/member', membersRouter);
app.use('/apis/table', tableRouter);

app.get('/', (reg, res) => {
    res.send('Hello World')
})

app.listen(3000, ()=> {
    console.log('Listening to port 3000')
})