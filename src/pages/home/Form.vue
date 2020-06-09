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
                 placeholder="请输入单行文本"
                 :max-length="20"></a-input>
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
        field101: undefined
      },
      rules: {
        field101: [{ required: true, message: '请输入单行文本', trigger: 'blur' }]
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
