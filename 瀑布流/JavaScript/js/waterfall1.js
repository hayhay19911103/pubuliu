// JavaScript Document
window.onload=function(){
	waterfull('main','box');
	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
	window.onscroll=function(){
		if(checkscrollside()){
			var oParent = document.getElementById('main');
			for(var i=0;i<dataInt.data.length;i++){
				var obox=document.createElement('div');
				obox.className='box';
				oparent.appendchild(obox);
				
				var opic=document.createElement('div');
				opic.className='pic';
				obox.appendChild(opic);
				
				var oimg=document.createElement('img');
				oimg.src='./images/'+dataInt.data[i].src;
				opic.appendChild(oimg);
				}
				waterfull('main','box');
		};
	}
	}
	
function waterfull(parent,box){
	var oparent=document.getElementById(parent);
	var obox=getClassObj(oparent,'box');//获取box的数组obox
	var boxw=obox[0].offsetWidth;
	var num=Math.floor(document.documentElement.clientWidth/boxw);//每行能容纳的box个数
	oparent.style.cssText='width:'num*boxw+'px;margin:0 auto;'//设置父元素居中
	//用于存储每列中box高度
	var boxHArr=[];
	for(var i=0;i<obox.length;i++){
		var boxH=obox[i].offsetHeight;
		if(i<num){
			boxHArr[i]=boxH;
		}else{
			var minH=Math.min.apply(null,boxHArr);
			var index=getminHIndex(boxHArr,minH);//数组中的最小值
			obox[i].style.position="absolute";
			obox[i].style.top=minH+'px';
			obox[i].style.left=obox[minHIndex].offsetLeft+'px';
			boxHArr[minHIndex]+=obox[i].offsetHeight;
		}
		}
	
	}



/*js中没有getElementsByClassName,所以自己定义一个*/	
function getClassObj(parent,clsName){
	var obj=document.getElementByTagName("*");
	var oboxs=[];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className==clsName){
			oboxs.push(obj[i]);
			}
		};
		return oboxs;
	}
	
function getminHIndex(arr,minH){
		for(var i in arr){
			if(arr[i]==minH){
				return i;
				}
			}
	}
	
function checkscrollside(){
	var oparent=document.getElementById('main');
	var obox=getClass(parent,'box');
	var lastoboxH=obox[obox.length-1].offsetTop+Math.floor(obox[obox.length-1].offsetHeight/2);
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastboxH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
	}