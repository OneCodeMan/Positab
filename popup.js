/*
TODO: More positivity. Fucking positivity overflow. Fuck all negativity.
TODO: Draw an icon
TODO: Hundreds of positive messages
TODO: Shit ton of colors
TODO: Switch up typeface
TODO: Add to Chrome store
*/

function shuffle(array) {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

var $messageText = $('#message');
var $containerFluid = $('.container-fluid');
var randBg = colors[Math.floor(Math.random() * (colors.length - 1))];

$containerFluid.css('background-color', randBg);

$.ajax({
  url: 'messages.json',
  type: 'GET',
  success: function(data) {
    var messagesRaw = JSON.parse(data);
    var messages = shuffle(messagesRaw);
    var index = Math.floor(Math.random() * (messages.length - 1));
    $messageText.text(messages[index].content);

  },
  error: function(jqXHR, error) {
    console.log('Error...');
  }
});

$('#default-tab-text').on('click', function() {
  chrome.tabs.getCurrent(function(tab) {
    chrome.tabs.update(tab.id, {
      url: 'chrome-search://local-ntp/local-ntp.html'
    });
  });
});
