const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/index');
require('dotenv').config();
const {USER,PASSWORD,DB_NAME}= process.env;


const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.offjxfc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database momgoo'))
  .catch((e) => console.log(e));

const servidor = express();

servidor.use(morgan('dev'));
      servidor.use(bodyParser.urlencoded({ extended: true }));
servidor.use(bodyParser.json());


servidor.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
});

servidor.use(router);

const PORT = process.env.PORT || 3003;

servidor.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
