<template>
  <div class="small">{{getCity}}</div>
</template>


<script>
import * as goods from "@/services/goods";
import * as my from "@/services/my";
import * as sign from "@/services/sign";
import * as other from "@/services/other";
import store from "@/store/store";
export default {
  data() {
    return {
      jj: "物理"
    };
  },
  created() {
    sign
      .getPic({
        jdbz: "get_activity"
      })
      .then(res => {
        console.log(res);
      });
    // console.log("1321231231321")
    other
      .access({
        grant_type: "client_credential",
        appid: "wxf44173c998fde5bb",
        secret: "866f7f46e201c0c7cb3830711df0d57c"
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

