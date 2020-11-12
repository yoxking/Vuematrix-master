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
            {{model.qflowNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="测评名称"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.xflowNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="试题"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.questNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="得分"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.qtoptScore}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="答案"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.qtoptValue}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="标记"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.qtoptFlag}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="答题评论"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.qtoptView}}
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
import { getQuestflows } from '@/api/collect/questflows'

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
        qflowNo: '',
        xflowNo: '',
        questNo: '',
        qtoptValue: 1,
        qtoptScore: 0,
        qtoptFlag: '',
        qtoptView: '',
        checkState: '1',
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
      getQuestflows(this.id).then(response => {
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
