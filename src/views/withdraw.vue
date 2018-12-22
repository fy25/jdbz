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
          <input type="text" name placeholder="提现金额" v-model="money">
        </div>
        <!-- <div class="withdraw-panel-content-bottom">
          <span>本次可提现￥1000.00，</span>
          <button>全部体现</button>
        </div>-->
      </div>
    </div>
    <group>
      <x-input title="账户名称" v-model="d_name"></x-input>
      <x-input title="打款账号" v-model="d_account"></x-input>
      <popup-picker
        title="提现方式"
        v-model="d_type"
        :data="typeList"
        :columns="1"
        :fixed-columns="1"
        show-name
      ></popup-picker>
    </group>
    <button class="withdraw-btn" @click="withdraw">提现</button>
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
    margin-top: 30px;
  }
}
</style>

<script>
import * as my from '@/services/my'
import { PopupPicker } from "vux";
import { XInput } from "vux";
import { Group } from "vux";
export default {
  data () {
    return {
      money: 0,
      d_name: null,
      d_account: null,
      typeList: [
        {
          name: "微信",
          value: "1"
        },
        {
          name: "支付宝",
          value: "2"
        },
        {
          name: "现金",
          value: "3"
        }
      ],
      d_type: []
    }
  },
  components: {
    PopupPicker,
    XInput,
    Group
  },
  mounted () { },
  methods: {
    withdraw () {
      let data = {
        userId: localStorage.id,
        money: this.money,
        "d_type": this.d_type[0],
        d_name: this.d_name,
        d_account: this.d_account,
        jdbz: 'get_brokerage_withdraw'
      }
      if (this.money == 0) {
        this.$vux.toast.show({
          type: "warn",
          text: "提现不得小于0元",
          time: 2000
        });
      } else if (this.d_type == [] || this.d_name == null || this.d_account == null) {
        this.$vux.toast.show({
          type: "warn",
          text: "请输入完整信息",
          time: 2000
        });
      } else {
        my.withdraw(data).then(res => {
          console.log(res)
          if (res.code == "200") {
            this.$vux.toast.show({
              type: "success",
              text: "提交成功",
              time: 2000
            });
          } else {
            this.$vux.toast.show({
              type: "warn",
              text: res.message,
              time: 2000
            });
          }
        })

      }
    }
  }
}
</script>


