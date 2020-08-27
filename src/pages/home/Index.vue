<template>
  <div>
     <a-button type="primary" @click="onDesign">
      问卷设计
    </a-button>
     <a-button type="primary" @click="onPreview">
      问卷预览
    </a-button>
     <a-button type="primary" @click="onReport">
      问卷统计
    </a-button>
  </div>
</template>
<script>
import cteditor from '@/comps/collection/Cteditor.vue'
import preview from '@/comps/collection/Preview.vue'
import ctviewer from '@/comps/collection/Ctviewer.vue'

export default {
  components: {},
  props: [],
  data () {
    return {
    }
  },
  methods: {
    onDesign () {
      this.$layer.iframe({
        content: {
          content: cteditor,
          parent: this,
          data: {}
        },
        area: ['900px', '600px'],
        title: '问卷设计',
        maxmin: true,
        shade: true,
        shadeClose: false,
        yes: (layerid) => { // 关闭弹窗事件
        },
        cancel: () => { // 关闭弹窗事件
        }
      })
    },
    onPreview () {
      this.$layer.iframe({
        content: {
          content: preview,
          parent: this,
          data: {}
        },
        area: ['900px', '600px'],
        title: '问卷预览',
        maxmin: true,
        shade: true,
        shadeClose: false,
        yes: (layerid) => { // 关闭弹窗事件
        },
        cancel: () => { // 关闭弹窗事件
        }
      })
    },
    onReport () {
      this.$layer.iframe({
        content: {
          content: ctviewer,
          parent: this,
          data: {}
        },
        area: ['900px', '600px'],
        title: '问卷统计',
        maxmin: true,
        shade: true,
        shadeClose: false,
        yes: (layerid) => { // 关闭弹窗事件
        },
        cancel: () => { // 关闭弹窗事件
        }
      })
    }
  }
}
</script>
  <style lang="less" scoped>
</style>
