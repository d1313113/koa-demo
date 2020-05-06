const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/user',{
mongoose.connect('mongodb://koa-db:27017/user',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  poolSize: 5
});

module.exports = mongoose;
