<template>
  <div id="appContent">
        <mt-header fixed title="Vue CMS"></mt-header>
        <nav class="mui-bar mui-bar-tab">
          <router-link class="my-mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="my-mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
          </router-link>
          <router-link class="my-mui-tab-item" to="/shopcar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart" ><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
            <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="my-mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">查找</span>
          </router-link>
        </nav>
       <transition>
         <router-view></router-view>
       </transition>
  </div>

</template>

<script>

</script>

<style lang=less>
    #appContent {
      padding-top: 40px;
      padding-bottom: 50px;
      overflow-x: hidden;
      .v-enter {
            transform: translateX(100%);
            opacity: 0;
          }
      .v-leave-to {
      position: absolute;
      transform: translateX(-100%);
      opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
      transition: all 0.6s ease;
    }
    mt-header{
      z-index:999;
    }
  }
  
/* 该类名，解决 tabbar 点击无法切换的问题 */
.mui-bar-tab .my-mui-tab-item.mui-active {
    color: #007aff;
}

.mui-bar-tab .my-mui-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .my-mui-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .my-mui-tab-item .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
   
</style>
