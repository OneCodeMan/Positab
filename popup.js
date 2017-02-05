var $messageText = $('#message');
var $containerFluid = $('.container-fluid');
var randBg = colors[Math.floor(Math.random() * (colors.length - 1))];

$containerFluid.css('background-color', randBg);

$messageText.text('You\'re awesome as fuck.');
