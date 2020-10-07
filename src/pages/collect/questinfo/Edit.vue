<template>
  <div class="wrapbox">
    <a-form-model ref="ruleForm"
                  :model="form"
                  :rules="rules"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1"
                    tab="基本信息">
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="编号"
                                 prop="questNo"
                                 ref="questNo">
                <a-input v-model="form.questNo"
                         readOnly />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              &nbsp;
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
                               :tree-data="treeData"
                               placeholder="请选择类型" />
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
              <a-form-model-item label="类别"
                                 prop="questType"
                                 ref="questType">
                <a-radio-group v-model="form.questType">
                  <a-radio value="1">填空题</a-radio>
                  <a-radio value="2">单选题</a-radio>
                  <a-radio value="3">多选题</a-radio>
                </a-radio-group>
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              &nbsp;
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="是否必填"
                                 prop="questMust"
                                 ref="questMust">
                <a-radio-group v-model="form.questMust">
                  <a-radio value="0">非必填</a-radio>
                  <a-radio value="1">必填</a-radio>
                </a-radio-group>
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="总得分"
                                 prop="questScore"
                                 ref="questScore">
                <a-input-number v-model="form.questScore" />
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
        </a-tab-pane>
        <a-tab-pane key="2"
                    tab="配置信息">
          <a-row>
            <a-col :span="24">
              <a-form-model-item label="题目"
                                 prop="questTitle"
                                 ref="questTitle"
                                 :labelCol="{span: 3}"
                                 :wrapperCol="{span: 20}">
                <a-input v-model="form.questTitle" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-model-item label="描述"
                                 prop="questDesc"
                                 ref="questDesc"
                                 :labelCol="{span: 3}"
                                 :wrapperCol="{span: 20}">
                <a-textarea v-model="form.questDesc"
                            placeholder="简介"
                            :autoSize="{ minRows: 3, maxRows: 5 }" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <template  v-if="form.questType!=='1'">
            <a-row v-for="(item,index) in form.options"
                   :key="item.optNo">
              <a-col :span="spanCol">
                <a-form-model-item :label="'选项'+(index+1)">
                  <a-input v-model="item.optTitle" />
                </a-form-model-item>
              </a-col>
              <a-col :span="spanCol">
                <a-form-model-item label="得分">
                  <a-input-number v-model="item.optScore"
                                  style="margin-right:10px;" />
                  <a-button type="primary"
                            shape="circle"
                            size="small"
                            icon="plus"
                            @click="onAddOpt(index)" />
                  <a-button type="danger"
                            shape="circle"
                            size="small"
                            icon="minus"
                            @click="onDelOpt(index)" />
                </a-form-model-item>
              </a-col>
            </a-row>
          </template>
        </a-tab-pane>
      </a-tabs>
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
import { treeQuestclass } from '@/api/collect/questclass'
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
        questType: '1',
        questMust: '1',
        classNo: undefined,
        orderNo: 1,
        questScore: 0,
        options: [{
          optNo: '12',
          optTitle: '选项内容',
          optScore: 0
        }],
        checkState: '1',
        comments: ''
      },
      rules: {
        questTitle: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        classNo: [
          { required: true, message: '请选择类型', trigger: 'change' }
        ],
        orderNo: [
          { required: true, message: '请输入排序值', trigger: 'blur' }
        ],
        questScore: [
          { required: true, message: '请输入总得分', trigger: 'blur' }
        ]
      },
      treeData: []
    }
  },
  methods: {
    getUuid () {
      // const timestamp = +new Date() + ''
      const randomNum = parseInt((1 + Math.random()) * 100) + ''
      return randomNum
    },
    onAddOpt (val) {
      let temp = { optNo: this.getUuid(), optTitle: '选项内容', optScore: 0 }
      this.form.options.splice(val + 1, 0, temp)
    },
    onDelOpt (val) {
      this.form.options.splice(val, 1)
    },
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
    const that = this
    if (this.id !== '') {
      getQuestinfo(this.id).then(response => {
        that.form = response.data
      })
    }
    treeQuestclass().then(response => {
      that.treeData = response.rows
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
