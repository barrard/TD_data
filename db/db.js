require('dotenv').config()
console.log('DB')
const mongoose = require('mongoose');
const db_name = process.env.DB_NAME || 'iex_stock_app'
console.log({db_name})
// mongoose.set('debug', true);
module.exports = mongoose

mongoose.connect(`mongodb://localhost/${db_name}`,  { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false


})
  .then(connection => {
    logger.log('Connected to MongoDB')
  })
  .catch(error => {
    logger.log(error.message)
  })
