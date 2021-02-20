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
        <a-col :span="24">
          <a-form-item
            label="测评名称"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.examsTitle}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
<<<<<<< HEAD
            label="测评名称"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsTitle}}
=======
            label="类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.classNo}}
>>>>>>> dev
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="类别"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsType}}
<<<<<<< HEAD
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
=======
>>>>>>> dev
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
<<<<<<< HEAD
            label="类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.classNo}}
=======
            label="来源"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.dataFrom}}
>>>>>>> dev
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="浏览类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.viewType}}
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
            label="考试说明"
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
<<<<<<< HEAD
            label="试卷"
=======
            label="问卷"
>>>>>>> dev
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.paperNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
<<<<<<< HEAD
            label="测评次数"
=======
            label="考试次数"
>>>>>>> dev
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsTimes}}
<<<<<<< HEAD
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
=======
>>>>>>> dev
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
<<<<<<< HEAD
            label="测试人员"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.examsRusers}}
=======
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
>>>>>>> dev
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
<<<<<<< HEAD
            label="测评人员"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsAdmin}}
=======
            label="考试限时"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsDuration}}
>>>>>>> dev
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
<<<<<<< HEAD
=======
            label="合格分数"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsPassmark}}
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
            {{model.examsRusers}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="管理员"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.examsAdmin}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="排序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.orderNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
>>>>>>> dev
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
<<<<<<< HEAD
        examsType: '',
        classNo: '',
        orderNo: 1,
        paperNo: '',
        startTime: '',
        enditTime: '',
        examsTimes: 0,
        examsDuration: 100,
=======
        examsType: '1',
        dataFrom: '管理后台',
        viewType: '1',
        classNo: '',
        orderNo: 1,
        papaerNo: '',
        startTime: '',
        enditTime: '',
        examsTimes: 1,
        examsProfile: '',
        examsDuration: 60,
>>>>>>> dev
        examsPassmark: 60,
        examsRusers: '',
        examsAdmin: '',
        examsRules: '',
<<<<<<< HEAD
=======
        examsState: '1',
>>>>>>> dev
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
