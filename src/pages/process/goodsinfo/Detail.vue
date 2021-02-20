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
            {{model.goodsNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="物品包名称"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.goodsCname}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="简码"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.goodsEname}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="图片"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.goodsImage}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="默认科室"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.depteNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="包装方式"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.packeClass}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="系统类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.goodsType}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="用户类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.goodsClass}}
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
            label="灭菌方式"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.steryType}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="器械列表"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.equipTlist}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="是否有植入物"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.hardflag}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="是否借包发放"
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
import { getGoodsinfo } from '@/api/process/goodsinfo'

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
        goodsNo: '0',
        goodsCname: '',
        goodsEname: '',
        goodsImage: '',
        goodsType: '',
        goodsClass: '',
        depteNo: '',
        packeClass: '',
        cleanType: '',
        cleanClass: '',
        steryType: '',
        steryClass: '',
        printNo: '',
        printStyle: '',
        equipTlist: '',
        equipTprice: 1,
        equipTnum: 1,
        expireDays: 1,
        priority: 1,
        hardflag: '0',
        lendflag: '0',
        goodsState: '1',
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
      getGoodsinfo(this.id).then(response => {
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
