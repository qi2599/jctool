window.onload = function(){
  // 解决点击延时
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
  // 滑动窗口input失去焦点
  set_blur()
  function set_blur() {
    let inp = document.getElementsByTagName("input")
    // 获取到的 inp 是动态的，当 DOM 中新增了 input 标签，这里的 inp 会自动更新
    window.addEventListener('touchstart', function(){
      for (let i=0,lenght=inp.length; i<lenght; i++){
        inp[i].blur()
      }
    })
  }
}
// rem 适配
window.onresize=htmlFont
htmlFont()
function htmlFont(){
  let w = (document.documentElement.clientWidth || document.body.clientWidth)/25
  let styleNode = document.querySelector('#html-font')
  if(styleNode){
    styleNode.innerHTML = "html{font-size:"+w+"px!important}"
  }else{
    styleNode = document.createElement('style')
    styleNode.innerHTML = "html{font-size:"+w+"px!important}"
    styleNode.id = 'html-font'
    document.head.appendChild(styleNode)
  }
}


// 懒加载功能，在 index.html 的 script 标签中添加以下代码，给 window 添加 $lazyloadFn
// img 标签的 data-src 属性添加真实图片地址，src 属性添加 loading 图片地址
// 图片地址请求回来并且更新 img 的 data-src 之后调用 $lazyloadFn(<传入滚动条元素节点>)
// 注意如果滚动条是 html 或 body 的 <传入滚动条元素节点> 这里传入 window
// 如果传入滚动条元素节点不是 window 则滚动条元素须开启定位，且与 img 标签之间的元素不能开启定位及transform
window.$lazyloadFn = function (el) {
  if(el === undefined) return
  let index = 0
  let oldScroll = 0
  let timeId
  el.addEventListener('scroll',lazyload)
  forFn()
  function lazyload(){
    if((el.scrollTop || el.scrollY) < oldScroll) return
    if((el.scrollTop || el.scrollY) - oldScroll > 300) forFn()
    clearInterval(timeId)
    timeId = setTimeout(forFn,200)
  }
  function forFn() {
    let imgs = document.querySelectorAll('[data-src]')
    if(imgs.length === 0) return
    if((el.scrollTop || el.scrollY) > oldScroll) oldScroll = el.scrollTop || el.scrollY
    if(index === imgs.length) el.removeEventListener('scroll',lazyload)
    if(el === window){
      for (let i=index,length=imgs.length; i<length; i++){
        if(imgs[i].getBoundingClientRect().top-window.innerHeight<0){
          imgs[i].src = imgs[i].getAttribute("data-src")
          index++
        }
      }
    }else {
      for (let i=index,length=imgs.length; i<length; i++){
        if(imgs[i].offsetTop <= el.clientHeight + el.scrollTop){
          imgs[i].src = imgs[i].getAttribute("data-src")
          index++
        }
      }
    }
  }
}

if(!window.Promise) {
  document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt)
{ //author: meizz
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
