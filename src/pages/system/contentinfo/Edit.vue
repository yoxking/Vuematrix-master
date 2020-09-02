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
                             prop="contzNo"
                             ref="contzNo">
            <a-input v-model="form.contzNo"
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
            <a-tree-select v-model="form.classNo"
                        :multiple="false"
                        :allow-clear="false"
                        :show-search="false"
                        placeholder="请选择..."
                        :tree-data="treeData" />
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
            <a-date-picker  :format="dateFormat" v-model="form.pubdate" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="18">
          <a-form-model-item label="海报"
                             prop="poster"
                             ref="poster"
                             :labelCol="{span: 4}"
                             :wrapperCol="{span: 19}">
            <a-input v-model="form.poster" />
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
            <vue-editor v-model="form.ncontents" :editor-toolbar="customToolbar" />
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
import { VueEditor } from 'vue2-editor'
import { treeConteeclass } from '@/api/system/conteeclass'
import { getContentinfo, addContentinfo, uptContentinfo } from '@/api/system/contentinfo'

export default {
  name: 'Edit',
  components: { VueEditor },
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
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ],
      dateFormat: 'YYYY-MM-DD',
      form: {
        contzNo: '0',
        title: '',
        classNo: undefined,
        author: '',
        pubdate: this.$moment(this.currentDate(), this.dateFormat),
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
      treeData: []
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.contzNo === '0') {
            addContentinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptContentinfo(that.form).then(response => {
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
      getContentinfo(this.id).then(response => {
        that.form = response.data
        that.form.pubdate = that.$moment(response.data.pubdate, that.dateFormat)
      })
    }
    treeConteeclass().then(response => {
      that.treeData = response.rows
    })
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
