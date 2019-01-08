<template>
  <div class="setting">
    <!-- <div class="item">修改密码</div> -->
    <group>
      <cell title="修改密码" link="/forget" is-link></cell>
      <cell title="更换头像" link="/avatar" is-link></cell>
      <cell title="更换昵称" link="/name" is-link></cell>
    </group>
    <div class="ywImg">
      <img :src="ywImg" alt>
    </div>
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
.ywImg {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.ywImg img{
  width: 70%;
}
</style>

<script>
import * as bg from "@/services/bg"
import { Confirm, Cell, Group } from "vux";
export default {
  components: {
    Cell,
    Group,
    Confirm
  },
  data () {
    return {
      ywImg: ''
    }
  },
  mounted () {
    this.getYw()
  },
  methods: {
    // 获取一维码
    getYw () {
      this.ywImg = 'http://www.guanchencanyin.com/Api/get_common.ashx?jdbz=get_one_qr_Image&data=' + localStorage.u_mobile
    },
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


