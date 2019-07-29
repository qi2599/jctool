<template>
	<div class="slide">
		<navbar :title="'上拉加载下拉刷新'"></navbar>
		<div class="box1 my-1px-tb">
			<jc-slide :on_refresh="refresh">
				<div class="content">
					<div v-for="(item,index) in length" :key="index">{{item}}</div>
				</div>
			</jc-slide>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			length:20
		}
	},
	methods:{
		refresh(reset){
			setTimeout(()=>{
        this.$jcToast('刷新成功')
				this.length = 20
        reset()
			},1000)
		},
    infinite(done){
      this.$jcToast('触发上拉加载')
			setTimeout(()=>{
        this.length += 20
        done()
			},1000)
		}
	},
	name: "Slide"
}
</script>

<style lang="less" scoped>
.slide{
	.box1{
		width: 95%;
		margin: 0 auto;
		.content{
			text-align: center;
			line-height: 1.5rem;
			background-color: #cdf1ff;
		}
	}
}
</style>
