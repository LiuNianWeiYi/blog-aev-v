<template>
  <div class="article-modify">
    <nav>文章管理 / 修改文章</nav>
    <admin-input label="文章标题" v-model="articleData.articleTitle"></admin-input>
    <div class="article-outline">
      <label for="articleOutline">文章概要</label>
      <textarea name="articleOutline" id="articleOutline" v-model="articleData.articleOutline"></textarea>
    </div>
    <div>
      <label for="articleSort">文章分类</label>
      <select name="" id="articleSort" v-model.number="articleData.articleSortId">
        <option v-for="articleSort in articleSortLists" v-bind:value="articleSort.sortId">{{ articleSort.sortName }}</option>
      </select>
    </div>
    <div class="article-content">
      <label for="articleContent">文章内容</label>
      <textarea name="articleContent" id="articleContent" v-model="articleData.articleContent"></textarea>
    </div>
    <div>
      <button class="add" type="button" v-on:click="modifyArticle">更改</button>
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
    name: 'AdminModifyArticle',
    data: function () {
      return {
        // 文章数据
        articleData: {
          articleId: 0,
          articleTitle: '',
          articleOutline: '',
          articleSortId: 1,
          articleContent: ''
        },
        // 分类列表
        articleSortLists: [],
        // 提示信息
        message: '',
        // 是否显示提示窗口
        messageShow: false
      }
    },
    mounted: function () {
      this.articleData.articleId = this.$route.params.id
      let _this = this
      let id = this.$route.params.id
      // 查询分类列表
      axios.get(restfulApi.getArticleSortListsUrl).then(function (response) {
        if (response.data.status === 200) {
          _this.articleSortLists = response.data.result
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 查询文章数据
      axios.get(restfulApi.getModifyArticleUrl + '?articleId=' + id).then(function (response) {
        if (response.data.status === 200) {
          _this.articleData = response.data.result
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      // 修改按钮
      modifyArticle: function () {
        let _this = this
        let articleData = this.articleData
        if (articleData.articleTitle && articleData.articleOutline && articleData.articleContent) {
          axios({
            method: 'post',
            url: restfulApi.modifyArticleUrl,
            data: qs.stringify(articleData),
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
  .article-modify {
    padding: .8rem;
  }
  .article-outline textarea {
    width: 100%;
    height: 8rem;
  }
  .article-content textarea {
    width: 100%;
    height: 20rem;
  }
</style>
