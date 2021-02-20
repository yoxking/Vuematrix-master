<template>
  <div>
    <section ref="print">
      打印内容
      <div class="no-print">不要打印我</div>
    </section>
    <a-button
      type="primary"
      @click="onDesign"
    >
      问卷设计
    </a-button>
    <a-button
      type="primary"
      @click="onPreview"
    >
      问卷预览
    </a-button>
    <a-button
      type="primary"
      @click="onReport"
    >
      问卷统计
    </a-button>
    <a-button
      type="primary"
      @click="onPrint"
    >
      打印测试
    </a-button>
    <a-button
      type="primary"
      @click="onMultiple"
    >
      打开多选
    </a-button>
    <a-button
      type="primary"
      @click="onSingle"
    >
      打开单选
    </a-button>
    <a-button
      type="primary"
      @click="onFireflow"
    >
      测试流程引擎
    </a-button>
  </div>
</template>
<script>
import cteditor from '@/comps/collection/Cteditor.vue'
import preview from '@/comps/collection/Preview.vue'
import ctviewer from '@/comps/collection/Ctviewer.vue'
import multiple from '@/pages/process/goodsinfo/Multiple'
import single from '@/pages/process/goodsinfo/Single'
import { testFireflows } from '@/api/wkflow/fireflows'

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
    },
    onPrint () {
      this.$print(this.$refs.print) // 使用
    },
    onMultiple () {
      this.$layer.iframe({
        content: {
          content: multiple,
          parent: this,
          data: { id: '' }
        },
        area: ['950px', '700px'],
        title: '多选',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
    },
    onSingle () {
      this.$layer.iframe({
        content: {
          content: single,
          parent: this,
          data: { id: '' }
        },
        area: ['950px', '700px'],
        title: '单选',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
    },
    onFireflow () {
      testFireflows().then(response => {
        console.log(response.msg)
      })
    }
  }
}
</script>
  <style lang="less" scoped>
</style>
