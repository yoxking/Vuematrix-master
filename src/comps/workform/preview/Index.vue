<template>
  <div class="test-form">
    <parser :form-conf="formConf"
            @submit="sumbitForm1" />
  </div>
</template>

<script>

import Parser from '../parser/Parser'

export default {
  components: {
    Parser
  },
  props: {},
  data () {
    return {
      formConf: {
        fields: [
          { __config__:
              { label: '数字', showLabel: true, changeTag: true, tag: 'a-input-number', tagIcon: 'number', layout: 'colFormItem', span: 24, required: true, document: 'https://www.antdv.com/components/input-number-cn/', regList: [], formId: 103, renderKey: 1591712483344 },
          placeholder: '数字',
          min: 0,
          max: 100,
          step: 1,
          readOnly: false,
          disabled: false,
          __vModel__: 'field103' },
          { __config__:
              { label: '密码', showLabel: true, changeTag: true, tag: 'a-input-password', tagIcon: 'password', layout: 'colFormItem', span: 24, required: true, document: 'https://www.antdv.com/components/input-cn/', regList: [], formId: 102, renderKey: 1591712481982 },
          __slot__:
              { prepend: '', append: '' },
          placeholder: '请输入密码',
          maxLength: 20,
          readOnly: false,
          disabled: false,
          __vModel__: 'field102' },
          { __config__:
              { label: '单行文本', showLabel: true, changeTag: true, tag: 'a-input', tagIcon: 'input', layout: 'colFormItem', span: 24, required: true, document: 'https://www.antdv.com/components/input-cn/', regList: [], formId: 101, renderKey: 1591712480624 },
          __slot__: { prepend: '', append: '' },
          placeholder: '请输入单行文本',
          maxLength: 20,
          readOnly: false,
          disabled: false,
          __vModel__: 'field101' },
          { __config__:
              { label: '单选框组', showLabel: true, changeTag: true, tag: 'a-radio-group', tagIcon: 'radio', defaultValue: 2, layout: 'colFormItem', optionType: 'default', span: 24, required: true, document: 'https://www.antdv.com/components/radio-cn/', regList: [], formId: 106, renderKey: 1591712490336 },
          __slot__: { options: [{ label: '选项一', value: 1, 'disabled': false }, { label: '选项二', value: 2, disabled: false }] },
          disabled: false,
          __vModel__: 'field106' },
          { __config__: { label: '多行文本', showLabel: true, changeTag: true, tag: 'a-textarea', tagIcon: 'textarea', layout: 'colFormItem', span: 24, required: true, document: 'https://www.antdv.com/components/input-cn/', regList: [], formId: 104, renderKey: 1591712484918 },
            placeholder: '请输入多行文本',
            autoSize: { minRows: 4, maxRows: 4 },
            maxLength: 100,
            readOnly: false,
            disabled: false,
            __vModel__: 'field104' },
          { __config__: { label: '按钮', showLabel: true, changeTag: true, tag: 'a-button', tagIcon: 'button', layout: 'colFormItem', span: 24, required: true, document: 'https://www.antdv.com/components/button-cn/', formId: 105, renderKey: 1591712486693 },
            __slot__: { default: '主要按钮' },
            type: 'primary',
            size: 'default',
            disabled: false,
            __vModel__: 'field105' }],
        formRef: 'aform',
        formModel: 'formData',
        formRules: 'rules',
        layout: 'horizontal',
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
        labelAlign: 'right',
        hideRequiredMark: false,
        disabled: false,
        span: 24,
        gutter: 24,
        colon: true,
        formButtons: true
      }
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
  },
  methods: {
    sumbitForm1 (data) {
      console.log('sumbitForm1提交数据：', data)
    }
  }
}
</script>

<style lang="less" scoped>
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
