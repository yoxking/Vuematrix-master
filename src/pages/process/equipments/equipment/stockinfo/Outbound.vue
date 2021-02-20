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
            label="接收人"
            prop="ruserNo"
            ref="ruserNo"
          >
            <a-tree-select
              v-model="form.ruserNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="ruserinfoData"
              placeholder="请选择接收人"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item
            label="物品名称"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
            prop="stockNo"
            ref="stockNo"
          >
            <a-tree-select
              v-model="form.stockNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="stockinfoData"
              @change="changeStock"
              placeholder="请选择名称"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="批次号">
            {{form.produceNumber}}
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="库房">
            {{form.storeNo}}
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="库存数量">
            {{form.stockNum}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="生产日期">
            {{form.produceDate}}
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="失效日期">
            {{form.expireDate}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="出库数量"
            prop="equipNum"
            ref="equipNum"
          >
            <a-input-number v-model="form.equipNum" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
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
import { treeRuserinfo } from '@/api/system/ruserinfo'
import { treeStockinfo, getStockinfo2, outboundStock } from '@/api/process/stockinfo'

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
        stockNo: undefined,
        storeNo: 'N/A',
        ruserNo: undefined,
        equipNo: 'N/A',
        equipType: '1',
        equipNum: 0,
        stockNum: 0,
        produceNumber: 'N/A',
        produceDate: 'N/A',
        expireDate: 'N/A',
        checkState: '1',
        comments: ''
      },
      rules: {
        produce_number: [
          { required: true, message: '请输入批次号', trigger: 'blur' }
        ]
      },
      ruserinfoData: [],
      stockinfoData: []
    }
  },
  methods: {
    changeStock () {
      const that = this
      if (this.form.stockNo !== undefined) {
        getStockinfo2(this.form.stockNo).then(response => {
          that.form.storeNo = response.data.storeNo
          that.form.stockNum = response.data.stockNum
          that.form.produceNumber = response.data.produceNumber
          that.form.produceDate = response.data.produceDate
          that.form.expireDate = response.data.expireDate
        })
      }
    },
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          outboundStock(that.form).then(response => {
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
    treeRuserinfo().then(response => {
      that.ruserinfoData = response.rows
    })
    treeStockinfo(this.form.equipType).then(response => {
      that.stockinfoData = response.rows
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
