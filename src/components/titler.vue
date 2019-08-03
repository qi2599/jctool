<template>
	<div class="titler" :style="`margin:${top}px auto 10px;`">
		<h1>
			<slot></slot>
		</h1>
	</div>
</template>

<script>
  export default {
    props:{
      top:{
        type: Number,
				default: 30
			}
		},
    name: "titler"
  }
</script>


<style lang="less" scoped>
	.titler{
		background-color: white;
		border-bottom: 2px solid #eaeaea;
		h1{
			padding-left: 10px;
			line-height: 2.8rem;
			font-size: 1.2rem;
			color: #005b9c;
			letter-spacing: 1px;
		}
	}

</style>
