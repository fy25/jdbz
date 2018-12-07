<template>
  <div>
    <div class="logo-wrapper">
      <img :src="logo" alt>
    </div>
    <div class="sign-input">
      <div class="sign-input-wrapper">
        <div class="sign-input-item">
          <input type="text" placeholder="用户名称" v-model="name">
          <i class="iconfont icon-email"></i>
        </div>
        <div class="sign-input-item">
          <input type="tel" placeholder="联系方式" v-model="phone">
          <i class="iconfont icon-contacts"></i>
        </div>
        <div class="sign-input-item">
          <input type="password" placeholder="登陆密码">
          <i class="iconfont icon-lock"></i>
        </div>
      </div>
      <button @click="signUp">注册</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
@import "../assets/css/sign.less";
</style>


<script>
import { Config } from '@/config/config.js'
import * as sign from '@/services/sign'
export default {
  data () {
    return {
      logo: '',
      name: null,
      phone: null
    }
  },
  mounted () {
    // this.logo = Config.logo

  },
  methods: {
    goWhere (path) {
      console.log(this.$router)
      this.$router.push('/login')
    },
    // 注册
    signUp () {
      console.log(this.name)
      console.log(this.phone)
      // let data = {
      //   phone: this.phone,
      //   name: this.name
      // }
      // sign.signUp(data).then(res => {
      //   console.log(res)
      // })
    }
  }

}
</script>
