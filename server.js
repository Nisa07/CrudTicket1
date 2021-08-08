const http = require('http');

const express = require('express');
const cors = require('cors')


require('dotenv').config();

const apiRouter = require('./routes/api');

const app = express();
app.use(cors())
app.options('*', cors())
require('./db');
const bodyParser=require('body-parser');
const { Ingreso } = require('./db');
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRouter)

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`GATO Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});

