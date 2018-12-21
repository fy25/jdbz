<template>
  <div class="poster">
    <img class="bg" :src="imgSrc">
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
import * as other from "@/services/other";
import { encode } from "punycode";
export default {
  data () {
    return {
      imgSrc: null
    };
  },
  mounted () {
    this.getPic();
  },
  methods: {
    getPic () {
      console.log(this.$route.params.id);
      let params = "http://guanchencanyin.com/index.html?userid=" + localStorage.id;
      params = encodeURIComponent(params);
      let imgSrc = "http://guanchencanyin.com/Api/get_common.ashx?data=" + params + "&jdbz=get_bj_q_r_code&id=" + this.$route.params.id;
      console.log(imgSrc)
      this.imgSrc = imgSrc;
    }
  }
};
</script>

