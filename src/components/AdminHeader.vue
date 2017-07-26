<template>
  <header>
    <h1>{{userName}}</h1>
    <div class="logout" v-on:click="logout">
      退出
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AdminHeader',
    data: function () {
      return {
        logo: 'LOGO',
        userName: ''
      }
    },
    methods: {
      logout: function () {
        sessionStorage.removeItem('username')
        this.$router.push({path: '/login'})
      }
    },
    mounted: function () {
      this.userName = sessionStorage.getItem('username')
    }
  }
</script>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #CCFFCC;
  }
  header h1 {
    padding-left: 1rem;
  }
  .logout {
    text-align: center;
    font-weight: bold;
    width: 5rem;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    cursor: pointer;
  }
</style>
