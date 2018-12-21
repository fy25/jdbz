<template>
  <div class="avatar">
    <div class="img">
      <img :src="avatar">
      <input
        type="file"
        id="avatar"
        @change="changeImage($event)"
        accept="image/gif, image/jpeg, image/jpg, image/png"
      >
    </div>
    <div class="btn">
      <button @click="avatarTap">保存</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  position: relative;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
  }
  #avatar {
    width: 120px;
    height: 120px;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
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
import * as bg from "@/services/bg"
import * as my from "@/services/my"
import { Config } from "@/config/config"
export default {
  data () {
    return {
      avatar: '../static/images/avatar.jpg'
    }
  },
  methods: {
    changeImage: function (e) {
      let file = e.target.files[0];
      if (file) {
        this.file = file
        let reader = new FileReader()
        let that = this
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          // 这里的this 指向reader
          // that.upLoad(e.target.result)
          that.avatar = this.result

        }
      }
    },

    navigateTo (name) {
      this.$router.push({ name: name });
    },
    redirectTo (name) {
      this.$router.replace({ name: name });
    },
    // 上传图片
    upLoad (img) {
      this.$vux.loading.show({
        text: "正在上传照片"
      });
      let data = {
        data: img,
        jdbz: 'uploadImage'
      }
      bg.upLoad(data).then(res => {
        console.log(res)
        this.$vux.loading.hide()
      })
    },

    // 提交头像
    avatarTap () {
      let data = {
        id: localStorage.id,
        img: this.avatar,
        jdbz: 'set_img_url'
      }
      this.$vux.loading.show({
        text: "正在上传"
      });
      my.avatar(data).then(res => {
        if (res.code == "200") {
          this.$vux.loading.hide()
          this.$vux.toast.show({
            type: "success",
            text: "上传成功",
            time: 2000
          });
          localStorage.u_img = res.data.data[0].u_img
          this.redirectTo('Personal')
        } else {
          this.$vux.loading.hide()
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
</script>
