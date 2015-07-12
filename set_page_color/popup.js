/* A function creator for callbacks */
function doStuffWithDOM(body) {
  console.log("I received the following DOM content:\n" + domContent);
  var sidebar = "<div class='ui sidebar'></div>"
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDOM);
});
