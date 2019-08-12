<template>
	<div
		class="jc-toast"
		v-show="isShow"
		:style="`transform: scale(${scale});opacity:${opacity};`">
		<div class="jc-inner">
			<div class="iconfont" v-show="icon" v-html="iconfont"></div>
			<div v-html="text"></div>
		</div>
	</div>
</template>

<script>
  export default {
    data(){
      return{
        isShow: false,
				text: '',
        scale: 1.2,
        opacity: 0,
				icon: ''
			}
		},
		computed:{
      iconfont(){
        switch (this.icon) {
					case 'success': return '&#xe62e;'
					case 'fail': return  '&#xe6d7;'
					case 'warning': return '&#xe600;'
					default: return ''
				}
      }
		}
  }
</script>

<style scoped>
	.jc-toast {
		position: fixed;
		top: 35%;
		z-index: 9999;
		margin: auto;
		left: 0;
		right: 0;
		text-align: center;
		transition: transform 0.2s, opacity 0.2s;
	}
	.jc-toast .jc-inner {
		display: inline-block;
		padding: 12px 15px;
		border-radius: 6px;
		letter-spacing: 1px;
		color: white;
		background-color: rgba(0, 0, 0, 0.7);
	}
	.jc-toast .jc-inner .iconfont{
		font-size: 200%;
		padding-bottom: 15px;
	}
</style>
