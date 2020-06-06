<template>
  <div class="right-board">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="组件属性">
        <div class="field-box">
          <!-- 组件属性 -->
        <a-form-model :layout="layout" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item v-if="activeData.__vModel__!==undefined" label="字段名">
            <a-input v-model="activeData.__vModel__" placeholder="请输入字段名（v-model）" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.componentName!==undefined" label="组件名">
            {{ activeData.__config__.componentName }}
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.label!==undefined" label="标题">
            <a-input v-model="activeData.__config__.label" placeholder="请输入标题" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.placeholder!==undefined" label="占位提示">
            <a-input v-model="activeData.placeholder" placeholder="请输入占位提示" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData['start-placeholder']!==undefined" label="开始占位">
            <a-input v-model="activeData['start-placeholder']" placeholder="请输入占位提示" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData['end-placeholder']!==undefined" label="结束占位">
            <a-input v-model="activeData['end-placeholder']" placeholder="请输入占位提示" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.span!==undefined" label="表单栅格">
            <a-slider v-model="activeData.__config__.span" :max="24" :min="1" :marks="{12:''}" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.layout==='rowFormItem'" label="栅格间隔">
            <a-input-number v-model="activeData.gutter" :min="0" placeholder="栅格间隔" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.layout==='rowFormItem'" label="布局模式">
            <a-radio-group v-model="activeData.type">
              <a-radio-button value="default" />
              <a-radio-button value="flex" />
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__config__.labelWidth!==undefined" label="标签宽度">
            <a-input v-model.number="activeData.__config__.labelWidth" type="number" placeholder="请输入标签宽度" />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.style&&activeData.style.width!==undefined" label="组件宽度">
            <a-input v-model="activeData.style.width" placeholder="请输入组件宽度" clearable />
          </a-form-model-item>
          <a-form-model-item v-if="activeData.__vModel__!==undefined" label="默认值">
            <a-input
              :value="activeData.__config__.defaultValue"
              placeholder="请输入默认值"
            />
          </a-form-model-item>
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
            <a-form-model-item label="表单尺寸">
              <a-radio-group v-model="formConf.size">
                <a-radio-button value="medium">中等</a-radio-button>
                <a-radio-button value="small">较小</a-radio-button>
                <a-radio-button value="mini">迷你</a-radio-button>
              </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="标签对齐">
              <a-radio-group v-model="formConf.labelAlign">
                <a-radio-button value="left">左对齐</a-radio-button>
                <a-radio-button value="right">右对齐</a-radio-button>
                <a-radio-button value="top">顶部对齐</a-radio-button>
              </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="标签宽度">
              <a-input-number v-model="formConf.labelWidth"
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

export default {
  components: {
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
    documentLink () {
      return (
        this.activeData.__config__.document || 'https://www.antdv.com/docs/vue/introduce-cn/'
      )
    }
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
</style>
