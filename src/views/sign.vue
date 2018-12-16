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
        <div class="sign-input-item">
          <input type="tel" placeholder="联系方式" v-model="u_mobile" maxlength="11">
          <i class="iconfont icon-contacts"></i>
        </div>
        <div class="sign-input-item">
          <input type="password" placeholder="登录密码" v-model="u_pas">
          <i class="iconfont icon-lock"></i>
        </div>
      </div>
      <button @click="signUp">注册</button>
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
  margin-top: 100px;
}
</style>


<script>
import { Config } from '@/config/config.js'
import * as sign from '@/services/sign'
import Toast from '@/components/toast'
export default {
  data () {
    return {
      logo: '',
      u_name: null,
      u_mobile: null,
      u_pas: null,
      userid: 0,
      showToast: false
    }
  },
  mounted () {
    // this.logo = Config.logo
    this.logo = '@/assets/images/poster.jpg'

  },
  components: {
    Toast
  },
  methods: {
    goWhere (path) {
      this.$router.push('/login')
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
        jdbz: 'get_qr_code',
      }
      if (!(/^1[34578]\d{9}$/.test(this.u_mobile))) {
        this.showToast = true
        this.toastText = "请填写正确手机号"
        this.toastIcon = "error"
        setTimeout(() => {
          this.showToast = false
        }, 1500)
      } else {
        sign.signUp(data).then(res => {
          console.log(res)
          if (res.code == "200") {
            this.showToast = true
            this.toastText = "注册成功"
            this.toastIcon = "success"
            setTimeout(() => {
              this.showToast = false
              this.redirectTo('Login')
            }, 1500)
          } else {
            this.showToast = true
            this.toastText = res.message
            this.toastIcon = "error"
            setTimeout(() => {
              this.showToast = false
            }, 1500)
          }
        })

      }
    }
  }

}
</script>
