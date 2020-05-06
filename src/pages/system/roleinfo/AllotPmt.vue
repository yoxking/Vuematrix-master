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
            <a-card style="width: 700px">
              <a-tree v-model="checkedKeys"
                      checkable
                      :default-expand-all="true"
                      :expanded-keys="expandedKeys"
                      :auto-expand-parent="autoExpandParent"
                      :selected-keys="selectedKeys"
                      :tree-data="pmttreeData"
                      @expand="onExpand"
                      @select="onSelect" />
            </a-card>
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
import { getRoleinfo, getRolepermit, uptRolepermit } from '@/api/system/roleinfo'

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
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      pmttreeData: []
    }
  },
  methods: {
    doOk () {
      const that = this
      uptRolepermit(this.id, this.checkedKeys.join(',')).then(response => {
        that.$message.success(response.msg)
        that.$emit('close', { code: response.code })
      })
    },
    doClose () {
      this.$dlg.closeAll()
    },
    getRolePermit () {
      const that = this
      getRolepermit(this.id).then(response => {
        that.pmttreeData = response.data.pmttreeData
        that.checkedKeys = response.data.checkedKeys
      })
    },
    onExpand (expandedKeys) {
      // console.log('onExpand', expandedKeys)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck (checkedKeys) {
      // console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    onSelect (selectedKeys, info) {
      // console.log('onSelect', info)
      this.selectedKeys = selectedKeys
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getRoleinfo(this.id).then(response => {
        that.model = response.data
      })
    }
    this.getRolePermit()
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
