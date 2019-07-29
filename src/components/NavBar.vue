<template>
	<div id="nav-bar">
		<div class="head">
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
			height: 90/@rem;
			line-height: 90/@rem;
			color: @c2;
			text-align: center;
			i{
				position: absolute;
				left: 30/@rem;
				font-size: 1.5rem;
			}
		}
		.box{
		
		}
	}
</style>
