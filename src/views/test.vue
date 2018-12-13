<template>
  <div class="small">{{getCity}}</div>
</template>


<script>
import * as goods from "@/services/goods";
import * as my from "@/services/my";
import * as sign from "@/services/sign";
import store from "@/store/store";
export default {
  data() {
    return {
      jj: "物理"
    };
  },
  created() {
    // goods.goodList().then(res => {
    //   console.log(res);
    // });
    // console.log("1321231231321")
    sign
      .signIn({
        u_mobile: "15852312811",
        u_pas: "123456",
        jdbz: "get_register"
      })
      .then(res => {
        console.log(res);
      });
  },
  methods: {},
  computed: {
    getCity() {
      // return this.$store.getters.getCityFn;
    }
  }
};
</script>

