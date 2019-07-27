const express = require('express')
const port = 3000

const mongoose = require('mongoose');
mongoose.Promise = Promise

async function main() {
  mongoose.connect('mongodb://localhost:27017/nmdproject', {useNewUrlParser: true});
  let db = mongoose.connection
  await db.once('open')
  let kittySchema = new mongoose.Schema({
    name: String
  });
  let Kitten = mongoose.model('Kitten', kittySchema);
  
  let bob = new Kitten({ name: 'Bob' });
  let success = true
  bob.save().catch(err => {
    console.log("oof reax only")
    success = false
  }).then(() => {
    console.log('hype')
  })


  const app = express()

  app.get('/', (req, res) => {
    if (!success) {
      res.send("we can't do shite we didn't even add a damn kitten")
    }
    // get all our cats
    Kitten.find()
      .catch(err => {
        res.send("well shit. db fail reax only")
      }).then(kittens => {
        let text = "<ul>"
        kittens.forEach(kitten => {
          text += `<li>${kitten.name}</li>`
        })
        text += "</ul>"
        res.set('Content-Type', 'text/html');
        res.send(text)
      })
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

main()
