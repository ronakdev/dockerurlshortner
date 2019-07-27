/**
 * addLink adds a new link
 * 
 * module.exports.linkWithName = function addLink(name, url)
 */
const Link = require('./Link')
const get = require('./get')

module.exports.linkWithName = (name, url) => {
  return new Promise((resolve, reject) => {
    get.allLinksWithName(name).then((link => {
      if(link) {
        reject("link already exists")
      }
    }))
    let link = new Link({ name: name, url: url})
    link.save((err, createdLink) => {
      if (err) reject(err)
      else resolve(createdLink)
    })
  })
}