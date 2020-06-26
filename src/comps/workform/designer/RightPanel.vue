<template>
  <div class="right-board">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="组件属性">
        <div class="field-box">
          <!-- 组件属性 -->
          <a-form-model :layout="layout"
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol">
            <a-form-model-item v-if="activeData.__vModel__!==undefined"
                               label="字段名">
              <a-input v-model="activeData.__vModel__"
                       placeholder="请输入字段名（v-model）" />
            </a-form-model-item>
            <a-form-model-item v-if="activeData.__config__.componentName!==undefined"
                               label="组件名">
              {{ activeData.__config__.componentName }}
            </a-form-model-item>
            <a-form-model-item v-if="activeData.__config__.label!==undefined"
                               label="标题">
              <a-input v-model="activeData.__config__.label"
                       placeholder="请输入标题" />
            </a-form-model-item>
            <a-form-model-item v-if="activeData.placeholder!==undefined"
                               label="占位提示">
              <a-input v-model="activeData.placeholder"
                       placeholder="请输入占位提示" />
            </a-form-model-item>
            <a-form-model-item v-if="activeData.__vModel__!==undefined&&activeData.__config__.tag !== 'a-checkbox-group'&& activeData.__config__.tag !== 'a-time-picker'&& activeData.__config__.tag !== 'a-date-picker'"
                               label="默认值">
              <a-input v-model="activeData.__config__.defaultValue"
                       placeholder="请输入默认值" />
            </a-form-model-item>
          <a-form-model-item v-if="activeData.min!==undefined" label="最小值">
            <a-input-number v-model="activeData.min" placeholder="最小值" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.max!==undefined" label="最大值">
            <a-input-number v-model="activeData.max" placeholder="最大值" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.step!==undefined" label="步长">
            <a-input-number v-model="activeData.step" placeholder="步数" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.maxLength !== undefined" label="最多输入">
            <a-input-number v-model="activeData.maxLength" placeholder="请输入字符长度" />
          </a-form-model-item>
          <a-form-model-item
            v-if="activeData.type !== undefined && activeData.__config__.tag === 'a-button'"
            label="按钮类型">
            <a-select v-model="activeData.type" :style="{ width: '100%' }">
              <a-select-option value="primary" >primary</a-select-option>
              <a-select-option value="dashed" >dashed</a-select-option>
              <a-select-option value="danger" >danger</a-select-option>
              <a-select-option value="link" >link</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item
            v-if="activeData.size !== undefined"
            label="组件尺寸">
            <a-radio-group v-model="activeData.size">
              <a-radio-button value="large">较大</a-radio-button>
              <a-radio-button value="default">默认</a-radio-button>
              <a-radio-button value="small">较小</a-radio-button>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.optionType !== undefined" label="选项样式">
            <a-radio-group v-model="activeData.__config__.optionType">
              <a-radio-button value="default">默认</a-radio-button>
              <a-radio-button value="button">按钮</a-radio-button>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item v-if="activeData.count!== undefined" label="评分取值">
            <a-input-number v-model="activeData.count" placeholder="评分取值" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.readonly !== undefined" label="是否只读">
            <a-switch v-model="activeData.readonly" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.disabled !== undefined" label="是否禁用">
            <a-switch v-model="activeData.disabled" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.span!==undefined" label="表单栅格">
            <a-slider v-model="activeData.__config__.span" :max="24" :min="1" :marks="{12:''}" @change="spanChange" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.layout==='rowFormItem'" label="栅格间隔">
            <a-input-number v-model="activeData.gutter" :min="0" placeholder="栅格间隔" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.layout==='rowFormItem'" label="布局模式">
            <a-radio-group v-model="activeData.type">
              <a-radio-button value="default">默认</a-radio-button>
              <a-radio-button value="flex">弹性盒</a-radio-button>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item v-if="activeData.justify!==undefined&&activeData.type==='flex'" label="水平排列">
            <a-select v-model="activeData.justify" :style="{width: '100%'}">
              <a-select-option value="start" >start</a-select-option>
              <a-select-option value="end" >end</a-select-option>
              <a-select-option value="center" >center</a-select-option>
              <a-select-option value="space-around" >space-around</a-select-option>
              <a-select-option value="space-between" >space-between</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item v-if="activeData.align!==undefined&&activeData.type==='flex'" label="垂直排列">
            <a-radio-group v-model="activeData.align">
              <a-radio-button value="top">靠顶</a-radio-button>
              <a-radio-button value="middle">居中</a-radio-button>
              <a-radio-button value="bottom">靠底</a-radio-button>
            </a-radio-group>
          </a-form-model-item>
          <template v-if="['a-checkbox-group', 'a-radio-group', 'a-select'].indexOf(activeData.__config__.tag) > -1">
            <a-divider>选项</a-divider>
            <draggable
              :list="activeData.__slot__.options"
              :animation="340"
              group="selectItem"
              handle=".option-drag"
            >
              <div v-for="(item, index) in activeData.__slot__.options" :key="index" class="select-item">
                <div class="select-line-icon option-drag">
                  <a-icon type="vertical-align-middle" />
                </div>
                <a-input v-model="item.label" placeholder="选项名" size="small" />
                <a-input v-model="item.value" placeholder="选项值" size="small" />
                <div class="close-btn select-line-icon" @click="activeData.__slot__.options.splice(index, 1)">
                  <a-icon type="minus-circle" />
                </div>
              </div>
            </draggable>
            <div style="margin-left: 20px;">
              <a-button
                style="padding-bottom: 0"
                icon="plus-circle"
                type="link"
                @click="addSelectItem"
              >
                添加选项
              </a-button>
            </div>
            <a-divider />
          </template>
          <template v-if="activeData.__config__.layout === 'colFormItem'">
            <a-divider>正则校验</a-divider>
            <div
              v-for="(item, index) in activeData.__config__.regList"
              :key="index"
              class="reg-item"
            >
              <span class="close-btn" @click="activeData.__config__.regList.splice(index, 1)">
                <a-icon type="minus-circle" />
              </span>
              <a-form-model-item label="表达式">
                <a-input v-model="item.pattern" placeholder="请输入正则" />
              </a-form-model-item>
              <a-form-model-item label="错误提示" style="margin-bottom:0">
                <a-input v-model="item.message" placeholder="请输入错误提示" />
              </a-form-model-item>
            </div>
            <div style="margin-left: 20px">
              <a-button icon="plus-circle" type="link" @click="addRuleItem">
                添加规则
              </a-button>
            </div>
          </template>
          </a-form-model>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="表单属性">
        <div class="field-box">
          <!-- 表单属性 -->
          <a-form-model :layout="layout"
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol">
            <a-form-model-item label="表单名">
              <a-input v-model="formConf.formRef"
                       placeholder="请输入表单名（ref）" />
            </a-form-model-item>
            <a-form-model-item label="表单模型">
              <a-input v-model="formConf.formModel"
                       placeholder="请输入数据模型" />
            </a-form-model-item>
            <a-form-model-item label="校验模型">
              <a-input v-model="formConf.formRules"
                       placeholder="请输入校验模型" />
            </a-form-model-item>
            <a-form-model-item label="标签对齐">
              <a-radio-group v-model="formConf.labelAlign">
                <a-radio-button value="left">左对齐</a-radio-button>
                <a-radio-button value="right">右对齐</a-radio-button>
              </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="表单布局">
              <a-radio-group v-model="formConf.layout">
                <a-radio-button value="horizontal">横向</a-radio-button>
                <a-radio-button value="vertical">纵向</a-radio-button>
                <a-radio-button value="inline">行内</a-radio-button>
              </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="标签宽度">
              <a-input-number v-model="formConf.labelCol.span"
                              :min="0"
                              placeholder="标签宽度" />
            </a-form-model-item>
            <a-form-model-item label="控件宽度">
              <a-input-number v-model="formConf.wrapperCol.span"
                              :min="0"
                              placeholder="标签宽度" />
            </a-form-model-item>
            <a-form-model-item label="栅格间隔">
              <a-input-number v-model="formConf.gutter"
                              :min="0"
                              placeholder="栅格间隔" />
            </a-form-model-item>
            <a-form-model-item label="禁用表单">
              <a-switch v-model="formConf.disabled" />
            </a-form-model-item>
            <a-form-model-item label="表单按钮">
              <a-switch v-model="formConf.formButtons" />
            </a-form-model-item>
          </a-form-model>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { isNumberStr } from '../formutil/index'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: ['showField', 'activeData', 'formConf'],
  data () {
    return {
      layout: 'horizontal',
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    }
  },
  computed: {
  },
  watch: {
    formConf: {
      handler (val) {
        // saveFormConf(val)
      },
      deep: true
    }
  },
  methods: {
    spanChange (val) {
      this.formConf.span = val
    },
    setOptionValue (item, val) {
      item.value = isNumberStr(val) ? +val : val
    },
    addSelectItem () {
      this.activeData.__slot__.options.push({
        label: '',
        value: ''
      })
    },
    addRuleItem () {
      this.activeData.__config__.regList.push({
        pattern: '',
        message: ''
      })
    }
  }
}
</script>

<style lang="less" scoped>
.right-board {
  position: absolute;
  width: 350px;
  right: 0;
  top: 0;
  padding-top: 3px;
  .field-box {
    position: relative;
    padding: 10px;
    height: 100%;
  }
}
.select-item {
  display: flex;
  border: 1px dashed #fff;
  box-sizing: border-box;
  & .close-btn {
    cursor: pointer;
    color: #f56c6c;
  }
  & .el-input + .el-input {
    margin-left: 4px;
  }
}
.select-item + .select-item {
  margin-top: 4px;
}
.select-item.sortable-chosen {
  border: 1px dashed #409eff;
}
.select-line-icon {
  line-height: 32px;
  font-size: 22px;
  padding: 0 4px;
  color: #777;
}
.option-drag {
  cursor: move;
}
.time-range {
  .el-date-editor {
    width: 227px;
  }
  ::v-deep .el-icon-time {
    display: none;
  }
}
.document-link {
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  top: 0;
  left: 0;
  cursor: pointer;
  background: #409eff;
  z-index: 1;
  border-radius: 0 0 6px 0;
  text-align: center;
  line-height: 26px;
  color: #fff;
  font-size: 18px;
}
.node-label {
  font-size: 14px;
}
.node-icon {
  color: #bebfc3;
}

.reg-item{
  padding: 12px 6px;
  background: #f8f8f8;
  position: relative;
  border-radius: 4px;
  .close-btn{
    position: absolute;
    right: -6px;
    top: -6px;
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    color: #fff;
    text-align: center;
    z-index: 1;
    cursor: pointer;
    font-size: 12px;
    &:hover{
      background: rgba(210, 23, 23, 0.5)
    }
  }
  & + .reg-item{
    margin-top: 18px;
  }
}
</style>
