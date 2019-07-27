/**
 * mongoMain.js creates the mongoose object attached to the proper destination
 * 
 * module.exports.mongoose = mongoose // configured
 * module.exports.db = mongoose.connection
 */
const mongoose = require('mongoose')

module.exports.connect = (target) => {
  return new Promise( (resolve, reject) => {
    mongoose.Promise = Promise
    mongoose.connect(`mongodb://${target}:27017/nmdproject`, {useNewUrlParser: true})
      .catch((error) => {
        reject(error)
      }).then(() => {
        resolve()
      })
  })
}
module.exports.db = mongoose.connection
module.exports.mongoose = mongoose