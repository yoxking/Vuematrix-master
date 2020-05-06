<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="角色名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.roleName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="角色编码"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.roleCode}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="选择权限"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            <a-transfer :data-source="sourceData"
                        show-search
                        :list-style="{width: '350px',height: '300px'}"
                        :filter-option="filterOption"
                        :target-keys="targetKeys"
                        :render="item => item.title"
                        @change="handleChange"
                        @search="handleSearch" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doOk"
                type="primary">确定</a-button>
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getRoleinfo, getRolesusers, uptRolesusers } from '@/api/system/roleinfo'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        roleNo: '0',
        roleName: '',
        roleCode: '',
        orderNo: 1,
        dataScope: '',
        checkState: '1',
        comments: ''
      },
      sourceData: [],
      targetKeys: []
    }
  },
  methods: {
    doOk () {
      if (this.targetKeys.length > 0) {
        const that = this
        uptRolesusers(this.id, this.targetKeys.join(',')).then(response => {
          that.$message.success(response.msg)
          that.$emit('close', { code: response.code })
        })
      } else {
        this.$message.warn('请至少选择一条记录')
      }
    },
    doClose () {
      this.$dlg.closeAll()
    },
    getRoleSusers () {
      const that = this
      getRolesusers(this.id).then(response => {
        that.sourceData = response.data.sourceData
        that.targetKeys = response.data.targetKeys
      })
    },
    filterOption (inputValue, option) {
      return option.title.indexOf(inputValue) > -1
    },
    handleChange (targetKeys, direction, moveKeys) {
      this.targetKeys = targetKeys
    },
    handleSearch (dir, value) {
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getRoleinfo(this.id).then(response => {
        that.model = response.data
      })
    }
    this.getRoleSusers()
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
