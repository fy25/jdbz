<template>
  <div class="share">
    <img src="@/assets/images/share-bg.jpg" alt="">
    <button @click="shareTap">立即<br>分享</button>
    <div v-transfer-dom>
    <Popup v-model="popShow">
      <div class="share-panel">
        <div class="share-panel-tit">
          <i></i>
          <span>分享到</span>
          <i class="iconfont -icon-email"></i>
        </div>
        <div class="share-panel-content">
          <div class="share-panel-content-item" @click="goWhere('Poster')">
            <img src="@/assets/images/wechat.png" alt="">
            <span>微信好友</span>
          </div>
          <div class="share-panel-content-item" @click="goWhere('Poster')">
            <img src="@/assets/images/pyq.png" alt="">
            <span>朋友圈</span>
          </div>
        </div>
      </div>
    </Popup>

    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../assets/css/common.less";
.share {
  width: 100%;
  height: 100vh;
  position: fixed;
  img {
    width: 100%;
    height: 100%;
  }
  button {
    width: 1.4rem;
    height: 1.1rem;
    background-color: @main-color;
    position: absolute;
    right: 0.5rem;
    bottom: 1rem;
    border: none;
    outline: none;
    font-size: 0.3rem;
    color: #fff;
    border-radius: 3px;
  }
}
.share-panel {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .share-panel-tit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.3rem;
    box-sizing: border-box;
    span {
      font-size: 0.28rem;
      color: #666;
    }
  }
  .share-panel-content {
    display: flex;
    align-items: center;
    padding: 0.3rem 0.4rem 0.6rem;
    box-sizing: border-box;
    .share-panel-content-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      img {
        width: 1rem;
        height: 1rem;
      }
      span {
        font-size: 0.24rem;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>

<script>
import { Popup, TransferDomDirective as TransferDom } from 'vux'
export default {
  data () {
    return {
      popShow: false
    }
  },
  directives: {
    TransferDom
  },
  components: {
    Popup
  },
  methods: {
    shareTap () {
      this.popShow = true
    },
    goWhere (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>


