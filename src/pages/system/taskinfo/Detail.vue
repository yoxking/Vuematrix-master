<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.taskNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="任务名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.taskName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="任务分组"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.taskGroup}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="调用方法"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.invokeTarget}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="表达式"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.taskExpress}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="错误策略"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.errorsPolicy}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="是否并发"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.concurrent}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="状态"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.checkState}}
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
import { getTaskinfo } from '@/api/system/taskinfo'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        taskNo: '0',
        taskName: '',
        taskGroup: '0',
        taskExpress: '',
        invokeTarget: '',
        errorsPolicy: '1',
        concurrent: '1',
        checkState: '1',
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
      getTaskinfo(this.id).then(response => {
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
