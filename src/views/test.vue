<template>
  <div>dasda</div>
</template>

<style lang="less" scoped>
@import "../assets/css/common.less";
.bill {
  .bill-list {
    margin-top: 0.5rem;
    .bill-item {
      height: 1.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.32rem;
      background-color: #fff;
      padding: 0 0.2rem 0 0.15rem;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0 0 10px #ddd;
      margin-bottom: 0.2rem;
      .bill-item-left {
        display: flex;
        align-items: center;
        img {
          width: 0.68rem;
          height: 0.68rem;
          border-radius: 50%;
        }
        strong {
          margin-left: 0.3rem;
        }
      }
      .bill-item-right {
        color: @main-color;
      }
    }
  }
}
</style>

<script>
import Panel from "@/components/panel";
import * as goods from "@/services/goods";
export default {
  data() {
    return {
      panelRight: true
    };
  },
  components: {
    Panel
  },
  created() {
    goods.goodList().then(res => {
      console.log(res);
    });
  },
  methods: {
    goWhere(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

