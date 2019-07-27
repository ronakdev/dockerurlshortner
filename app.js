const express = require('express')
const path = require("path");
const get = require('./get')
const add = require('./add')
const port = 3000
const home = require('./home')
const app = express()


app.get('/', async (req, res) => {
  // get all urls
  get.allLinks().then(links => {
    res.set('Content-Type', 'text/html');
    res.send(home.render(links))
  })
})
app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname+'/assets/create.html'));
})

app.post('/create', async (req, res) => {
  let name = req.query.name
  let url = req.query.url
  
  add.linkWithName(name, url).then(() => {
    res.send("link created")
    res.status(200)
  }).catch(() => {
    res.status(409)
    res.send('failed to create link')
  })
})

app.get('/:name', (req, res) => {
  let name = req.params.name
  get.allLinksWithName(name)
    .catch(err => {
      res.send("gg we broke")
    })
    .then(link => {
      res.redirect(link.url)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
