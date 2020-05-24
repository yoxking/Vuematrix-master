<template>
  <div class="wrapbox">
    <a-divider />
    <a-form-model ref="ruleForm"
                  :model="form"
                  :rules="rules"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol">
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="编号"
                             prop="columnNo"
                             ref="columnNo">
            <a-input v-model="form.columnNo" readOnly/>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="所属表单"
                             prop="tbformNo"
                             ref="tbformNo">
            <a-input v-model="form.tbformNo" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="字段名称"
                             prop="columnName"
                             ref="columnName">
            <a-input v-model="form.columnName" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="类型"
                             prop="columnType"
                             ref="columnType">
            <treeselect v-model="form.columnType"
                        :multiple="false"
                        :clearable="false"
                        :searchable="false"
                        :options="options" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="字段编码"
                             prop="columnCode"
                             ref="columnCode">
            <a-input v-model="form.columnCode" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="注释"
                             prop="columnComment"
                             ref="columnComment">
            <a-input v-model="form.columnComment" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="长度"
                             prop="dataLength"
                             ref="dataLength">
            <a-input v-model="form.dataLength" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="默认值"
                             prop="dataDefault"
                             ref="dataDefault">
            <a-input v-model="form.dataDefault" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="是否主键"
                             prop="isPrimkey"
                             ref="isPrimkey">
            <a-radio-group v-model="form.isPrimkey">
              <a-radio value="1">是</a-radio>
              <a-radio value="0">否</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="是否自增"
                             prop="isIncrement"
                             ref="isIncrement">
            <a-radio-group v-model="form.isIncrement">
              <a-radio value="1">是</a-radio>
              <a-radio value="0">否</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="是否必填"
                             prop="isRequired"
                             ref="isRequired">
            <a-radio-group v-model="form.isRequired">
              <a-radio value="1">是</a-radio>
              <a-radio value="0">否</a-radio>
            </a-radio-group>
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
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { getTabcolumn, addTabcolumn, uptTabcolumn } from '@/api/wkflow/tabcolumn'

export default {
  name: 'Edit',
  components: { Treeselect },
  props: { id: String },
  data () {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      form: {
        columnNo: '0',
        tbformNo: '',
        columnName: '',
        columnType: 'varchar',
        columnCode: '',
        columnComment: '',
        dataLength: '10',
        dataDefault: '',
        isPrimkey: '0',
        isIncrement: '0',
        isRequired: '0',
        orderNo: 1,
        checkState: '1',
        comments: ''
      },
      rules: {
        columnName: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ]
      },
      options: [{
        id: 'numeric',
        label: '数字'
      }, {
        id: 'varchar',
        label: '字符串'
      }, {
        id: 'datetime',
        label: '日期时间'
      }, {
        id: 'text',
        label: '长字符串'
      }]
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.columnNo === '0') {
            addTabcolumn(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          } else {
            uptTabcolumn(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    doCancel () {
      this.$emit('close', { code: 202 })
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getTabcolumn(this.id).then(response => {
        that.form = response.data
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
