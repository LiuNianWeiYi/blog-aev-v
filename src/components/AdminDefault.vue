<template>
  <div class="default">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'adminDefault',
    data () {
      return {
        msg: 'Welcome'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .default {
    padding: .8rem;
    text-align: center;
  }
</style>
