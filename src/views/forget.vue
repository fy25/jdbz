<template>
  <div>
    <group>
      <x-input title="手机号" v-model="value"></x-input>
    </group>
  </div>
</template>
 
<style lang="less" scoped>
</style>

<script>
import { XInput } from "vux";
import { Group } from "vux";

export default {
  components: {
    XInput,
    Group
  }
};
</script>


