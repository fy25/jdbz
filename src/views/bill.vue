<template>
  <div class="bill">
    <Panel></Panel>
    <div class="bill-list">
      <div class="bill-item">
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bill{
  padding: 0.3rem;
  box-sizing: border-box;
}
</style>

<script>
import Panel from '@/components/panel'
export default {
  data () {
    return {

    }
  },
  components: {
    Panel
  }
}
</script>

