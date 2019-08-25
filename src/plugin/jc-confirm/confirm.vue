<template>
  <div id="confirm" v-show="isShow" :class="{show_confirm: toggleShow}" @click.self="cloce" @touchmove.prevent>
    <div class="jc-conwrap" :class="{'show-jc-conwrap': toggleShow}">
      <div class="jc-concontent">
        <div class="jc-confirm">{{text}}</div>
        <div class='jc-confirm-btn' @click="onConfirm" v-html="confirmText"></div>
      </div>
      <div class='jc-cancel' @click="onCancel" v-html="cancelText"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow: false,
        toggleShow: false,
        text: '',
        confirmText: '确定',
        cancelText: '取消'
      }
    },
    methods:{
      onCancel(){
        this.$emit('on-cancel')
        this.cloce()
      },
      onConfirm(){
        this.$emit('on-confirm')
        this.cloce()
      },
      cloce(){
        this.toggleShow = false
        setTimeout(()=>{
          this.isShow = false
        },200)
      }
    }
  }
</script>

<style scoped>
  #confirm {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.2s;
  }
  #confirm.show_confirm {
    background-color: rgba(0, 0, 0, 0.5);
  }
  #confirm .jc-conwrap {
    position: fixed;
    width: 94%;
    left: 3%;
    bottom: -160px;
    text-align: center;
    opacity: 0.95;
    transition: bottom 0.2s;
  }
  #confirm .jc-conwrap.show-jc-conwrap {
    bottom: 5%;
  }
  #confirm .jc-conwrap .jc-concontent {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 12px;
    overflow: hidden;
  }
  #confirm .jc-conwrap .jc-concontent .jc-confirm {
    height: 50px;
    line-height: 50px;
    color: #8a8a8a;
  }
  #confirm .jc-conwrap .jc-concontent .jc-confirm-btn {
    line-height: 50px;
    font-size: 20px;
    color: #ff0b00;
    transition: background-color 0.2s;
  }
  #confirm .jc-conwrap .jc-concontent .jc-confirm-btn:before {
    content: '';
    display: block;
    height: 1px;
    background-color: #c7c7c7;
  }
  #confirm .jc-conwrap .jc-concontent .jc-confirm-btn:active {
    background: #cccccc;
  }
  #confirm .jc-conwrap .jc-cancel {
    background-color: white;
    line-height: 50px;
    font-size: 20px;
    color: #0065ff;
    border-radius: 12px;
    transition: background-color 0.2s;
  }
  #confirm .jc-conwrap .jc-cancel:active {
    background-color: #cccccc;
  }
  @media only screen and (-webkit-device-pixel-ratio: 2) {
    #confirm .jc-conwrap .jc-concontent div:before {
      transform: scaleY(0.5);
    }
  }
  @media only screen and (-webkit-device-pixel-ratio: 3) {
    #confirm .jc-conwrap .jc-concontent div:before {
      transform: scaleY(0.33333333);
    }
  }

</style>
