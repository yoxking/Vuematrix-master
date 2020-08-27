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
                             prop="questNo"
                             ref="questNo">
            <a-input v-model="form.questNo" readOnly/>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="题目"
                             prop="questTitle"
                             ref="questTitle"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-input v-model="form.questTitle" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="类别"
                             prop="questType"
                             ref="questType">
            <a-radio-group v-model="form.questType">
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
          <a-form-item label="描述"
                             prop="questDesc"
                             ref="questDesc"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.questDesc"
                        placeholder="简介"
                        :autoSize="{ minRows: 3, maxRows: 5 }" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="得分"
                             prop="questScore"
                             ref="questScore">
            <a-input-number v-model="form.questScore" />
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
          <a-form-model-item label="状态"
                             prop="checkState"
                             ref="checkState">
            <a-radio-group v-model="form.checkState">
              <a-radio value="1">正常</a-radio>
              <a-radio value="0">停用</a-radio>
            </a-radio-group>
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
import { getQuestinfo, addQuestinfo, uptQuestinfo } from '@/api/collect/questinfo'

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
        questNo: '0',
        questTitle: '',
        questDesc: '',
        questType: '0',
        classNo: '0',
        orderNo: 1,
        questScore: 0,
        checkState: '1',
        comments: ''
      },
      rules: {
        questTitle: [
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
          if (that.form.questNo === '0') {
            addQuestinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptQuestinfo(that.form).then(response => {
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
      getQuestinfo(this.id).then(response => {
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
