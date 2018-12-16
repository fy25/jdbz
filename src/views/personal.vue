<template>
  <div class="personal">
    <div class="personal-panel">
      <div class="personal-panel-left" @click="goWhere('Setting')">
        <img v-if="u_img==''" src="@/assets/images/avatar.jpg" alt>
        <img v-else :src="u_img" alt>
        <div>
          <strong>{{u_name}}</strong>
          <span>积分{{u_integral}}</span>
        </div>
      </div>
      <div class="personal-panel-right" @click="goWhere('Bill')">
        <strong>{{u_balance}}</strong>
        <span>余额</span>
      </div>
    </div>
    <div class="personal-share">
      <div class="personal-share-item" @click="goWhere('Share')">
        <div class="personal-share-left">
          <div>
            <strong>分享好友</strong>
            <img src="@/assets/images/hot.png" alt>
          </div>
          <span>分享好友得佣金</span>
        </div>
        <i class="iconfont icon-enter"></i>
      </div>
      <div class="personal-share-line"></div>
      <div class="personal-share-item" @click="goWhere('Payment')">
        <div class="personal-share-left">
          <div>
            <strong>付款码</strong>
          </div>
          <span>充值更优惠</span>
        </div>
        <i class="iconfont icon-enter"></i>
      </div>
    </div>
    <div class="personal-tab">
      <div class="personal-tab-tit">
        <div class="personal-tab-tit-left">
          <strong>我的钱包</strong>
          <span>MY WALLET</span>
        </div>
        <div class="personal-tab-tit-right" @click="goWhere('Bill')">
          <span>我的账单</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div class="personal-tab-wrapper">
        <div class="personal-tab-wrapper-item" @click="goWhere('Recharge')">
          <i class="iconfont icon-recharge"></i>
          <strong>我的储值</strong>
        </div>
        <div class="personal-tab-wrapper-item" @click="goWhere('Point')">
          <i class="iconfont icon-gift"></i>
          <strong>我的积分</strong>
        </div>
        <div class="personal-tab-wrapper-item" @click="goWhere('Brokerage')">
          <i class="iconfont icon-money"></i>
          <strong>我的佣金</strong>
        </div>
        <div class="personal-tab-wrapper-item" @click="goWhere('Team')">
          <i class="iconfont icon-team"></i>
          <strong>我的团队</strong>
        </div>
      </div>
    </div>
    <div class="personal-activity">
      <div class="personal-activity-top">
        <strong>商家优惠活动</strong>
        <span class="uppercase">Merciless activity</span>
      </div>
      <div class="personal-activity-tit" @click="show = !show">
        <div class="personal-activity-tit-left">
          <img src="@/assets/images/favourable.png" alt>
          <span>{{title}}</span>
        </div>
        <i class="iconfont icon-unfold"></i>
      </div>
      <transition name="slide-fade">
        <div v-if="show" class="personal-activity-content">{{cont}}</div>
      </transition>
    </div>
    <div class="personal-contact">
      <div class="personal-contact-tit" @click="show2 = !show2">
        <span>门店及电话</span>
        <i class="iconfont icon-unfold"></i>
      </div>
      <transition name="slide-fade">
        <div v-if="show2" class="personal-contact-content">
          <div class="personal-contact-content-left">
            <strong>玖鼎坝子火锅店（徐州店）</strong>
            <span>泉山区矿山路枫林绿洲6-1-107</span>
            <strong>0516-87771555</strong>
          </div>
          <a href="tel:0516-87771555" class="personal-contact-content-right">
            <img src="../assets/images/tel.png" alt>
          </a>
        </div>
      </transition>
    </div>
    <div class="personal-ad">
      <p>禾界网络提供技术支持</p>
      <p>15162153777</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
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
      margin-right: 0.3rem;
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
.personal-share {
  background-color: #c13339;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 0.17rem 0;
  .personal-share-item {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0.28rem 0.1rem 0.46rem;
    box-sizing: border-box;
    .personal-share-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 0.15rem;
        img {
          width: 0.6rem;
          height: 0.3rem;
          margin-left: 0.15rem;
        }
      }
      strong {
        font-size: 0.25rem;
      }
      span {
        font-size: 0.2rem;
      }
    }
  }
  .personal-share-line {
    width: 1px;
    height: 1rem;
    background-color: #fff;
    transform: scaleX(0.5);
  }
}
.personal-tab {
  margin-top: 0.2rem;
  width: 100%;
  background-color: #fff;
  padding: 0.36rem 0.3rem;
  box-sizing: border-box;
  .personal-tab-tit {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    .personal-tab-tit-left {
      display: flex;
      align-items: center;
      strong {
        font-size: 0.26rem;
        color: #000;
        font-weight: 700;
      }
      span {
        font-size: 0.2rem;
        color: #000;
        margin-left: 0.2rem;
      }
    }
    .personal-tab-tit-right {
      display: flex;
      align-items: center;
      color: #a8a8a8;
      span {
        font-size: 0.2rem;
      }
    }
  }
  .personal-tab-wrapper {
    display: flex;
    align-items: center;
    .personal-tab-wrapper-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      strong {
        font-size: 0.24rem;
        color: #474747;
        margin-top: 0.2rem;
      }
      i {
        font-size: 0.6rem;
      }
    }
  }
}
.personal-activity {
  margin-top: 0.2rem;
  .personal-activity-top {
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 0.9rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
    strong {
      font-size: 0.26rem;
      color: #000;
      font-weight: 700;
    }
    span {
      font-size: 0.2rem;
      color: #000;
      margin-left: 0.2rem;
    }
  }
  .personal-activity-tit {
    background-color: #fff;
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6rem;
    box-sizing: border-box;
    border-bottom: 1px solid #cccccc;
    .personal-activity-tit-left {
      display: flex;
      align-items: center;
      img {
        width: 0.38rem;
        height: 0.38rem;
        margin-right: 0.15rem;
      }
      span {
        font-size: 0.24rem;
      }
    }
  }
  .personal-activity-content {
    font-size: 0.28rem;
    background-color: #f7f7f7;
    padding: 0.6rem;
    box-sizing: border-box;
  }
}
.personal-contact {
  .personal-contact-tit {
    background-color: #fff;
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6rem;
    box-sizing: border-box;
    border-bottom: 1px solid #cccccc;
    span {
      font-size: 0.24rem;
    }
  }
  .personal-contact-content {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    box-sizing: border-box;
    .personal-contact-content-left {
      display: flex;
      flex-direction: column;
      font-size: 0.26rem;
      align-items: flex-start;
      justify-content: center;
      span {
        margin: 0.28rem 0;
      }
    }
    .personal-contact-content-right {
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
}
.personal-ad {
  background-color: #fff;
  font-size: 0.18rem;
  padding: 0.5rem;
  box-sizing: border-box;
  text-align: center;
  color: #ccc;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.jb {
  color: #c13339;
  background-color: #c13339;
}
</style>

<script>
import * as my from "@/services/my"
export default {
  data () {
    return {
      show: true,
      show2: false,
      u_name: "",
      u_balance: "",
      u_integral: "",
      u_img: "",
      title: '',
      cont: ''
    }
  },
  mounted () {
    this.setInfo()
    this.getActivity()
    if (!localStorage.id) {
      this.redirectTo('Login')
    }
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name })
    },
    redirectTo (name) {
      this.$router.replace({ name: name });
    },
    setInfo () {
      this.u_name = localStorage.u_name
      this.u_balance = localStorage.u_balance
      this.u_integral = localStorage.u_integral
      this.u_img = localStorage.u_img
      this.id = localStorage.id
    },
    // 获取商家活动
    getActivity () {
      my.activity({
        jdbz: 'get_discounts_info'
      }).then(res => {
        if (res.code = "200") {
          this.title = res.data.data[0].title
          this.cont = decodeURIComponent(res.data.data[0].cont)
        }
      })
    }
  },
}
</script>


