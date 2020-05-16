<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="基本">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="策略">
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="按钮">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="4" tab="抄送">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="5" tab="数据">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="6" tab="事件">
        Content of Tab Pane 3
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
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    doOk () {
      this.$emit('close', { code: 200 })
    },
    doCancel () {
      this.$emit('close', { code: 202 })
    }
  }
}
</script>

<style lang="less" scoped>
.btnbox {
  text-align: center;
}
</style>
