<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.taskLogno}}
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
        <a-col :span="spanCol">
          <a-form-item label="调用目标"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.invokeTarget}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="结果状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.resultStatus}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="任务消息"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.taskMessage}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="异常信息"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.errorsMessage}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="开始时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.startTime}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="完成时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.enditTime}}
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
import { getTaskelog } from '@/api/systool/taskelog'

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
        taskLogno: '0',
        taskName: '',
        taskGroup: '',
        taskMessage: '',
        invokeTarget: '',
        resultStatus: '',
        errorsMessage: '',
        startTime: '',
        enditTime: '',
        checkState: '',
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
      getTaskelog(this.id).then(response => {
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
