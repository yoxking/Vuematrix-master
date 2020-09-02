<template>
  <div class="wrapbox">
    <br />
    <a-steps :current="current">
      <a-step v-for="item in steps"
              :key="item.title"
              :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <a-form-model ref="ruleForm"
                    :model="form"
                    :rules="rules"
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol">
        <div v-if="current==0">
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
        </div>
        <div v-if="current==1">
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="账号"
                                 prop="username"
                                 ref="username">
                <a-input v-model="form.username" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="密码"
                                 prop="password"
                                 ref="password">
                <a-input v-model="form.password" />
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
        </div>
        <div v-if="current==2">
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
                <a-date-picker :format="dateFormat"
                               v-model="form.registDate" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="有效期至"
                                 prop="activeDate"
                                 ref="activeDate">
                <a-date-picker :format="dateFormat"
                               v-model="form.activeDate" />
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
        </div>
        <div v-if="current==3"
             class="descbox">
          <a-descriptions title="初始化信息校验结果">
            <a-descriptions-item label="中文名称">
              {{form.rcnname}}
              <a-icon type="check-circle"
                      v-if="form.rcnname!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.rcnname===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="英文名称">
              {{form.renname}}
              <a-icon type="check-circle"
                      v-if="form.renname!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.renname===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="类型">
              {{form.classNo}}
              <a-icon type="check-circle"
                      v-if="form.classNo!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.classNo===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="账号">
              {{form.username}}
              <a-icon type="check-circle"
                      v-if="form.username!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.username===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="电话">
              {{form.telephone}}
              <a-icon type="check-circle"
                      v-if="form.telephone!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.telephone===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="邮箱">
              {{form.email}}
              <a-icon type="check-circle"
                      v-if="form.email!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.email===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="服务Url">
              {{form.appUrl}}
              <a-icon type="check-circle"
                      v-if="form.appUrl!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.appUrl===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="服务Ver">
              {{form.appVer}}
              <a-icon type="check-circle"
                      v-if="form.appVer!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.appVer===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="加密狗编号">
              {{form.edogNo}}
              <a-icon type="check-circle"
                      v-if="form.edogNo!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.edogNo===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="加密狗型号">
              {{form.edogType}}
              <a-icon type="check-circle"
                      v-if="form.edogType!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.edogType===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="注册日期">
              {{form.registDate}}
              <a-icon type="check-circle"
                      v-if="form.registDate!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.registDate===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="有效日期">
              {{form.activeDate}}
              <a-icon type="check-circle"
                      v-if="form.activeDate!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.activeDate===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="注册数量">
              {{form.activeCount}}
              <a-icon type="check-circle"
                      v-if="form.activeCount!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.activeCount===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="注册码">
              {{form.activeCode}}
              <a-icon type="check-circle"
                      v-if="form.activeCode!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.activeCode===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
            <a-descriptions-item label="状态">
              {{form.checkState}}
              <a-icon type="check-circle"
                      v-if="form.checkState!==''"
                      theme="twoTone"
                      two-tone-color="#52c41a" />
              <a-icon type="close-circle"
                      v-if="form.checkState===''"
                      theme="twoTone"
                      two-tone-color="#eb2f96" />
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </a-form-model>
    </div>
    <div class="steps-action">
      <a-button v-if="current > 0"
                style="margin-left: 8px"
                @click="prev">
        上一步
      </a-button>
      <a-button v-if="current < steps.length - 1"
                type="primary"
                @click="next">
        下一步
      </a-button>
      <a-button v-if="current == steps.length - 1"
                type="primary"
                @click="onOk">
        完成
      </a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>
import { treeRenteclass } from '@/api/system/renteclass'
import { InitalRenter } from '@/api/system/renterinfo'
import { checkLoginName } from '@/api/system/suserinfo'

export default {
  name: 'Initial',
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
      current: 0,
      steps: [
        {
          title: '租户信息',
          content: '填写租户基本信息'
        },
        {
          title: '管理员信息',
          content: '填写系统管理员基本信息'
        },
        {
          title: '授权信息',
          content: '填写租户授权基本信息'
        },
        {
          title: '确认信息',
          content: '完成初始化'
        }
      ],
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      dateFormat: 'YYYY-MM-DD',
      form: {
        rentNo: '0',
        rcnname: '',
        renname: '',
        classNo: undefined,
        orderNo: '1',
        summary: '',
        username: '',
        password: '',
        telephone: '',
        email: '',
        appUrl: '',
        appVer: '1.0',
        edogNo: '',
        edogType: 1,
        registDate: this.$moment(this.currentDate(), this.dateFormat),
        activeDate: this.$moment(this.currentDate(), this.dateFormat),
        activeCount: 1,
        activeCode: '',
        checkState: '1',
        comments: '',
        appCode: ''
      },
      rules: {
        rcnname: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ],
        username: [
          { required: true, message: '请输入账号', trigger: 'change' }
        ],
        telephone: [
          { required: true, message: '请输入电话', trigger: 'change' }
        ]
      },
      treeData: []
    }
  },
  methods: {
    prev () {
      this.current--
    },
    next () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.current++
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onOk () {
      const that = this
      if (this.form.rcnname !== '' && this.form.username !== '' && this.form.telephone !== '') {
        checkLoginName(this.form.username).then(response => {
          if (response.data > 0) {
            that.$layer.msg('账号已存在，请重新输入!')
          } else {
            InitalRenter(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          }
        })
      } else {
        that.$layer.msg('基本信息校验未通过，请重新输入!')
        return false
      }
    },
    doCancel () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    const that = this
    treeRenteclass().then(response => {
      that.treeData = response.rows
    })
  }
}
</script>
<style lang="less" scoped>
.wrapbox {
  margin: 0;
  padding: 10px 20px;
  width: 100%;
}
.descbox {
  margin: 0;
  padding: 5px 20px;
}
.steps-content {
  margin-top: 16px;
  padding-top: 20px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
}
.steps-action {
  text-align: center;
  margin-top: 24px;
}
</style>
