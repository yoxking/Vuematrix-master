<template>
  <div class="wrapbox">
    <br />
    <a-form-model ref="ruleForm"
                  :model="form"
                  :rules="rules"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol">
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="编号"
                             prop="mssgNo"
                             ref="mssgNo">
            <a-input v-model="form.mssgNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="消息类型"
                             prop="mssgType"
                             ref="mssgType">
            <a-radio-group v-model="form.mssgType">
              <a-radio value="0">系统消息</a-radio>
              <a-radio value="1">普通消息</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="标题"
                             prop="mtitle"
                             ref="mtitle"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 20}">
            <a-input v-model="form.mtitle" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="收件人"
                             prop="mreceiver"
                             ref="mreceiver">
            <a-input v-model="form.mreceiver" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="发件人"
                             prop="msender"
                             ref="msender">
            <a-input v-model="form.msender" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="消息内容"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.mcontent"
                        placeholder="消息内容"
                        :autoSize="{ minRows: 5, maxRows: 8 }" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="18">
          <a-form-model-item label="附件"
                             prop="attachfile"
                             ref="attachfile"
                             :labelCol="{span: 4}"
                             :wrapperCol="{span: 19}">
            <a-input v-model="form.attachfile" />
          </a-form-model-item>
        </a-col>
        <a-col :span="6">
          <a-upload name="file"
                    :multiple="true">
            <a-button>
              <a-icon type="upload" /> 上传附件</a-button>
          </a-upload>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="发送时间"
                             prop="sendTime"
                             ref="sendTime">
            <a-date-picker :format="dateFormat" v-model="form.sendTime" />
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
import { getMessageinfo, addMessageinfo, uptMessageinfo } from '@/api/system/messageinfo'

export default {
  name: 'Edit',
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
      spanCol: 12,
      dateFormat: 'YYYY-MM-DD',
      form: {
        mssgNo: '0',
        mtitle: '',
        mssgType: '1',
        mreceiver: '',
        msender: '',
        mcontent: '',
        attachfile: '',
        readState: '0',
        receiveTime: this.$moment(this.currentDate(), this.dateFormat),
        sendTime: this.$moment(this.currentDate(), this.dateFormat),
        checkState: '1',
        comments: ''
      },
      rules: {
        mtitle: [
          { required: true, message: '请输入消息标题', trigger: 'change' }
        ],
        mreceiver: [
          { required: true, message: '请输入收件人', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.mssgNo === '0') {
            addMessageinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptMessageinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    doCancel () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getMessageinfo(this.id).then(response => {
        that.form = response.data
        that.form.sendTime = that.$moment(response.data.sendTime, that.dateFormat)
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
