<template>
  <div class="setting">
    <div class="item">修改密码</div>
    <button class="out" @click="outTap">退出登录</button>
  </div>
</template>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 0.3rem;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
}
.out {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.28rem;
  color: #fff;
  background-color: #ba1c22;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px 60px;
}
</style>

<script>
export default {
  methods: {
    outTap () {
      localStorage.clear();
      this.redirectTo('Login')
    },
    redirectTo (name) {
      this.$router.replace({ name: name });
    },
  }
}
</script>


