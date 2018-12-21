<template>
  <div class="select">
    <h3>请选择您喜欢的背景图片</h3>
    <div class="select-list">
      <div
        class="select-item"
        v-for="(item,index) in list"
        :key="index"
        @click="chooseTap(item.id)"
      >
        <div class="select-item-wrapper">
          <img :src="server+item.b_img">
          <div class="cur" v-if="item.id==cur">
            <icon type="success"></icon>
          </div>
        </div>
      </div>
    </div>
    <div class="btn" @click="goPost('Poster')">
      <x-button text="确定"></x-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.select {
  min-height: 100vh;
  background-color: #ba1c22;
  h3 {
    text-align: center;
    color: #fff;
    padding: 20px 0;
  }
  .select-list {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding: 0 20px;
    box-sizing: border-box;
    .select-item {
      margin: 0 10px;
      .select-item-wrapper {
        width: 250px;
        height: 450px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .cur {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 9;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .btn {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 20px;
  }
}
</style>


<script>
import { Icon } from "vux";
import { XButton } from "vux";
import * as bg from "@/services/bg";
import { Config } from "@/config/config"
export default {
  data () {
    return {
      list: [],
      cur: 1,
      server: Config.server,
      id: 0
    };
  },
  components: {
    Icon,
    XButton
  },
  mounted () {
    this.getBg()
  },
  methods: {
    navigateTo (name) {
      this.$router.push({ name: name });
    },
    redirectTo (name) {
      this.$router.replace({ name: name });
    },
    chooseTap (cur) {
      this.cur = cur;
      this.id = cur
    },
    goPost (name) {
      this.$router.push({
        name: name,
        params: {
          id: this.id
        }
      });
    },
    // 获取图片模板
    getBg () {
      this.$vux.loading.show({
        text: "正在加载"
      });
      bg.getBg({ jdbz: "get_backdrop" }).then(res => {
        if (res.code == "200") {
          this.list = res.data.data
          this.id = res.data.data[0].id
          this.$vux.loading.hide()
        } else {
          this.$vux.loading.hide()
        }
      });
    }
  }
};
</script>


