<template>
  <div id="jc-mask"
       v-show="close_mask"
       :style="'background-color: rgba(0,0,0,'+ opacity +')'"
       :class="{'jc-mask_in':mask_in,'jc-flex-center':flex}"
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
        close_mask: false,
        mask_in: false,
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
      maskState:{
        type: Boolean,
        required: true
      }
    },
    watch:{
      maskState(nowVal){
        if(nowVal){
          this.close_mask = true
          setTimeout(()=>{
            this.mask_in = true
          },30)
        }else {
          this.mask_in = false
          setTimeout(()=>{
            this.close_mask = false
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
      this.close_mask = this.maskState
      this.mask_in = this.maskState
    },
    name: "jc-mask"
  }
</script>


<style scoped>
  #jc-mask{
    position: fixed;
    z-index: 99;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s;
  }
  #jc-mask.jc-flex-center{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #jc-mask.jc-mask_in{
    opacity: 1;
  }
</style>
