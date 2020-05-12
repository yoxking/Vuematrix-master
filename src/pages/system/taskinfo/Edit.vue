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
                             prop="taskNo"
                             ref="taskNo">
            <a-input v-model="form.taskNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="任务名称"
                             prop="taskName"
                             ref="taskName">
            <a-input v-model="form.taskName" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="任务分组"
                             prop="taskGroup"
                             ref="taskGroup">
            <a-radio-group v-model="form.taskGroup">
              <a-radio value="0">默认</a-radio>
              <a-radio value="1">系统</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="调用方法"
                             prop="invokeTarget"
                             ref="invokeTarget"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 20}">
            <a-input v-model="form.invokeTarget" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="表达式"
                             prop="taskExpress"
                             ref="taskExpress"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 20}">
            <a-input v-model="form.taskExpress" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="错误策略"
                             prop="errorsPolicy"
                             ref="errorsPolicy">
            <a-radio-group v-model="form.errorsPolicy">
              <a-radio value="1">立即执行</a-radio>
              <a-radio value="2">执行一次</a-radio>
              <a-radio value="3">放弃执行</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="是否并发"
                             prop="concurrent"
                             ref="concurrent">
            <a-radio-group v-model="form.concurrent">
              <a-radio value="1">允许</a-radio>
              <a-radio value="0">禁止</a-radio>
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
              <a-radio value="0">暂停</a-radio>
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
import { getTaskinfo, addTaskinfo, uptTaskinfo } from '@/api/system/taskinfo'

export default {
  name: 'Edit',
  props: { id: String },
  data () {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      form: {
        taskNo: '0',
        taskName: '',
        taskGroup: '0',
        taskExpress: '',
        invokeTarget: '',
        errorsPolicy: '1',
        concurrent: '1',
        checkState: '1',
        comments: ''
      },
      rules: {
        taskName: [
          { required: true, message: '请输入任务名称', trigger: 'change' }
        ],
        taskGroup: [
          { required: true, message: '请输入分组名称', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.taskNo === '0') {
            addTaskinfo(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          } else {
            uptTaskinfo(that.form).then(response => {
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
      getTaskinfo(this.id).then(response => {
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
