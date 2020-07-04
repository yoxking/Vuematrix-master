<template>
  <div>
     <a-button type="primary" @click="onTest">
      Primary
    </a-button>
  </div>
</template>
<script>
import formTest from './Form.vue'

export default {
  components: {},
  props: [],
  data () {
    return {
    }
  },
  methods: {
    onTest () {
      this.$layer.iframe({
        content: {
          content: formTest,
          parent: this,
          data: {}
        },
        area: ['900px', '600px'],
        title: '这是一个标题',
        maxmin: true,
        shade: true,
        shadeClose: false,
        yes: (layerid) => { // 关闭弹窗事件
          alert('关闭iframe1')
        },
        cancel: () => { // 关闭弹窗事件
          alert('关闭iframe2')
        }
      })
    }
  }
}
</script>
  <style lang="less" scoped>
</style>
