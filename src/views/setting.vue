<template>
  <div class="setting">
    <!-- <div class="item">修改密码</div> -->
    <group>
      <cell title="修改密码" link="/forget" is-link></cell>
      <cell title="更换头像" link="/avatar" is-link></cell>
    </group>
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
import { Cell, Group } from "vux";
export default {
  components: {
    Cell,
    Group
  },
  mounted () {
  },
  methods: {
    outTap () {
      localStorage.clear();
      this.redirectTo("Login");
    },
    navigateTo (name) {
      this.$router.push({ name: name });
    },
    redirectTo (name) {
      this.$router.replace({ name: name });
    }
  }
};
</script>


