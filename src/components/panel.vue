<template>
  <!-- <div> -->
    <div class="panel">
      <div class="panel-left">
        <span>当前余额（元）</span>
        <strong>19，254.20</strong>
      </div>
      <div class="panel-right">
        <div class="panel-right-radius">
          <i class="iconfont icon-email"></i>
          <span>充值</span>
          <i class="iconfont icon-email"></i>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<style lang="less" scoped>
.panel {
  height: 2.5rem;
  width: 100%;
  background: url(../assets/images/panel.jpg) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.2rem;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #dbdefc;
  .panel-left {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-size: 0.28rem;
    }
    strong {
      font-size: 0.6rem;
      margin-top: 0.6rem;
    }
  }
  .panel-right {
    color: #fff;
    .panel-right-radius {
      display: flex;
      align-items: center;
      padding: 0.1rem 0.2rem;
      box-sizing: border-box;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      background: linear-gradient(to right, #efbdbd, #c83c2c);
      span {
        font-size: 0.24rem;
        margin: 0 0.1rem;
      }
    }
  }
}
</style>

<script>
export default {

}
</script>


