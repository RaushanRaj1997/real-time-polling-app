const mongoose = require('mongoose');
const keys = require('./keys');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://raushan1997:<raushan@1997>@cluster0-taahm.mongodb.net/test?retryWrites=true ')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
