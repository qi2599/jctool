<template>
	<div>
		<navbar :title="'遮罩弹出层'"></navbar>
		<jc-mask :opacity="0.6" :maskState="maskState" :flex="true" @close="maskState=false">
			<div class="box">
				<img src="../../public/logo.svg">
				自定义弹出内容
			</div>
		</jc-mask>
		<mybtn @click.native="showMask">弹出遮罩</mybtn>
		<titler>使用方法</titler>
		<div>
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">jc-mask</span>
        <span class="hljs-attr">:opacity</span>=<span class="hljs-string">"0.6"</span>
        <span class="hljs-attr">:maskState</span>=<span class="hljs-string">"maskState"</span>
        <span class="hljs-attr">:flex</span>=<span class="hljs-string">"true"</span>
        @<span class="hljs-attr">close</span>=<span class="hljs-string">"maskState=false"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>插槽内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">jc-mask</span>&gt;</span>
</code></pre>
		</div>
		<titler>参数 API</titler>
		<div>
			<table>
				<thead>
				<tr>
					<th>参数</th>
					<th>说明</th>
					<th>类型</th>
					<th>默认值</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>* maskState</td>
					<td>是否显示遮罩</td>
					<td>boolean</td>
					<td></td>
				</tr>
				<tr>
					<td>opacity</td>
					<td>遮罩不透明度</td>
					<td>number</td>
					<td>0.5</td>
				</tr>
				<tr>
					<td>flex</td>
					<td>插槽内容水平垂直居中，并且带有出入场过度</td>
					<td>boolean</td>
					<td>false</td>
				</tr>
				<tr>
					<td>close</td>
					<td>点击遮罩的触发的事件</td>
					<td>事件</td>
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
        maskState: false
			}
		},
		methods:{
      showMask(){
        this.maskState=true
			}
		},
  }
</script>

<style lang="less" scoped>
	.box{
		width: 200px;
		padding: 50px;
		text-align: center;
		height: 200px;
		line-height: 100px;
		background-color: white;
	}
</style>
