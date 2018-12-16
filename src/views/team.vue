<template>
  <div class="team">
    <div class="personal-panel">
      <div class="personal-panel-left">
        <img v-if="u_img==''" src="@/assets/images/avatar.jpg" alt>
        <img v-else :src="u_img" alt>
        <div>
          <strong>{{u_name}}</strong>
        </div>
      </div>
      <div class="personal-panel-right">
        <!-- <strong>200.00</strong> -->
        <span>我的佣金</span>
      </div>
    </div>
    <div class="team-list" @click="showTap">
      <div class="team-list-tit">
        <strong>我的团队</strong>
        <span>MY FORT</span>
      </div>
      <div class="team-list-item-container">
        <div class="team-list-item" v-for="(item,index) in firstList" :key="index">
          <img :src="item.u_img" alt>
          <span>{{item.u_name}}</span>
        </div>
      </div>
      <div class="team-list-item-container">
        <div class="team-list-item" v-for="(item,index) in secondList" :key="index">
          <img :src="item.u_img" alt>
          <span>{{item.u_name}}</span>
        </div>
      </div>
    </div>
    <div class="team-record">
      <div class="team-record-tit">消费记录</div>
      <div class="team-record-list">
        <div class="team-record-item" v-for="(item,index) in list" :key="index">
          <strong>{{item.g_name}}消费{{item.o_price}}元</strong>
          <span>{{item.o_createDate}}</span>
        </div>
      </div>
      <load-more v-if="nodata" :show-loading="showLoading" tip="暂无数据"></load-more>
    </div>
  </div>
</template>

<style lang="less" scoped>
.weui-toast {
  height: 4em !important;
}
.team {
  .personal-panel {
    background-color: @main-color;
    height: 3.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    .personal-panel-left {
      display: flex;
      align-items: center;
      img {
        width: 1.28rem;
        height: 1.28rem;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.1rem;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        strong {
          font-size: 0.38rem;
          margin-bottom: 0.15rem;
        }
        span {
          font-size: 0.24rem;
        }
      }
    }
    .personal-panel-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      strong {
        font-size: 0.48rem;
        margin-bottom: 0.15rem;
      }
      span {
        font-size: 0.24rem;
      }
    }
  }
  .team-list {
    background-color: #fff;
    margin-top: 0.2rem;
    padding-bottom: 20px;
    .team-list-tit {
      display: flex;
      align-items: center;
      padding: 0.35rem;
      box-sizing: border-box;
      strong {
        font-size: 0.32rem;
      }
      span {
        font-size: 0.2rem;
        margin-left: 0.2rem;
      }
    }
    .team-list-item-container {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      overflow-x: scroll;
      margin: 20px 0;
      .team-list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem 0.3rem;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        span {
          font-size: 0.2rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
  .team-record {
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 0.2rem;
    .team-record-tit {
      font-size: 0.32rem;
      border-bottom: 1px solid #efefef;
      padding: 0.3rem 0;
      font-weight: 700;
    }
    .team-record-list {
      .team-record-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #efefef;
        padding: 0.3rem 0.05rem;
        box-sizing: border-box;
        strong {
          font-size: 0.24rem;
        }
        span {
          font-size: 0.2rem;
          color: #999;
        }
      }
      .team-record-item:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>

<script>
import { Toast } from "vux";
import * as my from '@/services/my'
export default {
  data () {
    return {
      lock: true,
      show: true,
      time: 5000,
      list: [],
      firstList: [],
      secondList: [],
      u_name: "",
      u_img: "",
      showLoading: false,
      nodata: false
    };
  },
  components: {
    Toast
  },
  mounted () {
    this.getFirstTeam()
    this.getSecondTeam()
    this.getPayList()
    this.getInfo()
  },
  methods: {
    showTap () {
      this.show = true;
    },
    // 一级分销
    getFirstTeam () {
      let data = {
        userId: localStorage.id,
        jdbz: 'get_sales_noe'
      }
      my.firstDistribution(data).then(res => {
        if (res.code == "200") {
          this.firstList = res.data.data

        }
      })
    },
    // 二级分销
    getSecondTeam () {
      let data = {
        userId: localStorage.id,
        jdbz: 'get_sales_two'
      }
      my.secondDistribution(data).then(res => {
        console.log(res, '2')
        if (res.code == "200") {
          this.secondList = res.data.data
        }
      })
    },
    // 消费列表
    getPayList () {
      let data = {
        userId: localStorage.id,
        page: 1,
        jdbz: 'get_order'
      }
      my.orderList(data).then(res => {
        console.log(res, '3')
        if (res.code == "200") {
          if ((res.data.data).length == 0) {
            this.nodata = true
          } else {
            this.list = res.data.data
          }
        } else {
          this.nodata = true
        }
      })
    },
    // 基本信息返回
    getInfo () {
      this.u_name = localStorage.u_name,
        this.u_img = localStorage.u_img
    }
  }
};
</script>


