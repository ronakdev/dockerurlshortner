/**
 * renders a homepage
 * 
 * module.exports.render = function(links)
 */
module.exports.render = (links) => {
  let home = `
  <!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
    <title>Wowza.links</title>
  </head>
  <body>
    <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="text-center">Wowza.links</h1>
            <hr>
            <div class="list-group">
            `

  links.forEach(link => {
    let name = link.name
    let url = link.url
    let createdUrl = `localhost:3000/${name}`

    home+=`<div class='list-group-item'><h4 class='list-group-item-heading'><a href="${createdUrl}" target="_blank">${createdUrl}</a></h4></div>`
  })
    home += `
    </div>
  </div>
</div>
</div>
</body>
</html>`
return home
}