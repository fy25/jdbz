<template>
  <div class="point common-container">
    <Panel :panel-right="panelRight" path="Exchange" tit="我的积分" rightTit="兑换"></Panel>
    <div class="point-list">
      <div class="point-list-tit">积分记录</div>
      <div class="point-item">
        <div class="point-item-left">
          <span>用户登录</span>
          <strong>+10</strong>
        </div>
        <div class="point-item-right">09-12 12：09</div>
      </div>
      <div class="point-item">
        <div class="point-item-left">
          <span>用户登录</span>
          <strong>+10</strong>
        </div>
        <div class="point-item-right">09-12 12：09</div>
      </div>
      <div class="point-item">
        <div class="point-item-left">
          <span>用户登录</span>
          <strong>+10</strong>
        </div>
        <div class="point-item-right">09-12 12：09</div>
      </div>
      <div class="point-item">
        <div class="point-item-left">
          <span>用户登录</span>
          <strong>+10</strong>
        </div>
        <div class="point-item-right">09-12 12：09</div>
      </div>
      <div class="point-item">
        <div class="point-item-left">
          <span>用户登录</span>
          <strong>+10</strong>
        </div>
        <div class="point-item-right">09-12 12：09</div>
      </div>
      <button class="more-btn"><i class="iconfont icon-email"></i></button>
    </div>
    <div class="recharge-tips">
      <p>温馨提示：</p>
      <span>1、仅限堂食</span>
      <span>2、储值金不可兑现</span>
      <span>3、除锅底外全场通用</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
.point {
  .point-list {
    box-shadow: 0 0 5px #ccc;
    margin-top: 0.6rem;
    .point-list-tit {
      font-size: 0.32rem;
      font-weight: 700;
      height: 1rem;
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
    }
    .point-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      border-bottom: 1px solid #D2D2D2;
      .point-item-left {
        display: flex;
        align-items: center;
        font-size: 0.32rem;
        span {
          color: #999;
          margin-right: 0.1rem;
        }
        strong {
          color: @main-color;
        }
      }
      .point-item-right{
        font-size: .24rem;
        color: #999;
      }
    }
    .point-item:last-child{
      border-bottom: none;
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
    },
  }
}
</script>

