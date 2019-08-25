<template>
	<div class="inf_wrap" ref="inf_wrap">
		<div v-if="on_refresh" @touchstart="start" @touchmove="move" @touchend="end">
			<div :style="style" ref="content" >
				<div class="refresh">
					<div v-if="moveState < 2">{{ moveState === 0 ? '下拉刷新...' : '松开刷新...' }}</div>
					<img v-else class="inf_img" src="../common/loading.svg">
				</div>
				<slot/>
				<div v-if="on_infinite">
					<div v-if="noLoad" class="no_load" v-html="text"></div>
					<img v-else class="inf_img" src="../common/loading.svg">
				</div>
			</div>
		</div>
		<div v-else>
			<slot/>
			<div v-if="on_infinite">
				<div v-if="noLoad" class="no_load" v-html="text"></div>
				<img v-else class="inf_img" src="../common/loading.svg">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				moveState: 0,
				moveDistance: 0,
				touchDistance: 0,
				duration: 0,
				startY: 0,
				flag: true,
				noLoad: false,
			}
		},
		props:{
			on_infinite: Function,
			on_refresh: Function,
			text:{
				type: String,
				default: '没有更多数据'
			},
			distance:{
				type: Number,
				default: 1
			}
		},
		computed:{
			style(){
				return {
					transition: `transform ${this.duration}ms`,
					transform: `translate3d(0,${this.moveDistance}px, 0)`
				}
			}
		},
		methods:{
			// 下拉刷新
			start(ev){
				if(this.$refs.inf_wrap.scrollTop>0) return
				if(this.moveState === 2) return
				ev = ev || event
				this.startY = ev.targetTouches[0].clientY
				this.duration = 0
				this.moveState = 0
				this.touchDistance = 0
				this.moveDistance = 0
			},
			move(ev){
				if(this.$refs.inf_wrap.scrollTop>0) return
				if(this.moveState === 2) return
				ev = ev || event
				let scale = 1
				let dis = ev.changedTouches[0].clientY-this.startY
				if(dis<0) return;
				if(dis>=50) scale *= 150/(100+dis)
				if(ev.cancelable) {
					ev.preventDefault()
					this.touchDistance = this.moveDistance = dis*scale*0.5
				} else this.touchDistance = dis*scale/2
				if(this.touchDistance>50) this.moveState = 1
				else this.moveState = 0
			},
			end(ev){
				if(this.$refs.inf_wrap.scrollTop>0) return
				if(this.moveState === 2) return
				if(this.touchDistance<50){
					this.duration = 500
					this.moveDistance=0
				}else{
					ev = ev || event
					this.duration = 0
					this.moveState = 2
					if(!this.moveDistance) this.moveDistance = (ev.changedTouches[0].clientY - this.startY)*0.4
					this.on_refresh(this.reset)
				}
			},
			// 刷新成功后调用重置函数
			reset(){
				this.duration = 500
				this.moveDistance = 0
				setTimeout(()=>{ this.moveState = 0 },500)
			},
			
			// 无限加载
			infScroll(){
				if (!this.flag) return
				if(this.$refs.inf_wrap.scrollHeight-this.$refs.inf_wrap.offsetHeight <= this.$refs.inf_wrap.scrollTop+this.distance){
					this.on_infinite(this.done)
					this.flag = false
				}
			},
			infinite(){
				let inf = this.$refs.inf_wrap
				inf.removeEventListener('scroll', this.infScroll)
				inf.addEventListener('scroll', this.infScroll)
			},
			done(val){
				if(val)this.noLoad = true
				else {
					this.noLoad = false
					this.flag = true
				}
			},
			
			// 控制滚动
			getPosition(){
				return this.$refs.inf_wrap.scrollTop
			},
			jump(y,ms){
				y = y ? y : 0
				ms = ms ? ms : 0
				var node = this.$refs.inf_wrap
				var nowPot = node.pageYOffset || node.scrollTop || 0
				var dis = Math.abs(nowPot-y)
				var timeId
				node.addEventListener('touchstart',scrollStop)
				node.addEventListener('mousedown',scrollStop)
				node.addEventListener('mousewheel',scrollStop)
				node.addEventListener('DOMMouseScroll',scrollStop)
				if(y>nowPot){
					// 向下滚
					timeId = setInterval(function(){
						nowPot += dis/(ms/10)
						if(nowPot >= y) scrollStop()
						if(node.scrollTop !== undefined) node.scrollTop = nowPot
						node.scrollTo && node.scrollTo(0,nowPot)
					},10)
				}else if(y<nowPot){
					// 向上滚
					timeId = setInterval(function(){
						nowPot -= dis/(ms/10)
						if(nowPot <= y) scrollStop()
						if(node.scrollTop !== undefined) node.scrollTop = nowPot
						node.scrollTo && node.scrollTo(0,nowPot)
					},10)
				}
				function scrollStop(){
					nowPot = y
					clearInterval(timeId)
					node.removeEventListener('touchstart',scrollStop)
					node.removeEventListener('mousedown',scrollStop)
					node.removeEventListener('mousewheel',scrollStop)
					node.removeEventListener('DOMMouseScroll',scrollStop)
				}
			},
			scrollto(y=0,ms){
				if(ms){
					setTimeout(()=>{
						this.jump(y,ms)
					},0)
				}else {
					this.$refs.inf_wrap.scrollTop = y
				}
			}
		},
		mounted() {
			this.on_infinite && this.infinite()
		},
		watch:{
			on_infinite(){
				this.on_infinite && this.infinite()
			}
		},
		name: "jc-slide"
	}
</script>

<style scoped>
	.inf_wrap {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}
	.inf_wrap .refresh {
		text-align: center;
		line-height: 40px;
		height: 40px;
		margin-top: -40px;
		color: #b2b2b2;
		letter-spacing: 1px;
	}
	.inf_wrap .inf_img {
		display: block;
		margin: 0;
		padding: 0;
		height: 40px;
		width: 100%;
	}
	.inf_wrap .no_load {
		text-align: center;
		padding: 15px 0;
		font-size: 13px;
		color: #b2b2b2;
		letter-spacing: 1px;
	}
</style>
