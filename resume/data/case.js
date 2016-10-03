
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS的属性操作",
			caseList:[
				{
					caseTitle:"JS热身运动练习",
					publishTime:"2016-09-20 11:25",
					caseThumbnail:"images/case/1/1-JS热身课程-课后练习.gif",
					caseDescription:"属性操作、图片切换、短信属性操作<br>图片切换、短信",
					caseWebsite:"https://fujinwei0168.github.io/exercise/2016-06-06"
				},
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"2016-09-20 11:30",
					caseThumbnail:"images/case/1/2-模拟手机短信发送.gif",
					caseDescription:"描述：这是我完成的一个小案例，综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/phone"
				},
				{
					caseTitle:"图片切换",
					publishTime:"2016-09-24 09:45",
					caseThumbnail:"images/case/bg/QH.gif",
					caseDescription:"描述：点击事件,通过判断进行数组中的图片切换,以做到简单的轮播图效果"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/ImageSwitcher/%E5%9B%BE%E7%89%87%E5%88%87%E6%8D%A2"
				}
			]
		},
		{
			caseName:"for应用this关键字",
			caseList:[
				{
					caseTitle:"生成100个div",
					publishTime:"2016-09-21 21:30",
					caseThumbnail:"images/case/bg/div-100.gif",
					caseDescription:"描述: 利用for循环生成100个div。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/ImageSwitcher/LI100"
				},
				{
					caseTitle:"擦擦擦",
					publishTime:"2016-09-24 13:50",
					caseThumbnail:"images/case/bg/caca.gif",
					caseDescription:"描述: 利用for循环生成div，通过背景图定位当鼠标移入时显示出相对应的背景图。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/for/cacaca"
				},
				{
					caseTitle:"多图切换",
					publishTime:"2016-09-24 13:50",
					caseThumbnail:"images/case/bg/Duoimg.gif",
					caseDescription:"描述: 利用数据进行图片切换。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/for/LXSwitcher"
				},
				{
					caseTitle:"多级菜单栏",
					publishTime:"2016-09-24 14:10",
					caseThumbnail:"images/case/bg/menu.gif",
					caseDescription:"描述: 利用for循环实现多级菜单栏的展示，通过querySelectorALL来获取到元素。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/for/LXmenu"
				},{
					caseTitle:"缩略图",
					publishTime:"2016-09-24 14:40",
					caseThumbnail:"images/case/bg/Simg.gif",
					caseDescription:"描述: 效果实现上一个，下一个图片切换，切换的同时图片中下方的小圆圈也会跟着切换，当鼠标移入到圆圈时显示相对应的图片。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/for/Thumbnail"
				}
			]
		},{
			caseName:"自定义属性、索引值",
			caseList:[
				{
					caseTitle:"缩略图",
					publishTime:"2016-09-24 14:40",
					caseThumbnail:"images/case/bg/Simg.gif",
					caseDescription:"描述: 效果实现上一个，下一个图片切换，切换的同时图片中下方的小圆圈也会跟着切换，当鼠标移入到圆圈时显示相对应的图片。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/for/Thumbnail"

				}
			]
		},
		{
			caseName:"JS数据类型、类型转换",
			caseList:[
				{
					caseTitle:"根据数据写出运行代码",
					publishTime:"2016-09-24 15:10",
					caseThumbnail:"images/case/bg/sj.jpg",
					caseDescription:"描述: 通过数据类型转换找到相对应的数字。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/for/LXSJ"
				}
			]
		},{
			caseName:"函数传参、重用、价格计算",
			caseList:[
				{
					caseTitle:"传参练习",
					publishTime:"2016-09-24 15:30",
					caseThumbnail:"images/case/bg/jsq.gif",
					caseDescription:"描述: 通过函数传参实现简单的计算效果。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/function/count"

				},
				{
					caseTitle:"选项卡嵌套",
					publishTime:"2016-09-24 16:00",
					caseThumbnail:"images/case/bg/Simg1.gif",
					caseDescription:"描述: 通过数据生成结构，利用函数传参实现选项卡的多层点击。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/function/xxk"
				},
				{
					caseTitle:"修改文本框的值",
					publishTime:"2016-09-24 16:20",
					caseThumbnail:"images/case/bg/flmc.gif",
					caseDescription:"描述: 点击保存的时候把文本框的值保存到当前页面，点击取消则保留之前输入的内容。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/function/fvar"
				},
				{
					caseTitle:"价格计算",
					publishTime:"2016-09-24 16:50",
					caseThumbnail:"images/case/bg/price.gif",
					caseDescription:"描述: 通过函数传参实现价格计算效果。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/function/price"
				}
			]
		},
		{
			caseName:"运算符流程控制",
			caseList:[
				{
					caseTitle:"全选",
					publishTime:"2016-09-24 17:30",
					caseThumbnail:"images/case/bg/qx.gif",
					caseDescription:"描述: 首先默认隔行变色，如果点击颜色发生改变，全部被选中时全选按钮会被勾选。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/Process/Select"
				},
				{
					caseTitle:"评分优化",
					publishTime:"2016-09-24 18:10",
					caseThumbnail:"images/case/bg/pf.gif",
					caseDescription:"描述: 鼠标移入五角星颜色发生改变，当点击时会记录当前的位置。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/Process/Score"
				}
			]
		},{
			caseName:"定时器管理、函数封装",
			caseList:[
				{
					caseTitle:"滚动div",
					publishTime:"2016-09-24 18:40",
					caseThumbnail:"images/case/bg/div.gif",
					caseDescription:"描述: 利用循环定时器和mTween来实现div的滚动效果，mTween是封装好的运动方法。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/time/godiv"

				},
				{
					caseTitle:"滚动的轮播图",
					publishTime:"2016-09-24 20:20",
					caseThumbnail:"images/case/bg/tb.gif",
					caseDescription:"描述: 利用循环定时器和mTween来实现图片自动切换的效果，重点在于记录鼠标移入的位置。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/time/taobao"

				}
			]
		},
		{
			caseName:"日期对象、时钟翻转",
			caseList:[
				{
					caseTitle:"时钟滚动",
					publishTime:"2016-09-24 20:47",
					caseThumbnail:"images/case/bg/d1.gif",
					caseDescription:"描述: 利用new Date获取时间然后进行初始化，利用循环定时器进行图片自动切换。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/day/ClockR"
				},
				{
					caseTitle:"时钟翻转",
					publishTime:"2016-09-24 21:20",
					caseThumbnail:"images/case/bg/d2.gif",
					caseDescription:"描述: 利用new Date获取时间然后进行初始化，利用循环定时器进行图片自动切换。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/day/ClockF"
				},
				{
					caseTitle:"日历",
					publishTime:"2016-09-26 20:50",
					caseThumbnail:"images/case/bg/rl.gif",
					caseDescription:"描述: 利用new Date获取时间然后进行初始化，生成日历模板。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/day/calendar.html"
				}
			]
		},{
			caseName:"字符串、查找高亮显示",
			caseList:[
				{
					caseTitle:"文字搬运工",
					publishTime:"2016-09-24 23:00",
					caseThumbnail:"images/case/bg/wz.gif",
					caseDescription:"描述: 利用字符串截取方法把左侧文字截取到右侧。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/seach/words"
				},
				{
					caseTitle:"查找和替换",
					publishTime:"2016-09-24 23:30",
					caseThumbnail:"images/case/bg/se.gif",
					caseDescription:"描述: 查找与替换文字，查找的文字如果在页面中则被查找的问题会高同时可以进行替换。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/seach/seach"
				},
				{
					caseTitle:"排序",
					publishTime:"2016-09-25 13:30",
					caseThumbnail:"images/case/bg/px.gif",
					caseDescription:"描述: 从小到大，从大到小排序。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/seach/sort"
				},{
					caseTitle:"随机翻滚",
					publishTime:"2016-09-24 13:50",
					caseThumbnail:"images/case/bg/sjgd.gif",
					caseDescription:"描述: 图片随机上下翻滚，利用延时定时器做出循环定时器的效果。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/seach/random"
				}
			]
		},{
			caseName:"DOM、BOM",
			caseList:[
				{
					caseTitle:"详情提示",
					publishTime:"2016-09-24 14:20",
					caseThumbnail:"images/case/bg/xq.gif",
					caseDescription:"描述: 鼠标移入详情文字时会出现提示。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/DB/tips"
				},
				{
					caseTitle:"招贤纳士",
					publishTime:"2016-09-24 14:45",
					caseThumbnail:"images/case/bg/zxns.gif",
					caseDescription:"描述: 利用数据生成，监控hash值得变化。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/DB/list"
				},
				{
					caseTitle:"新建文件夹",
					publishTime:"2016-09-26 21:25",
					caseThumbnail:"images/case/bg/new flie.gif",
					caseDescription:"描述: 鼠标点击创建文件夹按钮时利用createElement()创建元素。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/DB/new flie"
				},{
					caseTitle:"上移下移",
					publishTime:"2016-09-26 21:45",
					caseThumbnail:"images/case/bg/ud.gif",
					caseDescription:"描述: 利用mTween库做到点击上移下移效果。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/DB/up dan down"
				}
			]
		},{
			caseName:"Event、事件",
			caseList:[
				{
					caseTitle:"右键菜单",
					publishTime:"2016-09-26 22:25",
					caseThumbnail:"images/case/bg/ymenu.gif",
					caseDescription:"描述: 鼠标点击右键菜单显示，右键的默认样式清楚。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/event/ymenu"
				},
				{
					caseTitle:"图片滚动",
					publishTime:"2016-09-26 22:40",
					caseThumbnail:"images/case/bg/gdimg.gif",
					caseDescription:"描述: 监控键盘事件及鼠标抬起事件，使图片移动。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/event/gdimg"
				},
				{
					caseTitle:"div拖拽",
					publishTime:"2016-09-26 23:05",
					caseThumbnail:"images/case/bg/divdrag.gif",
					caseDescription:"描述: 鼠标拖拽事件，记录鼠标移动的轨迹利用循环定时器使图片按照轨迹回滚。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/event/divdrag"
				},{
					caseTitle:"框选",
					publishTime:"2016-09-26 23:35",
					caseThumbnail:"images/case/bg/Testing.gif",
					caseDescription:"描述: 检测碰撞框选div。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/event/Testing"
				}
			]
		},{
			caseName:"面向对象",
			caseList:[
				{
					caseTitle:"自动轮播图",
					publishTime:"2016-09-27 11:35",
					caseThumbnail:"images/case/bg/zdbf.gif",
					caseDescription:"描述: 利用面向对象写自动轮播图。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/mxdx/ob"
				}
			]
		},{
			caseName:"Html5标签、Canvas",
			caseList:[
				{
					caseTitle:"Html5 audio音频",
					publishTime:"2016-09-28 15:35",
					caseThumbnail:"images/case/bg/audio.gif",
					caseDescription:"描述: 控制audio音频标签上面的属性，使音频可以自动播放音乐，利用js控制音频的开关。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/html5/audio"
				},{
					caseTitle:"audio&canvas",
					publishTime:"2016-09-28 16:00",
					caseThumbnail:"images/case/bg/aw.gif",
					caseDescription:"描述: audio结合canvas绘制动画效果。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/html5/aw"
				},{
					caseTitle:"canvas绘制圆形",
					publishTime:"2016-09-28 16:00",
					caseThumbnail:"images/case/bg/canvas.gif",
					caseDescription:"描述: canvas绘制圆形利用定时器使其半径放大缩小。"
					,caseWebsite:"https://fujinwei0168.github.io/exercise/html5/canvas"
				}
			]
		}
]