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
                             prop="salonNo"
                             ref="salonNo">
            <a-input v-model="form.salonNo"
                     readOnly />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="活动名称"
                       prop="salonName"
                       ref="salonName"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-input v-model="form.salonName" />
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
                           :tree-data="sclassTree"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="开始时间"
                             prop="startTime"
                             ref="startTime">
            <a-date-picker  :format="dateFormat" v-model="form.startTime" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="结束时间"
                             prop="enditTime"
                             ref="enditTime">
            <a-date-picker  :format="dateFormat" v-model="form.enditTime" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="地址"
                             prop="salonAddress"
                             ref="salonAddress">
            <a-input v-model="form.salonAddress" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="预约人员"
                             prop="registRusers"
                             ref="registRusers">
            <a-input v-model="form.registRusers" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="活动内容"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-textarea v-model="form.salonContent"
                        placeholder="活动内容"
                        :autoSize="{ minRows: 3, maxRows: 5 }" />
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
import { treeSalonclass } from '@/api/collect/salonclass'
import { getSalonsinfo, addSalonsinfo, uptSalonsinfo } from '@/api/collect/salonsinfo'

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
        salonNo: '0',
        salonName: '',
        salonPoster: '',
        salonDesc: '',
        salonType: '',
        dataFrom: '管理后台',
        viewType: '1',
        classNo: undefined,
        startTime: this.$moment(this.currentDate(), this.dateFormat),
        enditTime: this.$moment(this.currentDate(), this.dateFormat),
        salonAddress: '',
        salonRusers: '',
        salonContent: '',
        salonState: '1',
        checkState: '1',
        comments: ''
      },
      rules: {
        salonName: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      sclassTree: []
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.salonNo === '0') {
            addSalonsinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptSalonsinfo(that.form).then(response => {
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
      getSalonsinfo(this.id).then(response => {
        that.form = response.data
      })
    }
    treeSalonclass().then(response => {
      that.sclassTree = response.rows
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
