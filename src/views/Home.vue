<template>
  <div class="home">
    <div class="logo">
      <img src="../../public/logo.svg">
    </div>
    <div class="menu">
      <ul>
        <router-link to="/confirm">
          <li class="my-1px-b">
            IOS风格 “确认/取消” 对话框
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/slide">
          <li class="my-1px-b">
            上拉加载、下拉刷新
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/mask">
          <li class="my-1px-b">
            遮罩弹出层
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/tabs">
          <li class="my-1px-b">
            tab 栏
            <i class="iconfont icon-you"></i>
          </li>
        </router-link>
        <router-link to="/page">
          <li>
            虚拟的多个页面横向排列
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
