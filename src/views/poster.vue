<template>
  <div class="poster">
    <img class="bg" :src="imgSrc">
    <div>{{imgSrc}}</div>
  </div>
</template>


<style lang="less" scoped>
@import "../assets/css/common.less";
.poster {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  .bg {
    width: 100%;
    height: 100%;
  }
  .qr {
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 50%;
    transform: translateX(-50%);
    top: 5rem;
  }
}
</style>

<script>
import * as other from "@/services/other"
export default {
  data () {
    return {
      imgSrc: null
    }
  },
  mounted () {
    this.getPic()
  },
  methods: {

    getPic () {
      // let data = {
      //   data: 'www.baidu.com',
      //   jdbz: 'get_q_r_code'
      // }
      // other.sharePic(data).then(res => {
      //   console.log(res)
      //   this.imgSrc = res
      // })
      let imgSrc = 'http://guanchencanyin.com/Api/get_common.ashx?jdbz=get_bj_q_r_code&data=http://guanchencanyin.com/#/&userid=' + localStorage.id
      this.imgSrc = imgSrc
    }
  }
}
</script>

