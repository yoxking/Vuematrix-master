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
                             prop="userNo"
                             ref="userNo">
            <a-input v-model="form.userNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="账号"
                             prop="loginName"
                             ref="loginName">
            <a-input v-model="form.loginName" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="用户类型"
                             prop="userType"
                             ref="userType">
            <a-radio-group v-model="form.userType">
              <a-radio value="0">系统</a-radio>
              <a-radio value="1">普通</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="姓名"
                             prop="userCnname"
                             ref="userCnname">
            <a-input v-model="form.userCnname" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="部门"
                             prop="deptNo"
                             ref="deptNo">
            <a-tree-select v-model="form.deptNo"
                        :multiple="false"
                        :allow-clear="false"
                        :show-search="false"
                        :tree-data="treeData"
                        placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="性别"
                             prop="sex"
                             ref="sex">
            <a-radio-group v-model="form.sex">
              <a-radio value="1">男</a-radio>
              <a-radio value="0">女</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="18">
          <a-form-model-item label="头像"
                             prop="avatar"
                             ref="avatar"
                             :labelCol="{span: 4}"
                             :wrapperCol="{span: 19}">
            <a-input v-model="form.avatar" />
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
          <a-form-model-item label="电话"
                             prop="telephone"
                             ref="telephone">
            <a-input v-model="form.telephone" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="邮箱"
                             prop="email"
                             ref="email">
            <a-input v-model="form.email" />
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
import { treeDeptment } from '@/api/system/department'
import { getRuserinfo, addRuserinfo, uptRuserinfo } from '@/api/system/ruserinfo'

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
        userNo: '0',
        loginName: '',
        userCnname: '',
        userEnname: '',
        deptNo: '',
        userType: '1',
        telephone: '',
        email: '',
        sex: '1',
        avatar: '',
        checkState: '1',
        comments: ''
      },
      rules: {
        loginName: [
          { required: true, message: '请输账号', trigger: 'blur' }
        ],
        userCnname: [
          { required: true, message: '请输入中文姓名', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入电话', trigger: 'blur' }
        ],
        deptNo: [
          { required: true, message: '请选择所属部门', trigger: 'change' }
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
          if (that.form.userNo === '0') {
            addRuserinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptRuserinfo(that.form).then(response => {
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
      getRuserinfo(this.id).then(response => {
        that.form = response.data
      })
    }
    treeDeptment().then(response => {
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
