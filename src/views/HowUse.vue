<template>
	<div>
		<navbar :title="'如何安装'"></navbar>
		<div class="para">
			<p><span>1、下载 </span><a style="display: inline-block;color: #2359c5" href="https://github.com/qi2599/joce-ui.git" target="_blank">https://github.com/qi2599/joce-ui.git</a></p>
			<p>2、复制 src\plugin 文件夹到你项目 src 下面</p>
			<p>3、在 main.js 中引入</p>
		</div>
		<titler>全部引入</titler>
		<div>
			<pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">import</span> plugin <span class="hljs-keyword">from</span> <span class="hljs-string">'./plugin'</span>
Vue.use(plugin)
</code></pre>
		</div>
		<titler>按需引入</titler>
		<div>
			<pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">import</span> confirm <span class="hljs-keyword">from</span> <span class="hljs-string">'./plugin/confirm'</span>
Vue.use(confirm)
</code></pre>
		</div>
		<div class="para">
			<p>Vue.use 之后会根据组件的使用，注册全局组件或往 Vue 的原型上添加方法</p>
			<p>注意路径是否正确</p>
		</div>
		<titler>注意事项</titler>
		<div class="para">
			<p>带 * 的属性为必须属性</p>
			<p>组件自定义的类名样式请不要写在含有 scoped 属性的 style 标签中，否则可能造成样式不生效</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: "HowUse"
  }
</script>

<style lang="less" scoped>

</style>
