<template>
	<div class="home">
		<div class="logo">
			<img src="../../public/logo.svg">
		</div>
		<div class="para">
			<p style="text-indent:2em;">一套实用、精致的个人组件库，组件以封装功能为主，以使用简约、灵活为设计理念。</p>
		</div>
		<div class="menu">
			<ul>
				<router-link to="/howUse">
					<li class="my-1px-b">
						如何安装
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/banner">
					<li class="my-1px-b">
						图片轮播（jc-banner）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/notice">
					<li class="my-1px-b">
						公告栏（jc-notice）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/confirm">
					<li class="my-1px-b">
						IOS风格对话框（jc-confirm）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/slide">
					<li class="my-1px-b">
						上拉加载、下拉刷新（jc-slide）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/popup">
					<li class="my-1px-b">
						弹出层（jc-popup）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/tabs">
					<li class="my-1px-b">
						tab 栏（jc-tab）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/page">
					<li class="my-1px-b">
						页面横向排列（jc-page）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/lazyload">
					<li class="my-1px-b">
						图片懒加载
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
				<router-link to="/toast">
					<li class="my-1px-b">
						轻提示（jc-toast）
						<i class="iconfont icon-you"></i>
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				tabIndex:0,
				sele: ''
			}
		},
		methods:{
			isMobile(){
				let mobileReg = /iPhone|iPad|iPod|Android|UCWEB|huawei|xiaomi|oppo|vivo|meizu|Samsung|mobile/i
				if(mobileReg.test(navigator.userAgent)){
					this.$jcToast({time:0})
				}else {
					this.$jcToast({text:'请切换至移动端浏览此网站',time:5000,icon:'warning'})
				}
			}
		},
		mounted() {
			//this.isMobile()
		}
	}
</script>

<style lang="less" scoped>
	.home{
		.logo{
			height: 220/@rem;
			padding: 100/@rem 0;
			text-align: center;
			img{
				height: 220/@rem;
			}
		}
		.menu{
			margin: 10px;
			background-color: white;
			ul{
				li{
					line-height: 3.5rem;
					padding: 0 30/@rem;
					transition: background-color 0.2s;
					&:active{
						background-color: #c7c7c7;
					}
					i{
						float: right;
					}
				}
			}
			
		}
	}
</style>
