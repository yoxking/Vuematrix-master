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
          <a-form-item
            label="类别"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.gflowType}}
          </a-form-item>
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
            label="部门"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.deptNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="操作人"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.optorNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="审核人"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.checkerNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="清洗方式"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.cleanType}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="清洗程序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.cleanClass}}
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
            {{model.stereType}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="灭菌程序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.stereClass}}
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
import { getGoodsreport } from '@/api/process/goodsreport'

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
        gflowNo: '0',
        gflowType: '',
        goodsNo: '',
        deptNo: '',
        optorNo: '',
        checkerNo: '',
        cleanType: '',
        cleanClass: '',
        stereType: '',
        stereClass: '',
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
      getGoodsreport(this.id).then(response => {
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
