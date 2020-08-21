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
                             prop="rentNo"
                             ref="rentNo">
            <a-input v-model="form.rentNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="中文名称"
                             prop="rcnname"
                             ref="rcnname">
            <a-input v-model="form.rcnname" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="英文名称"
                             prop="renname"
                             ref="renname">
            <a-input v-model="form.renname" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="租户类型"
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
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="服务URL"
                             prop="appUrl"
                             ref="appUrl">
            <a-input v-model="form.appUrl" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="服务版本"
                             prop="appVer"
                             ref="appVer">
            <a-input v-model="form.appVer" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="手机"
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
        <a-col :span="24">
          <a-form-item label="简介"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.summary"
                        placeholder="简介"
                        :autoSize="{ minRows: 5, maxRows: 8 }" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="加密狗ID"
                             prop="edogNo"
                             ref="edogNo">
            <a-input v-model="form.edogNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="加密狗型号"
                             prop="edogType"
                             ref="edogType">
            <a-input v-model="form.edogType" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="注册日期"
                             prop="registDate"
                             ref="registDate">
            <a-date-picker :popupStyle="{ zIndex: 6000 }" v-model="form.registDate" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="有效期至"
                             prop="activeDate"
                             ref="activeDate">
            <a-date-picker :popupStyle="{ zIndex: 6000 }" v-model="form.activeDate" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="注册数量"
                             prop="activeCount"
                             ref="activeCount">
            <a-input-number v-model="form.activeCount" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="注册码"
                             prop="activeCode"
                             ref="activeCode">
            <a-input v-model="form.activeCode" />
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
import { getRenterinfo, getClasslist, addRenterinfo, uptRenterinfo } from '@/api/system/renterinfo'

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
        rentNo: '0',
        rcnname: '',
        renname: '',
        classNo: '',
        orderNo: '1',
        appUrl: '',
        appVer: '1.0',
        telephone: '',
        email: '',
        summary: '',
        edogNo: '',
        edogType: 1,
        registDate: '',
        activeDate: '',
        activeCount: 1,
        activeCode: '',
        checkState: '1',
        comments: '',
        appCode: ''
      },
      rules: {
        appCnname: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ],
        appCode: [
          { required: true, message: '请输入编码', trigger: 'change' }
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
          if (that.form.rentNo === '0') {
            addRenterinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptRenterinfo(that.form).then(response => {
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
      getRenterinfo(this.id).then(response => {
        that.form = response.data
      })
    }
    getClasslist().then(response => {
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
