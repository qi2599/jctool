<template>
	<div
			id="jc-dialog"
			v-show="close_dialog"
			:style="'background-color: rgba(0,0,0,'+ opacity +')'"
			:class="{'jc-dialog_in':dialog_in,'jc-flex-center':flex}"
			@click.self="$emit('close')"
			@touchmove.prevent>
		<div :style="'transform: scale('+scale+')'" style="transition: transform 0.3s;">
			<slot/>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				close_dialog: false,
				dialog_in: false,
				scale: 1.5,
			}
		},
		props:{
			opacity:{
				type: Number,
				default: 0.5
			},
			flex:{
				type: Boolean,
				default: false,
			},
			dialogState:{
				type: Boolean,
				required: true
			}
		},
		watch:{
			dialogState(nowVal){
				if(nowVal){
					this.close_dialog = true
					setTimeout(()=>{
						this.dialog_in = true
					},30)
				}else {
					this.dialog_in = false
					setTimeout(()=>{
						this.close_dialog = false
					},300)
				}
				if(this.flex){
					if(nowVal){
						setTimeout(()=>{
							this.scale = 1
						},30)
					}else {
						this.scale = 0.7
						setTimeout(()=>{
							this.scale = 1.5
						},300)
					}
				}
			}
		},
		created(){
			this.close_dialog = this.dialogState
			this.dialog_in = this.dialogState
		},
		name: "jc-dialog"
	}
</script>


<style scoped>
	#jc-dialog{
		position: fixed;
		z-index: 9999;
		bottom: 0;
		right: 0;
		top: 0;
		left: 0;
		opacity: 0;
		transition: opacity 0.3s;
	}
	#jc-dialog.jc-flex-center{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#jc-dialog.jc-dialog_in{
		opacity: 1;
	}
</style>
