<template>
  <div class="poster">
    <img class="bg" src="@/assets/images/poster.jpg" alt="">
    <img class="qr" src="@/assets/images/qr.jpg" alt="">
  </div>
</template>


<style lang="less" scoped>
@import "../assets/css/common.less";
.poster {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  .bg {
    width: 100%;
    height: 100%;
  }
  .qr{
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 50%;
    transform: translateX(-50%);
    top: 5rem;
  }
}
</style>
