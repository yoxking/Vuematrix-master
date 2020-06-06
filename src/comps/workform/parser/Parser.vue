<script>
import render from '../render/render.js'

const ruleTrigger = {
  'a-input': 'blur',
  'a-input-password': 'blur',
  'a-input-number': 'blur',
  'a-select': 'change',
  'a-radio-group': 'change',
  'a-checkbox-group': 'change',
  'a-time-picker': 'change',
  'a-date-picker': 'change',
  'a-rate': 'change'
}

function renderFrom (h) {
  const { formConfCopy } = this

  return (
    <a-row gutter={formConfCopy.gutter}>
      <a-form-model
        layout={formConfCopy.layout}
        label-col={formConfCopy.labelCol}
        wrapper-col={formConfCopy.wrapperCol}
        label-align={formConfCopy.labelAlign}
        disabled={formConfCopy.disabled}
        ref={formConfCopy.formRef}
        // model不能直接赋值 https://github.com/vuejs/jsx/issues/49#issuecomment-472013664
        props={{ model: this[formConfCopy.formModel] }}
        rules={this[formConfCopy.formRules]}
      >
        {renderFormItem.call(this, h, formConfCopy.fields)}
        {formConfCopy.formBtns && formButtons.call(this, h)}
      </a-form-model>
    </a-row>
  )
}

function formButtons (h) {
  return <a-col>
    <a-form-model-item size="large">
      <a-button type="primary" onClick={this.submitForm}>提交</a-button>
      <a-button onClick={this.resetForm}>重置</a-button>
    </a-form-model-item>
  </a-col>
}

function renderFormItem (h, elementList) {
  return elementList.map(scheme => {
    const config = scheme.__config__
    const layout = layouts[config.layout]

    if (layout) {
      return layout.call(this, h, scheme)
    }
    throw new Error(`没有与${config.layout}匹配的layout`)
  })
}

function renderChildren (h, scheme) {
  const config = scheme.__config__
  if (!Array.isArray(config.children)) return null
  return renderFormItem.call(this, h, config.children)
}

const layouts = {
  colFormItem (h, scheme) {
    const config = scheme.__config__
    let labelCol = config.labelCol ? `${config.labelCol}` : {}
    if (config.showLabel === false) labelCol = '{span: 0}'
    return (
      <a-col span={config.span}>
        <a-form-model-item label-col={labelCol} prop={scheme.__vModel__}
          label={config.showLabel ? config.label : ''}>
          <render conf={scheme} onInput={ event => {
            this.$set(config, 'defaultValue', event)
            this.$set(this[this.formConf.formModel], scheme.__vModel__, event)
          }} />
        </a-form-model-item>
      </a-col>
    )
  },
  rowFormItem (h, scheme) {
    let child = renderChildren.apply(this, arguments)
    if (scheme.type === 'flex') {
      child = <a-row type={scheme.type} justify={scheme.justify} align={scheme.align}>
        {child}
      </a-row>
    }
    return (
      <a-col span={scheme.span}>
        <a-row gutter={scheme.gutter}>
          {child}
        </a-row>
      </a-col>
    )
  }
}

export default {
  components: {
    render
  },
  props: {
    formConf: {
      type: Object,
      required: true
    }
  },
  data () {
    const data = {
      formConfCopy: JSON.parse(JSON.stringify(this.formConf)),
      [this.formConf.formModel]: {},
      [this.formConf.formRules]: {}
    }
    this.initFormData(data.formConfCopy.fields, data[this.formConf.formModel])
    this.buildRules(data.formConfCopy.fields, data[this.formConf.formRules])
    return data
  },
  methods: {
    initFormData (componentList, formData) {
      componentList.forEach(cur => {
        const config = cur.__config__
        if (cur.__vModel__) formData[cur.__vModel__] = config.defaultValue
        if (config.children) this.initFormData(config.children, formData)
      })
    },
    buildRules (componentList, rules) {
      componentList.forEach(cur => {
        const config = cur.__config__
        if (Array.isArray(config.regList)) {
          if (config.required) {
            const required = { required: config.required, message: cur.placeholder }
            if (Array.isArray(config.defaultValue)) {
              required.type = 'array'
              required.message = `请至少选择一个${config.label}`
            }
            required.message === undefined && (required.message = `${config.label}不能为空`)
            config.regList.push(required)
          }
          rules[cur.__vModel__] = config.regList.map(item => {
            // eslint-disable-next-line no-eval
            item.pattern && (item.pattern = eval(item.pattern))
            item.trigger = ruleTrigger && ruleTrigger[config.tag]
            return item
          })
        }
        if (config.children) this.buildRules(config.children, rules)
      })
    },
    resetForm () {
      this.formConfCopy = JSON.parse(JSON.stringify(this.formConf))
      this.$refs[this.formConf.formRef].resetFields()
    },
    submitForm () {
      this.$refs[this.formConf.formRef].validate(valid => {
        if (!valid) return false
        // 触发sumit事件
        this.$emit('submit', this[this.formConf.formModel])
        return true
      })
    }
  },
  render (h) {
    return renderFrom.call(this, h)
  }
}
</script>
