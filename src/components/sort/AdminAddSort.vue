<template>
  <div class="sort-add">
    <nav>分类管理 / 添加分类</nav>
    <admin-input label="分类名称" v-model="sortName"></admin-input>
    <admin-input label="显示顺序" v-model="sortOrder"></admin-input>
    <div class="sort-add-btn">
      <button class="add" type="button" v-on:click="addArticleSort">添加</button>
      <button class="modify" type="button" v-on:click="cancelAdd">取消</button>
    </div>
    <admin-popup v-bind:message="message" v-show="messageShow"></admin-popup>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import restfulApi from '../../restfulAPI.config'
  import AdminInput from '@/components/common/AdminInput'
  import AdminPopup from '@/components/common/AdminPopup'

  export default {
    name: 'AdminAddSort',
    data: function () {
      return {
        sortName: '',
        sortOrder: 1,
        // 提示信息
        message: '',
        // 显示提示信息框
        messageShow: false
      }
    },
    methods: {
      addArticleSort: function () {
        let _this = this
        let sortName = this.sortName
        let sortOrder = this.sortOrder
        if (sortName && sortOrder) {
          axios({
            method: 'post',
            url: restfulApi.addArticleSortUrl,
            data: qs.stringify({
              sortName: sortName,
              sortOrder: sortOrder
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(function (response) {
            if (response.data.status === 200) {
              _this.message = response.data.message
              _this.messageShow = true
              setTimeout(function () {
                _this.messageShow = false
                _this.$router.go(-1)
              }, 2000)
            }
          }).catch(function (err) {
            console.log(err)
          })
        } else {
          alert('内容不完整')
        }
      },
      // 取消添加
      cancelAdd: function () {
        this.$router.go(-1)
      }
    },
    components: {
      AdminInput,
      AdminPopup
    }
  }
</script>

<style>
  .sort-add {
    padding: .8rem;
  }
  .sort-add-btn {
    padding-top: 1rem;
  }
  .sort-add-btn .add {
    margin-right: 1rem;
  }
</style>
