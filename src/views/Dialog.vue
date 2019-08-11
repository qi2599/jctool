<template>
	<div>
		<navbar :title="'对话框'"></navbar>
		<jc-dialog :opacity="0.6" :dialogState="dialogState" :flex="true" @close="dialogState=false">
			<div class="box">
				<img src="../../public/logo.svg">
				自定义弹出内容
			</div>
		</jc-dialog>
		<mybtn @click.native="showDialog">弹出遮罩</mybtn>
		<titler>如何使用</titler>
		<div>
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">jc-dialog</span>
        <span class="hljs-attr">:opacity</span>=<span class="hljs-string">"0.6"</span>
        <span class="hljs-attr">:dialogState</span>=<span class="hljs-string">"dialogState"</span>
        <span class="hljs-attr">:flex</span>=<span class="hljs-string">"true"</span>
        @<span class="hljs-attr">close</span>=<span class="hljs-string">"dialogState=false"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>插槽内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">jc-dialog</span>&gt;</span>
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
					<td>* dialogState</td>
					<td>弹出对话框</td>
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
        dialogState: false
			}
		},
		methods:{
      showDialog(){
        this.dialogState=true
			}
		},
    mounted(){
      window.scrollTo(0,0)
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
