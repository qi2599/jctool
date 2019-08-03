<template>
	<div id="nav-bar">
		<div class="head my-1px-b">
			<i class="iconfont icon-arrow-left" @click="goBack"></i>
			<span v-html="title"></span>
		</div>
		<div class="box"></div>
	</div>
</template>

<script>
  export default {
    props:{
      title: String
		},
		methods:{
      goBack(){
        this.$router.go(-1)
			}
		},
    name: "nav-bar"
  }
</script>

<style lang="less" scoped>
	#nav-bar{
		.head{
			position: fixed;
			width: 100%;
			z-index: 9;
			top: 0;
			height: 100/@rem;
			line-height: 100/@rem;
			color: @c2;
			text-align: center;
			background-color: white;
			i{
				position: absolute;
				left: 30/@rem;
				font-size: 1.5rem;
			}
		}
		.box{
			height: 100/@rem;
		}
	}
</style>
