var tagName
var tagText

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  $("*", document.body).click(function (e) {
  	e.stopPropagation();
  	tagName = $(this).get(0).tagName;
  	tagText= $(this).get(0).innerText;
  	});


  if (msg.text && (msg.text == "report_back")) {
    if (!$('#__teamthebest__').length) {
      buildSidebar(document.body)
    }

   $('.sidebar').sidebar('toggle');
  }

})


function buildSidebar(body) {
  var myDiv = populateSidebar()

  console.log(myDiv);

  var newBody = myDiv + '<div class="pusher">' + body.innerHTML + '</div>'

  document.body.innerHTML = newBody
}


function populateSidebar() {
  var sidebar = '<div class="ui sidebar" id="__teamthebest__">';

  var stuff =
    '<h1 class="ui header">Readmix</h1>' +
      '<form class="ui form">' +
        '<div class="field">' +
          '<label>Enter New Text Below:</label>' +
          '<input type="text" name="new-text" placeholder='+ tagName + '>' +
        '</div>' +
        '<div class="ui inverted blue button">Submit</div>'+
      '</form>';

  return sidebar + stuff + '</div>'
}
