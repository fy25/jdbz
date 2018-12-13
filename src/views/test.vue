<template>
  <div class="small"></div>
</template>


<script>
import * as goods from "@/services/goods";
import * as my from "@/services/my";
import * as sign from "@/services/sign";
import store from "@/store/store";
export default {
  data () {
    return {
      jj: "物理"
    };
  },
  created () {
    sign.getPic({
      jdbz: "get_activity"
    }).then(res => {
      console.log(res);
    });
    // console.log("1321231231321")
    // my.brokerageList().then(res => {
    //   console.log("13212313213");
    // });
    // console.log(this);
  },
  methods: {}
};
</script>

