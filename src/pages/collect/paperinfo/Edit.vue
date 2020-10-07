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
            <a-input v-model="form.paperNo"
                     readOnly />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="标题"
                       prop="paperTitle"
                       ref="paperTitle"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-input v-model="form.paperTitle" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="类型"
                             prop="classNo"
                             ref="classNo">
            <a-tree-select v-model="form.classNo"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="pclassTree"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="类别"
                             prop="paperType"
                             ref="paperType">
            <a-radio-group v-model="form.paperType">
              <a-radio value="1">公开</a-radio>
              <a-radio value="2">私有</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="18">
          <a-form-model-item label="图片"
                             prop="paperPoster"
                             ref="paperPoster"
                             :labelCol="{span: 4}"
                             :wrapperCol="{span: 19}">
            <a-input v-model="form.paperPoster" />
          </a-form-model-item>
        </a-col>
        <a-col :span="6">
          <a-upload name="file"
                    :multiple="true">
            <a-button>
              <a-icon type="upload" /> 上传图片</a-button>
          </a-upload>
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
          <a-form-model-item label="题库类型"
                             prop="questClass"
                             ref="questClass">
            <a-tree-select v-model="form.questClass"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="qclassTree"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="题集规则"
                             prop="questRules"
                             ref="questRules">
            <a-radio-group v-model="form.questRules">
              <a-radio value="1">所有题集</a-radio>
              <a-radio value="2">随机生成</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="对象"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}"
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
            <a-date-picker v-model="form.startDate"
                           :format="dateFormat" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="结束日期"
                             prop="enditDate"
                             ref="enditDate">
            <a-date-picker v-model="form.enditDate"
                           :format="dateFormat" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="时长"
                             prop="exDuration"
                             ref="exDuration">
            <a-input-number v-model="form.exDuration" />分钟
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
          <a-form-model-item label="备注"
                       prop="paperDesc"
                       ref="paperDesc"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.paperDesc"
                        placeholder="备注"
                        :autoSize="{ minRows: 3, maxRows: 5 }" />
          </a-form-model-item>
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
import { treePaperclass } from '@/api/collect/paperclass'
import { treeQuestclass } from '@/api/collect/questclass'
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
      dateFormat: 'YYYY-MM-DD',
      form: {
        paperNo: '0',
        paperTitle: '',
        paperPoster: '',
        paperType: '1',
        paperDesc: '',
        classNo: undefined,
        orderNo: 1,
        questClass: undefined,
        questRules: '1',
        paperScore: 100,
        paperQuests: '',
        paperRusers: '',
        startDate: this.$moment(this.currentDate(), this.dateFormat),
        enditDate: this.$moment(this.currentDate(), this.dateFormat),
        exDuration: 120,
        checkState: '1',
        comments: ''
      },
      rules: {
        paperTitle: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        classNo: [
          { required: true, message: '请选择类型', trigger: 'change' }
        ],
        orderNo: [
          { required: true, message: '请输入排序值', trigger: 'blur' }
        ],
        paperScore: [
          { required: true, message: '请输入总得分', trigger: 'blur' }
        ]
      },
      pclassTree: [],
      qclassTree: []
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
    const that = this
    if (this.id !== '') {
      getPaperinfo(this.id).then(response => {
        that.form = response.data
        that.form.startDate = that.$moment(response.data.startDate, that.dateFormat)
        that.form.enditDate = that.$moment(response.data.enditDate, that.dateFormat)
      })
    }
    treePaperclass().then(response => {
      that.pclassTree = response.rows
    })
    treeQuestclass().then(response => {
      that.qclassTree = response.rows
    })
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
