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
import Panel from '@/components/panel'
import * as recharge from "@/services/recharge"
export default {
  data () {
    return {
      panelRight: true,
      pointList: [],
      money: 0,
      showLoading: false,
      nodata: false
    }
  },
  components: {
    Panel
  },
  mounted () {
    this.getPointList()
    this.getPanelMoney()
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name })
    },
    getPointList () {
      let data = {
        userId: localStorage.id,
        page: '1',
        jdbz: 'get_integral'
      }
      recharge.integration(data).then(res => {
        console.log(res)
        if (res.code == "200") {
          this.pointList = res.data.data
        } else {
          this.nodata = true
        }
      })
    },
    getPanelMoney () {
      this.money = Number(localStorage.u_integral)
    },
  }
}
</script>

