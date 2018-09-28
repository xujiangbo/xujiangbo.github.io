










setInterval(function(){
  var date = new Date();
  var time = date.getHours();
  var min = date.getMinutes();
  var seconds = date.getSeconds();
  var timebox = document.getElementById('time');
  $('.time').css({
      'transform-origin':'50% 100%',
      'transform':'rotate('+ 360/12*time +'deg)'
  })
  $('.min').css({
      'transform-origin':'50% 100%',
      'transform':'rotate('+ 360/60*min +'deg)'
  })
  $('.sec').css({
      'transform-origin':'50% 100%',
      'transform':'rotate('+ 360/60*seconds +'deg)'
  })

  $("#house>h1").text(function(){
    return new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月'+new Date().getDate()+'日'
  })
    $("#house>h2").text(function(){
    return new Date().getHours()+':'+(new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes())+':'+(new Date().getSeconds()>9?new Date().getSeconds():'0'+new Date().getSeconds());
  })

},1000)



//初始化日历表
var calendar = document.getElementById("calendarDate");
console.log(Datemonth("calendarDate"));