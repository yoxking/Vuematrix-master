<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form-model ref="ruleForm"
                  :model="configInfo"
                  :rules="rules"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol">
      <a-form-model-item label="站点名称"
                         prop="siteName"
                         ref="siteName">
        <a-input v-model="configInfo.siteName"
                 placeholder="站点名称" />
      </a-form-model-item>
      <a-form-model-item label="站点网址"
                         prop="siteUrl"
                         ref="siteUrl">
        <a-input v-model="configInfo.siteUrl"
                 placeholder="站点网址" />
      </a-form-model-item>
      <a-form-model-item label="站点编码"
                         prop="appCode"
                         ref="appCode">
        <a-input v-model="configInfo.appCode"
                 placeholder="站点编码" />
      </a-form-model-item>
      <a-form-model-item label="数据库连接"
                         prop="connStr"
                         ref="connStr">
        <a-textarea v-model="configInfo.connStr"
                    placeholder="数据库连接"
                    :autoSize="{ minRows: 3, maxRows: 5 }" />
      </a-form-model-item>
      <a-form-model-item label="站点描述"
                         prop="siteDesc"
                         ref="siteDesc">
        <a-textarea v-model="configInfo.siteDesc"
                    placeholder="站点描述"
                    :autoSize="{ minRows: 3, maxRows: 5 }" />
      </a-form-model-item>
      <a-form-model-item label="运行状态"
                         prop="runState"
                         ref="runState">
        <a-radio-group v-model="configInfo.runState">
          <a-radio value="1">运行</a-radio>
          <a-radio value="0">停用</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item :wrapperCol="{span: 10, offset: 3}">
        <a-button type="primary" @click="saveSetting">保存</a-button>
        <a-button style="margin-left: 8px">关闭</a-button>
      </a-form-model-item>
    </a-form-model>
  </a-card>
</template>

<script>
import { getConfigInfo, saveConfigInfo } from '@/api/setting'

export default {
  name: 'SysSetting',
  data () {
    return {
      labelCol: { span: 3 },
      wrapperCol: { span: 10 },
      configInfo: {
        siteName: '',
        siteUrl: '',
        appCode: '',
        connStr: '',
        siteDesc: '',
        runState: '1'
      },
      rules: {
        siteName: [
          { required: true, message: '请输入站点名称', trigger: 'change' }
        ],
        siteUrl: [
          { required: true, message: '请输入站点地址', trigger: 'change' }
        ],
        appCode: [
          { required: true, message: '请输入站点编码', trigger: 'change' }
        ],
        connStr: [
          { required: true, message: '请输入数据库连接', trigger: 'change' }
        ],
        siteDesc: [
          { required: true, message: '请输入站点描述', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.getSetting()
  },
  methods: {
    getSetting () {
      const that = this
      getConfigInfo().then(response => {
        that.configInfo = response.data
      })
    },
    saveSetting () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          saveConfigInfo(that.configInfo).then(response => {
            that.$message.success(response.msg)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
