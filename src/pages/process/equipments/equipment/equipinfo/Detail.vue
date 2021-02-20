<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="编号"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.equipNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="名称"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.equipCname}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="简码"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.equipEname}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="规格"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.equipSpec}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="排序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.orderNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="厂家"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.prodNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="供应商"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.suppNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="库房"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.storeNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="有效期"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.termNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="单位"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.unitNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="单价"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.unitPrice}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="工作量"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.workLoad}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="状态"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.checkState}}
          </a-form-item>
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
            {{model.comments}}
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getEquipments } from '@/api/process/equipments'

export default {
  name: 'Detail',
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
      spanCol: 12,
      model: {
        equipNo: '0',
        equipCname: '',
        equipEname: '',
        equipImage: '',
        equipType: '1',
        equipSpec: '',
        classNo: '1',
        storeNo: '',
        prodNo: '',
        suppNo: '',
        termNo: '',
        unitNo: '',
        unitPrice: 1,
        workLoad: 1,
        orderNo: 1,
        checkState: '1',
        branchNo: '',
        comments: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getEquipments(this.id).then(response => {
        that.model = response.data
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
