<template>
  <div class="recharge common-container">
    <Panel :panel-right="panelRight" tit="当前余额（元）" :money="money"></Panel>
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
      <strong>{{rechargeMoney}}元</strong>
    </div>
    <button class="recharge-btn" @click="pay">立即支付</button>
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
    margin: 0.2rem 0;
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
    margin: 0.2rem 0;
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
import Panel from "@/components/panel";
import * as recharge from "@/services/recharge";
import * as other from "@/services/other";
import * as my from "@/services/my";
import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      panelRight: false,
      sumNum: 0,
      rechargeList: [],
      money: 0,
      rechargeMoney: 0,
      top_upid: 0
    };
  },
  components: {
    Panel
  },
  mounted() {
    this.getRechargeMeal();
    this.getOther();
    // this.setConfig();
    // window.location = "WeZ/CZ_WeiPay.aspx?top_upid=1&userid=9";
  },
  methods: {
    goWhere(name) {
      this.$router.push({ name: name });
    },
    // 获取余额
    getOther() {
      let data = {
        id: localStorage.id,
        jdbz: "get_user_info"
      };
      my.getOther(data).then(res => {
        this.money = parseInt(res.data.data[0].u_balance);
      });
    },

    getRechargeMeal() {
      recharge.rechargeMeal({ jdbz: "get_top_up" }).then(res => {
        this.rechargeList = res.data.data;
        this.rechargeMoney = res.data.data[0].t_money;
        this.top_upid = res.data.data[0].id;
      });
    },

    // 选择充值金额
    sumTap(index) {
      this.sumNum = index;
      this.rechargeMoney = this.rechargeList[index].t_money;
      this.top_upid = this.rechargeList[index].id;
    },

    // 验证config
    setConfig() {
      let data = {
        jdbz: "get_secret_id",
        url: location.href.split("#")[0]
      };
      other.setConfig(data).then(res => {
        console.log(res);
        wx.config({
          debug: res.debug,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: res.jsApiList
        });
      });
    },

    // 下单
    pay() {
      // console.log("1312312");
      // let data = {
      //   userId: "1",
      //   top_upid: "1",
      //   jdbz: "set_top_up"
      // };
      // recharge.pay(data).then(res => {
      //   console.log(res);
      // });
      window.location =
        "WeZ/CZ_WeiPay.aspx?top_upid=" +
        this.top_upid +
        "&userid=" +
        localStorage.getItem("id");
    }
  }
};
</script>

