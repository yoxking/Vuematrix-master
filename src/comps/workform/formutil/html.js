/* eslint-disable max-len */
import ruleTrigger from './rules'

let confGlobal
let someSpanIsNot24

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
  return `<style lang="less" scoped>
    ${cssStr}
  </style>`
}

function buildFormTemplate (scheme, child, type) {
  let labelAlign = ''
  if (scheme.labelAlign !== 'right') {
    labelAlign = `label-align="${scheme.labelAlign}"`
  }
  const disabled = scheme.disabled ? `:disabled="${scheme.disabled}"` : ''
  let str = `<a-form-model ref="${scheme.formRef}" :model="${scheme.formModel}" :rules="${scheme.formRules}" layout="${scheme.layout}" :label-col="{span:${scheme.labelCol.span}}" :wrapper-col="{span:${scheme.wrapperCol.span}}" ${disabled}  ${labelAlign}>
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
    str = `<a-form-model-item>
          <a-button type="primary" @click="submitForm">提交</a-button>
          <a-button @click="resetForm">重置</a-button>
        </a-form-model-item>`
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
    let label = `label="${config.label}"`
    if (config.showLabel === false) {
      label = ''
    }
    const required = !ruleTrigger[config.tag] && config.required ? 'required' : ''
    const tagDom = tags[config.tag] ? tags[config.tag](scheme) : null
    let str = `<a-form-model-item  ${label} prop="${scheme.__vModel__}" ${required}>
        ${tagDom}
      </a-form-model-item>`
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
    const size = el.size ? `size="${el.size}"` : ''
    let child = buildButtonChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${type}  ${size} ${disabled}>${child}</${tag}>`
  },
  'a-input': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const maxlength = el.maxLength ? `:max-length="${el.maxLength}"` : ''
    const readonly = el.readOnly ? 'readOnly' : ''
    let child = buildInputChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${placeholder} ${maxlength} ${readonly} ${disabled}>${child}</${tag}>`
  },
  'a-textarea': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const maxlength = el.maxLength ? `:max-length="${el.maxLength}"` : ''
    const readonly = el.readOnly ? 'readOnly' : ''
    let child = buildInputChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${placeholder} ${maxlength} ${readonly} ${disabled}>${child}</${tag}>`
  },
  'a-input-password': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const maxlength = el.maxLength ? `:max-length="${el.maxLength}"` : ''
    const readonly = el.readOnly ? 'readOnly' : ''
    let child = buildInputChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${placeholder} ${maxlength} ${readonly} ${disabled}>${child}</${tag}>`
  },
  'a-input-number': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const min = el.min ? `:min='${el.min}'` : ''
    const max = el.max ? `:max='${el.max}'` : ''
    const step = el.step ? `:step='${el.step}'` : ''
    const readonly = el.readOnly ? 'readOnly' : ''

    return `<${tag} ${vModel} ${placeholder} ${step} ${readonly}  ${min} ${max} ${disabled}></${tag}>`
  },
  'a-select': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const mode = el.mode ? `mode="${el.mode}"` : ''
    let child = buildSelectChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${placeholder} ${disabled} ${mode} >${child}</${tag}>`
  },
  'a-radio-group': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    let child = buildRadioGroupChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${disabled}>${child}</${tag}>`
  },
  'a-checkbox-group': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    let child = buildCheckboxGroupChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${vModel} ${disabled}>${child}</${tag}>`
  },
  'a-switch': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    const size = el.size ? `size="${el.size}"` : ''

    return `<${tag} ${vModel} ${size}  ${disabled}></${tag}>`
  },
  'a-slider': el => {
    const { tag, disabled, vModel, range } = attrBuilder(el)
    const min = el.min ? `:min='${el.min}'` : ''
    const max = el.max ? `:max='${el.max}'` : ''
    const step = el.step ? `:step='${el.step}'` : ''

    return `<${tag} ${min} ${max} ${step} ${vModel} ${range}  ${disabled}></${tag}>`
  },
  'a-time-picker': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const format = el.format ? `format="${el.format}"` : ''

    return `<${tag} ${vModel} ${format} ${placeholder} ${disabled}></${tag}>`
  },
  'a-date-picker': el => {
    const {
      tag, disabled, vModel, placeholder
    } = attrBuilder(el)
    const format = el.format ? `format="${el.format}"` : ''

    return `<${tag} ${vModel} ${format}  ${placeholder} ${disabled}></${tag}>`
  },
  'a-range-picker': el => {
    const {
      tag, disabled, vModel
    } = attrBuilder(el)
    const format = el.format ? `format="${el.format}"` : ''

    return `<${tag} ${vModel} ${format}  ${disabled}></${tag}>`
  },
  'a-rate': el => {
    const { tag, disabled, vModel } = attrBuilder(el)
    const count = el.count ? `:count='${el.count}'` : ''

    return `<${tag} ${vModel} ${count} ${disabled}></${tag}>`
  },
  'a-upload': el => {
    const { tag } = el.__config__
    const disabled = el.disabled ? ':disabled=\'true\'' : ''
    const action = el.action ? `:action="${el.__vModel__}Action"` : ''
    const accept = el.accept ? `accept="${el.accept}"` : ''
    let child = buildUploadChild(el)

    if (child) child = `\n${child}\n` // 换行
    return `<${tag} ${action}  ${accept} ${name} ${disabled}>${child}</${tag}>`
  }
}

function attrBuilder (el) {
  return {
    tag: el.__config__.tag,
    vModel: `v-model="${confGlobal.formModel}.${el.__vModel__}"`,
    placeholder: el.placeholder ? `placeholder="${el.placeholder}"` : '',
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
    children.push(`<${tag} v-for="(item, index) in ${scheme.__vModel__}Options" :key="index" :value="item.value" :disabled="item.disabled" >{{item.label}}</${tag}>`)
  }
  return children.join('\n')
}

// a-checkbox-group 子级
function buildCheckboxGroupChild (scheme) {
  const children = []
  const slot = scheme.__slot__
  if (slot && slot.options && slot.options.length) {
    const tag = 'a-checkbox'
    children.push(`<${tag} v-for="(item, index) in ${scheme.__vModel__}Options" :key="index" :label="item.value" :disabled="item.disabled" >{{item.label}}</${tag}>`)
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

  confGlobal = null
  return temp
}
