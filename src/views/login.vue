<template>
  <div>
    <div class="logo-wrapper">
      <img :src="logo" alt>
    </div>
    <div class="sign-input">
      <div class="sign-input-wrapper">
        <div class="sign-input-item">
          <input type="tel" placeholder="用户名称" v-model="u_mobile">
          <i class="iconfont icon-email"></i>
        </div>
        <div class="sign-input-item">
          <input type="password" placeholder="登录密码" v-model="u_pas">
          <i class="iconfont icon-lock"></i>
        </div>
      </div>
      <button @click="signIn">登录</button>
    </div>
    <div class="logo-forget">
      <span @click="forgetTap">忘记密码</span>
      <span @click="goWhere('Sign')">快速注册</span>
    </div>
    <Actionsheet v-model="actionShow" :menus="menus" show-cancel></Actionsheet>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
@import "../assets/css/sign.less";
.logo-forget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.24rem;
  padding: 0 0.8rem;
  box-sizing: border-box;
  margin-top: 1rem;
  color: #999;
}
</style>


<script>
import { Config } from "@/config/config.js";
import { Actionsheet } from "vux";
import { AlertModule } from "vux";
import * as sign from "@/services/sign";
export default {
  data() {
    return {
      logo: "",
      actionShow: false,
      menus: ["短信验证登录"],
      u_mobile: null,
      u_pas: null
    };
  },
  components: {
    Actionsheet
  },
  mounted() {
    this.logo = Config.logo;
  },
  methods: {
    goWhere(name) {
      this.$router.push({ name: name });
    },
    forgetTap() {
      this.actionShow = true;
    },

    // 登录
    signIn() {
      let data = {
        u_mobile: this.u_mobile,
        u_pas: this.u_pas,
        jdbz: "get_register"
      };
      console.log(data);
      if (data.u_mobile == null || data.u_pas == null) {
        this.$vux.alert.show({
          title: "请填写登录信息",
          content: "",
          onShow() {
            console.log("Plugin: I'm showing");
          },
          onHide() {
            console.log("Plugin: I'm hiding");
          }
        });
      }
      // sign.signIn(data).then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>
