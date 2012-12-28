Yaya Css 好用的css hack控制器 


## 介绍

还在为复杂的css hack而头痛？那么快来试试Yaya Css！
支持浏览器hack:
firefox-
chrome-
ie-
opera-
safari-
maxthon-

后面跟数字表示对于浏览器的版本
1.将需要用Yaya Css的link的type设置为type="text/yayacss"
2.在所有Yaya Css的link后面，引入这个js文件

## 例子

demo.css

	pre{
		ie6-background:coral;
		ie7-background:blue;
		ie8-background:pink;
		firefox-background:red;
		chrome-background:green;
		opera-background:orange;
		safari-background:yellow;
		maxthon-background:gray;
	}

demo.html

	<link data-href="demo.css" rel="stylesheet" type="text/yayacss"></link>
	<script type="text/javascript" src="yayacss.js"></script>

## 更多

地址：http://uloveit.com.cn/yayacss/

© uloveit.com.cn 