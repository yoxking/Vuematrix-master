<template>
  <div>
      <a-button type="primary" @click="openNode">添加节点</a-button>
      <a-button type="primary" @click="openForm">添加表单</a-button>
  </div>
</template>

<script>
import form from './Form'

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
    openNode: function () {
    },
    openForm: function () {
      this.$dlg.modal(form, {
        title: '表单设计',
        width: 1280,
        height: 750
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
