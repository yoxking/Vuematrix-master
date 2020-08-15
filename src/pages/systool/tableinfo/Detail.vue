<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.tableNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="表名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.tableName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="表描述"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.tableComment}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="实体"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.className}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="模板"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.templCategory}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="包名"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.packageName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="模块名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.moduleName}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="业务名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.businessName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="功能名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.functionName}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="选项"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.options}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="功能作者"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.functionAuthor}}
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getTableinfo } from '@/api/systool/tableinfo'

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
      spanCol: 12,
      model: {
        tableNo: '0',
        tableName: '',
        tableComment: '',
        className: '',
        tplCategory: '',
        packageName: '',
        moduleName: '',
        businessName: '',
        functionName: '',
        functionAuthor: '',
        options: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getTableinfo(this.id).then(response => {
        that.model = response.data
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
.btnbox {
  text-align: center;
}
</style>
