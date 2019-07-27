/**
 * mongoMain.js creates the mongoose object attached to the proper destination
 * 
 * module.exports.mongoose = mongoose // configured
 * module.exports.db = mongoose.connection
 */
const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/nmdproject', {useNewUrlParser: true});
module.exports.db = mongoose.connection
module.exports.mongoose = mongoose