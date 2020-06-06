
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
        <a-button type="link" @click="run">
          运行
        </a-button>
        <a-button type="link" @click="showJson">
          查看json
        </a-button>
        <a-button type="link" @click="download">
          导出vue文件
        </a-button>
        <a-button type="link" @click="copy">
          复制代码
        </a-button>
        <a-button type="link" class="delete-btn"  @click="empty">
          清空
        </a-button>
      </div>
      <div class="center-scrollbar">
        <a-row class="center-board-row" :gutter="formConf.gutter">
          <a-form-model
            :layout="formConf.layout"
            :label-col="formConf.labelCol"
            :wrapper-col="formConf.wrapperCol"
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
import Clipboard from 'clipboard'
import render from '../render/render'
import RightPanel from './RightPanel'
import drawingDefalut from '../formutil/draw'

import {
  inputComponents, selectComponents, layoutComponents, formConf
} from '../formutil/config'
import {
  titleCase
} from '../formutil/index'
import {
  makeUpHtml, vueTemplate, vueScript, cssStyle
} from '../formutil/html'
import { makeUpJs } from '../formutil/jscript'
import { makeUpCss } from '../formutil/css'
import DraggableItem from './DraggItem'

let oldActiveId
let tempActiveData
const idGlobal = 100

export default {
  components: {
    draggable,
    render,
    RightPanel,
    DraggableItem
  },
  data () {
    return {
      idGlobal,
      formConf,
      inputComponents,
      selectComponents,
      layoutComponents,
      labelWidth: 100,
      drawingList: drawingDefalut,
      drawingData: {},
      activeId: drawingDefalut[0].formId,
      drawerVisible: false,
      formData: {},
      dialogVisible: false,
      jsonDrawerVisible: false,
      generateConf: null,
      showFileName: false,
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
    },
    drawingList: {
      handler (val) {
        // this.saveDrawingListDebounce(val)
        if (val.length === 0) this.idGlobal = 100
      },
      deep: true
    },
    idGlobal: {
      handler (val) {
        // this.saveIdGlobalDebounce(val)
      },
      immediate: true
    }
  },
  mounted () {
    this.drawingList = drawingDefalut
    this.activeFormItem(this.drawingList[0])
    const clipboard = new Clipboard('#copyNode', {
      text: trigger => {
        const codeStr = this.generateCode()
        this.$notify({
          title: '成功',
          message: '代码已复制到剪切板，可粘贴。',
          type: 'success'
        })
        return codeStr
      }
    })
    clipboard.on('error', e => {
      this.$message.error('代码复制失败')
    })
  },
  methods: {
    activeFormItem (element) {
      if (element != null) {
        this.activeData = element
        this.activeId = element.__config__.formId
      }
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
    AssembleFormData () {
      this.formData = {
        fields: JSON.parse(JSON.stringify(this.drawingList)),
        ...this.formConf
      }
    },
    generate (data) {
      const func = this[`exec${titleCase(this.operationType)}`]
      this.generateConf = data
      func && func(data)
    },
    execRun (data) {
      this.AssembleFormData()
      this.drawerVisible = true
    },
    execDownload (data) {
      // const codeStr = this.generateCode()
      // const blob = new Blob([codeStr], { type: 'text/plain;charset=utf-8' })
      // saveAs(blob, data.fileName)
    },
    execCopy (data) {
      document.getElementById('copyNode').click()
    },
    empty () {
      this.$confirm('确定要清空所有组件吗？', '提示', { type: 'warning' }).then(
        () => {
          this.drawingList = []
          this.idGlobal = 100
        }
      )
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
    generateCode () {
      const { type } = this.generateConf
      this.AssembleFormData()
      const script = vueScript(makeUpJs(this.formData, type))
      const html = vueTemplate(makeUpHtml(this.formData, type))
      const css = cssStyle(makeUpCss(this.formData))
      return html + script + css
    },
    showJson () {
      this.AssembleFormData()
      this.jsonDrawerVisible = true
    },
    download () {
      this.dialogVisible = true
      this.showFileName = true
      this.operationType = 'download'
    },
    run () {
      this.dialogVisible = true
      this.showFileName = false
      this.operationType = 'run'
    },
    copy () {
      this.dialogVisible = true
      this.showFileName = false
      this.operationType = 'copy'
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
    },
    refreshJson (data) {
      this.drawingList = JSON.parse(JSON.stringify(data.fields))
      delete data.fields
      this.formConf = data
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
  padding: 0 15px;
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
