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
                             prop="appNo"
                             ref="appNo">
            <a-input v-model="form.appNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="中文名称"
                             prop="appCnname"
                             ref="appCnname">
            <a-input v-model="form.appCnname" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="英文名称"
                             prop="appEnname"
                             ref="appEnname">
            <a-input v-model="form.appEnname" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="应用编码"
                             prop="appCode"
                             ref="appCode">
            <a-input v-model="form.appCode" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="应用类型"
                             prop="classNo"
                             ref="classNo">
            <a-input v-model="form.classNo" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="应用URL"
                             prop="appUrl"
                             ref="appUrl">
            <a-input v-model="form.appUrl" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="应用版本"
                             prop="appVer"
                             ref="appVer">
            <a-input v-model="form.appVer" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="邮箱"
                             prop="email"
                             ref="email">
            <a-input v-model="form.email" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="排序"
                             prop="orderNo"
                             ref="orderNo">
            <a-input-number v-model="form.orderNo" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="简介"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.summary"
                        placeholder="简介"
                        :autoSize="{ minRows: 5, maxRows: 8 }" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="加密狗ID"
                             prop="edogNo"
                             ref="edogNo">
            <a-input v-model="form.edogNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="加密狗型号"
                             prop="edogType"
                             ref="edogType">
            <a-input v-model="form.edogType" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="注册时间"
                             prop="registDate"
                             ref="registDate">
            <a-input v-model="form.registDate" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="有效期至"
                             prop="activeDate"
                             ref="activeDate">
            <a-input v-model="form.activeDate" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="注册数量"
                             prop="activeCount"
                             ref="activeCount">
            <a-input-number v-model="form.activeCount" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="注册码"
                             prop="activeCode"
                             ref="activeCode">
            <a-input v-model="form.activeCode" />
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
import { getAppinfo, addAppinfo, uptAppinfo } from '@/api/system/appinfo'

export default {
  name: 'Edit',
  props: { id: String },
  data () {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      form: {
        appNo: '0',
        appCnname: '',
        appEnname: '',
        appCode: '',
        classNo: '',
        orderNo: '1',
        appUrl: '',
        appVer: '1.0',
        email: '',
        summary: '',
        edogType: 1,
        registDate: '',
        activeDate: '',
        activeCount: 1,
        activeCode: '',
        checkState: '1',
        comments: ''
      },
      rules: {
        appCnname: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ],
        appCode: [
          { required: true, message: '请输入编码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.appNo === '0') {
            addAppinfo(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          } else {
            uptAppinfo(that.form).then(response => {
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
      getAppinfo(this.id).then(response => {
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
