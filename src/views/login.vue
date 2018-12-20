<template>
  <div>
    <div class="logo-wrapper">
      <!-- <img src="@/assets/images/logo.png" alt> -->
    </div>
    <div class="sign-input">
      <div class="sign-input-wrapper">
        <div class="sign-input-item">
          <input type="tel" placeholder="手机号" v-model="u_mobile" maxlength="11">
          <i class="iconfont icon-email"></i>
        </div>
        <div class="sign-input-item">
          <input type="password" placeholder="登录密码" v-model="u_pas">
          <i class="iconfont icon-lock"></i>
        </div>
      </div>
      <button @click="signIn" class="button">登录</button>
    </div>
    <div class="logo-forget">
      <span @click="forgetTap"></span>
      <span @click="redirectTo('Sign')">快速注册</span>
    </div>
    <Actionsheet v-model="actionShow" :menus="menus" show-cancel></Actionsheet>
    <toast v-if="showToast" :text="toastText" :icon="toastIcon"></toast>
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
import Toast from "@/components/toast";
import * as sign from "@/services/sign";
export default {
  data() {
    return {
      logo: "",
      actionShow: false,
      menus: ["短信验证登录"],
      u_mobile: null,
      u_pas: null,
      showToast: false
    };
  },
  components: {
    Actionsheet,
    Toast
  },
  mounted() {
    this.logo = Config.logo;
    console.log(localStorage.id);
    if (localStorage.id) {
      this.redirectTo("Personal");
    }
  },
  methods: {
    navigateTo(name) {
      this.$router.push({ name: name });
    },
    redirectTo(name) {
      this.$router.replace({ name: name });
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
      if (data.u_mobile == null || data.u_pas == null) {
        this.$vux.alert.show({
          title: "请填写登录信息",
          content: ""
        });
      } else {
        sign.signIn(data).then(res => {
          if (res.code == "200") {
            this.$vux.toast.show({
              type: "success",
              text: "登录成功",
              time: 2000
            });
            setTimeout(() => {
              localStorage.setItem("id", res.data.data[0].id);
              localStorage.setItem("u_balance", res.data.data[0].u_balance);
              localStorage.setItem("u_integral", res.data.data[0].u_integral);
              localStorage.setItem("u_name", res.data.data[0].u_name);
              localStorage.setItem("u_img", res.data.data[0].u_img);
              this.redirectTo("Personal");
            }, 2000);
          } else {
            this.$vux.alert.show({
              title: res.message,
              content: ""
            });
          }
        });
      }
    }
  }
};
</script>
