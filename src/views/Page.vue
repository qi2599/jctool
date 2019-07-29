<template>
	<div>
		<navbar :title="'虚拟多个页面横向排列'"></navbar>
		<div>
			<jc-tab v-model="tabIndex" :active-color="'#f7b838'" :tabClass="'my-tab'" :activeClass="'my-active'">
				<jc-tab-item >使用说明</jc-tab-item>
				<jc-tab-item >参数 API</jc-tab-item>
				<jc-tab-item >代码</jc-tab-item>
			</jc-tab>
		</div>
		<div class="page-box">
			<jc-page :pageLength="3" @nextPage="nextPage" @previousPage="previousPage" v-model="tabIndex">
				<div slot="left" class="page-left"></div>
				<div class="content">
					<Page-content :index="pageIndex"></Page-content>
				</div>
				<div slot="right" class="page-right"></div>
			</jc-page>
		</div>
	</div>
</template>

	<script>
	import content from '../components/Page-content'
	export default {
		data(){
			return {
				tabIndex:0,
				pageIndex:0,
			}
		},
		methods:{
			nextPage(done){
				setTimeout(()=>{
					done()
					this.pageIndex = this.tabIndex
				},500)
			},
			previousPage(done){
				setTimeout(()=>{
					done()
					this.pageIndex = this.tabIndex
				},500)
			}
		},
		components:{
			[content.name]: content
		}
	}
</script>

<style lang="less" scoped>
	.my-tab{
		line-height: 45px;
		background-color: #00294c;
		color: #68e1ff;
	}
	.my-active{
		background-color: #00385f;
	}
	.page-box{
		.content, .page-left, .page-right{
			height: 78vh;
			margin: 10px;
			background-color: white;
			overflow: auto;
			-webkit-overflow-scrolling: touch;
		}
	}
</style>
