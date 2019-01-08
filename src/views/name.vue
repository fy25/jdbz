<template>
  <div class="setting">
    <group>
      <x-input title="新昵称" v-model="u_name"></x-input>
    </group>
    <button class="out" @click="nameTap">确认修改</button>
  </div>
</template>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 0.3rem;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
}
.out {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.28rem;
  color: #fff;
  background-color: #ba1c22;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px 60px;
}
.ywImg {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
</style>

<script>
import * as my from "@/services/my"
import { XInput, Group } from "vux";
export default {
  components: {
    XInput,
    Group,
  },
  data () {
    return {
      u_name: ''
    }
  },
  mounted () {
  },
  methods: {
    nameTap () {
      let { u_name } = this
      console.log(u_name)
      if (u_name == "") {
        this.$vux.alert.show({
          title: "请填写新昵称"
        });
      } else {
        my.name({
          id: localStorage.id,
          u_name: u_name,
          jdbz: 'set_user_info'
        }).then(res => {
          console.log(res)
          if (res.code == "200") {
            this.$vux.toast.show({
              type: "success",
              text: "修改成功",
              time: 2000
            });
            localStorage.u_name = res.data.data[0].u_name
            setTimeout(() => {
              this.redirectTo('Personal')
            }, 2000)
          } else {
            this.$vux.toast.show({
              type: "warn",
              text: "修改失败",
              time: 2000
            });
          }
        })

      }
    },
    navigateTo (name) {
      this.$router.push({ name: name });
    },
    redirectTo (name) {
      this.$router.replace({ name: name });
    }
  }
};
</script>


