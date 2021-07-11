<template>
	<div>
		<div class="text" v-show="index===0">
			<div>
				<p>此组件使用三个页面模拟多个页面，左右两边的页面为 loading 页面，内容则在中间页面</p>
				<p>提供插槽： left 、默认插槽 、right</p>
				<p>需要在默认插槽上左右滑动才会切换页面，所以默认插槽的高度不宜过低</p>
			</div>
		</div>
		<div class="code" v-show="index===1">
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">jc-page</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"tabIndex"</span>
        <span class="hljs-attr">:pageLength</span>=<span class="hljs-string">"4"</span>
        @<span class="hljs-attr">nextPage</span>=<span class="hljs-string">"nextPage"</span>
        @<span class="hljs-attr">previousPage</span>=<span class="hljs-string">"previousPage"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"content"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>当前页面是{{pageIndex}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">jc-page</span>&gt;</span>
</code></pre>
		</div>
		<div class="code" v-show="index===2">
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"tabIndex"</span>
                    <span class="hljs-attr">:active-color</span>=<span class="hljs-string">"'#f7b838'"</span>
                    <span class="hljs-attr">:tabClass</span>=<span class="hljs-string">"'my-tab'"</span>
                    <span class="hljs-attr">:activeClass</span>=<span class="hljs-string">"'my-active'"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span> &gt;</span>使用说明<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span> &gt;</span>如何使用<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span> &gt;</span>组合使用<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span> &gt;</span>API<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">jc-page</span>
                     <span class="hljs-attr">v-model</span>=<span class="hljs-string">"tabIndex"</span>
                     <span class="hljs-attr">:pageLength</span>=<span class="hljs-string">"4"</span>
                     @<span class="hljs-attr">nextPage</span>=<span class="hljs-string">"nextPage"</span>
                     @<span class="hljs-attr">previousPage</span>=<span class="hljs-string">"previousPage"</span> &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"content"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>当前页面是{{pageIndex}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">jc-page</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data(){
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">tabIndex</span>:<span class="hljs-number">0</span>,
            <span class="hljs-attr">pageIndex</span>:<span class="hljs-number">0</span>,
        }
    },
    <span class="hljs-attr">methods</span>:{
        nextPage(done){
            setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
                done()
                <span class="hljs-keyword">this</span>.pageIndex = <span class="hljs-keyword">this</span>.tabIndex
            },<span class="hljs-number">500</span>)
        },
        previousPage(done){
            setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
                done()
                <span class="hljs-keyword">this</span>.pageIndex = <span class="hljs-keyword">this</span>.tabIndex
            },<span class="hljs-number">500</span>)
        }
    }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.my-tab</span>{
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">45px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#00294c</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#68e1ff</span>;
}
<span class="hljs-selector-class">.my-active</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#00385f</span>;
}
<span class="hljs-selector-class">.content</span>, <span class="hljs-selector-class">.page-left</span>, <span class="hljs-selector-class">.page-right</span>{
    <span class="hljs-attribute">height</span>: <span class="hljs-number">78vh</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">background-color</span>: white;
    <span class="hljs-attribute">overflow</span>: auto;
    <span class="hljs-attribute">-webkit-overflow-scrolling</span>: touch;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

</code></pre>
		</div>
		<div v-show="index===3">
			<table>
				<thead>
				<tr>
					<th>属性</th>
					<th>说明</th>
					<th>类型</th>
					<th>默认值</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>* v-model</td>
					<td>当前页面的下标</td>
					<td>number</td>
					<td></td>
				</tr>
				<tr>
					<td>* pageLength</td>
					<td>页面的数量</td>
					<td>number</td>
					<td></td>
				</tr>
				<tr>
					<td>loop</td>
					<td>是否开启循环</td>
					<td>boolean</td>
					<td>false</td>
				</tr>
				<tr>
					<td>loading</td>
					<td>是否显示 loading 图标</td>
					<td>boolean</td>
					<td>true</td>
				</tr>
				<tr>
					<td>nextPage(done)</td>
					<td>显示右页面时触发</td>
					<td>事件</td>
					<td></td>
				</tr>
				<tr>
					<td>previousPage(done)</td>
					<td>显示左页面时触发</td>
					<td>事件</td>
					<td></td>
				</tr>
				<tr>
					<td>done</td>
					<td>调用 done() 可以跳转到中间页面</td>
					<td>function</td>
					<td></td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
  export default {
    data(){
      return{
        pageIndex:0
			}
		},
    props:{
      index: Number
		},
    name: "Page-content"
  }
</script>

<style lang="less" scoped>
</style>
