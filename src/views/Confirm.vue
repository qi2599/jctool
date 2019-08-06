<template>
	<div>
		<navbar :title="'IOS风格对话框'"></navbar>
		<titler>演示</titler>
		<mybtn @click.native="showConfirm">弹出对话框</mybtn>
		<mybtn @click.native="setConfirm">自定义按钮文字</mybtn>
		<titler>如何使用</titler>
		<div>
			<pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">this</span>.$jcConfirm.show ({
    <span class="hljs-attr">text</span>: <span class="hljs-string">'确定要这样做吗？'</span>，
    onConfirm: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'确定的回调'</span>)
    },
    <span class="hljs-attr">onCancel</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'取消的回调'</span>)
    }
})
</code></pre>
			<titler>API</titler>
		</div>
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
					<td>''</td>
				</tr>
				<tr>
					<td>confirmText</td>
					<td>Confirm 按钮文字</td>
					<td>string</td>
					<td>确定</td>
				</tr>
				<tr>
					<td>cancelText</td>
					<td>cancel 按钮文字</td>
					<td>string</td>
					<td>取消</td>
				</tr>
				<tr>
					<td>onConfirm</td>
					<td>Confirm 的回调</td>
					<td>function</td>
					<td></td>
				</tr>
				<tr>
					<td>onCancel</td>
					<td>Cancel 的回调</td>
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
  methods:{
    showConfirm(){
      this.$jcConfirm.show({
				text:'这里是提示文字',
        onConfirm: () => {
          this.$jcToast({text:'点击了确定'})
        },
        onCancel: () => {
          this.$jcToast({text:'点击了取消'})
        }
			})
		},
    setConfirm(){
      this.$jcConfirm.show({
        text:'确定要这样做吗？',
        confirmText:'要的',
        cancelText:'不要',
        onConfirm: () => {
          this.$jcToast({text:'点击了要的'})
        },
        onCancel: () => {
          this.$jcToast({text:'点击了不要'})
        }
      })
    }
	},
  mounted(){
    window.scrollTo(0,0)
  },
	name: "Confirm"
  }
</script>

<style lang="less" scoped>

</style>
