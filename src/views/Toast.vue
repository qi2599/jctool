<template>
	<div>
		<navbar :title="'轻提示'"></navbar>
		<titler>演示</titler>
		<div>
			<mybtn @click.native="$jcToast({text:'这里是提示文字'})">只显示文字</mybtn>
			<mybtn @click.native="$jcToast({text:'这里是提示文字',icon:'success'})">带图标</mybtn>
		</div>
		<titler>如何使用</titler>
		<div>
			<pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">this</span>.$jcToast({
    <span class="hljs-attr">text</span>:<span class="hljs-string">'这里是提示文字'</span>,
    <span class="hljs-attr">icon</span>:<span class="hljs-string">'success'</span>,
    <span class="hljs-attr">time</span>: <span class="hljs-number">1000</span>
})
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
					<td>text</td>
					<td>提示文字</td>
					<td>string</td>
					<td></td>
				</tr>
				<tr>
					<td>icon</td>
					<td>图标，可选值：'success'，'fail'，'warning'</td>
					<td>string</td>
					<td></td>
				</tr>
				<tr>
					<td>time</td>
					<td>显示时长</td>
					<td>number</td>
					<td>2000</td>
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
    name: "Toast"
  }
</script>

<style lang="less" scoped>

</style>
