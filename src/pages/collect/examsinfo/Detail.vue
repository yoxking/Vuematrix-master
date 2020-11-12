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
            {{model.examsNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="测评名称"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsTitle}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="图片"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.examsPoster}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="简介"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.examsDesc}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.classNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="排序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.orderNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="试卷"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.paperNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="测评次数"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsTimes}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="开始时间"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.startTime}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
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
        <a-col :span="spanCol">
          <a-form-item
            label="测评时长"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsDuration}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="及格分数"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsPassmark}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="测试人员"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.examsRusers}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="测评人员"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsAdmin}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="状态"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.checkState}}
          </a-form-item>
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
import { getExamsinfo } from '@/api/collect/examsinfo'

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
        examsNo: '0',
        examsTitle: '',
        examsPoster: '',
        examsDesc: '',
        examsType: '',
        classNo: '',
        orderNo: 1,
        paperNo: '',
        startTime: '',
        enditTime: '',
        examsTimes: 0,
        examsDuration: 100,
        examsPassmark: 60,
        examsRusers: '',
        examsAdmin: '',
        examsRules: '',
        checkState: '1',
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
      getExamsinfo(this.id).then(response => {
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
