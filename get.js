/**
 * get.js has all getter methods for the db
 * 
 * get.allLinks = function() that returns a Promise with all the links in an array
 * get.allLinksWithName = function(name: String) that returns a Promise with the link that matches the name
 */
const Link = require('./Link')

module.exports.allLinks = () => {
  return new Promise((resolve, reject) => {
    Link.find((err, links) => {
      if (err) reject(err)
      else {
        resolve(links)
      }
    })
  })
}

module.exports.allLinksWithName = (name) => {
  return new Promise((resolve, reject) => {
    Link.find({name: name}, (err, links) => {
      if (err) reject(err)
      else {
        resolve(links[0])
      }
    })
  })
}