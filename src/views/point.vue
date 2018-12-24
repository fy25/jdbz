<template>
  <div class="point common-container">
    <Panel :panel-right="panelRight" path="Exchange" tit="我的积分" rightTit="兑换" :money="money"></Panel>
    <div class="point-list">
      <div class="point-list-tit">积分记录</div>
      <div class="point-item" v-for="(item,index) in pointList" :key="index">
        <div class="point-item-left">
          <span>{{item.i_name}}</span>
          <strong v-if="item.i_state=='1'">+{{item.i_number}}</strong>
          <strong v-if="item.i_state=='0'">-{{item.i_number}}</strong>
        </div>
        <div class="point-item-right">{{item.i_createDate}}</div>
      </div>
      <load-more v-if="nodata" :show-loading="showLoading" tip="暂无数据"></load-more>
      <button v-if="!nodata" class="more-btn">
        <i class="iconfont icon-unfold"></i>
      </button>
    </div>
    <div class="recharge-tips">
      <p>温馨提示：</p>
      <span>1、A邀请B，A得到5积分，B邀请C，B得到5积分，A得到2积分，每桌每次消费都可兑换最多1道任意菜品</span>
      <span>2、消费每十元一个积分，不满十元0积分</span>
      <span>3、仅限堂食</span>
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
      border-bottom: 1px solid #d2d2d2;
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
      .point-item-right {
        font-size: 0.24rem;
        color: #999;
      }
    }
    .point-item:last-child {
      border-bottom: none;
    }
  }
}
</style>

<script>
import Panel from "@/components/panel";
import * as recharge from "@/services/recharge";
import * as my from "@/services/my";
export default {
  data () {
    return {
      panelRight: true,
      pointList: [],
      money: 0,
      showLoading: false,
      nodata: false
    };
  },
  components: {
    Panel
  },
  mounted () {
    this.getPointList();
    this.getPanelMoney();
    this.getOther()
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name });
    },
    getPointList () {
      let data = {
        userId: localStorage.id,
        page: "1",
        jdbz: "get_integral"
      };
      recharge.integration(data).then(res => {
        console.log(res);
        if (res.code == "200") {
          this.pointList = res.data.data;
        } else {
          this.nodata = true;
        }
      });
    },
    // 获取积分
    getOther () {
      let data = {
        id: localStorage.id,
        jdbz: 'get_user_info'
      }
      my.getOther(data).then(res => {
        localStorage.u_integral = res.data.data[0].u_integral
        this.money = parseInt(res.data.data[0].u_integral)
      })
    },
    getPanelMoney () {
      this.money = Number(localStorage.u_integral);
    }
  }
};
</script>

