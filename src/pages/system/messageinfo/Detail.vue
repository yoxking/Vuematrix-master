<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.mssgNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.mssgType}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="标题"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.mtitle}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="收件人"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.mreceiver}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="发件人"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.msender}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="消息内容"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.mcontent}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="消息附件"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.attachfile}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="发送时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.sendTime}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="收件时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.receiveTime}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="阅读状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.readState}}
          </a-form-item>
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
import { getMessageinfo } from '@/api/system/messageinfo'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        mssgNo: '0',
        mtitle: '',
        mssgType: '',
        mreceiver: 1,
        msender: '',
        mcontent: '',
        attachfile: '',
        readState: '',
        receiveTime: '',
        sendTime: '',
        checkState: '',
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
      getMessageinfo(this.id).then(response => {
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
