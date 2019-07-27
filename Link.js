/**
 * Base Link Model
 * 
 * module.exports = Link Model
 */
const mongoose = require('./mongoMain').mongoose
let linkSchema = new mongoose.Schema({
  name: String,
  url: String
})
module.exports = mongoose.model('Link', linkSchema)