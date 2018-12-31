<template>
  <div class="bill common-container">
    <Panel :panel-right="panelRight" path="Recharge" tit="我的余额（元）" rightTit="充值" :money="money"></Panel>
    <div class="bill-list">
      <div class="bill-item" v-for="(item,index) in list" :key="index">
        <div class="bill-item-left">
          <!-- <img src="@/assets/logo.png" alt> -->
          <strong>{{item.t_createDate}}</strong>
          <span v-if="item.t_state=='0'" style="color:#FFBE00">(未支付)</span>
          <span v-if="item.t_state=='1'" style="color:#09BB07">(支付成功)</span>
          <span v-if="item.t_state=='2'" style="color:#F76260">(取消支付)</span>
        </div>
        <div class="bill-item-right">{{item.t_money}}元</div>
      </div>
      <load-more v-if="nodata" :show-loading="showLoading" tip="暂无数据"></load-more>
    </div>
    <button v-if="!nodata" class="more-btn">
      <i class="iconfont icon-unfold"></i>
    </button>
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
        span {
          font-size: 0.26rem;
          margin-left: 10px;
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
import Panel from "@/components/panel";
import * as recharge from "@/services/recharge";
import * as my from "@/services/my";
export default {
  data() {
    return {
      panelRight: true,
      list: [],
      money: 0,
      showLoading: false,
      nodata: false
    };
  },
  components: {
    Panel
  },
  mounted() {
    this.getBillList();
    // this.getPanelMoney();
    this.getOther();
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
    // getPanelMoney() {
    //   this.money = Number(localStorage.u_balance);
    // },
    getBillList() {
      this.$vux.loading.show({
        text: "正在加载"
      });
      let data = {
        userId: localStorage.id,
        page: "1",
        jdbz: "get_top_log"
      };
      recharge.integration(data).then(res => {
        console.log(res);
        if (res.code == "200") {
          this.list = res.data.data;
          this.$vux.loading.hide();
        } else {
          this.nodata = true;
          this.$vux.loading.hide();
        }
      });
    }
  }
};
</script>

