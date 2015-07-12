chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("on message")

  if (msg.text && (msg.text == "report_back")) {
    console.log("reporting back")
    sendResponse({farewell:document.all[0].outerHTML})
    console.log("after")
    var newBody = poop(document.body)
    document.body.innerHTML = newBody
    $('.ui.sidebar').sidebar('setting', {
      transition: 'push',
      bottom : 'overlay'
    }).sidebar('toggle')
  }else {

    console.log("hello")
    sendResponse({farewell:"by"})

  }
})

function poop(body) {
  var myDiv = '<div class="ui sidebar"></div>'
  var newBody = myDiv + '<div class="pusher">' + body.innerHTML + '</div>'

  return newBody
}
