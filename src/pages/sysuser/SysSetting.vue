<template>
  <div class="wrapbox">
    <br />
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
    </a-form-model>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doOk" type="primary">确定</a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>
import { getConfigInfo, saveConfigInfo } from '@/api/setting'

export default {
  name: 'SysSetting',
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
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
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
          { required: true, message: '请输入站点名称', trigger: 'blur' }
        ],
        siteUrl: [
          { required: true, message: '请输入站点地址', trigger: 'blur' }
        ],
        appCode: [
          { required: true, message: '请输入站点编码', trigger: 'blur' }
        ],
        connStr: [
          { required: true, message: '请输入数据库连接', trigger: 'blur' }
        ],
        siteDesc: [
          { required: true, message: '请输入站点描述', trigger: 'blur' }
        ],
        runState: [
          { required: true, message: '请选择运行状态', trigger: 'change' }
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
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          saveConfigInfo(that.configInfo).then(response => {
            // that.$message.success(response.msg)
            that.$layer.msg(response.msg)
            that.$layer.close(that.layerid)
          })
        } else {
          that.$layer.msg('输入有误，请重新输入!')
          return false
        }
      })
    },
    doCancel () {
      this.$layer.close(this.layerid)
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
