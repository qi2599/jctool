<template>
	<div class="slide">
		<navbar :title="'上拉加载下拉刷新'"></navbar>
		<div class="para"><p>使用上拉加载功能时，此组件的高度不能由插槽撑开，请使用指定高度的div包裹此组件。</p></div>
		<titler>演示</titler>
		<div class="slide-wrap">
			<jc-slide :on_refresh="refresh" :on_infinite="infinite">
				<div>
					<div v-for="item in length">{{item}}</div>
				</div>
			</jc-slide>
		</div>
		<titler>如何使用</titler>
		<div>
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">jc-slide</span>
        <span class="hljs-attr">:on_refresh</span>=<span class="hljs-string">"refresh"</span>
        <span class="hljs-attr">:on_infinite</span>=<span class="hljs-string">"infinite"</span>
        <span class="hljs-attr">:text</span>=<span class="hljs-string">"'没有更多商品'"</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">"myslide"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>插槽内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">jc-slide</span>&gt;</span>
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
					<td>on_refresh( reset )</td>
					<td>下拉刷新触发</td>
					<td>function</td>
					<td></td>
				</tr>
				<tr>
					<td>reset</td>
					<td>下拉刷新成功后需要调用 reset()</td>
					<td>function</td>
					<td></td>
				</tr>
				<tr>
					<td>on_infinite( done )</td>
					<td>上拉加载触发</td>
					<td>function</td>
					<td></td>
				</tr>
				<tr>
					<td>done</td>
					<td>调用 done()  后下次上拉加载回调才会执行; <br>
						调用 done( true ) 下次上拉加载回调不会执行; 并显示 text 文字，亦可通过 $refs 调用此方法
					</td>
					<td>function</td>
					<td></td>
				</tr>
				<tr>
					<td>text</td>
					<td>
						调用 done( true )  之后显示的文字 <br>
						默认显示 “没有更多数据”
					</td>
					<td>string</td>
					<td></td>
				</tr>
				<tr>
					<td>distance</td>
					<td>提前触发上拉加载的距离</td>
					<td>number</td>
					<td>0</td>
				</tr>
				<tr>
					<td>getPosition</td>
					<td>返回当前垂直滚动条的距离，通过 $refs 调用此方法</td>
					<td>function</td>
					<td></td>
				</tr>
				<tr>
					<td>scrollto(y,ms)</td>
					<td>ms 时间内滚动条滚动到 y，通过 $refs 调用此方法</td>
					<td>function</td>
					<td>y=0</td>
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
			length:20
		}
	},
	methods:{
		refresh(reset){
			setTimeout(()=>{
        this.$jcToast('刷新成功')
				this.length = 20
        reset()
			},1000)
		},
    infinite(done){
      this.$jcToast('触发上拉加载')
			setTimeout(()=>{
        this.length += 20
        done()
			},1000)
		}
	},
	name: "Slide"
}
</script>

<style lang="less" scoped>
.slide-wrap{
	width: 80%;
	margin: auto;
	height: 300px;
	background-color: white;
	line-height: 1.5rem;
	text-align: center;
}
</style>
