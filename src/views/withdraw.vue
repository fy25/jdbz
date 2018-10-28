<template>
  <div class="red-container withdraw">
    <div class="withdraw-panel">
      <div class="withdraw-panel-tit">
        <i class="iconfont icon-saomiao"></i>
        <span>到账金额</span>
      </div>
      <div class="withdraw-panel-content">
        <strong>提现金额</strong>
        <div class="withdraw-panel-content-input">
          <span>￥</span>
          <input type="number" name="" placeholder="提现金额" id="">
        </div>
        <div class="withdraw-panel-content-bottom">
          <span>本次可提现￥1000.00，</span>
          <button>全部体现</button>
        </div>
      </div>
    </div>
    <button class="withdraw-btn">提现</button>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
.withdraw {
  .withdraw-panel {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    .withdraw-panel-tit {
      display: flex;
      align-items: center;
      color: @main-color;
      padding: 0.25rem 0.3rem 0.2rem;
      box-sizing: border-box;
      background: linear-gradient(#f2f2f2, #fff);
      i {
        font-size: 0.5rem;
        margin-right: 0.2rem;
      }
      span {
        font-size: 0.32rem;
      }
    }
    .withdraw-panel-content {
      padding: 0.18rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      strong {
        font-size: 0.32rem;
        color: #000;
        margin: 0.4rem 0;
      }
      .withdraw-panel-content-input {
        display: flex;
        align-items: center;
        padding-bottom: 0.3rem;
        span {
          font-size: 0.5rem;
          color: #000;
        }
        input {
          outline: none;
          border: none;
          font-size: 0.5rem;
          margin-left: 0.1rem;
        }
      }
      .withdraw-panel-content-bottom {
        display: flex;
        padding: 0.3rem 0.1rem;
        box-sizing: border-box;
        align-items: center;
        border-top: 1px solid #f2f2f2;
        span {
          font-size: 0.24rem;
          color: #999;
        }
        button {
          border: none;
          outline: none;
          font-size: 0.3rem;
          color: @main-color;
          background: transparent;
        }
      }
    }
  }
  .withdraw-btn {
    background-color: #fff;
    font-size: 0.35rem;
    color: @main-color;
    width: 100%;
    outline: none;
    border: none;
    height: 0.8rem;
    border-radius: 8px;
  }
}
</style>

<script>
export default {

}
</script>


