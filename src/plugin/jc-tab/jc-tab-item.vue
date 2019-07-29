<template>
  <div :class="{[$parent.itemClass]:$parent.itemClass, [$parent.activeClass]:currentSelected}"
       :style="`min-width:${$parent.minWidth}%;color:${currentSelected?$parent.activeColor:''};flex-grow:1;`"
       @click="toggleActive"
       ref="tabItem">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        currentIndex: 0,
        currentSelected: false,
      }
    },
    methods:{
      toggleActive(){
        let left = this.$refs.tabItem.offsetLeft
        let width = this.$refs.tabItem.offsetWidth
        this.$emit('toggleActive',{index:this.currentIndex,left,width})
      }
    },
    watch:{
      currentSelected(val){
        if(val) this.$emit('itemClick',this.currentIndex)
      }
    },
    name: "jc-tab-item"
  }
</script>

<style lang="less" scoped>

</style>
