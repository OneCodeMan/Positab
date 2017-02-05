var messageDiv = new Vue({
  el: '#message',
  data: {
    message: 'You are awesome!'
  }
})

var containerDiv = new Vue({
  el: '.container-fluid',
  data: {
    bgColor: {
      backgroundColor: colors[Math.floor(Math.random() * (colors.length - 1))],
    }
  },
});
