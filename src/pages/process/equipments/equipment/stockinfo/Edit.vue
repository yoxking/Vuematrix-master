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
            label="编号"
            prop="stockNo"
            ref="stockNo"
          >
            <a-input
              v-model="form.stockNo"
              readOnly
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
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
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
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
          &nbsp;
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
            label="数量"
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
            <a-input v-model="form.produceDate" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="失效日期"
            prop="expireDate"
            ref="expireDate"
          >
            <a-input v-model="form.expireDate" />
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
import { getStockinfo, addStockinfo, uptStockinfo } from '@/api/process/stockinfo'

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
        stockNo: '0',
        storeNo: undefined,
        equipNo: undefined,
        equipNum: 1,
        produce_number: '',
        produce_date: '',
        expire_date: '',
        checkState: '1',
        comments: ''
      },
      rules: {
        equipNo: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        orderNo: [
          { required: true, message: '请输入排序值', trigger: 'blur' }
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
          if (that.form.stockNo === '0') {
            addStockinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptStockinfo(that.form).then(response => {
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
      getStockinfo(this.id).then(response => {
        that.form = response.data
      })
    }
    treeStoreinfo().then(response => {
      that.storeinfoData = response.rows
    })
    treeEquipments().then(response => {
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
