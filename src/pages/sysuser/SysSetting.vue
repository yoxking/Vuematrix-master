<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="站点名称"
                   :labelCol="{span: 3}"
                   :wrapperCol="{span: 10}">
        <a-input placeholder="站点名称" />
      </a-form-item>
      <a-form-item label="站点网址"
                   :labelCol="{span: 3}"
                   :wrapperCol="{span: 10}">
        <a-input placeholder="站点网址" />
      </a-form-item>
      <a-form-item label="站点编码"
                   :labelCol="{span: 3}"
                   :wrapperCol="{span: 10}">
        <a-input placeholder="站点编码" />
      </a-form-item>
      <a-form-item label="数据库连接"
                   :labelCol="{span: 3}"
                   :wrapperCol="{span: 16}">
        <a-textarea rows="4"
                    placeholder="数据库连接" />
      </a-form-item>
      <a-form-item label="站点描述"
                   :labelCol="{span: 3}"
                   :wrapperCol="{span: 16}">
        <a-textarea rows="4"
                    placeholder="站点描述" />
      </a-form-item>
      <a-form-item label="运行状态"
                   :labelCol="{span: 3}"
                   :wrapperCol="{span: 10}"
                   :required="false">
        <a-radio-group v-model="value">
          <a-radio :value="1">运行</a-radio>
          <a-radio :value="0">停用</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item :wrapperCol="{span: 10, offset: 3}">
        <a-button type="primary">保存</a-button>
        <a-button style="margin-left: 8px">关闭</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'BasicForm',
  data () {
    return {
      value: 1
    }
  }
}
</script>

<style scoped>
</style>
