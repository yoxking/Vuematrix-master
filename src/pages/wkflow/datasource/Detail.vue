<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dtsrcNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="数据源名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dtsrcName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dtsrcType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="Url"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.dtsrcUrl}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="用户名"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.username}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="密码"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.password}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="数据库名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dbaseName}}
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
import { getDatasource } from '@/api/wkflow/datasource'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        dtsrcNo: '0',
        dtsrcName: '',
        dtsrcType: '00',
        dtsrcUrl: '',
        dbaseName: '',
        username: '',
        password: '',
        orderNo: 1,
        checkState: '1',
        comments: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$dlg.closeAll()
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getDatasource(this.id).then(response => {
        that.model = response.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapbox {
    margin: 0;
    padding: 0;
  }
  .btnbox {
    text-align: center;
  }
</style>
