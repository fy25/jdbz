<template>
  <div class="team">
    <div class="personal-panel">
      <div class="personal-panel-left">
        <img src="@/assets/logo.png" alt="">
        <div>
          <strong>我不是德布劳内</strong>
        </div>
      </div>
      <div class="personal-panel-right">
        <strong>200.00</strong>
        <span>我的佣金</span>
      </div>
    </div>
    <div class="team-list" @click="showTap">
      <div class="team-list-tit">
        <strong>我的团队</strong>
        <span> MY FORT</span>
      </div>
      <!-- <Scroller scrollbar-x :lock-y="lock">
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
          <img src="@/assets/logo.png" alt="">
        </div>
      </Scroller> -->
      <div class="team-list-item-container">
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
      </div>
      <div class="team-list-item-container">
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
        <div class="team-list-item">
          <img src="@/assets/logo.png" alt="">
          <span>拉拉那</span>
        </div>
      </div>
    </div>

    <div class="jj">
      <toast v-model="show" :time="time" type="cancel" width="4em" height="4em" text="去你的小杰瑞"></toast>
    </div>
    
  </div>
</template>

<style lang="less" scoped>
.weui-toast{
  height: 4em!important;
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
        margin: 0 20px;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        span {
          font-size: 0.3rem;
        }
      }
    }
  }
  .jj{
    width: 12px;
  }
}
</style>

<script>
import { Toast } from "vux";
export default {
  data() {
    return {
      lock: true,
      show: true,
      time: 5000
    };
  },
  components: {
    Toast
  },
  methods: {
    showTap() {
      this.show = true;
    }
  }
};
</script>


