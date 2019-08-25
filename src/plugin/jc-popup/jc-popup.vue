<template>
	<div
			v-show="state || show"
			class="jc-popup"
			:class="{'jc-flex': position === 'middle'}"
			:style="`background-color: rgba(0,0,0,${opacity});opacity:${duration}`"
			@click.self="$emit('onOverlay')"
			@touchmove.prevent>
		<div v-if="position === 'middle'" class="jc-middle" :style="`transform: scale(${scale});`">
			<slot></slot>
		</div>
		<div v-else :class="'jc-'+position" :style="{[position]:distance}" ref="popupBox">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				state: false,
				distance: '-100%',
				duration: 0,
				scale: 1.3,
				boxHeight: 0,
				boxWidth: 0
			}
		},
		props:{
			show:{
				type: Boolean,
				required: true
			},
			position:{
				type: String,
				default: 'middle'
			},
      opacity:{
				type: Number,
				default: 0.5
			}
		},
		watch:{
			position(){
				this.distance = '-100%'
				this.boxHeight = this.boxWidth = 0
			},
			show(val){
				if(val){
					this.state = true
					setTimeout(()=>{
						this.distance = '0'
						this.duration = 1
						this.scale = 1
					},30)
					if(this.position !== 'middle'){
						this.$nextTick(()=>{
							this.boxHeight = this.$refs.popupBox.offsetHeight
							this.boxWidth = this.$refs.popupBox.offsetWidth
						})
					}
				}else {
					if(this.position === 'top' || this.position === 'bottom'){
						this.distance = -this.boxHeight+'px'
					}else if(this.position === 'left' || this.position === 'right'){
						this.distance = -this.boxWidth+'px'
					}
					this.duration = 0
					this.scale = 0.7
					setTimeout(()=>{
						this.state = false
						this.scale = 1.3
					},300)
				}
			}
		},
		name: "jc-popup"
	}
</script>


<style scoped>
	.jc-popup{
		position: fixed;
		z-index: 8888;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		transition: opacity 0.3s;
	}
	.jc-popup.jc-flex{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.jc-popup .jc-middle{
		transition: transform 0.3s;
	}
	.jc-popup .jc-left, .jc-popup .jc-right{
		position: absolute;
		top: 0;
		bottom: 0;
		transition: all 0.3s;
	}
	.jc-popup .jc-top, .jc-popup .jc-bottom{
		position: absolute;
		left: 0;
		right: 0;
		transition: all 0.3s;
	}
</style>
