<template>
  <div>
      <a-button type="primary" @click="openNode">添加节点</a-button>
  </div>
</template>

<script>
import flow from './Flow'

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
    openNode: function () {
      this.$dlg.modal(flow, {
        title: '流程设计',
        width: 1280,
        height: 750
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
