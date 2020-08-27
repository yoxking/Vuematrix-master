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
                             prop="paperNo"
                             ref="paperNo">
            <a-input v-model="form.paperNo" readOnly/>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="标题"
                             prop="paperTitle"
                             ref="paperTitle"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-input v-model="form.paperTitle" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="类别"
                             prop="paperType"
                             ref="paperType">
            <a-radio-group v-model="form.paperType">
              <a-radio value="0">行政</a-radio>
              <a-radio value="1">市场</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="类型"
                             prop="classNo"
                             ref="classNo">
            <a-radio-group v-model="form.classNo">
              <a-radio value="0">行政</a-radio>
              <a-radio value="1">市场</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="标题"
                             prop="paperDesc"
                             ref="paperDesc"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-input v-model="form.paperDesc" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="得分"
                             prop="paperScore"
                             ref="paperScore">
            <a-input-number v-model="form.paperScore" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="排序"
                             prop="orderNo"
                             ref="orderNo">
            <a-input-number v-model="form.orderNo" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="规则"
                             prop="rulesQuests"
                             ref="rulesQuests">
            <a-input v-model="form.rulesQuests" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="对象"
                             prop="paperRusers"
                             ref="paperRusers">
            <a-input v-model="form.paperRusers" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="开始日期"
                             prop="startDate"
                             ref="startDate">
            <a-input v-model="form.startDate" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="结束日期"
                             prop="enditDate"
                             ref="enditDate">
            <a-input v-model="form.enditDate" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="时长"
                             prop="duration"
                             ref="duration">
            <a-input-number v-model="form.duration" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="状态"
                             prop="checkState"
                             ref="checkState">
            <a-radio-group v-model="form.checkState">
              <a-radio value="1">正常</a-radio>
              <a-radio value="0">停用</a-radio>
            </a-radio-group>
          </a-form-model-item>
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
    </div><br /><br />
  </div>
</template>

<script>
import { getPaperinfo, addPaperinfo, uptPaperinfo } from '@/api/collect/paperinfo'

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
        paperNo: '0',
        paperTitle: '',
        paperType: '0',
        paperDesc: '',
        classNo: '0',
        orderNo: 1,
        paperScore: '',
        rulesQuests: '',
        paperQuests: '',
        paperRusers: '',
        startDate: '',
        enditDate: '',
        duration: '',
        checkState: '1',
        comments: ''
      },
      rules: {
        paperTitle: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.paperNo === '0') {
            addPaperinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptPaperinfo(that.form).then(response => {
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
      getPaperinfo(this.id).then(response => {
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
    width:100%;
  }
  .btnbox {
    text-align: center;
  }
</style>
