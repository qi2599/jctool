<template>
	<div class="my-btn">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "my-btn"
  }
</script>

<style lang="less" scoped>
	.my-btn{
		width: 95%;
		margin: 10/@rem auto;
		background-color: white;
		text-align: center;
		line-height: 3rem;
		border: 1px solid #e8e8e8;
		border-radius: 10/@rem;
		transition: background-color 0.2s;
		&:active{
			background-color: #c7c7c7;
		}
	}
</style>
