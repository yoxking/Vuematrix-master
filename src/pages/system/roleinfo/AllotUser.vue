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
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getRoleinfo } from '@/api/system/roleinfo'

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
    doClose () {
      this.$dlg.closeAll()
    },
    getMock () {
      const targetKeys = []
      const mockData = []
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1
        }
        if (data.chosen) {
          targetKeys.push(data.key)
        }
        mockData.push(data)
      }
      this.sourceData = mockData
      this.targetKeys = targetKeys
    },
    filterOption (inputValue, option) {
      return option.description.indexOf(inputValue) > -1
    },
    handleChange (targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys)
      this.targetKeys = targetKeys
    },
    handleSearch (dir, value) {
      console.log('search:', dir, value)
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getRoleinfo(this.id).then(response => {
        that.model = response.data
      })
    }
    this.getMock()
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
