var tagName
var tagText
var $this
var description = ""

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.text && (msg.text == "report_back")) {
    if (!$('#__teamthebest__').length) {
      buildSidebar(document.body)
    }

    $('#__teamthebest__').sidebar('toggle')

    setTimeout(function () {
      $('.pusher').removeClass('dimmed')
    }, 10);


    $("*", document.body).click(function (e) {
      e.stopPropagation()

      if($(this).attr('class') && $(this).attr('class').indexOf('ui') >= 0) return

      $this = $(this)
      tagName = $(this).get(0).tagName.toLowerCase()
      tagText = $(this).get(0).innerText
      $("#topTag").text("<"+tagName.toLowerCase()+" style=" + $this.css("color")+">");
      $("#bottomTag").text("</"+tagName.toLowerCase()+">");
      $('#__textyareay__').val(tagText)
      setDescription()
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
      $("#topTag").text("<"+tagName.toLowerCase()+" style=" + $this.css("color")+">");
    } 
  })

  $('#__redme__').on('click', function () {
    if ($this) {
      $this.css('color', 'red')
      $("#topTag").text("<"+tagName.toLowerCase()+" style=" + $this.css("color")+">");
    } 
  })

  $('#__yellowme__').on('click', function () {
    if ($this) {
      $this.css('color', 'yellow')
      $("#topTag").text("<"+tagName.toLowerCase()+" style=" + $this.css("color")+">");
    } 
  })

  $('#__changeme__').on('click', function () {
    if ($this) {
      $this.text($("#__textyareay__").val());
      $("#topTag").text("<"+tagName.toLowerCase()+" style=" + $this.css("color")+">");
    } 
  })
}

function setDescription() {
  switch(tagName) {
    case 'p':
      description = "You've just clicked on a <p> tag! The browser uses the <p> tag to define a paragraph."
      break
    case 'header':
      description = "You've just clicked on a <header> tag! This is used to introduce other content onto the page or to hold a set of links to other pages."
      break
    case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6':
      description = "You've just clicked on one of the six heading elements. These elements are used for different headers and differ in magnitude of importance, <h1> being the most important and <h6> being the least. "
    default: description = "this is the description"
  }
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
          '<h3 class="ui teal header" id="topTag" style="text-align:left">&lt;&gt;</h3>' +
          '<textarea class="ui" id="__textyareay__"></textarea>' +
        '</div>' +
       '<h3 class="ui teal header" id="bottomTag" style="text-align:left">&lt;/&gt;</h3>'+
        '<div class="ui blue button" id="__blueme__">Blue</div>'+
        '<div class="ui red button" id="__redme__">Red</div>'+
        '<div class="ui yellow button" id="__yellowme__">Yellow</div>'+
        '<div class="ui teal button" id="__changeme__">Change Text</div>'+
      '</div>' +
    '</div>' +
    '<div>' +
      '<h1 class="ui center teal header">What am I doing?</h1>' +
      '<p>'+ description +'</p>' +
    '</div>'

  return sidebar + stuff + '</div>'
}
