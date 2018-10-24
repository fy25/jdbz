<template>
  <div class="bill common-container">
    <Panel :panel-right="panelRight" path="Recharge" tit="我的余额（元）" rightTit="充值"></Panel>
    <div class="bill-list">
      <div class="bill-item">
        <div class="bill-item-left">
          <img src="@/assets/logo.png" alt="">
          <strong>10-24 09:19</strong>
        </div>
        <div class="bill-item-right">178元</div>
      </div>
      <div class="bill-item">
        <div class="bill-item-left">
          <img src="@/assets/logo.png" alt="">
          <strong>10-24 09:19</strong>
        </div>
        <div class="bill-item-right">178元</div>
      </div>
      <div class="bill-item">
        <div class="bill-item-left">
          <img src="@/assets/logo.png" alt="">
          <strong>10-24 09:19</strong>
        </div>
        <div class="bill-item-right">178元</div>
      </div>
      <div class="bill-item">
        <div class="bill-item-left">
          <img src="@/assets/logo.png" alt="">
          <strong>10-24 09:19</strong>
        </div>
        <div class="bill-item-right">178元</div>
      </div>
    </div>
    <button class="more-btn" @click="goWhere('Login')"><i class="iconfont icon-email"></i></button>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
.bill {
  .bill-list {
    margin-top: 0.5rem;
    .bill-item {
      height: 1.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.32rem;
      background-color: #fff;
      padding: 0 0.2rem 0 0.15rem;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0 0 10px #ddd;
      margin-bottom: 0.2rem;
      .bill-item-left {
        display: flex;
        align-items: center;
        img {
          width: 0.68rem;
          height: 0.68rem;
          border-radius: 50%;
        }
        strong {
          margin-left: 0.3rem;
        }
      }
      .bill-item-right {
        color: @main-color;
      }
    }
  }
}
</style>

<script>
import Panel from '@/components/panel'
export default {
  data () {
    return {
      panelRight: true
    }
  },
  components: {
    Panel
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

