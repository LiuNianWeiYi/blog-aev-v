<template>
  <div class="popup-box">
    <div class="popup">
      {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminPopup',
    props: ['message']
  }
</script>

<style>
  .popup-box {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 666;
  }
  .popup-box .popup {
    color: #ff3860;
    text-align: center;
    font-size: 1.5rem;
    width: 300px;
    height: 160px;
    line-height: 160px;
    background-color: #fff;
    border-radius: 10px;
    -webkit-box-shadow:0 0 15px 5px rgba(0, 0, 0, .5);
    -moz-box-shadow:0 0 15px 5px rgba(0, 0, 0, .5);
    box-shadow:0 0 15px 5px rgba(0, 0, 0, .5);
    margin-top: -80px;
    margin-left: -150px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
  }
</style>
