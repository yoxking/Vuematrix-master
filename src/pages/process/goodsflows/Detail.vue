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
            {{model.gflowNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="物品"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.goodsNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="状态"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.goodsState}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="部门"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.depteNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="操作人"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.opertNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="操作时间"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.opertDate}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="审核人"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.checkNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="审核时间"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.checkDate}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="有效天数"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.expireDays}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="有效日期"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.expireDate}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="包装方式"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.packeClass}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="清洗方式"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.cleanType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="清洗程序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.cleanClass}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="清洗次数"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.cleanNum}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="灭菌方式"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.steryType}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="灭菌程序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.steryClass}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="灭菌次数"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.steryNum}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="是否加急"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.priority}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="打印机"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.printNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="打印样式"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.printStyle}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="是否内置"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.hardflag}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="是否借包"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.lendflag}}
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
import { getGoodsflows } from '@/api/process/goodsflows'

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
        gflowNo: '',
        goodsNo: '0',
        goodsState: '1',
        depteNo: '',
        opertNo: '',
        opertDate: '',
        checkNo: '',
        checkDate: '',
        expireDays: '',
        expireDate: '',
        packeClass: '',
        cleanType: '',
        cleanClass: '',
        cleanNum: 1,
        steryType: '',
        steryClass: '',
        steryNum: 1,
        printNo: '',
        printStyle: '',
        priority: 1,
        hardflag: '0',
        lendflag: '0',
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
      getGoodsflows(this.id).then(response => {
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
