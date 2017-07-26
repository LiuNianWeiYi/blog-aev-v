<template>
  <div class="sort-admin">
    <div class="sort-header">
      <h2>分类管理</h2>
      <router-link class="add sort-add-btn" to="/adminHome/sortAdmin/addSort">添加分类</router-link>
    </div>
    <div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>名称</th>
          <th>显示顺序</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sortData in sortDataLists">
          <td class="td-center">{{ sortData.sortId }}</td>
          <td class="td-center">{{ sortData.sortName }}</td>
          <td class="td-center">{{ sortData.sortOrder }}</td>
          <td class="td-center td-handler">
            <router-link tag="button" v-bind:to="modifyUrl + sortData.sortId" class="modify" type="button">修改</router-link>
            <button class="delete" type="button" v-on:click="deleteArticleSort(sortData.sortId)">删除</button>
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

  export default {
    name: 'AdminSort',
    data: function () {
      return {
        modifyUrl: '/adminHome/sortAdmin/modifySort/',
        sortDataLists: [],
        msg: 'AdminSort'
      }
    },
    mounted: function () {
      let _this = this
      axios.get(restfulApi.getArticleSortListsUrl).then(function (response) {
        if (response.data.status === 200) {
          _this.sortDataLists = response.data.result
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      // 删除按钮
      deleteArticleSort: function (sortId) {
        let confirmDelete = false
        if (confirmDelete) {
          axios.get(restfulApi.deleteArticleSortUrl + '?articleSortId=' + sortId).then(function (response) {
            if (response.data.status === 200) {
              console.log(response.data.message)
            }
          }).catch(function (err) {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style>
  .sort-admin {
    padding: .8rem;;
  }
  .sort-header {
    display: block;
    position: relative;
    padding-bottom: 1.2rem;
  }
  .sort-header .sort-add-btn {
    display: block;
    width: 6rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  .td-center {
    text-align: center;
  }
  .td-handler {
    width: 150px;
  }
  .td-handler .modify {
    margin-right: .6rem;
  }
</style>
