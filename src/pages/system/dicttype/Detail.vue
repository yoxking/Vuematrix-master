<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dictNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="字典名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dictName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="字典类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dictType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.checkState}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="备注"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
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
import { getDicttype } from '@/api/system/dicttype'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        dictNo: '0',
        dictName: '',
        dictType: '',
        checkState: '1',
        comments: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$emit('close', { code: 202 })
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getDicttype(this.id).then(response => {
        that.model = response.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapbox {
  margin: 0;
  padding: 0;
}
.btnbox {
  text-align: center;
}
</style>
