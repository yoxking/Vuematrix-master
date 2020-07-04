<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.loginNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="登录用户"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.loginName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="登录时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.loginTime}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="IP地址"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.ipAddress}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="浏览器"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.browser}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="登录地点"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.location}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="操作系统"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.os}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="登录状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.status}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="消息"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.message}}
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
import { getLogininfo } from '@/api/system/logininfo'

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
        loginNo: '0',
        loginName: '',
        loginTime: '',
        ipAddress: '',
        location: '',
        browser: '',
        os: '',
        status: '',
        message: '',
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
      getLogininfo(this.id).then(response => {
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
