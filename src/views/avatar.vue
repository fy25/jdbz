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
      <button>保存</button>
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
export default {
  data () {
    return {
      avatar: '../static/images/avatar.jpg'
    }
  },
  methods: {
    changeImage: function (e) {
      let file = e.target.files[0];
      console.log(file)
      if (file) {
        this.file = file
        console.log(this.file)
        let reader = new FileReader()
        let that = this
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          // 这里的this 指向reader
          that.avatar = this.result
        }
      }
    },
    upload: function () {
      let files = this.$refs.avatarInput.files
      let fileData = {}
      if (files instanceof Array) {
        fileData = files[0]
      } else {
        fileData = this.file
      }
      // console.log('fileData', typeof fileData, fileData)
      let data = new FormData()
      data.append('multfile', fileData)
      data.append('operaType', this.uploadType)
      this.$store.dispatch('UPLOAD_HEAD', data)
        .then(res => {
          console.log(res)
          this.file = '';
          let data = res.data.data;
          this.$emit("upload", data);
          this.$message({
            type: "success",
            message: "上传成功！"
          })
        }).catch(err => {
          console.log(err)
          if (err.data.msg) {
            this.$message({
              type: "error",
              message: err.data.msg
            })
          } else {
            this.$message({
              type: "error",
              message: "上传失败"
            })
          }
        })
    }
  }
}
</script>
