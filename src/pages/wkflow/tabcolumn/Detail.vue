<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.columnNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="所属表单"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.tbformNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="字段名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.columnName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.columnType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="字段编码"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.columnCode}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="注释"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.columnComment}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="长度"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dataLength}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="默认值"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dataDefault}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="是否主键"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.isPrimkey}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="是否自增"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.isIncrement}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="是否必填"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.isRequired}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="排序"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.orderNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.checkState}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="备注"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.comments}}
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
import { getTabcolumn } from '@/api/wkflow/tabcolumn'

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
        columnNo: '0',
        tbformNo: '',
        columnName: '',
        columnType: '00',
        columnCode: '',
        columnComment: '',
        dataLength: '',
        dataDefault: '',
        isPrimkey: '',
        isIncrement: '',
        isRequired: '',
        orderNo: 1,
        checkState: '1',
        comments: ''
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
      getTabcolumn(this.id).then(response => {
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
