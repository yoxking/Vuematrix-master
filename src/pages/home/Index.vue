<template>
  <div>
    <a-row :gutter="24">
      <a-form-model ref="aform"
                    :model="formData"
                    :rules="rules"
                    layout="horizontal"
                    :label-col="{span:6}"
                    :wrapper-col="{span:18}">
        <a-col :span="12">
          <a-row type="flex"
                 justify="start"
                 align="top"
                 :gutter="24">
            <a-col :span="24">
              <a-form-model-item label="单行文本"
                                 prop="field104">
                <a-input v-model="formData.field104"
                         placeholder="请输入单行文本"
                         :max-length="20"></a-input>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row type="flex"
                 justify="start"
                 align="top"
                 :gutter="24">
            <a-col :span="24">
              <a-form-model-item label="密码"
                                 prop="field105">
                <a-input-password v-model="formData.field105"
                                  placeholder="请输入密码"
                                  :max-length="20"></a-input-password>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="24">
          <a-row type="flex"
                 justify="start"
                 align="top"
                 :gutter="24">
            <a-col :span="24">
              <a-form-model-item label="多行文本"
                                 prop="field106"
                                 required>
                <a-textarea v-model="formData.field106"
                            placeholder="请输入多行文本"
                            :max-length="100"></a-textarea>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-col>

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
        field104: '',
        field105: '',
        field106: ''
      },
      rules: {
        field104: [{ required: true, message: '请输入单行文本', trigger: 'blur' }],
        field105: [{ required: true, message: '请输入密码', trigger: 'blur' }]
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
</script>
  <style lang="less" scoped>
</style>
