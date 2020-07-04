
<template>
  <div class="container">
    <div class="left-board">
      <div class="logo-wrapper">
        <div class="logo">
         表单设计器
        </div>
      </div>
      <div class="left-scrollbar">
        <div class="components-list">
          <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
            <div class="components-title">
              {{ item.title }}
            </div>
            <draggable
              class="components-draggable"
              :list="item.list"
              :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
              :clone="cloneComponent"
              draggable=".components-item"
              :sort="false"
              @end="onEnd"
            >
              <div
                v-for="(element, index) in item.list"
                :key="index"
                class="components-item"
                @click="addComponent(element)"
              >
                <div class="components-body">
                  <svg-icon :icon-class="element.__config__.tagIcon" />
                  {{ element.__config__.label }}
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>

    <div class="center-board">
      <div class="action-bar">
        <a-button type="link" @click="preview">
          预览
        </a-button>
        <a-button type="link" @click="debugit">
          调试
        </a-button>
        <a-button type="link" class="delete-btn"  @click="clearall">
          清空
        </a-button>
        <a-button type="primary" @click="savejson">
          保存
        </a-button>
      </div>
      <div class="center-scrollbar">
        <a-row class="center-board-row" :gutter="formConf.gutter">
          <a-form-model
            :layout="formConf.layout"
            :label-col="formConf.labelCol"
            :wrapper-col="formConf.wrapperCol"
            :label-align="formConf.labelAlign"
            :disabled="formConf.disabled"
          >
            <draggable class="drawing-board" :list="drawingList" :animation="340" group="componentsGroup">
              <draggable-item
                v-for="(element, index) in drawingList"
                :key="element.renderKey"
                :drawing-list="drawingList"
                :element="element"
                :index="index"
                :active-id="activeId"
                :form-conf="formConf"
                @activeItem="activeFormItem"
                @copyItem="drawingItemCopy"
                @deleteItem="drawingItemDelete"
              />
            </draggable>
            <div v-show="!drawingList.length" class="empty-info">
              从左侧拖入或点选组件进行表单设计
            </div>
          </a-form-model>
        </a-row>
      </div>
    </div>

    <right-panel
      :active-data="activeData"
      :form-conf="formConf"
      :show-field="!!drawingList.length"
      @tag-change="tagChange"
    />
    <input id="copyNode" type="hidden">
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import draggableItem from './DraggItem'
import rightPanel from './RightPanel'

import drawingDefalut from '../formutil/draw'

import { inputComponents, selectComponents, layoutComponents, formConf } from '../formutil/config'
import { makeUpHtml, vueTemplate, vueScript, cssStyle } from '../formutil/html'
import { makeUpJs } from '../formutil/jscript'
import { makeUpCss } from '../formutil/css'

import preview from '../preview/Index'

let oldActiveId
let tempActiveData
const idGlobal = 100

export default {
  components: {
    draggable,
    draggableItem,
    rightPanel
  },
  props: {
    layerid: {// 自动注入的layerid
      type: String,
      default: ''
    },
    id: {// 传递的数据
      type: String,
      default: ''
    },
    lydata: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      idGlobal,
      formConf,
      formData: {},
      generateConf: null,
      inputComponents,
      selectComponents,
      layoutComponents,
      drawingList: drawingDefalut,
      activeId: drawingDefalut[0].formId,
      activeData: drawingDefalut[0],
      leftComponents: [
        {
          title: '输入型组件',
          list: inputComponents
        },
        {
          title: '选择型组件',
          list: selectComponents
        },
        {
          title: '布局型组件',
          list: layoutComponents
        }
      ]
    }
  },
  computed: {
  },
  watch: {
    // eslint-disable-next-line func-names
    'activeData.__config__.label': function (val, oldVal) {
      if (
        this.activeData.placeholder === undefined ||
        !this.activeData.__config__.tag ||
        oldActiveId !== this.activeId
      ) {
        return
      }
      this.activeData.placeholder = this.activeData.placeholder.replace(oldVal, '') + val
    },
    activeId: {
      handler (val) {
        oldActiveId = val
      },
      immediate: true
    }
  },
  mounted () {
    this.drawingList = drawingDefalut
    this.activeFormItem(this.drawingList[0])
  },
  methods: {
    activeFormItem (element) {
      this.activeData = element
      this.activeId = element.__config__.formId
    },
    onEnd (obj) {
      if (obj.from !== obj.to) {
        this.activeData = tempActiveData
        this.activeId = this.idGlobal
      }
    },
    addComponent (item) {
      const clone = this.cloneComponent(item)
      this.drawingList.push(clone)
      this.activeFormItem(clone)
    },
    cloneComponent (origin) {
      const clone = JSON.parse(JSON.stringify(origin))
      const config = clone.__config__
      config.formId = ++this.idGlobal
      config.span = this.formConf.span
      config.renderKey = +new Date() // 改变renderKey后可以实现强制更新组件
      if (config.layout === 'colFormItem') {
        clone.__vModel__ = `field${this.idGlobal}`
        clone.placeholder !== undefined && (clone.placeholder += config.label)
      } else if (config.layout === 'rowFormItem') {
        config.componentName = `row${this.idGlobal}`
        config.gutter = this.formConf.gutter
      }
      tempActiveData = clone
      return tempActiveData
    },
    drawingItemCopy (item, parent) {
      let clone = JSON.parse(JSON.stringify(item))
      clone = this.createIdAndKey(clone)
      parent.push(clone)
      this.activeFormItem(clone)
    },
    createIdAndKey (item) {
      const config = item.__config__
      config.formId = ++this.idGlobal
      config.renderKey = +new Date()
      if (config.layout === 'colFormItem') {
        item.__vModel__ = `field${this.idGlobal}`
      } else if (config.layout === 'rowFormItem') {
        config.componentName = `row${this.idGlobal}`
      }
      if (Array.isArray(config.children)) {
        config.children = config.children.map(childItem => this.createIdAndKey(childItem))
      }
      return item
    },
    drawingItemDelete (index, parent) {
      parent.splice(index, 1)
      this.$nextTick(() => {
        const len = this.drawingList.length
        if (len) {
          this.activeFormItem(this.drawingList[len - 1])
        }
      })
    },
    AssembleFormData () {
      this.formData = {
        fields: JSON.parse(JSON.stringify(this.drawingList)),
        ...this.formConf
      }
    },
    preview () {
      this.$dlg.modal(preview, {
        title: '表单预览',
        width: 900,
        height: 650
      })
    },
    debugit () {
      const { type } = 'file'
      this.AssembleFormData()
      const script = vueScript(makeUpJs(this.formData, type))
      const html = vueTemplate(makeUpHtml(this.formData, type))
      const css = cssStyle(makeUpCss(this.formData))

      const v = html + script + css
      console.log(v)
    },
    clearall () {
      const that = this
      this.$confirm({
        title: '提示',
        content: '确定要清空所有组件吗?',
        okText: '确认',
        cancelText: '取消',
        onOk () {
          that.drawingList = []
          that.idGlobal = 100
        }
      })
    },
    savejson () {
      this.AssembleFormData()
      console.log(JSON.stringify(this.formData))
    },
    tagChange (newTag) {
      newTag = this.cloneComponent(newTag)
      const config = newTag.__config__
      newTag.__vModel__ = this.activeData.__vModel__
      config.formId = this.activeId
      config.span = this.activeData.__config__.span
      this.activeData.__config__.tag = config.tag
      this.activeData.__config__.tagIcon = config.tagIcon
      this.activeData.__config__.document = config.document
      if (typeof this.activeData.__config__.defaultValue === typeof config.defaultValue) {
        config.defaultValue = this.activeData.__config__.defaultValue
      }
      Object.keys(newTag).forEach(key => {
        if (this.activeData[key] !== undefined) {
          newTag[key] = this.activeData[key]
        }
      })
      this.activeData = newTag
      this.updateDrawingList(newTag, this.drawingList)
    },
    updateDrawingList (newTag, list) {
      const index = list.findIndex(item => item.__config__.formId === this.activeId)
      if (index > -1) {
        list.splice(index, 1, newTag)
      } else {
        list.forEach(item => {
          if (Array.isArray(item.__config__.children)) this.updateDrawingList(newTag, item.__config__.children)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@selectedColor: #f6f7ff;
@lighterBlue: #2F54EB;
@topheight: 46px;

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.components-list {
  padding: 8px;
  box-sizing: border-box;
  height: 100%;
  .components-item {
    display: inline-block;
    width: 48%;
    margin: 1%;
    transition: transform 0ms !important;
  }
}
.components-draggable{
  padding-bottom: 20px;
}
.components-title{
  font-size: 14px;
  color: #222;
  margin: 6px 2px;
  .svg-icon{
    color: #666;
    font-size: 18px;
  }
}

.components-body {
  padding: 8px 10px;
  background: @selectedColor;
  font-size: 12px;
  cursor: move;
  border: 1px dashed @selectedColor;
  border-radius: 3px;
  .svg-icon{
    color: #777;
    font-size: 15px;
  }
  &:hover {
    border: 1px dashed #787be8;
    color: #787be8;
    .svg-icon {
      color: #787be8;
    }
  }
}

.left-board {
  width: 260px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
}
.left-scrollbar{
  height: calc(100vh - @topheight);
  overflow: hidden;
}
.center-scrollbar {
  height: calc(100vh - @topheight);
  overflow: hidden;
  border-left: 1px solid #f1e8e8;
  border-right: 1px solid #f1e8e8;
  box-sizing: border-box;
}
.center-board {
  height: 100vh;
  width: auto;
  margin: 0 350px 0 260px;
  box-sizing: border-box;
}
.empty-info{
  position: absolute;
  top: 46%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 18px;
  color: #ccb1ea;
  letter-spacing: 4px;
}
.action-bar{
  position: relative;
  height: @topheight;
  text-align: right;
  padding: 5px 15px;
  box-sizing: border-box;;
  border: 1px solid #f1e8e8;
  border-top: none;
  border-left: none;
  .delete-btn{
    color: #F56C6C;
  }
}
.logo-wrapper{
  position: relative;
  height: @topheight;
  background: #fff;
  border-bottom: 1px solid #f1e8e8;
  box-sizing: border-box;
}
.logo{
  position: absolute;
  left: 12px;
  top: 6px;
  line-height: 30px;
  color: #00afff;
  font-weight: 600;
  font-size: 17px;
  white-space: nowrap;
  > img{
    width: 30px;
    height: 30px;
    vertical-align: top;
  }
}

.center-board-row {
  padding: 12px 12px 15px 12px;
  box-sizing: border-box;
  & > .a-form-model {
    // 69 = 12+15+42
    height: calc(100vh - 69px);
  }
}
.drawing-board {
  min-height: 300px;
  position: relative;
  .components-body {
    padding: 0;
    margin: 0;
    font-size: 0;
  }
  .sortable-ghost {
    position: relative;
    display: block;
    overflow: hidden;
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 3px;
      background: rgb(89, 89, 223);
      z-index: 2;
    }
  }
  .components-item.sortable-ghost {
    width: 100%;
    height: 60px;
    background-color: @selectedColor;
  }
}
</style>
