<template>
  <div class="home">
    <div class="logo">
      <img src="../../public/logo.svg">
    </div>
    <div class="para">
      <p style="text-indent:2em;">joce-ui 为个人组件库，主要是因为网络上未发现有相似的组件，或者不能满足需求进而开发的一个 vue 组件库，所以 ”实用“ 和 ”唯一“ 是此组件库的特点。</p>
    </div>
    <div class="menu">
      <ul>
        <router-link to="/howUse">
          <li class="my-1px-b">
            如何安装
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/confirm">
          <li class="my-1px-b">
            IOS风格对话框（jc-confirm）
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/slide">
          <li class="my-1px-b">
            上拉加载、下拉刷新（jc-slide）
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/mask">
          <li class="my-1px-b">
            遮罩弹出层（jc-mask）
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/tabs">
          <li class="my-1px-b">
            tab 栏（jc-tab）
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/page">
          <li class="my-1px-b">
            页面横向排列（jc-page）
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/lazyload">
          <li class="my-1px-b">
            图片懒加载
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      tabIndex:0
    }
  },
  
}
</script>

<style lang="less" scoped>
  .home{
    .logo{
      height: 320/@rem;
      text-align: center;
      img{
        padding: 30px 0;
        width: 50%;
      }
    }
    .menu{
      margin: 10px;
      background-color: white;
      ul{
        li{
          line-height: 3.5rem;
          padding: 0 30/@rem;
          transition: background-color 0.2s;
          &:active{
            background-color: #c7c7c7;
          }
          i{
            float: right;
          }
        }
      }
      
    }
  }
</style>
