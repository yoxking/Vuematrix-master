<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="12">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.deptNo}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
         &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.deptName}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="上级部门"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.parentNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="排序"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.orderNo}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="负责人"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.leader}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="电话"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.telephone}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="邮箱"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.email}}
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
import { getDept } from '@/api/system/dept'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      model: {
        deptNo: '2',
        deptName: '',
        parentNo: '',
        orderNo: 1,
        leader: '',
        telephone: '13888888888',
        email: ''
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
      getDept(this.id).then(response => {
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
