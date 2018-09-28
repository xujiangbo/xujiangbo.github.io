

function Datemonth(ele){
  var elem = document.getElementById(ele);
  var weeks = ['日','一','二','三','四','五','六'];
  var curDate = new Date();       
  /* 获取当前月份 */
  var curMonth = curDate.getMonth();
  var year = curDate.getFullYear();
  /*  生成实际的月份: */
  curDate.setMonth(curMonth + 1);
  curDate.setDate(0);
  var numday = curDate.getDate()
  var obj = new Object()
  var arr = new Array();
  for(var i=0;i<numday;i++){
    arr.push({
      num:i+1,
      week:new Date(year,curMonth,i+1).getDay()
    });
  }
  obj.firstindex = new Date(year,curMonth,1).getDay();
  obj.lastindex = new Date(year,curMonth,numday).getDay();
  //循环添加每月1号之前的空a标签
  weeks.map(function(ele,index){
    if(index<obj.firstindex){
      var str = document.createElement('span');
      str.href = "javascript:;";
      elem.appendChild(str);
    }
  })
  //循环添加日历的每一项
  arr.map(function(ele,index){
    var str = document.createElement('span');
    str.href = "javascript:;";
    str.textContent = ele.num;
    str.className = ele.num==new Date().getDate()?'monthdate':'';
    elem.appendChild(str);
  })
  //循环添加日历最后的每一个空白项
  weeks.map(function(ele,index){
    if(index>obj.lastindex){
      var str = document.createElement('span');
      // str.href = "javascript:;";
      elem.appendChild(str);
    }
  })
  return numday;
}