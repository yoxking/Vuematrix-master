<template>
  <div>
  <work-flow :flow-data="flowData" ref="flow" :form-fields="formFields" ></work-flow>
  </div>
</template>

<script>
import WorkFlow from '@/comps/workflow'

export default {
  name: 'Index',
  components: { WorkFlow },
  data () {
    return {
      flowData: [
        {id: 'node1', top: '109px', left: '35px', type: 'start', name: '开始节点', checkedWriteFields: [], checkedHiddenFields: [], nextNodes: [], auditor: {scope: []}, transfer: {}, others: {attachmentPermissions: []}},
        {id: 'node7', top: '109px', left: '769px', type: 'end', name: '结束节点', checkedWriteFields: [], checkedHiddenFields: [], nextNodes: [], auditor: {scope: []}, transfer: {}, others: {attachmentPermissions: []}}
      ],
      formFields: []
    }
  }
}
</script>

<style lang="less" scoped>
</style>
