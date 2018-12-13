<template>
  <div class="brokerage common-container">
    <Panel :panel-right="panelRight" path="Withdraw" tit="我的佣金（元）" rightTit="提现"></Panel>
    <div class="point-list">
      <div class="point-list-tit">佣金记录</div>
      <div class="brokerage-item">
        <div class="brokerage-item-left">
          <img src="@/assets/logo.png">
          <div class="brokerage-item-left-text">
            <strong>用户昵称</strong>
            <span>消费1000元</span>
          </div>
        </div>
        <div class="brokerage-item-right">
          <strong>+30</strong>
          <span>09-25 12:22</span>
        </div>
      </div>
      <div class="brokerage-item">
        <div class="brokerage-item-left">
          <img src="@/assets/logo.png">
          <div class="brokerage-item-left-text">
            <strong>用户昵称</strong>
            <span>消费1000元</span>
          </div>
        </div>
        <div class="brokerage-item-right">
          <strong>+30</strong>
          <span>09-25 12:22</span>
        </div>
      </div>
      <div class="brokerage-item">
        <div class="brokerage-item-left">
          <img src="@/assets/logo.png">
          <div class="brokerage-item-left-text">
            <strong>用户昵称</strong>
            <span>消费1000元</span>
          </div>
        </div>
        <div class="brokerage-item-right">
          <strong>+30</strong>
          <span>09-25 12:22</span>
        </div>
      </div>
      <div class="brokerage-item">
        <div class="brokerage-item-left">
          <img src="@/assets/logo.png">
          <div class="brokerage-item-left-text">
            <strong>用户昵称</strong>
            <span>消费1000元</span>
          </div>
        </div>
        <div class="brokerage-item-right">
          <strong>+30</strong>
          <span>09-25 12:22</span>
        </div>
      </div>
      <button class="more-btn">
        <i class="iconfont icon-unfold"></i>
      </button>
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
.brokerage {
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
    .brokerage-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.2rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      border-bottom: 1px solid #d2d2d2;
      .brokerage-item-left {
        display: flex;
        align-items: center;
        img {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 50%;
          margin-right: 0.2rem;
        }
        .brokerage-item-left-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          strong {
            font-size: 0.24rem;
            font-weight: 500;
            margin-bottom: 0.1rem;
          }
          span {
            font-size: 0.18rem;
            color: #999;
          }
        }
      }
      .brokerage-item-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        strong {
          color: @main-color;
          font-size: 0.32rem;
          margin-bottom: 0.1rem;
        }
        span {
          font-size: 0.18rem;
          color: #999;
        }
      }
    }
    .brokerage-item:last-child {
      border-bottom: none;
    }
  }
}
</style>

<script>
import Panel from '@/components/panel'
import * as my from '@/services/my'
export default {
  data () {
    return {
      panelRight: true
    }
  },
  components: {
    Panel
  },
  mounted () {
    this.getBrokerageList()
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name })
    },
    getBrokerageList () {
      let data = {
        userId: localStorage.id,
        page: '1',
        jdbz: 'get_order'
      }
      my.brokerageList(data).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

