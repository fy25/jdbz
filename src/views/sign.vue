<template>
  <div>
    <div class="logo-wrapper">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="sign-input">
      <div class="sign-input-wrapper">
        <div class="sign-input-item">
          <input type="tel" placeholder="用户名称" name="" id="">
          <i class="iconfont icon-email"></i>
        </div>
        <div class="sign-input-item">
          <input type="tel" placeholder="联系方式" name="" id="">
          <i class="iconfont icon-contacts"></i>
        </div>
        <div class="sign-input-item">
          <input type="tel" placeholder="登陆密码" name="" id="">
          <i class="iconfont icon-lock"></i>
        </div>
      </div>
      <button>注册</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
.logo-wrapper {
  background-color: @main-color;
  width: 100%;
  height: 4.7rem;
  display: flex;
  justify-content: center;
  img {
    width: 5.9rem;
    height: 1.9rem;
    margin-top: 1rem;
  }
}
.sign-input {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-top: -0.9rem;
  position: relative;
  .sign-input-wrapper {
    width: 80%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px #999;
    padding: 0.3rem 0.4rem 0.9rem;
    box-sizing: border-box;
    .sign-input-item {
      display: flex;
      justify-content: space-between;
      padding: 0.3rem 0;
      border-bottom: 1px solid #ededed;
      input {
        font-size: 0.28rem;
        outline: none;
        border: none;
      }
    }
  }
  button{
    background-color: @main-color;
    position: absolute;
    bottom: -0.4rem;
    border: none;
    font-size: 0.3rem;
    color: #fff;
    width: 4.7rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    border-radius: 100px;
  }
}
</style>


<script>
export default {

}
</script>
