<template>
  <div>
    <a-form-model ref="aform"
                  :model="formData"
                  :rules="rules"
                  layout="horizontal"
                  :label-col="{span:6}"
                  :wrapper-col="{span:18}">
      <a-form-model-item label="单行文本"
                         prop="field101">
        <a-input v-model="formData.field101"
                 placeholder="请输入文本"
                 :max-length="20"></a-input>
      </a-form-model-item>
      <a-form-model-item label="密码"
                         prop="field102">
        <a-input-password v-model="formData.field102"
                          placeholder="请输入密码"
                          :max-length="20"></a-input-password>
      </a-form-model-item>
      <a-form-model-item label="数字"
                         prop="field103">
        <a-input-number v-model="formData.field103"
                        placeholder="数字"
                        :step='1'
                        :max='100'></a-input-number>
      </a-form-model-item>
      <a-form-model-item label="多行文本"
                         prop="field104"
                         required>
        <a-textarea v-model="formData.field104"
                    placeholder="请输入多行文本"
                    :max-length="100"></a-textarea>
      </a-form-model-item>
      <a-form-model-item label="下拉选择"
                         prop="field106">
        <a-select v-model="formData.field106"
                  placeholder="请选择下拉"
                  mode="default">
          <a-select-option v-for="(item, index) in field106Options"
                           :key="index"
                           :value="item.value"
                           :disabled="item.disabled">{{item.label}}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="单选框组"
                         prop="field107">
        <a-radio-group v-model="formData.field107">
          <a-radio v-for="(item, index) in field107Options"
                   :key="index"
                   :value="item.value"
                   :disabled="item.disabled">{{item.label}}</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="开关"
                         prop="field108"
                         required>
        <a-switch v-model="formData.field108"
                  size="default"></a-switch>
      </a-form-model-item>
      <a-form-model-item label="滑块"
                         prop="field109"
                         required>
        <a-slider :max='100'
                  :step='1'
                  v-model="formData.field109"
                  undefined></a-slider>
      </a-form-model-item>
      <a-form-model-item label="时间选择"
                         prop="field111">
        <a-time-picker v-model="formData.field111"
                       format="h:mm:ss A"
                       placeholder="请选择时间"></a-time-picker>
      </a-form-model-item>
      <a-form-model-item label="日期选择"
                         prop="field113">
        <a-date-picker v-model="formData.field113"
                       format="YYYY-MM-DD"
                       placeholder="请选择日期"></a-date-picker>
      </a-form-model-item>
      <a-form-model-item label="日期范围"
                         prop="field112"
                         required>
        <a-range-picker v-model="formData.field112"
                        format="YYYY-MM-DD"></a-range-picker>
      </a-form-model-item>
      <a-form-model-item label="评分"
                         prop="field110">
        <a-rate v-model="formData.field110"
                :count='5'></a-rate>
      </a-form-model-item>
      <a-form-model-item label="按钮"
                         prop="field120"
                         required>
        <a-button type="primary"
                  size="default" @click="onClose()">
          主要按钮
        </a-button>
      </a-form-model-item>

    </a-form-model>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    layerid: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      formData: {
        field101: '',
        field102: '',
        field103: 0,
        field104: '',
        field106: 2,
        field107: 1,
        field108: true,
        field109: 10,
        field110: 2,
        field111: undefined,
        field112: undefined,
        field113: undefined
      },
      rules: {
        field101: [{ required: true, message: '请输入广西', trigger: 'blur' }],
        field102: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        field103: [{ required: true, message: '请输入数字', trigger: 'blur' }],
        field104: [{ required: true, message: '请输入文本', trigger: 'blur' }]
      },
      field106Options: [{ 'label': '选项一', 'value': 1, 'disabled': false }, { 'label': '选项二', 'value': 2, 'disabled': false }],
      field107Options: [{ 'label': '选项一', 'value': 1, 'disabled': false }, { 'label': '选项二', 'value': 2, 'disabled': false }]

    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    onClose () {
      this.$layer.close(this.layerid)
    }
  }
}
</script><style lang="less" scoped>
</style>
