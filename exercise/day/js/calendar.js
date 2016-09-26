/**
 * Created by JSONLY on 2016/7/3.
 */

(function(window){
	//初始化函数
	var time,
		date,
		upper,
		everyDay,
		prevMonth,
		nextMonth;
	var weekText = ['日','一','二','三','四','五','六'];
	var next = 0;
	var len = 42;	
	//传参把值传入Html里;
	function init(timeEle,dateEle,upperEle,everyDayEle,prevMonthEle,nextMonthEle){
		time = timeEle;
		date = dateEle;
		upper = upperEle;
		everyDay = everyDayEle;
		prevMonth = prevMonthEle;
		nextMonth = nextMonthEle;
		createEveryDay(next);
		changeMonth(next);
		showTime();
		setInterval(showTime, 1000);
	}
	//展示时间;
	function showTime(){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var week = d.getDay();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		//显示最大的时间;
		time.innerHTML = toTwo(hours)+':'+toTwo(minutes)+':'+toTwo(seconds);
		//显示年,月,日,星期;
		date.innerHTML = year+'年'+month+'月'+day+'日,星期'+weekText[week];
	}
	
	function createEveryDay(next){
		var d = new Date();
		d.setMonth(d.getMonth()+next);
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		//now = 当天;
		var now = d.getDate();
		var str = '';

		//upper填充内容,单独和日期对应获取年月;
		upper.innerHTML = year+'年'+month+'月';
		d.setDate(1);
		
		var week = d.getDay();

		//等于0说明是周日,判断一周里的天数;
		if(week == 0){
			week = 7;
		}
		week--;//上个月需要排多少天
		//上个月从几号开始排

		d.setDate(0);
		//获取到上个月有多少天。
		var prevMonthDayNum = d.getDate();
		//获取上个月起始日子
		var prevMonthStartDay = prevMonthDayNum - week+1;

		for(var i=prevMonthStartDay;i<=prevMonthDayNum;i++){
			str += '<a href="javascript:;" class="old">'+i+'</a>';
		}
		// //填充这个月的日子
		// //回到这个月第一天
		d.setDate(d.getDate()+1);
		//去下个月
		d.setMonth(d.getMonth()+1);
		//从下个月找到上个月的最后一天;
		d.setDate(0);
		var lastDay = d.getDate();
		//生成这个月的
		for(var i=1;i<=lastDay;i++){
			//判断i值等不等于当天，如果等于就加上高亮;如果不等于就继续往下生成;
			if(i==now){
				str += '<a href="javascript:;" class="active">'+i+'</a>';
			}else{
				str += '<a href="javascript:;">'+i+'</a>';
			}
			
		}

		//计算剩下的格子
		var num = len-week -lastDay;
		//给剩下的格子加上class;
		for(var i=1;i<=num;i++){
			str += '<a href="javascript:;" class="old">'+i+'</a>';
		}
		//把字符串放入页面生成元素
		everyDay.innerHTML = str;
	}
	//给向上和向下(月份)添加点击事件;
	function changeMonth(next){
		prevMonth.onclick = function(){
			next--;
			createEveryDay(next);
		};
		nextMonth.onclick = function(){
			next++;
			createEveryDay(next);
		};
	}
	//补0;
	function toTwo(n){
		return n<10?'0'+n:''+n;
	}
	//对外提供方法
	window.init = init;
})(window);