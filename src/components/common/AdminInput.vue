<template>
  <div class="admin-input">
    <label>{{ label }}</label>
    <input v-bind:value="value" v-on:input="updateValue($event.target.value)" type="text">
  </div>
</template>

<script>
  export default {
    name: 'AdminInput',
    props: ['label', 'value'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }

  }
</script>

<style>
  .admin-input {
    display: block;
    width: 100%;
    padding: 5px 0;
  }
  .admin-input input {
    display: block;
    font-size: 1.2rem;
    font-weight: normal;
    width: 100%;
    /*height: 1.2rem;*/
    padding: 5px;
    border: 1px solid #dbdbdb;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  input:focus {
    outline: none;
    border-color: #00d1b2;
  }
</style>
