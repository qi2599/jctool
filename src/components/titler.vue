<template>
	<div class="titler">
		<h1>
			<slot></slot>
		</h1>
	</div>
</template>

<script>
  export default {
    name: "titler"
  }
</script>


<style lang="less" scoped>
	.titler{
		margin: auto;
		background-color: white;
		border-bottom: 2px solid #eaeaea;
		h1{
			padding-left: 10px;
			line-height: 2.5rem;
			margin-top: 2.5rem;
			color: #adadad;
		}
	}

</style>
