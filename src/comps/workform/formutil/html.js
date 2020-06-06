/* eslint-disable max-len */
import ruleTrigger from './rules'

let confGlobal
let someSpanIsNot24

export function dialogWrapper (str) {
  return `<a-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">
    ${str}
    <div slot="footer">
      <a-button @click="close">取消</a-button>
      <a-button type="primary" @click="handelConfirm">确定</a-button>
    </div>
  </a-dialog>`
}

export function vueTemplate (str) {
  return `<template>
    <div>
      ${str}
    </div>
  </template>`
}

export function vueScript (str) {
  return `<script>
    ${str}
  </script>`
}

export function cssStyle (cssStr) {
  return `<style>
    ${cssStr}
  </style>`
}

function buildFormTemplate (scheme, child, type) {
  let labelAlign = ''
  if (scheme.labelAlign !== 'right') {
    labelAlign = `laba-align="${scheme.labelAlign}"`
  }
  const disabled = scheme.disabled ? `:disabled="${scheme.disabled}"` : ''
  let str = `<a-form-model ref="${scheme.formRef}" :model="${scheme.formModel}" :rules="${scheme.formRules}" :layout="${scheme.layout}" :laba-col="${scheme.labelCol}" :wrapper-col="${scheme.wrapperCol}" ${disabled}  ${labelAlign}>
      ${child}
      ${buildFromButtons(scheme, type)}
    </a-form-model>`
  if (someSpanIsNot24) {
    str = `<a-row :gutter="${scheme.gutter}">
        ${str}
      </a-row>`
  }
  return str
}

function buildFromButtons (scheme, type) {
  let str = ''
  if (scheme.formButtons && type === 'file') {
    str = `<a-form-moda-item>
          <a-button type="primary" @click="submitForm">提交</a-button>
          <a-button @click="resetForm">重置</a-button>
        </a-form-moda-item>`
    if (someSpanIsNot24) {
      str = `<a-col :span="24">
          ${str}
        </a-col>`
    }
  }
  return str
}

// span不为24的用a-col包裹
function colWrapper (scheme, str) {
  if (someSpanIsNot24 || scheme.__config__.span !== 24) {
    return `<a-col :span="${scheme.__config__.span}">
      ${str}
    </a-col>`
  }
  return str
}

const layouts = {
  colFormItem (scheme) {
    const config = scheme.__config__
    let labelCol = 'laba-col="{ span: 4 }"'
    let label = `label="${config.label}"`
    if (config.labelCol && config.labelCol !== confGlobal.labelCol) {
      labelCol = `laba-col="${config.labelCol}"`
    }
    if (config.showLabel === false) {
      labelCol = 'laba-col="{ span: 0 }"'
      label = ''
    }
    const required = !ruleTrigger[config.tag] && config.required ? 'required' : ''
    const tagDom = tags[config.tag] ? tags[config.tag](scheme) : null
    let str = `<a-form-moda-item ${labelCol} ${label} prop="${scheme.__vModel__}" ${required}>
        ${tagDom}
      </a-form-moda-item>`
    str = colWrapper(scheme, str)
    return str
  },
  rowFormItem (scheme) {
    const config = scheme.__config__
    const type = scheme.type === 'default' ? '' : `type="${scheme.type}"`
    const justify = scheme.type === 'default' ? '' : `justify="${scheme.justify}"`
    const align = scheme.type === 'default' ? '' : `align="${scheme.align}"`
    const gutter = scheme.gutter ? `:gutter="${scheme.gutter}"` : ''
    const children = config.children.map(el => layouts[el.__config__.layout](el))
    let str = `<a-row ${type} ${justify} ${align} ${gutter}>
      ${children.join('\n')}
    </a-row>`
    str = colWrapper(scheme, str)
    return str
  }
}

const tags = {
  'a-button': el => {
    const {
      tag, disabled
    } = attrBuilder(el)
    const type = el.type ? `type="${el.type}"` : ''
    const icon = el.icon ? `icon="${el.icon}"` : ''
    const round = el.round ? 'round' : ''
    const size = el.size ? `size="${el.size}"` : ''
    const plain = el.plain ? 'plain' : ''
    const circle = el.circle ? 'circle' : ''
    let child = buildButtonChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${type} ${icon} ${round} ${size} ${plain} ${disabled} ${circle}>${child}</${tag}>`
  },
  'a-input': el => {
    const {
      tag, disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const maxlength = el.maxlength ? `:maxlength="${el.maxlength}"` : ''
    const showWordLimit = el['show-word-limit'] ? 'show-word-limit' : ''
    const readonly = el.readonly ? 'readonly' : ''
    const prefixIcon = el['prefix-icon'] ? `prefix-icon='${el['prefix-icon']}'` : ''
    const suffixIcon = el['suffix-icon'] ? `suffix-icon='${el['suffix-icon']}'` : ''
    const showPassword = el['show-password'] ? 'show-password' : ''
    const type = el.type ? `type="${el.type}"` : ''
    const autosize = el.autosize && el.autosize.minRows
      ? `:autosize="{minRows: ${el.autosize.minRows}, maxRows: ${el.autosize.maxRows}}"`
      : ''
    let child = buildInputChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${type} ${placeholder} ${maxlength} ${showWordLimit} ${readonly} ${disabled} ${clearable} ${prefixIcon} ${suffixIcon} ${showPassword} ${autosize} ${width}>${child}</${tag}>`
  },
  'a-textarea': el => {
    const {
      tag, disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const maxlength = el.maxlength ? `:maxlength="${el.maxlength}"` : ''
    const showWordLimit = el['show-word-limit'] ? 'show-word-limit' : ''
    const readonly = el.readonly ? 'readonly' : ''
    const prefixIcon = el['prefix-icon'] ? `prefix-icon='${el['prefix-icon']}'` : ''
    const suffixIcon = el['suffix-icon'] ? `suffix-icon='${el['suffix-icon']}'` : ''
    const showPassword = el['show-password'] ? 'show-password' : ''
    const type = el.type ? `type="${el.type}"` : ''
    const autosize = el.autosize && el.autosize.minRows
      ? `:autosize="{minRows: ${el.autosize.minRows}, maxRows: ${el.autosize.maxRows}}"`
      : ''
    let child = buildInputChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${type} ${placeholder} ${maxlength} ${showWordLimit} ${readonly} ${disabled} ${clearable} ${prefixIcon} ${suffixIcon} ${showPassword} ${autosize} ${width}>${child}</${tag}>`
  },
  'a-input-password': el => {
    const {
      tag, disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const maxlength = el.maxlength ? `:maxlength="${el.maxlength}"` : ''
    const showWordLimit = el['show-word-limit'] ? 'show-word-limit' : ''
    const readonly = el.readonly ? 'readonly' : ''
    const prefixIcon = el['prefix-icon'] ? `prefix-icon='${el['prefix-icon']}'` : ''
    const suffixIcon = el['suffix-icon'] ? `suffix-icon='${el['suffix-icon']}'` : ''
    const showPassword = el['show-password'] ? 'show-password' : ''
    const type = el.type ? `type="${el.type}"` : ''
    const autosize = el.autosize && el.autosize.minRows
      ? `:autosize="{minRows: ${el.autosize.minRows}, maxRows: ${el.autosize.maxRows}}"`
      : ''
    let child = buildInputChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${type} ${placeholder} ${maxlength} ${showWordLimit} ${readonly} ${disabled} ${clearable} ${prefixIcon} ${suffixIcon} ${showPassword} ${autosize} ${width}>${child}</${tag}>`
  },
  'a-input-number': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const controlsPosition = el['controls-position'] ? `controls-position=${el['controls-position']}` : ''
    const min = el.min ? `:min='${el.min}'` : ''
    const max = el.max ? `:max='${el.max}'` : ''
    const step = el.step ? `:step='${el.step}'` : ''
    const stepStrictly = el['step-strictly'] ? 'step-strictly' : ''
    const precision = el.precision ? `:precision='${el.precision}'` : ''

    return `<${tag} ${vModel} ${placeholder} ${step} ${stepStrictly} ${precision} ${controlsPosition} ${min} ${max} ${disabled}></${tag}>`
  },
  'a-select': el => {
    const {
      tag, disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const filterable = el.filterable ? 'filterable' : ''
    const multiple = el.multiple ? 'multiple' : ''
    let child = buildSelectChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${placeholder} ${disabled} ${multiple} ${filterable} ${clearable} ${width}>${child}</${tag}>`
  },
  'a-radio-group': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    const size = `size="${el.size}"`
    let child = buildRadioGroupChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${size} ${disabled}>${child}</${tag}>`
  },
  'a-checkbox-group': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    const size = `size="${el.size}"`
    const min = el.min ? `:min="${el.min}"` : ''
    const max = el.max ? `:max="${el.max}"` : ''
    let child = buildCheckboxGroupChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${min} ${max} ${size} ${disabled}>${child}</${tag}>`
  },
  'a-switch': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    const activeText = el['active-text'] ? `active-text="${el['active-text']}"` : ''
    const inactiveText = el['inactive-text'] ? `inactive-text="${el['inactive-text']}"` : ''
    const activeColor = el['active-color'] ? `active-color="${el['active-color']}"` : ''
    const inactiveColor = el['inactive-color'] ? `inactive-color="${el['inactive-color']}"` : ''
    const activeValue = el['active-value'] !== true ? `:active-value='${JSON.stringify(el['active-value'])}'` : ''
    const inactiveValue = el['inactive-value'] !== false ? `:inactive-value='${JSON.stringify(el['inactive-value'])}'` : ''

    return `<${tag} ${vModel} ${activeText} ${inactiveText} ${activeColor} ${inactiveColor} ${activeValue} ${inactiveValue} ${disabled}></${tag}>`
  },
  'a-slider': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    const min = el.min ? `:min='${el.min}'` : ''
    const max = el.max ? `:max='${el.max}'` : ''
    const step = el.step ? `:step='${el.step}'` : ''
    const range = el.range ? 'range' : ''
    const showStops = el['show-stops'] ? `:show-stops="${el['show-stops']}"` : ''

    return `<${tag} ${min} ${max} ${step} ${vModel} ${range} ${showStops} ${disabled}></${tag}>`
  },
  'a-time-picker': el => {
    const {
      tag, disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const startPlaceholder = el['start-placeholder'] ? `start-placeholder="${el['start-placeholder']}"` : ''
    const endPlaceholder = el['end-placeholder'] ? `end-placeholder="${el['end-placeholder']}"` : ''
    const rangeSeparator = el['range-separator'] ? `range-separator="${el['range-separator']}"` : ''
    const isRange = el['is-range'] ? 'is-range' : ''
    const format = el.format ? `format="${el.format}"` : ''
    const valueFormat = el['value-format'] ? `value-format="${el['value-format']}"` : ''
    const pickerOptions = el['picker-options'] ? `:picker-options='${JSON.stringify(el['picker-options'])}'` : ''

    return `<${tag} ${vModel} ${isRange} ${format} ${valueFormat} ${pickerOptions} ${width} ${placeholder} ${startPlaceholder} ${endPlaceholder} ${rangeSeparator} ${clearable} ${disabled}></${tag}>`
  },
  'a-date-picker': el => {
    const {
      tag, disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const startPlaceholder = el['start-placeholder'] ? `start-placeholder="${el['start-placeholder']}"` : ''
    const endPlaceholder = el['end-placeholder'] ? `end-placeholder="${el['end-placeholder']}"` : ''
    const rangeSeparator = el['range-separator'] ? `range-separator="${el['range-separator']}"` : ''
    const format = el.format ? `format="${el.format}"` : ''
    const valueFormat = el['value-format'] ? `value-format="${el['value-format']}"` : ''
    const type = el.type === 'date' ? '' : `type="${el.type}"`
    const readonly = el.readonly ? 'readonly' : ''

    return `<${tag} ${type} ${vModel} ${format} ${valueFormat} ${width} ${placeholder} ${startPlaceholder} ${endPlaceholder} ${rangeSeparator} ${clearable} ${readonly} ${disabled}></${tag}>`
  },
  'a-rate': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    const max = el.max ? `:max='${el.max}'` : ''
    const allowHalf = el['allow-half'] ? 'allow-half' : ''
    const showText = el['show-text'] ? 'show-text' : ''
    const showScore = el['show-score'] ? 'show-score' : ''

    return `<${tag} ${vModel} ${max} ${allowHalf} ${showText} ${showScore} ${disabled}></${tag}>`
  },
  'a-upload': el => {
    const { tag } = el.__config__
    const disabled = el.disabled ? ':disabled=\'true\'' : ''
    const action = el.action ? `:action="${el.__vModel__}Action"` : ''
    const multiple = el.multiple ? 'multiple' : ''
    const listType = el['list-type'] !== 'text' ? `list-type="${el['list-type']}"` : ''
    const accept = el.accept ? `accept="${el.accept}"` : ''
    const name = el.name !== 'file' ? `name="${el.name}"` : ''
    const autoUpload = el['auto-upload'] === false ? ':auto-upload="false"' : ''
    const beforeUpload = `:before-upload="${el.__vModel__}BeforeUpload"`
    const fileList = `:file-list="${el.__vModel__}fileList"`
    const ref = `ref="${el.__vModel__}"`
    let child = buildUploadChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${ref} ${fileList} ${action} ${autoUpload} ${multiple} ${beforeUpload} ${listType} ${accept} ${name} ${disabled}>${child}</${tag}>`
  }
}

function attrBuilder (el) {
  return {
    tag: el.__config__.tag,
    vModel: `v-model="${confGlobal.formModel}.${el.__vModel__}"`,
    clearable: el.clearable ? 'clearable' : '',
    placeholder: el.placeholder ? `placeholder="${el.placeholder}"` : '',
    width: el.style && el.style.width ? ':style="{width: \'100%\'}"' : '',
    disabled: el.disabled ? ':disabled=\'true\'' : ''
  }
}

// a-buttin 子级
function buildButtonChild (scheme) {
  const children = []
  const slot = scheme.__slot__ || {}
  if (slot.default) {
    children.push(slot.default)
  }
  return children.join('\n')
}

// a-input 子级
function buildInputChild (scheme) {
  const children = []
  const slot = scheme.__slot__
  if (slot && slot.prepend) {
    children.push(`<template slot="prepend">${slot.prepend}</template>`)
  }
  if (slot && slot.append) {
    children.push(`<template slot="append">${slot.append}</template>`)
  }
  return children.join('\n')
}

// a-select 子级
function buildSelectChild (scheme) {
  const children = []
  const slot = scheme.__slot__
  if (slot && slot.options && slot.options.length) {
    children.push(`<a-select-option v-for="(item, index) in ${scheme.__vModel__}Options" :key="index"  :value="item.value" :disabled="item.disabled">{{item.label}}</a-select-option>`)
  }
  return children.join('\n')
}

// a-radio-group 子级
function buildRadioGroupChild (scheme) {
  const children = []
  const slot = scheme.__slot__
  const config = scheme.__config__
  if (slot && slot.options && slot.options.length) {
    const tag = config.optionType === 'button' ? 'a-radio-button' : 'a-radio'
    const border = config.border ? 'border' : ''
    children.push(`<${tag} v-for="(item, index) in ${scheme.__vModel__}Options" :key="index" :value="item.value" :disabled="item.disabled" ${border}>{{item.label}}</${tag}>`)
  }
  return children.join('\n')
}

// a-checkbox-group 子级
function buildCheckboxGroupChild (scheme) {
  const children = []
  const slot = scheme.__slot__
  const config = scheme.__config__
  if (slot && slot.options && slot.options.length) {
    const tag = config.optionType === 'button' ? 'a-checkbox-button' : 'a-checkbox'
    const border = config.border ? 'border' : ''
    children.push(`<${tag} v-for="(item, index) in ${scheme.__vModel__}Options" :key="index" :label="item.value" :disabled="item.disabled" ${border}>{{item.label}}</${tag}>`)
  }
  return children.join('\n')
}

// a-upload 子级
function buildUploadChild (scheme) {
  const list = []
  const config = scheme.__config__
  if (scheme['list-type'] === 'picture-card') list.push('<i class="a-icon-plus"></i>')
  else list.push(`<a-button size="small" type="primary" icon="a-icon-upload">${config.buttonText}</a-button>`)
  if (config.showTip) list.push(`<div slot="tip" class="a-upload__tip">只能上传不超过 ${config.fileSize}${config.sizeUnit} 的${scheme.accept}文件</div>`)
  return list.join('\n')
}

/**
 * 组装html代码。【入口函数】
 * @param {Object} formConfig 整个表单配置
 * @param {String} type 生成类型，文件或弹窗等
 */
export function makeUpHtml (formConfig, type) {
  const htmlList = []
  confGlobal = formConfig
  // 判断布局是否都沾满了24个栅格，以备后续简化代码结构
  someSpanIsNot24 = formConfig.fields.some(item => item.__config__.span !== 24)
  // 遍历渲染每个组件成html
  formConfig.fields.forEach(el => {
    htmlList.push(layouts[el.__config__.layout](el))
  })
  const htmlStr = htmlList.join('\n')
  // 将组件代码放进form标签
  let temp = buildFormTemplate(formConfig, htmlStr, type)
  // dialog标签包裹代码
  if (type === 'dialog') {
    temp = dialogWrapper(temp)
  }
  confGlobal = null
  return temp
}
