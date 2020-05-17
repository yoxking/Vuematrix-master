<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.oplogNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="系统模块"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.oplogTitle}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="请求方式"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.requestType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="登录信息"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.opertName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="请求方式"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.opertUrl}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="操作方法"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.methodName}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="请求参数"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.jsonResult}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="返回参数"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.errorMsg}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="操作状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.opertStatus}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="操作时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.opertTime}}
          </a-form-item>
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
import { getOperatelog } from '@/api/system/operatelog'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        oplogNo: '0',
        oplogTitle: '',
        oplogType: '',
        methodName: '',
        requestType: '',
        opertType: '',
        opertName: '',
        deptName: '',
        opertUrl: '',
        opertIp: '',
        opertLocation: '',
        opertParams: '',
        jsonResult: '',
        opertStatus: '',
        errorMsg: '',
        opertTime: '',
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
      getOperatelog(this.id).then(response => {
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
