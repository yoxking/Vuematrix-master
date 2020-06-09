export default [
  {
    __config__: {
      formId: 100,
      label: '单行文本',
      showLabel: true,
      changeTag: true,
      tag: 'a-input',
      tagIcon: 'input',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      document: 'https://www.antdv.com/components/input-cn/',
      // 正则校验规则
      regList: [{
        pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
        message: '手机号格式错误'
      }]
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    __vModel__: 'field100',
    placeholder: '请输入',
    allowClear: true,
    maxLength: null,
    readOnly: false,
    disabled: false
  }
]
