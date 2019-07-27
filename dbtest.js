const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost:27017/nmdproject', {useNewUrlParser: true});
let kittySchema = new mongoose.Schema({
  name: String
});
let Kitten = mongoose.model('Kitten', kittySchema);

let db = mongoose.connection
db.once('open', async () => {
  await addKitten("shwaa")
  Kitten.find((err, kittens) => {
    if (err) {  console.err(err) }
    console.log(kittens)
  })
})

function addKitten(kitName) {
  return new Promise((resolve, reject) => {
    let kitty = new Kitten({name: kitName})
    kitty.save((err, kitten) => {
      if (err) {  reject(err) }
      else {
        resolve(kitten)
      }
    })
  })
}