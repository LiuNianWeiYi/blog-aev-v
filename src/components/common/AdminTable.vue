<template>
  <table>
    <tr v-for="items in arrValue">
      <td v-for="item in items">{{item}}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'AdminTable',
    props: ['arrValue']
  }
</script>

<style>

</style>
