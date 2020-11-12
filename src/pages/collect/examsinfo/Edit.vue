<template>
  <div class="wrapbox">
    <br />
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="编号"
            prop="examsNo"
            ref="examsNo"
          >
            <a-input
              v-model="form.examsNo"
              readOnly
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="测评标题"
            prop="examsTitle"
            ref="examsTitle"
          >
            <a-input v-model="form.examsTitle" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="类型"
            prop="examsType"
            ref="examsType"
          >
            <a-radio-group v-model="form.examsType">
              <a-radio value="1">手动生成</a-radio>
              <a-radio value="2">随机生成</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="图片"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            <a-input v-model="form.examsPoster" />
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
            <a-textarea
              v-model="form.examsDesc"
              placeholder="简介"
              :autoSize="{ minRows: 3, maxRows: 5 }"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="类型"
            prop="classNo"
            ref="classNo"
          >
            <a-input v-model="form.classNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="排序"
            prop="orderNo"
            ref="orderNo"
          >
            <a-input-number v-model="form.orderNo" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="试卷"
            prop="paperNo"
            ref="paperNo"
          >
            <a-input v-model="form.paperNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="测评次数"
            prop="examsTimes"
            ref="examsTimes"
          >
            <a-input v-model="form.examsTimes" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="开始时间"
            prop="startTime"
            ref="startTime"
          >
            <a-input v-model="form.startTime" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="结束时间"
            prop="enditTime"
            ref="enditTime"
          >
            <a-input v-model="form.enditTime" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="测评时长"
            prop="examsDuration"
            ref="examsDuration"
          >
            <a-input v-model="form.examsDuration" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="及格分数"
            prop="examsPassmark"
            ref="examsPassmark"
          >
            <a-input v-model="form.examsPassmark" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="测试人员"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
            prop="examsRusers"
            ref="examsRusers"
          >
            <a-input v-model="form.examsRusers" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="测评人员"
            prop="examsAdmin"
            ref="examsAdmin"
          >
            <a-input v-model="form.examsAdmin" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="状态"
            prop="checkState"
            ref="checkState"
          >
            <a-radio-group v-model="form.checkState">
              <a-radio value="1">正常</a-radio>
              <a-radio value="0">停用</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="备注"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            <a-textarea
              v-model="form.comments"
              placeholder="备注信息"
              :autoSize="{ minRows: 3, maxRows: 5 }"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form-model>
    <a-divider />
    <div class="btnbox">
      <a-button
        @click="doOk"
        type="primary"
      >确定</a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>
import { getExamsinfo, addExamsinfo, uptExamsinfo } from '@/api/collect/examsinfo'

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
      form: {
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
      },
      rules: {
        branchName: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.examsNo === '0') {
            addExamsinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptExamsinfo(that.form).then(response => {
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
      getExamsinfo(this.id).then(response => {
        that.form = response.data
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
