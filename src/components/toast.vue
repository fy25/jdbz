<template>
  <div class="toast">
    <img v-if="icon=='success'" src="@/assets/images/success.png" alt>
    <img v-if="icon=='error'" src="@/assets/images/error.png" alt>
    <img v-if="icon=='loading'" src="@/assets/images/loading.gif" alt>
    <span>{{text}}</span>
  </div>
</template>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.3rem;
  border-radius: 10px;
  img {
    margin-bottom: 0.2rem;
    width: 0.6rem;
    height: 0.6rem;
  }
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '成功'
    },
    icon: {
      type: String,
      default: 'success'
    },

  }
}
</script>


