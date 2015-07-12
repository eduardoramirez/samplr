var tagName
var tagText
var $this

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.text && (msg.text == "report_back")) {
    if (!$('#__teamthebest__').length) {
      buildSidebar(document.body)
    }

    $('#__teamthebest__').sidebar('toggle')

    setTimeout(function () {
      $('.pusher').removeClass('dimmed')
    }, 10);


    $("*", document.body).hover(function (e) {
      e.stopPropagation()

      if($(this).attr('class') && $(this).attr('class').indexOf('ui') >= 0) return

      $this = $(this)
      tagName = $(this).get(0).tagName.toLowerCase()
      tagText = $(this).get(0).innerText
      $("#topTag").text("<"+tagName.toLowerCase()+">");
      $("#bottomTag").text("</"+tagName.toLowerCase()+">");
      $('#__textyareay__').val(tagText)
    })
  }
})

function buildSidebar(body) {
  var myDiv = populateSidebar()
  var newBody = myDiv + '<div class="ui pusher">' + body.innerHTML + '</div>'

  document.body.innerHTML = newBody

  $('#__blueme__').on('click', function () {
    if ($this) {
      $this.css('color', 'blue')
      $this.css('background-color', 'blue')
    } 
  })

  $('#__redme__').on('click', function () {
    if ($this) {
      $this.css('color', 'red')
      $this.css('background-color', 'red')
    } 
  })

  $('#__yellowme__').on('click', function () {
    if ($this) {
      $this.css('color', 'yellow')
      $this.css('background-color', 'yellow')
    } 
  })

  $('#__changeme__').on('click', function () {
    if ($this) {
      $this.text($("#__textyareay__").val());
    } 
  })
}

function populateSidebar() {
  var sidebar = '<div class="ui very wide sidebar" id="__teamthebest__">'
  
  var stuff =
    '<div class="ui teal inverted segment">' +
      '<h1 class="ui centered header">Readmix</h1>' +
    '</div>' +
    '<div class="ui basic segment">' +
      '<div class="ui form">' +
        '<div class="ui field">' +
          '<h1 class="ui teal header">Enter New Text Below</h1>' +
          '<h3 class="ui teal header" id="topTag"><></h3>' +
          '<textarea class="ui" id="__textyareay__"></textarea>' +
        '</div>' +
       '<h3 class="ui teal header" id="bottomTag"></></h3>'+
        '<div class="ui blue button" id="__blueme__">Blue</div>'+
        '<div class="ui red button" id="__redme__">Red</div>'+
        '<div class="ui yellow button" id="__yellowme__">Yellow</div>'+
        '<div class="ui teal button" id="__changeme__">Change Text</div>'+
      '</div>' +
    '</div>'

  return sidebar + stuff + '</div>'
}
