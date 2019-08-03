<template>
	<div>
		<navbar :title="'图片懒加载'"></navbar>
		<div class="para">
			<titler :top="0">此功能函数的特色</titler>
			<ol>
				<li><p>由于图片懒加载需要监听滚动条事件，而滚动条事件触发非常频繁，因此函数内部做了众多优化；</p></li>
				<li><p>无论滚动条是 html 的、 body 的，或者某个容器的，都能通过此函数实现懒加载功能；</p></li>
				<li><p>使用简单：只需调用 $lazyloadFn(&lt;传入滚动条元素节点&gt;) 即可实现。</p></li>
			</ol>
		</div>
		<div class="para">
			<titler :top="0">使用方法</titler>
			<ol>
				<li><p>在 index.html 的 script 标签中添加下面的代码，把 $lazyloadFn 添加为 window 的方法；</p></li>
				<li><p>img 标签的 data-src 属性添加真实图片地址，src 属性添加 loading 图片地址；</p></li>
				<li><p>图片地址请求回来并且添加到 img 的 data-src 之后调用 $lazyloadFn(&lt;传入滚动条元素节点&gt;); </p></li>
				<li><p>滚动条是 html 或者 body 时，&lt;传入滚动条元素节点&gt; 为 window，如果图片在某个容器里滚动的，则传入这个容器节点；</p></li>
				<li><p>注意如果传入滚动条元素节点不是 window 则滚动条元素须开启定位，且滚动条元素到 img 标签之间的元素不能开启定位和 transform。</p></li>
			</ol>
		</div>
		<div class="para">
			<titler :top="0">函数内部的优化有：</titler>
			<ol>
				<li><p>滚动条往回滚时退出滚动条监听事件函数；</p></li>
				<li><p>滚动条往前滚且停止滚动时才执行遍历图片是否可见；</p></li>
				<li><p>当遍历到图片不可见时，那么它之后的图片都是不可见的，退出遍历；</p></li>
				<li><p>已经替换为真实图片地址的不会再遍历；</p></li>
				<li><p>当所有图片地址都替换为真实图片地址时，删除滚动条监听。</p></li>
			</ol>
		</div>
		<div>
			<pre class="hljs javascript"><code class="javascript"><span class="hljs-built_in">window</span>.$lazyloadFn = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">el</span>) </span>{
  <span class="hljs-keyword">if</span>(el === <span class="hljs-literal">undefined</span>) <span class="hljs-keyword">return</span>
  <span class="hljs-keyword">let</span> index = <span class="hljs-number">0</span>
  <span class="hljs-keyword">let</span> scrolly = el.scrollTop || el.scrollY
  <span class="hljs-keyword">let</span> oldScroll = <span class="hljs-number">0</span>
  <span class="hljs-keyword">let</span> timeId
  el.addEventListener(<span class="hljs-string">'scroll'</span>,lazyload)
  forFn()
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">lazyload</span>(<span class="hljs-params"></span>)</span>{
    scrolly = el.scrollTop || el.scrollY
    <span class="hljs-keyword">if</span>(scrolly &lt; oldScroll) <span class="hljs-keyword">return</span>
    <span class="hljs-keyword">if</span>(scrolly - oldScroll &gt; <span class="hljs-number">300</span>) forFn()
    clearInterval(timeId)
    timeId = setTimeout(forFn,<span class="hljs-number">200</span>)
  }
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">forFn</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">let</span> imgs = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">'[data-src]'</span>)
    <span class="hljs-keyword">if</span>(imgs.length === <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span>
    <span class="hljs-keyword">if</span>(scrolly &gt; oldScroll) oldScroll = scrolly
    <span class="hljs-keyword">if</span>(index === imgs.length) el.removeEventListener(<span class="hljs-string">'scroll'</span>,lazyload)
    <span class="hljs-keyword">if</span>(el === <span class="hljs-built_in">window</span>){
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i=index,length=imgs.length; i&lt;length; i++){
        <span class="hljs-keyword">if</span>(imgs[i].getBoundingClientRect().top - <span class="hljs-built_in">window</span>.innerHeight &lt; <span class="hljs-number">0</span>){
          imgs[i].src = imgs[i].getAttribute(<span class="hljs-string">"data-src"</span>)
          index++
        }<span class="hljs-keyword">else</span> <span class="hljs-keyword">break</span>
      }
    }<span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i=index,length=imgs.length; i&lt;length; i++){
        <span class="hljs-keyword">if</span>(imgs[i].offsetTop &lt;= el.clientHeight + el.scrollTop){
          imgs[i].src = imgs[i].getAttribute(<span class="hljs-string">"data-src"</span>)
          index++
        }<span class="hljs-keyword">else</span> <span class="hljs-keyword">break</span>
      }
    }
  }
}
</code></pre>
		</div>
		<div class="img-box">
			<titler :top="0">演示</titler>
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/840/840_.jpeg.jpg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/132/132_0.jpeg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/131/131_0.jpeg.jpg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/98/98_0.jpeg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/1900/1900_0.jpeg.jpg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/1901/1901_0.jpeg.jpg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/1902/1902_0.jpeg.jpg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/1903/1903_0.jpeg.jpg">
			<img src="../assets/imgs/img_loading.svg" data-src="http://www.gkshwap.com/image/1908/1908_0.jpeg.jpg">
		</div>
	</div>
</template>

<script>
  export default {
    mounted(){
      window.$lazyloadFn(window)
		},
    name: "Lazyload"
  }
</script>

<style lang="less" scoped>
	.img-box{
		background-color: white;
		img{
			width: 275/@rem;
			margin: 100/@rem 50/@rem;
		}
	}
</style>
