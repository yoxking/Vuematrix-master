<template>
  <div class="wrapbox">
    <br />
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="名称"
            prop="equipNo"
            ref="equipNo"
          >
            <a-tree-select
              v-model="form.equipNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="equipmentsData"
              placeholder="请选择名称"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="库房"
            prop="storeNo"
            ref="storeNo"
          >
            <a-tree-select
              v-model="form.storeNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="storeinfoData"
              placeholder="请选择库房"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="批次号"
            prop="produceNumber"
            ref="produceNumber"
          >
            <a-input v-model="form.produceNumber" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="入库数量"
            prop="equipNum"
            ref="equipNum"
          >
            <a-input-number v-model="form.equipNum" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="生产日期"
            prop="produceDate"
            ref="produceDate"
          >
            <a-date-picker
              :format="dateFormat"
              v-model="form.produceDate"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="失效日期"
            prop="expireDate"
            ref="expireDate"
          >
            <a-date-picker
              :format="dateFormat"
              v-model="form.expireDate"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="备注"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            <a-textarea
              v-model="form.comments"
              placeholder="备注信息"
              :autoSize="{ minRows: 3, maxRows: 5 }"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form-model>
    <a-divider />
    <div class="btnbox">
      <a-button
        @click="doOk"
        type="primary"
      >确定</a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>
import { treeStoreinfo } from '@/api/process/storeinfo'
import { treeEquipments } from '@/api/process/equipments'
import { inboundStock } from '@/api/process/stockinfo'

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
        stockNo: '0',
        storeNo: undefined,
        ruserNo: '',
        equipNo: undefined,
        equipType: '1',
        equipNum: 1,
        stockNum: 0,
        produceNumber: '',
        produceDate: this.$moment(this.currentDate(), this.dateFormat),
        expireDate: this.$moment(this.currentDate(), this.dateFormat),
        checkState: '1',
        comments: ''
      },
      rules: {
        produce_number: [
          { required: true, message: '请输入批次号', trigger: 'blur' }
        ]
      },
      storeinfoData: [],
      equipmentsData: []
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          inboundStock(that.form).then(response => {
            if (response.code === 200) {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            } else {
              that.$layer.msg(response.msg)
            }
          })
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
    treeStoreinfo().then(response => {
      that.storeinfoData = response.rows
    })
    treeEquipments(this.form.equipType).then(response => {
      that.equipmentsData = response.rows
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
