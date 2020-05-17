<template>
  <div class="wrapbox">
    <a-divider />
    <a-form-model ref="ruleForm"
                  :model="form"
                  :rules="rules"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol">
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="编号"
                             prop="flowNo"
                             ref="flowNo">
            <a-input v-model="form.flowNo" readOnly/>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="名称"
                             prop="flowName"
                             ref="flowName">
            <a-input v-model="form.flowName" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="类型"
                             prop="flowType"
                             ref="flowType">
            <a-radio-group v-model="form.flowType">
              <a-radio value="00">行政</a-radio>
              <a-radio value="01">市场</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="状态"
                             prop="checkState"
                             ref="checkState">
            <a-radio-group v-model="form.checkState">
              <a-radio value="1">正常</a-radio>
              <a-radio value="0">停用</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="备注"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.comments"
                        placeholder="备注信息"
                        :autoSize="{ minRows: 3, maxRows: 5 }" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form-model>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doOk"
                type="primary">确定</a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>
import { getWorkflows, addWorkflows, uptWorkflows } from '@/api/wkflow/workflows'

export default {
  name: 'Edit',
  props: { id: String },
  data () {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      form: {
        flowNo: '0',
        flowName: '',
        flowType: '00',
        checkState: '1',
        comments: ''
      },
      rules: {
        flowName: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.flowNo === '0') {
            addWorkflows(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          } else {
            uptWorkflows(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    doCancel () {
      this.$emit('close', { code: 202 })
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getWorkflows(this.id).then(response => {
        that.form = response.data
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
