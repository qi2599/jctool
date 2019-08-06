<template>
	<div class="jc-notice">
		<div class="iconfont icon-notice" v-if="icon">&#xe650;</div>
		<div class="notice-box" ref="noticeWrap">
			<div class="wrap" ref="textWrap" :style="`animation-duration:${duration}s`">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data(){
      return {
        wrapWidth: 0,
				textWidth: 0,
				duration: 0,
			}
		},
		props:{
      speed:{
        type: Number,
				default: 8
			},
      icon:{
        type: Boolean,
				default: true
			}
		},
		computed:{
  
		},
		methods:{
  
		},
		mounted(){
      this.wrapWidth = this.$refs.noticeWrap.offsetWidth
      this.textWidth = this.$refs.textWrap.offsetWidth
			if(this.wrapWidth < this.textWidth){
        this.duration = Math.round(this.textWidth/this.wrapWidth*this.speed)
			}else {
        this.duration = 0
			}
    },
    name: "jc-notice"
  }
</script>

<style scoped>
	@import "../common/iconfont/iconfont.css";
	.jc-notice{
		display: flex;
		align-items: center;
	}
	.jc-notice .notice-box{
		flex-grow:1;
		overflow: hidden;
	}
	.jc-notice .notice-box:after{
		content: '';
		display: block;
		clear: both;
	}
	.jc-notice .icon-notice{
		flex-shrink: 0;
		padding: 0 10px;
	}
	.jc-notice .notice-box .wrap{
		float: left;
		white-space: nowrap;
		animation: move linear infinite;
	}
	@keyframes move {
		from{
			transform: translate(500px,0);
		}
		to{
			transform: translate(-100%,0);
		}
	}
</style>
