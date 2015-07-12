// take changes from a web page, download it
// stash HTML changes to database
// append to link
// link under chrome extension renders change from database

// how do you download changes from a web page via inspector?

// NEXT STEP: save css changes to images and roll back
// do I download css file or just take css text?
// - get most recent changes in css
// - remember css addition

// how do chrome extensions talk to the html/css of a web page?
// how do we override native html/css behavior?
// - css easy to override
// - html changes require an identifier of which element changed

var cheerio = require('cheerio');
var diff = require('diff');
var firebase = require('firebase');
var randomId = require('random-id');
var request = require('request');
var firebase = require('firebase');
var randomId = require('random-id');

// Setting up Firebase database
var myFirebaseRef = new firebase("https://torrid-inferno-5286.firebaseio.com/");

// Talk to dev console to take states before and after change
// set new changes in firebase until 'end'

// EXAMPLES OF CHEERIO & REQUEST PACKAGES
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

// whats the difference between gotHTML = function(){} && function gotHTML(){}
function gotHTML(err, resp, html) {
  if (err) return console.error(err)
  var parsedHTML = cheerio.load(html)
  // get all img tags and loop over them
  var imageURLs = []
  parsedHTML('a').map(function(i, link) {
  	var id = randomId(10)
    var href = cheerio
   (link).attr('href')
    if (!href.match('.png')) return
    imageURLs.push(domain + href)
	myFirebaseRef.push({id: id, url: domain + href})
	console.log(domain + href)
  })
}

var domain = 'http://substack.net/images/'
request(domain, gotHTML)

// random ID to identify uploaded state of web page