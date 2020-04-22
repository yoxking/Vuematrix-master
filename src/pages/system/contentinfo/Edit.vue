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
                             prop="branchNo"
                             ref="branchNo">
            <a-input v-model="form.branchNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="名称"
                             prop="branchName"
                             ref="branchName">
            <a-input v-model="form.branchName" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="类型"
                             prop="branchType"
                             ref="branchType">
            <a-input v-model="form.branchType" />
          </a-form-model-item>
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
import { getContentinfo, addContentinfo, uptContentinfo } from '@/api/system/contentinfo'

export default {
  name: 'Edit',
  props: { id: String },
  data () {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      form: {
        branchNo: '0',
        branchName: '',
        branchType: '',
        orderNo: 1,
        master: '',
        telephone: '13888888888',
        email: '',
        summary: ''
      },
      rules: {
        branchName: [
          { required: true, message: '请输入名称', trigger: 'change' },
          { min: 3, max: 5, message: '名称长度小于5', trigger: 'change' }
        ],
        branchType: [
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
          if (that.form.branchNo === '0') {
            addContentinfo(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          } else {
            uptContentinfo(that.form).then(response => {
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
      getContentinfo(this.id).then(response => {
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