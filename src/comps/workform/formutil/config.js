// 表单属性【右面板】
export const formConf = {
  formRef: 'aform',
  formModel: 'formData',
  formRules: 'rules',
  layout: 'horizontal',
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
  labelAlign: 'right',
  hideRequiredMark: false,
  size: 'medium',
  colon: true,
  disabled: false,
  gutter: 15,
  formButtons: true
}

// 输入型组件 【左面板】
export const inputComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: '单行文本',
      labelCol: null,
      showLabel: true,
      changeTag: true,
      tag: 'a-input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
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
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    __config__: {
      label: '多行文本',
      labelCol: null,
      showLabel: true,
      tag: 'a-textarea',
      tagIcon: 'textarea',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/input-cn/'
    },
    type: 'textarea',
    placeholder: '请输入',
    autosize: {
      minRows: 4,
      maxRows: 4
    },
    style: { width: '100%' },
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    __config__: {
      label: '密码',
      showLabel: true,
      labelCol: null,
      changeTag: true,
      tag: 'a-input-password',
      tagIcon: 'password',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      regList: [],
      document: 'https://www.antdv.com/components/input-cn/'
    },
    __slot__: {
      prepend: '',
      append: ''
    },
    placeholder: '请输入',
    'show-password': true,
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    __config__: {
      label: '数字',
      showLabel: true,
      changeTag: true,
      labelCol: null,
      tag: 'a-input-number',
      tagIcon: 'number',
      defaultValue: undefined,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      document: 'https://www.antdv.com/components/input-number-cn/'
    },
    placeholder: '',
    min: undefined,
    max: undefined,
    step: 1,
    'step-strictly': false,
    precision: undefined,
    'controls-position': '',
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
      labelCol: null,
      tag: 'a-button',
      tagIcon: 'button',
      defaultValue: undefined,
      span: 24,
      layout: 'colFormItem',
      document: 'https://www.antdv.com/components/button-cn/'
    },
    __slot__: {
      default: '主要按钮'
    },
    type: 'primary',
    icon: 'a-icon-search',
    round: false,
    size: 'medium',
    plain: false,
    circle: false,
    disabled: false
  },
  {
    __config__: {
      label: '下拉选择',
      showLabel: true,
      labelCol: null,
      tag: 'a-select',
      tagIcon: 'select',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/select-cn/'
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    placeholder: '请选择',
    style: { width: '100%' },
    clearable: true,
    disabled: false,
    filterable: false,
    multiple: false
  },
  {
    __config__: {
      label: '单选框组',
      labelCol: null,
      showLabel: true,
      tag: 'a-radio-group',
      tagIcon: 'radio',
      changeTag: true,
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      optionType: 'default',
      regList: [],
      required: true,
      border: false,
      document: 'https://www.antdv.com/components/radio-cn/'
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    style: {},
    size: 'medium',
    disabled: false
  },
  {
    __config__: {
      label: '多选框组',
      tag: 'a-checkbox-group',
      tagIcon: 'checkbox',
      defaultValue: [],
      span: 24,
      showLabel: true,
      labelCol: null,
      layout: 'colFormItem',
      optionType: 'default',
      required: true,
      regList: [],
      changeTag: true,
      border: false,
      document: 'https://www.antdv.com/components/checkbox-cn/'
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    style: {},
    size: 'medium',
    min: null,
    max: null,
    disabled: false
  },
  {
    __config__: {
      label: '开关',
      tag: 'a-switch',
      tagIcon: 'switch',
      defaultValue: false,
      span: 24,
      showLabel: true,
      labelCol: null,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/switch-cn/'
    },
    style: {},
    disabled: false,
    'active-text': '',
    'inactive-text': '',
    'active-color': null,
    'inactive-color': null,
    'active-value': true,
    'inactive-value': false
  },
  {
    __config__: {
      label: '滑块',
      tag: 'a-slider',
      tagIcon: 'slider',
      defaultValue: null,
      span: 24,
      showLabel: true,
      layout: 'colFormItem',
      labelCol: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/slider-cn/'
    },
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    'show-stops': false,
    range: false
  },
  {
    __config__: {
      label: '时间选择',
      tag: 'a-time-picker',
      tagIcon: 'time',
      defaultValue: null,
      span: 24,
      showLabel: true,
      layout: 'colFormItem',
      labelCol: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/time-picker-cn/'
    },
    placeholder: '请选择',
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    'picker-options': {
      selectableRange: '00:00:00-23:59:59'
    },
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss'
  },
  {
    __config__: {
      label: '时间范围',
      tag: 'a-time-picker',
      tagIcon: 'time-range',
      span: 24,
      showLabel: true,
      labelCol: null,
      layout: 'colFormItem',
      defaultValue: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/time-picker-cn/'
    },
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    'is-range': true,
    'range-separator': '至',
    'start-placeholder': '开始时间',
    'end-placeholder': '结束时间',
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss'
  },
  {
    __config__: {
      label: '日期选择',
      tag: 'a-date-picker',
      tagIcon: 'date',
      defaultValue: null,
      showLabel: true,
      labelCol: null,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/date-picker-cn/'
    },
    placeholder: '请选择',
    type: 'date',
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false
  },
  {
    __config__: {
      label: '日期范围',
      tag: 'a-date-picker',
      tagIcon: 'date-range',
      defaultValue: null,
      span: 24,
      showLabel: true,
      labelCol: null,
      required: true,
      layout: 'colFormItem',
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/date-picker-cn/'
    },
    style: { width: '100%' },
    type: 'daterange',
    'range-separator': '至',
    'start-placeholder': '开始日期',
    'end-placeholder': '结束日期',
    disabled: false,
    clearable: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false
  },
  {
    __config__: {
      label: '评分',
      tag: 'a-rate',
      tagIcon: 'rate',
      defaultValue: 0,
      span: 24,
      showLabel: true,
      labelCol: null,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://www.antdv.com/components/rate-cn/'
    },
    style: {},
    max: 5,
    'allow-half': false,
    'show-text': false,
    'show-score': false,
    disabled: false
  },
  {
    __config__: {
      label: '上传',
      tag: 'a-upload',
      tagIcon: 'upload',
      layout: 'colFormItem',
      defaultValue: null,
      showLabel: true,
      labelCol: null,
      required: true,
      span: 24,
      showTip: false,
      buttonText: '点击上传',
      regList: [],
      changeTag: true,
      fileSize: 2,
      sizeUnit: 'MB',
      document: 'https://www.antdv.com/components/upload-cn/'
    },
    __slot__: {
      'list-type': true
    },
    action: 'https://jsonplaceholder.typicode.com/posts/',
    disabled: false,
    accept: '',
    name: 'file',
    'auto-upload': true,
    'list-type': 'text',
    multiple: false
  }
]

// 布局型组件 【左面板】
export const layoutComponents = [
  {
    __config__: {
      layout: 'rowFormItem',
      tagIcon: 'row',
      label: '行容器',
      layoutTree: true,
      children: [],
      document: 'https://www.antdv.com/components/grid-cn/'
    },
    type: 'default',
    justify: 'start',
    align: 'top'
  }
]
