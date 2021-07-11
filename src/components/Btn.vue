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
		width: 90%;
		margin: 20/@rem auto;
		background-color: white;
		text-align: center;
		color: #40a9ff;
		line-height: 2.5rem;
		border: 1px solid #40a9ff;
		border-radius: 10/@rem;
		transition: all 0.3s;
		&:active{
			background-color: #f2f2f2;
			color: #2359c5;
			border: 1px solid #2359c5;
			box-shadow: 0 0 0 5px rgba(64, 169, 255, 0.3);
		}
	}
</style>
