<template>
  <div>
    <a-tabs default-active-key="1"
            @change="callback">
      <a-tab-pane key="1"
                  tab="基本">
        <a-form-model ref="ruleForm1"
                      :model="form"
                      :label-col="labelCol"
                      :wrapper-col="wrapperCol">
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="步骤名称"
                                 prop="branchName"
                                 ref="branchName">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="步骤编号"
                                 prop="branchType"
                                 ref="branchType">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="意见显示"
                                 prop="branchName"
                                 ref="branchName">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="工时(天)"
                                 prop="branchType"
                                 ref="branchType">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="审签类型"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="超期提醒"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="形状"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="图标"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="发送提示语"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="退回提示语"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="表单"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.branchName" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="移动端表单"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.branchName" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="说明"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.branchName" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="2"
                  tab="策略">
        <a-form-model ref="ruleForm2"
                      :model="form"
                      :label-col="labelCol"
                      :wrapper-col="wrapperCol">
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="流转类型"
                                 prop="branchName"
                                 ref="branchName">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="运行时选择"
                                 prop="branchType"
                                 ref="branchType">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="处理者类型"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="选择范围"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="处理者步骤"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="值字段"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="默认处理者"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="默认处理方法"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="处理策略"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="会签策略"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="会签起点"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="退回类型"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="spanCol">
              <a-form-model-item label="并发处理"
                                 prop="master"
                                 ref="master">
                <a-input v-model="form.master" />
              </a-form-model-item>
            </a-col>
            <a-col :span="spanCol">
              <a-form-model-item label="退回步骤"
                                 prop="orderNo"
                                 ref="orderNo">
                <a-input v-model="form.branchName" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="跳过策略"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.comments" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="3"
                  tab="按钮">
        <a-form-model ref="ruleForm3"
                      :model="form"
                      :label-col="labelCol"
                      :wrapper-col="wrapperCol">
          <a-row>
            <a-col :span="24">
              <a-form-item label="按钮列表"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.branchName" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="4"
                  tab="抄送">
        <a-form-model ref="ruleForm4"
                      :model="form"
                      :label-col="labelCol"
                      :wrapper-col="wrapperCol">
          <a-row>
            <a-col :span="24">
              <a-form-item label="指定人员"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="类型"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="步骤处理人员"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="方法"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="抄送时间"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="5"
                  tab="数据">
        <a-form-model ref="ruleForm5"
                      :model="form"
                      :label-col="labelCol"
                      :wrapper-col="wrapperCol">
          <a-row>
            <a-col :span="24">
              <a-form-item label="数据源"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.branchName" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="6"
                  tab="事件">
        <a-form-model ref="ruleForm6"
                      :model="form"
                      :label-col="labelCol"
                      :wrapper-col="wrapperCol">
          <a-row>
            <a-col :span="24">
              <a-form-item label="提交前事件"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="提交后事件"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="步骤通过后事件"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="退回前事件"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="退回后事件"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="步骤退回后事件"
                           :labelCol="{span: 3}"
                           :wrapperCol="{span: 20}">
                <a-input v-model="form.master" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form-model>
      </a-tab-pane>
    </a-tabs>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doOk"
                type="primary">确定</a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      form: {
        branchName: '',
        branchType: '00',
        orderNo: 1,
        master: '',
        telephone: '',
        email: '',
        summary: '',
        checkState: '1',
        comments: ''
      }
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    doOk () {
      // this.$emit('close', { code: 200 })
    },
    doCancel () {
      // this.$emit('close', { code: 202 })
    }
  }
}
</script>

<style lang="less" scoped>
.btnbox {
  text-align: center;
}
</style>
