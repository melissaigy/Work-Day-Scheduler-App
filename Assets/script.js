setInterval(function(){
    var today = moment().format('dddd, MMMM Do, h:mm:ss a');
  $("#currentDay").text(today)
}, 1000)