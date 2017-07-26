<template>
  <div class="list">
    <ul>
      <li><router-link to="/adminHome/articleAdmin">文章管理</router-link></li>
      <li><router-link to="/adminHome/sortAdmin">分类管理</router-link></li>
      <li><router-link to="/adminHome/websiteAdmin">网站管理</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AdminList',
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped="scoped">
  .list {
    padding: 0;
  }
  .list li a {
    display: block;
    padding: 6px;
  }
  .router-link-active {
    color: #fff;
    background-color: #FF9966;
  }

</style>
