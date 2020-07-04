<template>
  <div class="mwrapbox">
    <work-flow :flow-data="flowData" ref="flow" :form-fields="formFields" ></work-flow>
  </div>
</template>

<script>
import WorkFlow from '@/comps/workflow'

export default {
  name: 'Index',
  components: { WorkFlow },
  props: {
    layerid: {// 自动注入的layerid
      type: String,
      default: ''
    },
    id: {// 传递的数据
      type: String,
      default: ''
    },
    lydata: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      flowData: [],
      formFields: []
    }
  }
}
</script>

<style lang="less" scoped>
  .mwrapbox {
    margin: 0;
  padding: 10px;
  width:100%;
  }
</style>
