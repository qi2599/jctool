<template>
	<div
		class="jc-banner"
		:style="`padding:${wrapPadding}px 0`"
		@touchstart="start"
		@touchmove="move"
		@touchend="end"
		ref="bannerWrap">
		<div class="jc-img-box" :style="style" ref="jcImgBox">
			<img
				:src="imgs[imgs.length-1]"
				:class="{'jc-active': active===imgs.length-1 && imgs.length !== 1}"
				:style="leftImg"
				@click="$emit('clickItem',imgs.length-1)">
			<img
				:class="{'jc-active':active===index}"
				:style="imgStyle"
				v-for="(item,index) in imgs"
				:src="item"
				:key="index"
				@load="getPadding"
				@click="$emit('clickItem',index)">
			<img
				:src="imgs[0]"
				:class="{'jc-active':active===0 && imgs.length !== 1}"
				:style="imgStyle"
				@click="$emit('clickItem',0)">
		</div>
		<div class="jc-dots" v-if="dots">
			<div
				v-for="(item,index) in imgs"
				:class="{dotsActive:active===index}"
				:style="{transition:`all ${duration}ms`,backgroundColor: active===index?activeColor:''}"
				:key="index">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				wrapWidth: 0,
				wrapPadding: 0,
				imgWidth: 0,
				imgBoxWidht: 0,
				isX: true,
				isFirst: true,
				timeId: 0,
				active: 0,
				distance: 0,
				translateDuration: 0,
				scaleDuration: 0,
				startPot: {},
				startElement: 0,
			}
		},
		props:{
			imgs: {
				type: Array,
				required: true
			},
			radius: {
				type: Number,
				default: 0
			},
			auto: {
				type: Number,
				default: 3
			},
			duration: {
				type: Number,
				default: 500
			},
			dots:{
				type: Boolean,
				default: true
			},
			activeColor:{
				type: String,
				default: '#3dd3ff'
			}
		},
		computed:{
			style(){
				return {
					transition: `transform ${this.translateDuration}ms`,
					transform: `translate(${this.distance}px,0)`,
					width: `${this.imgBoxWidht}px`
				}
			},
			imgStyle(){
				return {
					width: this.wrapWidth*0.8+'px',
					marginLeft: this.wrapWidth*0.08+'px',
					transition: `transform ${this.scaleDuration}ms`,
					borderRadius: this.radius+'px'
				}
			},
			leftImg(){
				return {
					width: this.wrapWidth*0.8+'px',
					marginLeft: this.wrapWidth*0.08+((this.wrapWidth-this.wrapWidth*0.96)/2)+'px',
					transition: `transform ${this.scaleDuration}ms`,
					borderRadius: this.radius+'px'
				}
			}
		},
		methods:{
			start(ev){
				this.isX = true
				this.isFirst = true
				clearInterval(this.timeId)
				this.translateDuration = 0
				ev = ev || event
				this.startPot = {x:ev.changedTouches[0].clientX, y:ev.changedTouches[0].clientY}
				this.startElement = this.distance
			},
			move(ev){
				if (!this.isX) return
				ev = ev || event
				if (ev.cancelable) ev.preventDefault();
				let nowPot = { x: ev.changedTouches[0].clientX - this.startPot.x, y: ev.changedTouches[0].clientY - this.startPot.y }
				if(this.isFirst){
					this.isFirst = false
					if(Math.abs(nowPot.y)> Math.abs(nowPot.x)){
						this.isX = false
						return
					}
				}
				this.distance = nowPot.x + this.startElement
			},
			end(ev){
				if (this.auto !==0 && this.imgs.length > 1) this.autoPlay()
				if (!this.isX) return
				ev = ev || event
				let nowPot = ev.changedTouches[0].clientX - this.startPot.x
				if(Math.abs(nowPot)>this.wrapWidth/8){
					if(nowPot>0) this.active--
					else if(nowPot<0) this.active++
				}
				this.jump(nowPot)
			},
			jump(nowPot){
				if(this.active < 0){
					this.active = this.imgs.length-1
					this.translateDuration = 0
					this.distance = -(this.active * this.imgWidth + 2*this.imgWidth-nowPot)
				}else if(this.active >= this.imgs.length){
					this.active = 0
					this.translateDuration = 0
					this.distance = nowPot
				}
				setTimeout(()=>{
					this.translateDuration = this.duration
					this.distance = -(this.active * this.imgWidth + this.imgWidth)
				},50)
			},
			autoPlay(){
				clearInterval(this.timeId)
				this.timeId = setInterval(()=>{
					this.active++
					this.jump(0)
				},this.auto*1000)
			},
			reset(){
				this.wrapWidth = this.$refs.bannerWrap.clientWidth
				setTimeout(()=>{
					this.wrapPadding = this.$refs.jcImgBox.offsetHeight*0.15/2
				},50)
				this.imgWidth = this.wrapWidth * 0.88
				this.distance = -(this.active * this.imgWidth + this.imgWidth)
				this.translateDuration = 0
				this.scaleDuration = this.duration
				this.imgBoxWidht = (this.imgs.length+2)*this.imgWidth+(this.wrapWidth-this.wrapWidth*0.96)/2
				if (this.auto !==0 && this.imgs.length > 1) this.autoPlay()
			},
			getPadding(ev){
				ev = ev || event
				if(this.wrapPadding < 1){
					this.wrapPadding = ev.target.offsetHeight*0.15/2
					this.$emit('imgLoad')
				}
			}
		},
		watch:{
			imgs(){
				this.reset()
			}
		},
		mounted(){
			this.reset()
			window.addEventListener('resize',this.reset)
		},
		activated(){
			this.reset()
		},
		beforeDestroy(){
			clearInterval(this.timeId)
			window.removeEventListener('resize',this.reset)
		},
		name: "jc-banner"
	}
</script>

<style scoped>
	.jc-banner{
		position: relative;
		overflow: hidden;
	}
	.jc-banner .jc-img-box:after{
		content: '';
		display: block;
		clear: both;
	}
	.jc-banner .jc-img-box img{
		float: left;
		display: block;
		margin: 0;
		padding: 0;
		min-height: 1px;
	}
	.jc-banner .jc-img-box .jc-active{
		transform: scale(1.15);
	}
	.jc-banner .jc-dots {
		position: absolute;
		z-index: 99;
		bottom: 8px;
		width: 100%;
		text-align: center;
	}
	.jc-banner .jc-dots div{
		display: inline-block;
		width: 5px;
		height: 5px;
		margin: 0 5px;
		border-radius: 5px;
		background-color: #ececec;
		opacity: 0.7;
	}
	.jc-banner .jc-dots .dotsActive{
		width: 15px;
	}
</style>
