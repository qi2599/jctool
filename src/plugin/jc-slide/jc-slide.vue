<template>
  <div class="inf_wrap" ref="inf_wrap">
    <div v-if="showState===0"><slot/></div>
    <div v-if="showState===1" @touchstart="start" @touchmove="move" @touchend="end">
      <div :style="style" ref="content" @transitionend="duration = 0">
        <div class="refresh">
          <div v-if="moveState < 2">{{ moveState === 0 ? '下拉刷新...' : '松开刷新...' }}</div>
          <img v-else class="inf_img" src="../common/loading.svg">
        </div>
        <slot/>
        <div>
          <p v-if="noLoad" class="no_load" v-html="text"></p>
          <img v-else class="inf_img" src="../common/loading.svg">
        </div>
      </div>
    </div>
    <div v-if="showState===2">
      <slot/>
      <div>
        <p v-if="noLoad" class="no_load" v-html="text"></p>
        <img v-else class="inf_img" src="../common/loading.svg">
      </div>
    </div>
    <div v-if="showState===3" @touchstart="start" @touchmove="move" @touchend="end">
      <div :style="style" ref="content">
        <div class="refresh">
          <div v-if="moveState < 2">{{ moveState === 0 ? '下拉刷新...' : '松开刷新...' }}</div>
          <img v-else class="inf_img" src="../common/loading.svg">
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        showState: 0,
        moveState: 0,
        moveDistance: 0,
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
        default: 0
      }
    },
    computed:{
      style(){
        if(this.moveDistance !==0 ){
          return {
            transition: `transform ${this.duration}ms`,
            transform: `translate3d(0,${this.moveDistance}px, 0)`
          }
        }else if(this.duration !==0 ){
          return {
            transition: `transform ${this.duration}ms`
          }
        }else {
          return {}
        }
      }
    },
    methods:{
      // 下拉刷新
      start(ev){
        if(this.$refs.inf_wrap.scrollTop>0) return
        if(this.moveState !== 0) return
        ev = ev || event
        this.startY = ev.targetTouches[0].clientY
        this.duration = 0
      },
      move(ev){
        if(this.moveState === 2) return
        if(this.$refs.inf_wrap.scrollTop>0) return
        ev = ev || event
        let scale = 1
        let touch = ev.changedTouches[0]
        let nowY = touch.clientY
        let dis = nowY-this.startY
        if(dis<0) return;
        if(ev.cancelable) ev.preventDefault()
        if(dis>=40) scale *= 150/(110+dis)
        this.moveDistance = dis*scale/2
        if(this.moveDistance>40) this.moveState = 1
      },
      end(){
        if(this.$refs.inf_wrap.scrollTop>0) return
        if(this.moveState === 2) return
        this.duration = 500
        if(this.moveDistance<40){
          this.moveDistance=0
          return
        }else{
          this.on_refresh(this.reset)
          this.moveState = 2
        }
      },
      // 刷新成功后调用重置函数
      reset(){
        this.moveDistance = 0
        setTimeout(()=>{
          this.moveState = 0
        },500)
      },
      
      // 无限加载
      infinite(){
        let inf = this.$refs.inf_wrap
        inf.addEventListener('scroll', ()=>{
          if (!this.flag) return
          if(inf.scrollHeight-inf.offsetHeight <= inf.scrollTop+this.distance) {
            this.on_infinite(this.done)
            this.flag = false
          }
        })
      },
      done(val){
        if(val)this.noLoad = true
        else {
          this.noLoad = false
          this.flag = true
        }
      },
      getPosition(){
        return this.$refs.inf_wrap.scrollTop
      },
      jump(y,ms){
        let nowPot = this.$refs.inf_wrap.scrollTop
        let dis = Math.abs(nowPot-y)
        if(y>nowPot){
          // 向下滚
          let timeId = setInterval(() =>{
            nowPot += dis/(ms/20)
            if(nowPot >= y){
              nowPot = y
              clearInterval(timeId)
            }
            this.$refs.inf_wrap.scrollTop = nowPot
          } ,20)
        }else {
          // 向上滚
          let timeId = setInterval(() =>{
            nowPot -= dis/(ms/20)
            if(nowPot <= y){
              nowPot = y
              clearInterval(timeId)
            }
            this.$refs.inf_wrap.scrollTop = nowPot
          } ,20)
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
      },
    },
    created(){
      if(typeof this.on_infinite === 'function' && typeof this.on_refresh === 'function') this.showState = 1
      if(typeof this.on_infinite === 'function' && typeof this.on_refresh !== 'function') this.showState = 2
      if(typeof this.on_refresh === 'function' && typeof this.on_infinite !== 'function') this.showState = 3
    },
    mounted() {
      // 如果有 on_infinite 属性，则绑定 scroll 事件
      if(this.showState == 1 || this.showState === 2) this.infinite()
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
    height: 40px;
    width: 100%;
    text-align: center;
  }
  .inf_wrap .no_load {
    text-align: center;
    line-height: 40px;
    color: #b2b2b2;
    letter-spacing: 1px;
  }
</style>
