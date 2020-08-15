<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-checkbox-group
      v-model="tableImpt"
      name="checkboxgroup"
      :options="tableList"
    />
    </a-form>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doImport" type="primary">导入</a-button>
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { listDbTable, importTable } from '@/api/systool/tableinfo'

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
      tableList: [],
      tableImpt: []
    }
  },
  methods: {
    doImport () {
      if (this.tableImpt.length > 0) {
        const that = this
        importTable(this.tableImpt.join(',')).then(response => {
          that.$layer.msg(response.msg)
          that.$parent.getDataSource()
          that.$layer.close(that.layerid)
        })
      }
    },
    doClose () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    const that = this
    listDbTable().then(response => {
      if (response.msg !== '') {
        that.tableList = response.msg.split(',')
      }
    })
  }
}
</script>

<style lang="less" scoped>
.wrapbox {
  margin: 0;
  padding: 10px;
  width:100%;
}
.btnbox {
  text-align: center;
}
</style>
