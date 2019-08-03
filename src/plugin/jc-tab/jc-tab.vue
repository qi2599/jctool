<template>
	<div class="jc-tab" :class="tabClass?tabClass:'line-height'" ref="jcTab">
    <span v-if="bar" class="jc-tab-bar" :style="style"></span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        barLeft: 0,
        barWidth: 0
      }
    },
    props:{
      activeColor:{
        type: String,
        default: '#00bdff'
      },
      bar: {
        type: [String,Boolean],
        default: 'bottom'
      },
      value: {
        type: Number,
        required: true
      },
      minWidth:{
        type: Number,
        default: 25
      },
      tabClass: String,
      itemClass: String,
      activeClass: String
    },
    computed:{
      style(){
        return {
          backgroundColor: this.activeColor,
          left: this.barLeft + 'px',
          width: this.barWidth + 'px',
          bottom: this.bar === 'bottom' ? '0':'auto',
          top: this.bar === 'top' ? '0':'auto'
        }
      }
    },
    methods:{
      toggleActive({index,width,left}){
        this.$emit('input', index)
        this.barWidth = width
        this.barLeft = left
        this.$children.forEach(item => {
          item.currentSelected = false
          if (item.currentIndex === this.value) item.currentSelected = true
        })
      },
      updataActive(){
        if(this.value > this.$children.length-1 || this.value < 0) return
        let target = this.$children[this.value].$el
        this.barWidth = target.offsetWidth
        this.barLeft = target.offsetLeft
        if(this.barLeft+this.barWidth > this.$refs.jcTab.offsetWidth) this.$refs.jcTab.scrollTo(this.barLeft,0)
        else this.$refs.jcTab.scrollTo(0,0)
        this.$children.forEach((item,i) => {
          item.currentIndex = i
          item.currentSelected = false
          if (item.currentIndex === this.value) item.currentSelected = true
        })
      }
    },
    watch:{
      value(val){
        if(val>this.$children.length-1) this.$emit('input', 0)
        if(val<0) this.$emit('input', this.$children.length-1)
        this.updataActive()
      }
    },
    mounted(){
      this.updataActive()
      this.$children.forEach(item => item.$on('toggleActive',this.toggleActive))
    },
    name: "jc-tab"
  }
</script>

<style scoped>
	.jc-tab {
		position: relative;
		display: flex;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		text-align: center;
	}
	.jc-tab .jc-tab-bar {
		position: absolute;
		height: 2px;
		transition: left 0.5s, width 0.5s;
	}
	.line-height {
		line-height: 40px;
	}
</style>
