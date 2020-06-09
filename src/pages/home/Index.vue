<template>
  <div>
    <a-form-model ref="aform"
                  :model="formData"
                  :rules="rules"
                  layout="horizontal"
                  :label-col="{span:6}"
                  :wrapper-col="{span:18}">
      <a-form-model-item label="数字"
                         prop="field103">
        <a-input-number v-model="formData.field103"
                        placeholder="数字"
                        :step='1'
                        :max='100'></a-input-number>
      </a-form-model-item>
      <a-form-model-item label="密码"
                         prop="field105">
        <a-input-password v-model="formData.field105"
                          placeholder="请输入密码"
                          :max-length="20"></a-input-password>
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
      <a-form-model-item label="滑块"
                         prop="field109"
                         required>
        <a-slider :max='100'
                  :step='1'
                  v-model="formData.field109"
                  undefined></a-slider>
      </a-form-model-item>
      <a-form-model-item label="开关"
                         prop="field108"
                         required>
        <a-switch v-model="formData.field108"
                  size="default"></a-switch>
      </a-form-model-item>
      <a-form-model-item label="单行文本"
                         prop="field101">
        <a-input v-model="formData.field101"
                 placeholder="请输入单行文本"
                 :max-length="20"></a-input>
      </a-form-model-item>
      <a-form-model-item label="下拉选择"
                         prop="field106">
        <a-select v-model="formData.field106"
                  placeholder="请选择下拉选择"
                  mode="default">
          <a-select-option v-for="(item, index) in field106Options"
                           :key="index"
                           :value="item.value"
                           :disabled="item.disabled">{{item.label}}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="下拉选择"
                         prop="field104">
        <a-select v-model="formData.field104"
                  placeholder="请选择下拉选择"
                  mode="default">
          <a-select-option v-for="(item, index) in field104Options"
                           :key="index"
                           :value="item.value"
                           :disabled="item.disabled">{{item.label}}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="多行文本"
                         prop="field102"
                         required>
        <a-textarea v-model="formData.field102"
                    placeholder="请输入多行文本"
                    :max-length="100"></a-textarea>
      </a-form-model-item>
      <a-form-model-item label="按钮"
                         prop="field110"
                         required>
        <a-button type="primary"
                  size="default">
          主要按钮
        </a-button>
      </a-form-model-item>

    </a-form-model>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data () {
    return {
      formData: {
        field103: undefined,
        field105: undefined,
        field107: 2,
        field109: 10,
        field108: '1',
        field101: undefined,
        field106: 2,
        field104: 2,
        field102: undefined,
        field110: undefined
      },
      rules: {
        field103: [{ required: true, message: '数字', trigger: 'blur' }],
        field105: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        field107: [{ required: true, message: '单选框组不能为空', trigger: 'change' }],
        field101: [{ required: true, message: '请输入单行文本', trigger: 'blur' }],
        field106: [{ required: true, message: '请选择下拉选择', trigger: 'change' }],
        field104: [{ required: true, message: '请选择下拉选择', trigger: 'change' }]
      },

      field107Options: [{ 'label': '选项一', 'value': 1, 'disabled': false }, { 'label': '选项二', 'value': 2, 'disabled': false }],
      field106Options: [{ 'label': '选项一', 'value': 1, 'disabled': false }, { 'label': '选项二', 'value': 2, 'disabled': false }],
      field104Options: [{ 'label': '选项一', 'value': 1, 'disabled': false }, { 'label': '选项二', 'value': 2, 'disabled': false }]

    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {

  }
}
</script><style lang="less" scoped>
</style>
