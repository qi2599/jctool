<template>
	<div>
		<navbar :title="'图片轮播'"></navbar>
		<div class="banner">
			<jc-banner :imgs="imgs" :radius="6" :duration="1000" @clickItem="clickItem" @imgLoad="imgLoad"></jc-banner>
		</div>
		<titler :top="0">如何使用</titler>
		<div>
			<pre class="hljs xml"><code class="xml"><span class="hljs-comment">&lt;!-- template --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">jc-banner</span> <span class="hljs-attr">:imgs</span>=<span class="hljs-string">"imgs"</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">jc-banner</span>&gt;</span>

// imgs 数据结构
imgs = ['./image/banner/1.jpg','./image/banner/2.jpg']
</code></pre>
		</div>
		<titler :top="0">API</titler>
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
					<td>*imgs</td>
					<td>图片路径</td>
					<td>array</td>
					<td></td>
				</tr>
				<tr>
					<td>radius</td>
					<td>图片圆角</td>
					<td>number</td>
					<td>0</td>
				</tr>
				<tr>
					<td>auto</td>
					<td>自动播放间隔时间，0为禁用自动播放，单位：秒</td>
					<td>number</td>
					<td>3</td>
				</tr>
				<tr>
					<td>duration</td>
					<td>过度时间，单位：毫秒</td>
					<td>number</td>
					<td>500</td>
				</tr>
				<tr>
					<td>dots</td>
					<td>是否显示提示点</td>
					<td>boolean</td>
					<td>true</td>
				</tr>
				<tr>
					<td>activeColor</td>
					<td>当前提示点颜色</td>
					<td>string</td>
					<td>'#3dd3ff'</td>
				</tr>
				<tr>
					<td>clickItem(index)</td>
					<td>点击图片触发，index点击的图片下标</td>
					<td>事件</td>
					<td></td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import {getBanner} from '../api'
	export default {
		data(){
			return {
				imgs:[]
			}
		},
		methods:{
			clickItem(index){
				console.log(index);
      },
			imgLoad(){
				this.$jcToast({time:0})
			}
		},
		created(){
			this.$jcToast({text: '加载中...',icon: 'loadding'})
			getBanner().then(res => {
				if(res.success){
					let newImgs = []
					res.result.forEach(item => {
						newImgs.push(item.tab_image_url)
					})
					this.imgs = newImgs
				}
			})
		},
		mounted(){
      window.scrollTo(0,0)
		},
		name: "Banner"
	}
</script>

<style lang="less" scoped>
	.banner{
		padding: 20px 0;
		background-color: white;
	}
</style>
