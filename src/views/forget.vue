<template>
  <div>
    <group>
      <div class="code">
        <x-input title="手机号" v-model="u_mobile"></x-input>
        <button @click="getCode">发送验证码</button>
      </div>
      <x-input title="验证码" v-model="u_code"></x-input>
      <x-input title="新密码" v-model="u_pas"></x-input>
    </group>
    <div class="btn">
      <button @click="changePas">完成</button>
    </div>
  </div>
</template>
 
<style lang="less" scoped>
.code {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: #ba1c22;
    color: #fff;
    font-size: 12px;
    outline: none;
    border: none;
    padding: 5px 10px;
    box-sizing: border-box;
    margin-right: 10px;
    border-radius: 4px;
    width: 100px;
  }
}
.btn {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 100px;
  button {
    background-color: #ba1c22;
    color: #fff;
    font-size: 14px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
  }
}
</style>

<script>
import { XInput } from "vux";
import { Group } from "vux";
import * as code from "@/services/code"
import * as my from "@/services/my"
export default {
  components: {
    XInput,
    Group
  },
  data () {
    return {
      u_mobile: null,
      u_pas: null,
      u_code: null
    }
  },
  methods: {
    getCode () {
      let data = {
        u_type: '2',
        u_mobile: this.u_mobile,
        jdbz: "get_mobile_is_code"
      };
      code.getCode(data).then(res => {
        console.log(res);
        if (res.code == "200") {
          this.$vux.toast.show({
            type: "success",
            text: "已发送",
            time: 2000
          });
          this.disabled = true
        } else {
          this.$vux.toast.show({
            type: "warn",
            text: res.message,
            time: 2000
          });
        }
      });
    },

    // 修改密码
    changePas () {
      let data = {
        u_mobile: this.u_mobile,
        u_pas: this.u_pas,
        u_code: this.u_code,
        jdbz: 'get_mobile_pas',
      }
      my.changePas(data).then(res => {
        if (res.code == "200") {
          this.$vux.toast.show({
            type: "success",
            text: "修改成功",
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
};
</script>


