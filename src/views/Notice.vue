<template>
	<div>
		<navbar :title="'公告栏'"></navbar>
		<div class="notice notice1">
			<jc-notice>
				实用、精致的移动端 VUE 组件库
			</jc-notice>
		</div>
		<div class="notice notice2">
			<jc-notice>
				公告栏 notice 以封装功能为主，样式尽可能让用户自行编写
			</jc-notice>
		</div>
		<div class="notice">
			<jc-notice :icon="false">
				joce-ui 为个人组件库，主要是因为网络上未发现有相似的组件，或者不能满足需求进而开发的一套 vue 组件库，所以“实用” 和 “唯一” 是此组件库的特点。
			</jc-notice>
		</div>
		<titler>如何使用</titler>
		<div>
			<pre class="hljs xml"><code class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">jc-notice</span>&gt;</span>
    实用、精致的移动端 VUE 组件库
<span class="hljs-tag">&lt;/<span class="hljs-name">jc-notice</span>&gt;</span>
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
					<td>speed</td>
					<td>文字滚动速度</td>
					<td>number</td>
					<td>8</td>
				</tr>
				<tr>
					<td>icon</td>
					<td>是否显示图标</td>
					<td>boolean</td>
					<td>true</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
  export default {
    mounted(){
      window.scrollTo(0,0)
		},
    name: "Notice"
  }
</script>

<style lang="less" scoped>
	.notice{
		line-height: 2rem;
		margin: 10px 0;
	}
	.notice1{
		line-height: 2rem;
		background-color: #fffee2;
		color: #ff8b00;
	}
	.notice2{
		color: #005b9c;
	}
</style>
