<script>
import draggable from 'vuedraggable'
import render from '../render/render'

const components = {
  itemButtons (h, element, index, parent) {
    const { copyItem, deleteItem } = this.$listeners
    return [
      <span class="drawing-item-copy" title="复制" onClick={event => {
        copyItem(element, parent); event.stopPropagation()
      }}>
        <a-icon type="copy" />
      </span>,
      <span class="drawing-item-delete" title="删除" onClick={event => {
        deleteItem(index, parent); event.stopPropagation()
      }}>
        <a-icon type="delete" />
      </span>
    ]
  }
}
const layouts = {
  colFormItem (h, element, index, parent) {
    const { activeItem } = this.$listeners
    const config = element.__config__
    let className = this.activeId === config.formId ? 'drawing-item active-form-item' : 'drawing-item'
    if (this.formConf.unFocusedComponentBorder) className += ' unfocus-bordered'
    // let labelCol = config.labelCol ? `${config.labelCol}` : '{}'
    // if (config.showLabel === false) labelCol = '{ span: 0 }'
    return (
      <a-col span={config.span} class={className}
        nativeOnClick={event => { activeItem(element); event.stopPropagation() }}>
        <a-form-model-item
          label={config.showLabel ? config.label : ''} required={config.required}>
          <render key={config.renderKey} conf={element} onInput={event => {
            this.$set(config, 'defaultValue', event)
          }} />
        </a-form-model-item>
        {components.itemButtons.apply(this, arguments)}
      </a-col>
    )
  },
  rowFormItem (h, element, index, parent) {
    const { activeItem } = this.$listeners
    const className = this.activeId === element.__config__.formId
      ? 'drawing-row-item active-form-item'
      : 'drawing-row-item'
    let child = renderChildren.apply(this, arguments)
    if (element.type === 'flex') {
      child = <a-row type={element.type} justify={element.justify} align={element.align}>
        {child}
      </a-row>
    }
    return (
      <a-col span={element.__config__.span}>
        <a-row gutter={element.__config__.gutter} class={className}
          nativeOnClick={event => { activeItem(element); event.stopPropagation() }}>
          <span class="component-name">{element.__config__.componentName}</span>
          <draggable list={element.__config__.children} animation={340} group="componentsGroup" class="drag-wrapper">
            {child}
          </draggable>
          {components.itemButtons.apply(this, arguments)}
        </a-row>
      </a-col>
    )
  }
}

function renderChildren (h, element, index, parent) {
  const config = element.__config__
  if (!Array.isArray(config.children)) return null
  return config.children.map((el, i) => {
    const layout = layouts[el.__config__.layout]
    if (layout) {
      return layout.call(this, h, el, i, config.children)
    }
    return layoutIsNotFound.call(this)
  })
}

function layoutIsNotFound () {
  throw new Error(`没有与${this.element.__config__.layout}匹配的layout`)
}

export default {
  components: {
    render,
    draggable
  },
  props: [
    'element',
    'index',
    'drawingList',
    'activeId',
    'formConf'
  ],
  render (h) {
    const layout = layouts[this.element.__config__.layout]

    if (layout) {
      return layout.call(this, h, this.element, this.index, this.drawingList)
    }
    return layoutIsNotFound.call(this)
  }
}
</script>

<style lang="less" scoped>
@selectedColor: #f6f7ff;
@lighterBlue: #409eff;

.active-form-item {
  & > .a-form-model-item {
    background: @selectedColor;
    border-radius: 6px;
  }
  & > .drawing-item-copy,
  & > .drawing-item-delete {
    display: initial;
  }
  & > .component-name {
    color: @lighterBlue;
  }
}
.a-form-model-item {
  margin-bottom: 15px;
}

.drawing-item {
  position: relative;
  cursor: move;
  &.unfocus-bordered:not(.active-form-item) > div:first-child {
    border: 1px dashed #ccc;
  }
  .a-form-model-item {
    padding: 12px 10px;
  }
}
.drawing-row-item {
  position: relative;
  cursor: move;
  box-sizing: border-box;
  border: 1px dashed #ccc;
  border-radius: 3px;
  padding: 0 2px;
  margin-bottom: 15px;
  .drawing-row-item {
    margin-bottom: 2px;
  }
  .a-col {
    margin-top: 22px;
  }
  .a-form-model-item {
    margin-bottom: 0;
  }
  .drag-wrapper {
    min-height: 80px;
  }
  &.active-form-item {
    border: 1px dashed @lighterBlue;
  }
  .component-name {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    color: #bbb;
    display: inline-block;
    padding: 0 6px;
  }
}
.drawing-item,
.drawing-row-item {
  &:hover {
    & > .a-form-model-item {
      background: @selectedColor;
      border-radius: 6px;
    }
    & > .drawing-item-copy,
    & > .drawing-item-delete {
      display: initial;
    }
  }
  & > .drawing-item-copy,
  & > .drawing-item-delete {
    display: none;
    position: absolute;
    top: -10px;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border-radius: 50%;
    font-size: 12px;
    border: 1px solid;
    cursor: pointer;
    z-index: 1;
  }
  & > .drawing-item-copy {
    right: 56px;
    border-color: @lighterBlue;
    color: @lighterBlue;
    background: #fff;
    &:hover {
      background: @lighterBlue;
      color: #fff;
    }
  }
  & > .drawing-item-delete {
    right: 24px;
    border-color: #f56c6c;
    color: #f56c6c;
    background: #fff;
    &:hover {
      background: #f56c6c;
      color: #fff;
    }
  }
}
</style>
