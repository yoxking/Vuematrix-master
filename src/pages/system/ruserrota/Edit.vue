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
                             prop="rotaNo"
                             ref="rotaNo">
            <a-input v-model="form.rotaNo"
                     readOnly />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="用户"
                             prop="userNo"
                             ref="userNo">
            <a-input v-model="form.userNo" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="类型"
                             prop="rotaType"
                             ref="rotaType">
            <a-radio-group v-model="form.rotaType">
              <a-radio value="1">正常排班</a-radio>
              <a-radio value="2">临时排班</a-radio>
            </a-radio-group>
          </a-form-model-item>
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
          <a-form-model-item label="周一"
                             prop="weekDay1"
                             ref="weekDay1">
            <a-tree-select v-model="form.weekDay1"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="workType"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="周二"
                             prop="weekDay2"
                             ref="weekDay2">
            <a-tree-select v-model="form.weekDay2"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="workType"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="周三"
                             prop="weekDay3"
                             ref="weekDay3">
            <a-tree-select v-model="form.weekDay3"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="workType"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="周四"
                             prop="weekDay4"
                             ref="weekDay4">
            <a-tree-select v-model="form.weekDay4"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="workType"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="周五"
                             prop="weekDay5"
                             ref="weekDay5">
            <a-tree-select v-model="form.weekDay5"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="workType"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="周六"
                             prop="weekDay6"
                             ref="weekDay6">
            <a-tree-select v-model="form.weekDay6"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="workType"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="周日"
                             prop="weekDay7"
                             ref="weekDay7">
            <a-tree-select v-model="form.weekDay7"
                           :multiple="false"
                           :allow-clear="false"
                           :show-search="false"
                           :tree-data="workType"
                           placeholder="请选择类型" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
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
import { getRuserrota, addRuserrota, uptRuserrota } from '@/api/system/ruserrota'

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
        rotaNo: '0',
        userNo: '',
        rotaType: '1',
        startTime: this.$moment(this.currentDate(), this.dateFormat),
        enditTime: this.$moment(this.currentDate(), this.dateFormat),
        weekDay1: '0',
        weekDay2: '0',
        weekDay3: '0',
        weekDay4: '0',
        weekDay5: '0',
        weekDay6: '0',
        weekDay7: '0',
        rota_format: '',
        checkState: '1',
        comments: ''
      },
      rules: {
        userNo: [
          { required: true, message: '请选择用户', trigger: 'blur' }
        ]
      },
      workType: [{
        key: '0',
        title: '休息',
        value: '0'
      },
      {
        key: '1',
        title: '上午',
        value: '1'
      },
      {
        key: '2',
        title: '下午',
        value: '2'
      },
      {
        key: '3',
        title: '全天',
        value: '3'
      }]
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.rotaNo === '0') {
            addRuserrota(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptRuserrota(that.form).then(response => {
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
      getRuserrota(this.id).then(response => {
        that.form = response.data
        that.form.startTime = that.$moment(response.data.startTime, that.dateFormat)
        that.form.enditTime = that.$moment(response.data.enditTime, that.dateFormat)
      })
    }
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
