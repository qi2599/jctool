<template>
	<div>
		<navbar :title="'tab 栏'"></navbar>
		<titler>基本</titler>
		<jc-tab v-model="tabIndex">
			<jc-tab-item >全部订单</jc-tab-item>
			<jc-tab-item >提交订单</jc-tab-item>
			<jc-tab-item >已发货订单</jc-tab-item>
			<jc-tab-item >已完成订单</jc-tab-item>
		</jc-tab>
		<titler>出现滚动条</titler>
		<jc-tab  v-model="tabIndex3" :active-color="'#8cc63f'" :minWidth="22">
			<jc-tab-item >亚洲</jc-tab-item>
			<jc-tab-item >欧洲</jc-tab-item>
			<jc-tab-item >非洲</jc-tab-item>
			<jc-tab-item >大洋洲</jc-tab-item>
			<jc-tab-item >北美洲</jc-tab-item>
			<jc-tab-item >南美洲</jc-tab-item>
		</jc-tab>
		<titler>自定义宽度</titler>
		<jc-tab  v-model="tabIndex2" :active-color="'#fcc800'" :minWidth="20">
			<jc-tab-item >首页</jc-tab-item>
			<jc-tab-item >产品</jc-tab-item>
			<jc-tab-item >活动</jc-tab-item>
			<jc-tab-item >分类</jc-tab-item>
			<jc-tab-item >联系我们</jc-tab-item>
		</jc-tab>
		<titler>自定义样式</titler>
		<jc-tab  v-model="tabIndex4" :active-color="'#f7b838'" :minWidth="22" :tabClass="'my-tab'" :activeClass="'my-active'">
			<jc-tab-item >苹果</jc-tab-item>
			<jc-tab-item >橘子</jc-tab-item>
			<jc-tab-item >哈密瓜</jc-tab-item>
			<jc-tab-item >山竹</jc-tab-item>
			<jc-tab-item >西瓜</jc-tab-item>
			<jc-tab-item >火龙果</jc-tab-item>
		</jc-tab>
		<titler>使用方法</titler>
		<div>
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">jc-tab</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"tabIndex"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span>&gt;</span>全部订单<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span>&gt;</span>提交订单<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span>&gt;</span>已发货订单<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span>&gt;</span>已完成订单<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">jc-tab-item</span>&gt;</span>待评价订单<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">jc-tab</span>&gt;</span>
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
					<td>* v-model</td>
					<td>当前选中的 tab-item 下标</td>
					<td>number</td>
					<td></td>
				</tr>
				<tr>
					<td>bar</td>
					<td>是否显示 bar 及位置 ‘top’ / 'bottom'</td>
					<td>boolean / string</td>
					<td>'bottom'</td>
				</tr>
				<tr>
					<td>activeColor</td>
					<td>当前选中的 tab-item 字体颜色及 bar 的颜色</td>
					<td>string</td>
					<td>'#ffcd13'</td>
				</tr>
				<tr>
					<td>minWidth</td>
					<td>tab-item 的最小宽度，最大值为100</td>
					<td>number</td>
					<td>25</td>
				</tr>
				<tr>
					<td>tabClass</td>
					<td>tab 栏的 class 类名</td>
					<td>string</td>
					<td></td>
				</tr>
				<tr>
					<td>itemClass</td>
					<td>tab-item 的 class 类名</td>
					<td>string</td>
					<td></td>
				</tr>
				<tr>
					<td>activeClass</td>
					<td>当前选中的 class 类名</td>
					<td>string</td>
					<td></td>
				</tr>
				<tr>
					<td><strong>tab-item 参数</strong></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>itemClick</td>
					<td>点击 tab-item 触发</td>
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
        tabIndex:0,
				tabIndex2:1,
				tabIndex3:2,
				tabIndex4:0,
			}
		}
  }
</script>

<style lang="less" scoped>
	h1{
		margin: 40px 10px 10px;
		font-size: 1.5rem;
		color: #b2b2b2;
	}
	.my-tab{
		line-height: 40px;
		background-color: #00294c;
		color: #68e1ff;
	}
	.my-active{
		background-color: #00385f;
	}
</style>
