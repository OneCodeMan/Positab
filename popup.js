/*
TODO: GET request a JSON file
TODO: Draw an icon
TODO: More positivity. Fucking positivity overflow. Fuck all negativity.
TODO: Hundreds of positive messages
TODO: Shit ton of colors.
TODO: Switch up typeface
TODO: Add to Chrome store
*/

var $messageText = $('#message');
var $containerFluid = $('.container-fluid');
var randBg = colors[Math.floor(Math.random() * (colors.length - 1))];

$containerFluid.css('background-color', randBg);

$messageText.text('You\'re awesome as fuck.');
