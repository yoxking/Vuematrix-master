<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.postNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="岗位名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.postName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="岗位编码"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.postCode}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="排序"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.orderNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.checkState}}
          </a-form-item>
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
import { getPostinfo } from '@/api/system/postinfo'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        postNo: '0',
        postName: '',
        postCode: '',
        orderNo: 1,
        checkState: '1',
        comments: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$dlg.closeAll()
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getPostinfo(this.id).then(response => {
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
