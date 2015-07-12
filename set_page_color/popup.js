/* A function creator for callbacks */
function doStuffWithDOM(res) {
  console.log("ddfdfd")
  console.log("I received the following DOM content:\n" + res.res);
  var sidebar = "<div class='ui sidebar'></div>"
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDOM)

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
// });
});
