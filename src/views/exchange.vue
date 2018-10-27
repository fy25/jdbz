<template>
  <div class="recharge common-container">
    <Panel :panel-right="panelRight" tit="当前积分"></Panel>
    <p class="recharge-tit">请选择兑换商品</p>
    <div class="recharge-list">
      <div class="recharge-item" v-for="(item,index) in rechargeList" :key="index">
        <div :class="[sumNum==index?'recharge-item-wrapper-cur':'recharge-item-wrapper']" @click="sumTap(index)">
          <strong>{{item.sum}}元</strong>
          <span>(赠送{{item.present}}元)</span>
        </div>
      </div>
    </div>
    <div class="recharge-pay">
      <span>消费积分：</span>
      <strong>300元</strong>
    </div>
    <button class="recharge-btn" @click="showTap">立即兑换</button>
    <div class="recharge-tips">
      <p>温馨提示：</p>
      <span>1、仅限堂食</span>
      <span>2、储值金不可兑现</span>
      <span>3、除锅底外全场通用</span>
    </div>
    <x-dialog v-model="showDialog" hide-on-blur @on-show="jj" @on-hide="bb">
      <div class="exchange-pop">
        <div class="exchange-pop-top">
          <img :src="logo" alt="">
        </div>
        <div class="exchange-pop-bottom">恭喜您，兑换成功！</div>
      </div>
    </x-dialog>
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
    padding: 0;
    .recharge-item {
      flex: 0 0 33.33%;
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
  .exchange-pop {
    .exchange-pop-top {
      background-color: @main-color;
      padding: 0.3rem;
      box-sizing: border-box;
      img {
        width: 4.2rem;
        height: 1.5rem;
      }
    }
    .exchange-pop-bottom {
      background-color: #fff;
      font-size: 0.32rem;
      padding: 1.4rem;
      color: @main-color;
      font-weight: 700;
    }
  }
}
</style>

<script>
import Panel from '@/components/panel'
import { XDialog } from 'vux'
import { Config } from '@/config/config'
export default {
  data () {
    return {
      panelRight: false,
      sumNum: 0,
      rechargeList: [
        {
          sum: 300,
          present: 50
        },
        {
          sum: 500,
          present: 100
        },
        {
          sum: 1000,
          present: 300
        },
        {
          sum: 2000,
          present: 700
        }
      ],
      showDialog: false,
      logo: Config.logo
    }
  },
  components: {
    Panel,
    XDialog
  },
  methods: {
    jj () {
      console.log("出现了")
    },
    bb () {
      console.log("小时看来")
    },
    goWhere (name) {
      this.$router.push({ name: name })
    },

    // 选择充值金额
    sumTap (index) {
      this.sumNum = index
    },

    // 打开弹窗
    showTap () {
      this.showDialog = true
    }
  }
}
</script>

