<template>
	<div
		class="jc-toast"
		v-show="isShow"
		:style="`transform: scale(${scale});opacity:${opacity};`">
		<span class="text" v-html="text"></span>
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
			}
		}
  }
</script>

<style lang="less" scoped>
.jc-toast{
	position: fixed;
	top: 35%;
	z-index: 9999;
	margin: auto;
	left: 0;
	right: 0;
	text-align: center;
	transition: transform 0.2s, opacity 0.2s;
	.text{
		padding: 10px 15px;
		border-radius: 6px;
		line-height: 40px;
		color: white;
		background-color: rgba(0,0,0,0.7);
	}
}
</style>
