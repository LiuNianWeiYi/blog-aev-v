<template>
  <div class="sort-modify">
    <nav>分类管理 / 修改分类</nav>
    <admin-input label="分类名称" v-model="sortName"></admin-input>
    <admin-input label="显示顺序" v-model.number="sortOrder"></admin-input>
    <div class="sort-modify-btn">
      <button class="add" type="button" v-on:click="modifyArticleSort">更改</button>
      <button class="modify" type="button" v-on:click="cancelModify">取消</button>
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
        sortId: 0,
        sortName: '',
        sortOrder: 1,
        // 提示信息
        message: '',
        // 显示提示信息框
        messageShow: false
      }
    },
    mounted: function () {
      let articleSortId = this.$route.params.id
      let _this = this
      axios.get(restfulApi.getModifyArticleSortUrl + '?articleSortId=' + articleSortId).then(function (response) {
        if (response.data.status === 200) {
          _this.sortId = response.data.result.sortId
          _this.sortName = response.data.result.sortName
          _this.sortOrder = response.data.result.sortOrder
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      // 修改按钮
      modifyArticleSort: function () {
        let _this = this
        let sortId = this.sortId
        let sortName = this.sortName
        let sortOrder = this.sortOrder
        if (sortName && sortOrder) {
          axios({
            method: 'post',
            url: restfulApi.modifyArticleSortUrl,
            data: qs.stringify({
              'sortId': parseInt(sortId),
              'sortName': sortName,
              'sortOrder': parseInt(sortOrder)
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
      // 取消按钮
      cancelModify: function () {
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

  .sort-modify {
    padding: .8rem;
  }
  .sort-modify-btn {
    padding-top: 1rem;
  }
  .sort-modify-btn .add {
    margin-right: 1rem;
  }
</style>
