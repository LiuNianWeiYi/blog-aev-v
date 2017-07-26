<template>
  <div class="website">
    <nav>网站管理 </nav>
    <admin-input label="网站名称" v-model="websiteName"></admin-input>
    <admin-input label="网站标题" v-model="websiteTitle"></admin-input>
    <admin-input label="网站关键字" v-model="websiteKeyword"></admin-input>
    <admin-input label="网站描述" v-model="websiteDescription"></admin-input>
    <admin-input label="网站作者" v-model="websiteAuthor"></admin-input>
    <admin-input label="网站完成时间" v-model="websiteCreatedTime"></admin-input>

    <div>
      <button class="add" type="button">更改</button>
    </div>
  </div>
</template>

<script>
  import AdminInput from '@/components/common/AdminInput'

  export default {
    name: 'AdminAddArticle',
    data: function () {
      return {
        websiteName: 'Blog',
        websiteTitle: 'Blog',
        websiteKeyword: 'blog, web',
        websiteDescription: 'blog',
        websiteAuthor: 'Blog',
        websiteCreatedTime: '2017'
      }
    },
    components: {
      AdminInput
    }
  }
</script>

<style>
  .website {
    padding: .8rem;
  }
</style>
