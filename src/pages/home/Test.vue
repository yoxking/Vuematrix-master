<template>
  <div>
    <a-row :gutter="24">
      <a-form-model ref="aform"
                    :model="formData"
                    :rules="rules"
                    layout="horizontal"
                    :label-col="{span:6}"
                    :wrapper-col="{span:18}">
        <a-row type="flex"
               justify="start"
               align="top"
               :gutter="24">
          <a-col :span='24'>
            <a-form-model-item label="单行文本"
                               prop="field110">
              <a-input v-model="formData.field110"
                       placeholder="请输入单行文本"
                       :max-length="20"></a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row type="flex"
               justify="start"
               align="top"
               :gutter="24">
          <a-col :span='24'>
            <a-form-model-item label="数字"
                               prop="field112">
              <a-input-number v-model="formData.field112"
                              placeholder="数字"
                              :step='1'
                              :max='100'></a-input-number>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row type="flex"
               justify="start"
               align="top"
               :gutter="24">
          <a-col :span='24'>
            <a-form-model-item label="多行文本"
                               prop="field114"
                               required>
              <a-textarea v-model="formData.field114"
                          placeholder="请输入多行文本"
                          :max-length="100"></a-textarea>
            </a-form-model-item>
          </a-col>
        </a-row>

      </a-form-model>
    </a-row>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data () {
    return {
      formData: {
        field110: '',
        field112: 0,
        field114: ''
      },
      rules: {
        field110: [{ required: true, message: '请输入单行文本', trigger: 'blur' }],
        field112: [{ required: true, message: '数字', trigger: 'blur' }]
      }

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
