<template>
	<div class="jc-page">
    <div class="jc-page-wrap" ref="jcWrap"  :style="style" @touchstart="tStart" @touchmove="tMove" @touchend="tEnd" @transitionend="duration = 0">
      <div class="jc-page-left" :style="`width:${pageWidth}px;`">
        <div v-if="loading">
          <div v-show="leftLoading || loop" class="jc-page-lodding" :style="`width:${pageWidth}px;`">
            <img src="../common/loading.svg">
          </div>
        </div>
        <div v-show="leftLoading || loop">
          <slot name="left" />
        </div>
      </div>
      <div class="jc-page-middle" :style="`width:${pageWidth}px;`">
        <slot></slot>
      </div>
      <div class="jc-page-right" :style="`width:${pageWidth}px;`">
        <div v-if="loading">
          <div v-show="rightLoading || loop" class="jc-page-lodding" :style="`width:${pageWidth}px;`">
            <img src="../common/loading.svg">
          </div>
        </div>
        <div v-show="rightLoading || loop">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        leftLoading: true,
        rightLoading: true,
        pageWidth: 0,
        startDistance: {},
        moveDistance: 0,
        nowPot: 0,
        elementDistance: '',
        duration: 0,
        isX: true,
        isFirst: true
      }
    },
    props:{
      value:{
        type: Number,
        required: true
      },
      pageLength: {
        type: Number,
        required: true
      },
      loop:{
        type: Boolean,
        default: false
      },
      loading:{
        type: Boolean,
        default: true
      }
    },
    computed:{
      style(){
        return {
          transition: `transform ${this.duration}ms`,
          transform: `translate3d(${this.moveDistance}px, 0, 0)`
        }
      }
    },
    methods:{
      done(){
        this.jump(0)
        if(this.value===0 ){
          this.leftLoading=false
        }else if(this.value===this.pageLength-1){
          this.rightLoading=false
        } else {
          this.leftLoading=true
          this.rightLoading=true
        }
      },
      jump(pageState){
        this.duration = 500
        if(pageState === -1) this.moveDistance = 0
        else if(pageState === 0){
          this.duration = 0
          this.moveDistance = -this.pageWidth
        }
        else if(pageState === 1) this.moveDistance = -(this.pageWidth*2)
      },
      tStart(e){
        let str = this.$refs.jcWrap.style.transform
        let first = str.indexOf('(')
        let last = str.indexOf('px')
        this.elementDistance = parseFloat(str.slice(first+1,last))
        if(this.elementDistance === 0 || this.elementDistance === -(2*this.pageWidth)) return
        e = e || event
        this.isX = true
        this.isFirst = true
        
        let ctouch = e.changedTouches[0]
        this.startDistance.x = ctouch.clientX
        this.startDistance.y = ctouch.clientY
        this.duration = 0
      },
      tMove(e){
        if(this.elementDistance === 0 || this.elementDistance === -(2*this.pageWidth)) return
        if(!this.isX) return
        e = e || event
        let ctouch = e.changedTouches[0]
        this.nowPot = ctouch.clientX-this.startDistance.x
        let nowPotY = ctouch.clientY-this.startDistance.y
        if(this.isFirst){
          this.isFirst = false
          if(Math.abs(nowPotY)> Math.abs(this.nowPot)){
            this.isX = false
            return
          }
        }
        this.moveDistance = this.elementDistance + this.nowPot
        e.preventDefault()
      },
      tEnd(){
        if(this.elementDistance === 0 || this.elementDistance === -(2*this.pageWidth)) return
        if(!this.isX) return
        let { pageLength, value, nowPot, pageWidth } = this
        this.duration = 500
        if(!this.loop || this.pageLength===2){
          if(value === 0){
            if(nowPot > 0){
              this.moveDistance = -pageWidth
              return;
            }
          }
          if(value === pageLength-1){
            if(nowPot < 0){
              this.moveDistance = -pageWidth
              return;
            }
          }
        }
        
        if(Math.abs(nowPot) > pageWidth*0.3){
          if(nowPot > 0){
            if(value > 0) this.$emit('input',value-1)
            else if(value === 0) this.$emit('input',pageLength-1)
            this.moveDistance = 0
          } else if(nowPot < 0){
            if(value < pageLength-1) this.$emit('input',value+1)
            else if(value === pageLength-1) this.$emit('input',0)
            this.moveDistance = -(2*pageWidth)
          }
        }else {
          this.moveDistance = -pageWidth
        }
      }
    },
    watch:{
      value(val,old){
        this.rightLoading=true
        this.leftLoading=true
        if(this.pageLength > 2 && this.loop){
          if(val===0 && old===this.pageLength-1){
            this.jump(1)
            this.$emit('nextPage',this.done)
            return
          }
          if(val===this.pageLength-1 && old===0){
            this.jump(-1)
            this.$emit('previousPage',this.done)
            return
          }
        }
        if(val>old){
          this.jump(1)
          this.$emit('nextPage',this.done)
        } else {
          this.jump(-1)
          this.$emit('previousPage',this.done)
        }
      }
    },
    mounted(){
      this.pageWidth = Math.round(this.$refs.jcWrap.offsetWidth * 0.3333333)
      this.done()
    },
    name: "jc-page"
  }
</script>

<style lang="less" scoped>
  .jc-page{
    width: 100%;
    overflow-x: hidden;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    position: relative;
    .jc-page-wrap{
      display: flex;
      width: 300%;
      .jc-page-lodding{
        position: absolute;
        text-align: center;
        z-index: 99;
        img{
          height: 50px;
          padding: 30px;
        }
      }
    }
  }
</style>
