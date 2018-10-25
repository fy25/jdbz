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
    <div class="team-list">
      <div class="team-list-tit">
        <strong>我的团队</strong>
        <span> MY FORT</span>
      </div>
      <Scroller scrollbar-x :lock-y="lock">
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
      </Scroller>
    </div>
  </div>
</template>

<style lang="less" scoped>
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
    .team-list-item {
      // display: flex;
      // align-items: center;
      width: auto;
      white-space: nowrap;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
  }
}
</style>

<script>
import { Scroller } from 'vux'
export default {
  data () {
    return {
      lock: true
    }
  },
  components: {
    Scroller
  }
}
</script>


