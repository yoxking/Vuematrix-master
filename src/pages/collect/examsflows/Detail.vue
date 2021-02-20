<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="编号"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.mflowNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="测评名称"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.examsNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="问卷名称"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.paperNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="人员"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.ruserNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            label="开始时间"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.startTime}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="结束时间"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.enditTime}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            label="时长"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsDuration}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="得分"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsTscore}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            label="状态"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.checkState}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="备注"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
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
import { getExamsflows } from '@/api/collect/examsflows'

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
        mflowNo: '0',
        examsNo: '',
        paperNo: '',
        ruserNo: '',
        startTime: '',
        enditTime: '',
        examsDuration: 1,
        examsTscore: '',
        mflowState: '1',
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
      getExamsflows(this.id).then(response => {
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
  width: 100%;
}
.btnbox {
  text-align: center;
}
</style>
