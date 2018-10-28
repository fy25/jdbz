<template>
  <div>
    <div class="logo-wrapper">
      <img :src="logo" alt="">
    </div>
    <div class="sign-input">
      <div class="sign-input-wrapper">
        <div class="sign-input-item">
          <input type="text" placeholder="用户名称" name="" id="">
          <i class="iconfont icon-email"></i>
        </div>
        <div class="sign-input-item">
          <input type="tel" placeholder="联系方式" name="" id="">
          <i class="iconfont icon-contacts"></i>
        </div>
        <div class="sign-input-item">
          <input type="password" placeholder="登陆密码" name="" id="">
          <i class="iconfont icon-lock"></i>
        </div>
      </div>
      <button @click="goWhere()">注册</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
@import "../assets/css/sign.less";
</style>


<script>
import { Config } from '@/config/config.js'
export default {
  data () {
    return {
      logo: ''
    }
  },
  mounted () {
    this.logo = Config.logo
  },
  methods: {
    goWhere (path) {
      console.log(this.$router)
      this.$router.push('/login')
    }
  }

}
</script>
