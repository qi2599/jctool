<template>
	<div class="jc-banner" @touchstart="start" @touchmove="move" @touchend="end" ref="bannerWrap">
		<div class="jc-img-box" :style="style">
			<img :src="imgs[imgs.length-2]" :style="leftImg">
			<img
				:src="imgs[imgs.length-1]"
				:class="{active:active=== -1}"
				:style="imgStyle"
				@transitionend="transitionend"
				@click="$emit('clickItem',imgs.length-1)">
			<img
				:class="{active:active===index}"
				:style="imgStyle"
				v-for="(item,index) in imgs"
				:src="item"
				:key="index"
				@click="$emit('clickItem',index)">
			<img
				:src="imgs[0]"
				:class="{active:active===imgs.length}"
				:style="imgStyle"
				@transitionend="transitionend"
				@click="$emit('clickItem',0)">
			<img :src="imgs[1]" :style="imgStyle">
		</div>
		<div class="jc-dots" v-if="dots">
			<div
				v-for="(item,index) in imgs"
				:class="{dotsActive:active===index}"
				:style="{transition:`all ${interval}ms`,backgroundColor: active===index?activeColor:''}"
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
				imgWidth: 0,
				isEnd: false,
				isX: true,
				isFirst: true,
				timeId: 0,
				active: 0,
				distance: 0,
				duration: 0,
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
      interval: {
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
					transition: `transform ${this.duration}ms`,
					transform: `translate3d(${this.distance}px,0,0)`,
				}
			},
			imgStyle(){
				return {
					width: this.wrapWidth*0.8+'px',
					marginLeft: this.wrapWidth*0.08+'px',
					transition: `transform ${this.duration}ms`,
					borderRadius: this.radius+'px'
				}
			},
			leftImg(){
				return {
					width: this.wrapWidth*0.8+'px',
					marginLeft: this.wrapWidth*0.08+((this.wrapWidth-this.wrapWidth*0.96)/2)+'px',
					transition: `transform ${this.duration}ms`,
					borderRadius: this.radius+'px'
				}
			}
		},
		methods:{
			start(ev){
				if (this.active < 0 || this.active >= this.imgs.length){
					this.isEnd = true
					return
				}
				this.isEnd = false
				this.isX = true
				this.isFirst = true
        clearInterval(this.timeId)
				this.duration = 0
				ev = ev || event
				let touch = ev.changedTouches[0]
				this.startPot = {x:touch.clientX, y:touch.clientY}
				this.startElement = this.distance
			},
			move(ev){
				if (this.isEnd || !this.isX) return
				ev = ev || event
				let touch = ev.changedTouches[0]
				if (ev.cancelable) ev.preventDefault();
				let nowPot = { x: touch.clientX - this.startPot.x, y: touch.clientY - this.startPot.y }
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
				if (this.auto !==0) this.autoPlay()
        this.duration = this.interval
				if (this.isEnd || !this.isX) return
				ev = ev || event
				let touch = ev.changedTouches[0]
				let nowPot = touch.clientX - this.startPot.x
				if(Math.abs(nowPot)>this.wrapWidth/8){
					if(nowPot>0){
						this.active--
					}else if(nowPot<0){
						this.active++
					}
				}
				this.distance = -(this.active * this.imgWidth + 2*this.imgWidth)
			},
			transitionend(){
        if(this.active < 0){
					this.active = this.imgs.length-1
					this.duration = 0
					this.distance = -(this.active * this.imgWidth + 2*this.imgWidth)
				}else if(this.active >= this.imgs.length){
					this.active = 0
					this.duration = 0
					this.distance = -(this.active * this.imgWidth + 2*this.imgWidth)
				}
			},
			autoPlay(){
				clearInterval(this.timeId)
				this.timeId = setInterval(()=>{
					this.active++
          this.duration = this.interval
          this.distance = -(this.active * this.imgWidth + 2*this.imgWidth)
          if(this.active > this.imgs.length) this.active = 0
				},this.auto*1000)
			}
		},
		mounted(){
			this.wrapWidth = this.$refs.bannerWrap.clientWidth
			this.imgWidth = this.wrapWidth * 0.88
			this.distance = -2*this.imgWidth
			if (this.auto !==0) this.autoPlay()
		},
		name: "jc-banner"
	}
</script>

<style scoped>
	.jc-banner{
		position: relative;
		overflow: hidden;
		padding: 3% 0;
	}
	.jc-banner .jc-img-box{
		width: 20000px;
	}
	.jc-banner .jc-img-box img{
		float: left;
	}
	.jc-banner .jc-img-box .active{
		transform: scale(1.15);
	}
	.jc-banner .jc-dots {
		position: absolute;
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
