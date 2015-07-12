chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("on message")

  if (msg.text && (msg.text == "report_back")) {
    console.log("reporting back")
    console.log(document.body)
    //sendResponse(document.all[0].outerHTML)
    console.log(sendResponse)
    sendResponse(document.body)
  }
})