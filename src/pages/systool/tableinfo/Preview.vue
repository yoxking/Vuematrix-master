<template>
  <div class="wrapbox">
    <a-tabs>
      <a-tab-pane v-for="(value, key) in previewData"
          :tab="key.substring(key.lastIndexOf('/')+1,key.indexOf('.vm'))"
          :key="key"
      >
        <pre>{{ value }}</pre>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { previewTable } from '@/api/systool/tableinfo'

export default {
  name: 'Detail',
  props: {
    layerid: {// 自动注入的layerid
      type: String,
      default: ''
    },
    id: {// 传递的数据
      type: String,
      default: ''
    },
    lydata: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      previewData: {}
    }
  },
  methods: {
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      previewTable(this.id).then(response => {
        that.previewData = response.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapbox {
  margin: 0;
  padding: 10px;
  width:100%;
}
</style>
