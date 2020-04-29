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
                             prop="contzNo"
                             ref="contzNo">
            <a-input v-model="form.contzNo" readOnly/>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="标题"
                             prop="title"
                             ref="title"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 20}">
            <a-input v-model="form.title" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="类型"
                             prop="classNo"
                             ref="classNo">
            <treeselect v-model="form.classNo"
                        :multiple="false"
                        :clearable="false"
                        :searchable="false"
                        :options="options" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="作者"
                             prop="author"
                             ref="author">
            <a-input v-model="form.author" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="发布时间"
                             prop="pubdate"
                             ref="pubdate">
            <j-date-picker v-model="form.pubdate" ></j-date-picker>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="海报"
                             prop="poster"
                             ref="poster"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 20}">
            <a-input v-model="form.poster" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="摘要"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.abstracts"
                        placeholder="摘要"
                        :autoSize="{ minRows: 3, maxRows: 5 }" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="正文"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.ncontents"
                        placeholder="正文"
                        :autoSize="{ minRows: 5, maxRows: 8 }" />
          </a-form-item>
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
import { getContentinfo, getClasslist, addContentinfo, uptContentinfo } from '@/api/system/contentinfo'

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
        contzNo: '0',
        title: '',
        classNo: '',
        author: '',
        pubdate: '',
        poster: '',
        abstracts: '',
        ncontents: '',
        checkState: '1',
        comments: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'change' }
        ],
        author: [
          { required: true, message: '请输入作者', trigger: 'change' }
        ]
      },
      options: []
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.contzNo === '0') {
            addContentinfo(that.form).then(response => {
              that.$message.success(response.msg)
              that.$emit('close', { code: response.code })
            })
          } else {
            uptContentinfo(that.form).then(response => {
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
    const that = this
    if (this.id !== '') {
      getContentinfo(this.id).then(response => {
        that.form = response.data
      })
    }
    getClasslist().then(response => {
      that.options = response.rows
    })
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
