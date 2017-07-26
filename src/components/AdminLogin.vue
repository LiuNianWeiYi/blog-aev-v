<template>
  <div class="loginBox">
    <h2>用户登录</h2>
    <form action="">
      <div>
        <label for="username">用户名</label>
        <input id="username" name="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">密 码</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <div class="message">{{ message }}</div>
      <button class="modify loginBtn" type="submit" v-on:click.prevent="login">登 录</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  import restfulApi from '../restfulAPI.config'

  export default {
    name: 'AdminLogin',
    data: function () {
      return {
        username: '',
        password: '',
        message: ''
      }
    },
    methods: {
      login: function () {
        var _this = this
        let username = this.username
        let password = this.password
        axios({
          method: 'post',
          url: restfulApi.loginUrl,
          data: qs.stringify({
            username: username,
            password: password
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function (response) {
          if (response.data.username && response.data.status === 200) {
            sessionStorage.setItem('username', response.data.username)
            _this.$router.push({path: 'adminHome'})
          } else {
            _this.message = '*' + response.data.message
          }
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style>
  .loginBox {
    width: 380px;
    height: 280px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -140px;
    margin-left: -190px;
    padding: .8rem;
    background-color: #CCFFCC;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow:0 0 20px rgba(204, 255, 204, .5);
    -moz-box-shadow:0 0 20px rgba(204, 255, 204, .5);
    box-shadow:0 0 20px rgba(205, 255, 204, .5);
  }
  .loginBox h2 {
    text-align: center;
  }
  .message {
    width: 100%;
    font-size: .8rem;
    color: #CC0033;
    height: 1rem;
    line-height: 1rem;
    margin: .5rem 0;
  }
  .loginBtn {
    display: block;
    width: 100%;
    padding: .6rem;
  }
</style>
