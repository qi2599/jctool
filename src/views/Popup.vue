<template>
	<div>
		<navbar :title="'弹出层'"></navbar>
		<jc-popup
			:show="popupState"
			:position="position"
			:opacity="0.6"
			@onOverlay="popupState = false">
			<div class="box" :class="{bottom: position === 'bottom'}">
				<p>这里是插槽内容</p>
				<img src="../../public/logo.svg">
			</div>
		</jc-popup>
		<titler>演示</titler>
		<mybtn @click.native="showPopup('middle')">middle</mybtn>
		<mybtn @click.native="showPopup('left')">left</mybtn>
		<mybtn @click.native="showPopup('right')">right</mybtn>
		<mybtn @click.native="showPopup('bottom')">bottom</mybtn>
		<mybtn @click.native="showPopup('top')">top</mybtn>
		<titler>如何使用</titler>
		<div>
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">jc-popup</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"popupState"</span> @<span class="hljs-attr">onOverlay</span>=<span class="hljs-string">"popupState = false"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>这里是插槽内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">jc-popup</span>&gt;</span>
</code></pre>
		</div>
		<titler>API</titler>
		<div>
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
					<td>* show</td>
					<td>是否显示此组件</td>
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
					<td>position</td>
					<td>插槽内容位置，可选值：left/right/top/bottom/middle</td>
					<td>string</td>
					<td>'middle'</td>
				</tr>
				<tr>
					<td>onOverlay</td>
					<td>点击遮罩触发</td>
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
				popupState: false,
				position: 'middle'
			}
		},
		methods:{
      showPopup(val){
        this.popupState = true
				this.position = val
			}
		},
    mounted(){
      window.scrollTo(0,0)
    },
  }
</script>

<style lang="less" scoped>
	.box{
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
		background-color: white;
		img{
			width: 150px;
		}
		p{
			line-height: 50px;
		}
	}
	.box.bottom{
		width: 90%;
		margin: 20px auto;
		border-radius: 6px;
	}
</style>
