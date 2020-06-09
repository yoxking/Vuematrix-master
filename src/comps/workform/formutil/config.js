// 表单属性【右面板】
export const formConf = {
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

// 输入型组件 【左面板】
export const inputComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: '单行文本',
      showLabel: true,
      changeTag: true,
      tag: 'a-input',
      tagIcon: 'input',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/input-cn/',
      // 正则校验规则
      regList: []
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    maxLength: 20,
    readOnly: false,
    disabled: false
  },
  {
    __config__: {
      label: '多行文本',
      showLabel: true,
      changeTag: true,
      tag: 'a-textarea',
      tagIcon: 'textarea',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/input-cn/',
      regList: []
    },
    placeholder: '请输入',
    autoSize: {
      minRows: 4,
      maxRows: 4
    },
    maxLength: 100,
    readOnly: false,
    disabled: false
  },
  {
    __config__: {
      label: '密码',
      showLabel: true,
      changeTag: true,
      tag: 'a-input-password',
      tagIcon: 'password',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/input-cn/',
      regList: []
    },
    __slot__: {
      prepend: '',
      append: ''
    },
    placeholder: '请输入',
    maxLength: 20,
    readOnly: false,
    disabled: false
  },
  {
    __config__: {
      label: '数字',
      showLabel: true,
      changeTag: true,
      tag: 'a-input-number',
      tagIcon: 'number',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/input-number-cn/',
      regList: []
    },
    placeholder: '',
    min: 0,
    max: 100,
    step: 1,
    readOnly: false,
    disabled: false
  }
]

// 选择型组件 【左面板】
export const selectComponents = [
  {
    __config__: {
      label: '按钮',
      showLabel: true,
      changeTag: true,
      tag: 'a-button',
      tagIcon: 'button',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/button-cn/'
    },
    __slot__: {
      default: '主要按钮'
    },
    type: 'primary',
    size: 'default',
    disabled: false
  },
  {
    __config__: {
      label: '下拉选择',
      showLabel: true,
      changeTag: true,
      tag: 'a-select',
      tagIcon: 'select',
      defaultValue: 2,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/select-cn/',
      regList: []
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1,
        disabled: false
      }, {
        label: '选项二',
        value: 2,
        disabled: false
      }]
    },
    placeholder: '请选择',
    mode: 'default',
    disabled: false
  },
  {
    __config__: {
      label: '单选框组',
      showLabel: true,
      changeTag: true,
      tag: 'a-radio-group',
      tagIcon: 'radio',
      defaultValue: 2,
      layout: 'colFormItem',
      optionType: 'default',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/radio-cn/',
      regList: []
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1,
        disabled: false
      }, {
        label: '选项二',
        value: 2,
        disabled: false
      }]
    },
    disabled: false
  },
  {
    __config__: {
      label: '多选框组',
      showLabel: true,
      changeTag: true,
      tag: 'a-checkbox-group',
      tagIcon: 'checkbox',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/checkbox-cn/',
      regList: []
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1,
        disabled: false
      }, {
        label: '选项二',
        value: 2,
        disabled: false
      }]
    },
    disabled: false
  },
  {
    __config__: {
      label: '开关',
      showLabel: true,
      changeTag: true,
      tag: 'a-switch',
      tagIcon: 'switch',
      defaultValue: '1',
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/switch-cn/',
      regList: []
    },
    size: 'default',
    disabled: false
  },
  {
    __config__: {
      label: '滑块',
      showLabel: true,
      changeTag: true,
      tag: 'a-slider',
      tagIcon: 'slider',
      defaultValue: 10,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/slider-cn/',
      regList: []
    },
    min: 0,
    max: 100,
    step: 1,
    range: false,
    disabled: false
  },
  {
    __config__: {
      label: '时间选择',
      showLabel: true,
      changeTag: true,
      tag: 'a-time-picker',
      tagIcon: 'time',
      defaultValue: null,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/time-picker-cn/',
      regList: []
    },
    placeholder: '请选择',
    format: 'HH:mm:ss',
    disabled: false
  },
  {
    __config__: {
      label: '日期选择',
      showLabel: true,
      changeTag: true,
      tag: 'a-date-picker',
      tagIcon: 'date',
      defaultValue: null,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/date-picker-cn/',
      regList: []
    },
    placeholder: '请选择',
    format: 'yyyy-MM-dd',
    disabled: false
  },
  {
    __config__: {
      label: '日期范围',
      showLabel: true,
      changeTag: true,
      tag: 'a-range-picker',
      tagIcon: 'date-range',
      defaultValue: null,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/date-picker-cn/',
      regList: []
    },
    format: 'yyyy-MM-dd',
    disabled: false
  },
  {
    __config__: {
      label: '评分',
      showLabel: true,
      changeTag: true,
      tag: 'a-rate',
      tagIcon: 'rate',
      defaultValue: 3,
      layout: 'colFormItem',
      span: 24,
      required: true,
      document: 'https://www.antdv.com/components/rate-cn/',
      regList: []
    },
    count: 5,
    disabled: false
  },
  {
    __config__: {
      label: '上传',
      showLabel: true,
      changeTag: true,
      tag: 'a-upload',
      tagIcon: 'upload',
      defaultValue: null,
      layout: 'colFormItem',
      span: 24,
      required: true,
      buttonText: '点击上传',
      fileSize: 2,
      sizeUnit: 'MB',
      document: 'https://www.antdv.com/components/upload-cn/',
      regList: []
    },
    __slot__: {
      'list-type': true
    },
    accept: '',
    action: 'https://jsonplaceholder.typicode.com/posts/',
    disabled: false
  }
]

// 布局型组件 【左面板】
export const layoutComponents = [
  {
    __config__: {
      label: '行容器',
      tag: 'a-row',
      tagIcon: 'row',
      layout: 'rowFormItem',
      children: [],
      document: 'https://www.antdv.com/components/grid-cn/'
    },
    type: 'flex',
    align: 'top',
    justify: 'start'
  }
]
