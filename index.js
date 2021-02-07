const express = require('express');
const cors = require('cors');

const restaurantsRouter = require('./routers/restaurants')
const logger = require('./middleware/logger');

const app = express();

//Use cors to solve : No 'Access-Control-Allow-Origin'
app.use(cors());

//middleware when the user request will make read the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Custom middleware
app.use(logger);

// Router
app.use('/apis/restaurants', restaurantsRouter);

app.get('/', (reg, res) => {
    res.send('Hello World')
})

app.listen(3000, ()=> {
    console.log('Listening to port 3000')
})