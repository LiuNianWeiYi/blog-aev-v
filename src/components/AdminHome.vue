<template>
  <div>
    <admin-header></admin-header>
    <div class="sidebar">
      <admin-list></admin-list>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AdminHeader from '@/components/AdminHeader'
  import AdminList from '@/components/AdminList'

  export default {
    name: 'AdminHome',
    /**
     * 导航钩子-进入导航之前判断用户是否是通过登录页进入
     * @param to
     * @param from
     * @param next
     */
    beforeRouteEnter (to, from, next) {
      // $router 访问Router实例
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      var username = sessionStorage.getItem('username')
      if (username) {
        next()
      } else {
        next({path: '/login'})
      }
    },
    components: {
      AdminHeader,
      AdminList
    }
  }
</script>

<style>
  .sidebar {
    width: 260px;
    height: 100%;
    border-right: 1px solid #e3e3e3;
    position: fixed;
    top: 44px;
    left: 0;
    overflow: auto;
  }
  .content {
    width: 100%;
    padding-left: 261px;
    padding-top: 44px;
  }
  @media screen and (max-width: 660px){
    .sidebar {
      display: none;
    }
    .content {
      width: 100%;
      padding: 0;
      padding-top: 44px;
    }
  }
</style>
