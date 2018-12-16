<template>
  <div class="recharge common-container">
    <Panel :panel-right="panelRight" tit="当前余额（元）"></Panel>
    <p class="recharge-tit">请选择充值金额</p>
    <div class="recharge-list">
      <div class="recharge-item" v-for="(item,index) in rechargeList" :key="index">
        <div
          :class="[sumNum==index?'recharge-item-wrapper-cur':'recharge-item-wrapper']"
          @click="sumTap(index)"
        >
          <strong>{{item.t_money}}元</strong>
          <span>(赠送{{item.t_sendMoney}}元)</span>
        </div>
      </div>
    </div>
    <div class="recharge-pay">
      <span>支付金额：</span>
      <strong>300元</strong>
    </div>
    <button class="recharge-btn">立即支付</button>
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
.recharge {
  .recharge-tit {
    font-size: 0.28rem;
  }
  .recharge-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
    .recharge-item {
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      margin-bottom: 0.36rem;
      .recharge-item-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 2.2rem;
        border: 1px solid #ccc;
        padding: 0.25rem 0;
        border-radius: 5px;
        transition: 0.5s;
        strong {
          font-size: 0.3rem;
          margin-bottom: 0.2rem;
        }
        span {
          font-size: 0.24rem;
        }
      }
      .recharge-item-wrapper-cur {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 2.2rem;
        border: 1px solid #ba1c22;
        padding: 0.25rem 0;
        border-radius: 5px;
        transition: 0.5s;
        strong {
          font-size: 0.3rem;
          margin-bottom: 0.2rem;
          color: #ba1c22;
        }
        span {
          font-size: 0.24rem;
          color: #ba1c22;
        }
      }
    }
  }
  .recharge-pay {
    display: flex;
    align-items: center;
    span {
      font-size: 0.24rem;
    }
    strong {
      font-size: 0.35rem;
      color: @main-color;
    }
  }
  .recharge-btn {
    background-color: @main-color;
    font-size: 0.35rem;
    color: #fff;
    width: 100%;
    outline: none;
    border: none;
    height: 0.8rem;
    border-radius: 8px;
  }
}
</style>

<script>
import Panel from '@/components/panel'
import * as recharge from "@/services/recharge"
export default {
  data () {
    return {
      panelRight: false,
      sumNum: 0,
      rechargeList: [
      ]
    }
  },
  components: {
    Panel
  },
  mounted () {
    this.getRechargeMeal()
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name })
    },
    getRechargeMeal () {
      console.log(12321312)
      recharge.rechargeMeal({ jdbz: 'get_top_up' }).then(res => {
        console.log(res)
        this.rechargeList = res.data.data
      })
    },

    // 选择充值金额
    sumTap (index) {
      this.sumNum = index
    }
  }
}
</script>

