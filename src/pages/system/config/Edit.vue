<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="12">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            <a-input placeholder="编号"
                     readOnly
                     v-model="model.deptNo" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="部门名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            <a-input placeholder="部门名称"
                     v-model="model.deptName" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="上级部门"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            <a-input placeholder="上级部门"
                     v-model="model.parentNo" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="排序"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            <a-input placeholder="排序"
                     v-model="model.orderNo" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="负责人"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            <a-input placeholder="负责人"
                     v-model="model.leader" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="电话"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            <a-input placeholder="电话"
                     v-model="model.telephone" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="邮箱"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            <a-input placeholder="邮箱"
                     v-model="model.email" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doOk"
                type="primary">确定</a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>
import { getDept, addDept, uptDept } from '@/api/system/dept'

export default {
  name: 'Edit',
  props: { id: String },
  data () {
    return {
      model: {
        deptNo: '0',
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
    doOk () {
      const that = this
      if (this.model.deptNo === '0') {
        addDept(this.model).then(response => {
          that.$message.success(response.msg)
          this.$emit('close', { code: response.code })
        })
      } else {
        uptDept(this.model).then(response => {
          that.$message.success(response.msg)
          this.$emit('close', { code: response.code })
        })
      }
    },
    doCancel () {
      this.$emit('close')
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
