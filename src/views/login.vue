<template>
  <div>
    <div class="logo-wrapper">
      <img :src="logo" alt="">
    </div>
    <div class="sign-input">
      <div class="sign-input-wrapper">
        <div class="sign-input-item">
          <input type="tel" placeholder="用户名称" name="" id="">
          <i class="iconfont icon-email"></i>
        </div>
        <div class="sign-input-item">
          <input type="password" placeholder="登陆密码" name="" id="">
          <i class="iconfont icon-lock"></i>
        </div>
      </div>
      <button @click="goWhere('Personal')">登录</button>
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
import { Config } from '@/config/config.js'
import { Actionsheet } from 'vux'
export default {
  data () {
    return {
      logo: '',
      actionShow: false,
      menus: [
        '短信验证登录'
      ]
    }
  },
  components: {
    Actionsheet
  },
  mounted () {
    this.logo = Config.logo
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name })
    },
    forgetTap () {
      this.actionShow = true
    }
  }

}
</script>
