chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.text && (msg.text == "report_back")) {
    if (!$('#__teamthebest__').length) {
      buildSidebar(document.body)
    }

   $('.sidebar').sidebar('toggle');
  }
$("*", document.body).click(function (e) {
	e.stopPropagation();
	var tagName = $(this).get(0).tagName;
	var tagText = $(this).get(0).innerText;
	console.log('<'+tagName.toLowerCase()+'>'+tagText+'<'+tagName.toLowerCase()+'/>');
	});
})

function buildSidebar(body) {
  var myDiv = populateSidebar()
  var newBody = myDiv + '<div class="pusher">' + body.innerHTML + '</div>'

  document.body.innerHTML = newBody
}


function populateSidebar() {
  var sidebar = '<div class="ui sidebar" id="__teamthebest__">'

  // fill in sidebar html here


  return sidebar + '</div>'
}

