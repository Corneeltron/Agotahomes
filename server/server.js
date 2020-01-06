const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');
const mongoose = require('mongoose')
// const ejs = require('ejs')

const MONGO_URI = 'mongodb+srv://willy-j_22:NewGirl7@cluster0-rtykt.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  dbName : 'AgotaHomes'
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});
 
//ask a fellow what this is for -> // app.set('view engine', 'js')
app.use('/api', apiRouter);
app.use((req, res) => res.sendStatus(404));
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred in server.js catch-all' }
  };
  return res.status(defaultErr.status).json(defaultErr.message);
});

// app.get()

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
