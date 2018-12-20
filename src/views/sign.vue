<template>
  <div>
    <div class="logo-wrapper">
      <img src="@/assets/images/logo.png" alt>
    </div>
    <div class="sign-input">
      <div class="sign-input-wrapper">
        <div class="sign-input-item">
          <input type="text" placeholder="用户名称" v-model="u_name">
          <i class="iconfont icon-email"></i>
        </div>
        <!-- <div class="sign-input-item">
          <input type="tel" placeholder="联系方式" v-model="u_mobile" maxlength="11">
          <i class="iconfont icon-contacts"></i>
        </div>-->
        <div class="sign-input-item noborder">
          <input type="password" placeholder="登录密码" v-model="u_pas">
          <i class="iconfont icon-lock"></i>
        </div>
        <group>
          <x-input title="手机号" v-model="u_mobile"></x-input>
          <div class="code">
            <x-input title="验证码" v-model="u_code"></x-input>
            <button>发送验证码</button>
          </div>
          <datetime title="生日" :min-year="1950" v-model="u_birthday"></datetime>
          <popup-picker
            title="性别"
            v-model="u_sex"
            :data="sexList"
            :columns="1"
            :fixed-columns="1"
            show-name
          ></popup-picker>
        </group>
      </div>
      <button @click="signUp" class="button">注册</button>
    </div>
    <toast v-if="showToast" :text="toastText" :icon="toastIcon"></toast>
    <p @click="redirectTo('Login')" class="small-text">已有账号，登录</p>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
@import "../assets/css/sign.less";
.small-text {
  text-align: center;
  font-size: 0.25rem;
  color: #999;
  margin-top: 60px;
}
.code {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ba1c22;
    color: #fff;
    font-size: 12px;
    outline: none;
    border: none;
    padding: 2px 4px;
    box-sizing: border-box;
    margin-right: 10px;
    border-radius: 4px;
  }
}
</style>


<script>
import { Config } from "@/config/config.js";
import * as sign from "@/services/sign";
import Toast from "@/components/toast";
import { Datetime } from 'vux'
import { Group } from 'vux'
import { PopupPicker } from 'vux'
import { XInput } from "vux";
export default {
  data () {
    return {
      logo: "",
      u_name: null,
      u_mobile: null,
      u_pas: null,
      u_code:null,
      userid: 0,
      showToast: false,
      u_birthday: null,
      u_sex: [],
      sexList: [
        {
          name: '男士',
          value: '1',
        },
        {
          name: '女士',
          value: '0',
        }]
    };
  },
  mounted () {
    this.logo = Config.logo
    this.logo = "@/assets/images/poster.jpg";
    if (this.$route.query.userid) {
      this.userid = this.$route.query.userid;
    } else {
      console.log("没有上级");
    }
  },
  components: {
    Toast,
    Datetime,
    Group,
    PopupPicker,
    XInput
  },
  methods: {
    goWhere (path) {
      this.$router.push("/login");
    },
    redirectTo (name) {
      this.$router.replace({ name: name });
    },
    // 注册
    signUp () {
      let data = {
        userid: this.userid,
        u_name: this.u_name,
        u_mobile: this.u_mobile,
        u_pas: this.u_pas,
        jdbz: "get_qr_code",
        u_birthday: this.u_birthday,
        u_sex: this.u_sex[0]
      };
      console.log(data)
      // if (!/^1[34578]\d{9}$/.test(this.u_mobile)) {
      //   this.$vux.toast.show({
      //     type: "cancel",
      //     text: "手机号不正确",
      //     time: 2000
      //   });
      // } else if (this.u_pas == null) {
      //   this.$vux.toast.show({
      //     type: "cancel",
      //     text: "请填写密码",
      //     time: 2000
      //   });
      // } else {
      //   this.$vux.loading.show({
      //     text: "正在注册"
      //   });
      //   sign.signUp(data).then(res => {
      //     if (res.code == "200") {
      //       this.$vux.loading.hide();
      //       this.$vux.toast.show({
      //         type: "success",
      //         text: "注册成功",
      //         time: 2000
      //       });
      //       setTimeout(() => {
      //         this.redirectTo("Login");
      //       }, 2000);
      //     } else {
      //       this.$vux.loading.hide();
      //       this.$vux.toast.show({
      //         type: "cancel",
      //         text: res.message,
      //         time: 2000
      //       });
      //     }
      //   });
      // }
    },
    // 获取参数
    GetQueryString (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
};
</script>
