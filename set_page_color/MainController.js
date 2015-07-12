var tagName
var tagText
var element

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.text && (msg.text == "report_back")) {
    if (!$('#__teamthebest__').length) {
      console.log(">>>")
      buildSidebar(document.body)
    }
    $('#__teamthebest__').sidebar('toggle');

    setTimeout(function () {
      $('.pusher').removeClass('dimmed')
    }, 10);

	$("*", document.body).click(function (e) {
		e.stopPropagation();
		tagName = $(this).get(0).tagName;
		tagText = $(this).get(0).innerText;
		element = $(this);
		$("#textField").attr("placeholder", tagText)
		$("#topTag").text("<"+tagName.toLowerCase()+">");
		$("#bottomTag").text("</"+tagName.toLowerCase()+">");
		console.log('<'+tagName.toLowerCase()+'>'+tagText+'<'+tagName.toLowerCase()+'/>');
	});
	$("#submitButton").click(function(){
		updateText();
	})
  }
});


function buildSidebar(body) {
  var myDiv = populateSidebar()
  var newBody = myDiv + '<div class="pusher">' + body.innerHTML + '</div>'

  document.body.innerHTML = newBody
}

function populateSidebar() {
  var sidebar = '<div class="ui sidebar" id="__teamthebest__">'
  
  var stuff =
    '<h1 class="ui header">Readmix</h1>' +
      '<form class="ui form">'+
      	'<h3 id="topTag">'+tagName+'</h3>' +
        '<div class="field">' +
          '<input id="textField" type="text" name="new-text" placeholder='+ tagName + '>' +
        '</div>' +
        '<h3 id="bottomTag">'+tagName+'</h3>'+
        '<div id="submitButton" class="ui inverted blue button">Submit</div>'+
      '</form>'

  return sidebar + stuff + '</div>'
}

function updateText(){
	element.text($("#textField").val());
	// console.log("Element: " + $('div:contains('+tagText+')').text());
	// $('div:contains('+tagText+')').text($("#textField").attr("placeholder"));
}
