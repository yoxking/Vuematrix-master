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
            prop="equipNo"
            ref="equipNo"
          >
            <a-input
              v-model="form.equipNo"
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
            label="名称"
            prop="equipCname"
            ref="equipCname"
          >
            <a-input v-model="form.equipCname" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="18">
          <a-form-model-item
            label="图片"
            prop="equipImage"
            ref="equipImage"
            :labelCol="{span: 4}"
            :wrapperCol="{span: 19}"
          >
            <a-input v-model="form.equipImage" />
          </a-form-model-item>
        </a-col>
        <a-col :span="6">
          <a-upload
            name="file"
            :multiple="true"
          >
            <a-button>
              <a-icon type="upload" /> 上传图片
            </a-button>
          </a-upload>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="规格"
            prop="equipSpec"
            ref="equipSpec"
          >
            <a-input v-model="form.equipSpec" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="排序"
            prop="orderNo"
            ref="orderNo"
          >
            <a-input-number v-model="form.orderNo" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="厂家"
            prop="prodNo"
            ref="prodNo"
          >
            <a-tree-select
              v-model="form.prodNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="producersData"
              placeholder="请选择厂家"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="供应商"
            prop="suppNo"
            ref="suppNo"
          >
            <a-tree-select
              v-model="form.suppNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="suppliersData"
              placeholder="请选择供应商"
            />
          </a-form-model-item>
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
          <a-form-model-item
            label="有效期"
            prop="termNo"
            ref="termNo"
          >
            <a-tree-select
              v-model="form.termNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="dterminfoData"
              placeholder="请选择有效期"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="单位"
            prop="unitNo"
            ref="unitNo"
          >
            <a-tree-select
              v-model="form.unitNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="stdunitinfoData"
              placeholder="请选择单位"
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
            label="单价"
            prop="unitPrice"
            ref="unitPrice"
          >
            <a-input-number v-model="form.unitPrice" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="工作量"
            prop="workLoad"
            ref="workLoad"
          >
            <a-input-number v-model="form.workLoad" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="状态"
            prop="checkState"
            ref="checkState"
          >
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
import { treeProducerinfo } from '@/api/process/producerinfo'
import { treeSupplierinfo } from '@/api/process/supplierinfo'
import { treeStoreinfo } from '@/api/process/storeinfo'
import { treeDterminfo } from '@/api/process/dterminfo'
import { treeStdunitinfo } from '@/api/process/stdunitinfo'
import { getEquipments, addEquipments, uptEquipments } from '@/api/process/equipments'

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
        equipNo: '0',
        equipCname: '',
        equipEname: '',
        equipImage: '',
        equipType: '2',
        equipSpec: '',
        classNo: '2',
        storeNo: undefined,
        prodNo: undefined,
        suppNo: undefined,
        termNo: undefined,
        unitNo: undefined,
        unitPrice: 1,
        workLoad: 1,
        orderNo: 1,
        checkState: '1',
        branchNo: '',
        comments: ''
      },
      rules: {
        equipCname: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      producersData: [],
      suppliersData: [],
      storeinfoData: [],
      dterminfoData: [],
      stdunitinfoData: []
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.equipNo === '0') {
            addEquipments(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptEquipments(that.form).then(response => {
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
      getEquipments(this.id).then(response => {
        that.form = response.data
      })
    }
    treeProducerinfo().then(response => {
      that.producersData = response.rows
    })
    treeSupplierinfo().then(response => {
      that.suppliersData = response.rows
    })
    treeStoreinfo().then(response => {
      that.storeinfoData = response.rows
    })
    treeDterminfo().then(response => {
      that.dterminfoData = response.rows
    })
    treeStdunitinfo().then(response => {
      that.stdunitinfoData = response.rows
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
