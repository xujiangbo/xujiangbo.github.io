

var date = new Date();
var time = date.getHours();
var min = date.getMinutes();
var seconds = date.getSeconds();
console.log(time+'时'+min+'分'+seconds+'秒');
var timebox = document.getElementById('time');
$('.time').css({
    'transform-origin':'100% 100%',
    'transform':'rotate('+ 360/12*time +'deg)'
})
$('.min').css({
    'transform-origin':'100% 100%',
    'transform':'rotate('+ 360/60*min +'deg)'
})
$('.sec').css({
    'transform-origin':'100% 100%',
    'transform':'rotate('+ 360/60*seconds +'deg)'
})