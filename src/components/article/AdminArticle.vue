<template>
  <div class="article-admin">
    <div class="article-header">
      <h2>文章管理</h2>
      <router-link class="add article-add-btn" to="/adminHome/articleAdmin/addArticle">添加文章</router-link>
    </div>
    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>标题</th>
          <th>分类</th>
          <th>概要</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="articleData in articleDataLists">
            <td class="td-center">{{ articleData.articleId }}</td>
            <td>{{ articleData.articleTitle }}</td>
            <td>{{ articleData.articleSortName }}</td>
            <td class="td-article-outline">{{ articleData.articleOutline }}</td>
            <td class="td-center td-handler">
              <router-link tag="button" class="modify" type="button" v-bind:to="modifyUrl + articleData.articleId">修改</router-link>
              <button class="delete" type="button" v-on:click="deleteAnArticle(articleData.articleId)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import restfulApi from '../../restfulAPI.config'
  import AdminInput from '@/components/common/AdminInput'

  export default {
    name: 'AdminArticle',
    data: function () {
      return {
        // 修改按钮跳转路由前缀
        modifyUrl: '/adminHome/articleAdmin/modifyArticle/',
        // 文章列表数据
        articleDataLists: [
          {
            articleId: 1,
            articleTitle: '',
            articleOutline: '',
            articleSortName: ''
          }
        ]
      }
    },
    mounted: function () {
      let _this = this
      axios.get(restfulApi.getArticleListsUrl + '?startRow=0&articleListsLength=10').then(function (response) {
        if (response.data.status === 200) {
          _this.articleDataLists = response.data.result
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      deleteAnArticle: function (articleId) {
        let confirmDelete = false
        if (confirmDelete) {
          axios.get(restfulApi.deleteArticleUrl + '?articleId=' + articleId).then(function (response) {
            if (response.data.status === 200) {
              console.log(response.data.message)
            }
          }).catch(function (err) {
            console.log(err)
          })
        }
      }
    },
    components: {
      AdminInput
    }
  }
</script>

<style>
  .article-admin {
    padding: .8rem;
  }
  .article-header {
    display: block;
    position: relative;
    padding-bottom: 1.2rem;
  }
  .article-header .article-add-btn {
    display: block;
    width: 6rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  .table-container {
    width: 100%;
    display: block;
  }
  .td-center {
    text-align: center;
  }
  .td-article-outline {
    width: 600px;
  }
  .td-handler {
    width: 150px;
  }
  .td-handler .modify {
    margin-right: .6rem;
  }
</style>
