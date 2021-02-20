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
            {{model.stateNo}}
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
            {{model.stateName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="状态值"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.stateValue}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="权重值"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.stateWeight}}
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
import { getGoodstate } from '@/api/process/goodstate'

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
        stateNo: '0',
        stateName: '',
        stateValue: 1,
        stateWeight: 1,
        orderNo: 1,
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
      getGoodstate(this.id).then(response => {
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
