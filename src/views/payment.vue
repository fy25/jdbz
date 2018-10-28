<template>
  <div class="red-container withdraw">
    <div class="withdraw-panel">
      <div class="withdraw-panel-tit">
        <i class="iconfont icon-saomiao"></i>
        <span>向商家付款</span>
      </div>
      <div class="withdraw-panel-content">
       <img class="qr" src="@/assets/images/qr.jpg" alt="">
       <div class="withdraw-panel-content-bottom">
         <div class="withdraw-panel-content-bottom-top">
           <i class="iconfont icon-money1f"></i>
           <strong>余额</strong>
         </div>
         <p>优先使用此支付方式</p>
       </div>
      </div>
    </div>
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
      .qr{
        width: 3rem;
        height: 3rem;
        margin: 1rem auto;
      }
      .withdraw-panel-content-bottom{
        display: flex;
        flex-direction: column;
        border-top: 1px solid #eee;
        padding-top: .2rem;
        .withdraw-panel-content-bottom-top{
          display: flex;
          align-items: center;
          i{
            color: #FF9500;
          }
          strong{
            font-size: .3rem;
            margin-left: .1rem;
            font-weight: normal;
          }
        }
        p{
          font-size: .2rem;
          padding-left: .3rem;
          box-sizing: border-box;
          margin: .1rem 0 0;
        }
      }
    }
  }
}
</style>

<script>
export default {

}
</script>


