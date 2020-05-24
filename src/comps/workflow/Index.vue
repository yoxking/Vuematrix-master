<template>
  <a-row>
    <a-card
            :bordered="false"
            :body-style="{ padding: 0 }" style="text-align:right;">
      <a-button type="primary" @click="addNode">添加节点</a-button>
      <a-button type="primary" @click="saveData">保存流程</a-button>
      <a-button type="primary" >安装</a-button>
      <a-button type="primary" >卸载</a-button>
    </a-card>
    <a-divider />
    <div id="flowContainer" class="container">
      <template v-for="node in flowData">
        <flow-node :id="node.id" :key="node.id" :node="node" @deleteNode="deleteNode" @settingNode="settingNode" @changeNode="changeNode" />
      </template>
    </div>
  </a-row>
</template>

<script>
import { jsPlumb } from 'jsplumb'
import FlowNode from './Node'
import NodeEdit from './NEdit'
export default {
  name: 'Index',
  components: { FlowNode },
  props: {
    flowData: {
      type: Array,
      required: true
    },
    formFields: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      index: 0,
      loading: false,
      allFields: [],
      jsPlumb: null,
      jsPlumbSetting: {
        Anchors: ['Top', 'TopCenter', 'TopRight', 'TopLeft', 'Right', 'RightMiddle', 'Bottom', 'BottomCenter', 'BottomRight', 'BottomLeft', 'Left', 'LeftMiddle'],
        Container: 'flowContainer',
        // 连线的样式 StateMachine、Flowchart、Straight、Bezier
        Connector: 'Straight',
        // 鼠标不能拖动删除线
        ConnectionsDetachable: false,
        // 删除线的时候节点不删除
        DeleteEndpointsOnDetach: false,
        // 连线的端点
        connector: 'Straight',
        Endpoint: 'Blank',
        // 线端点的样式
        // 绘制线
        PaintStyle: {
          stroke: '#5184a0',
          strokeStyle: '#5184a0',
          strokeWidth: 3
        },
        // 绘制箭头
        Overlays: [['Arrow', { width: 12, length: 12, location: 1 }]],
        DragOptions: { cursor: 'crosshair' }
      },
      jsPlumbConnectOptions: {
        isSource: true,
        isTarget: true,
        anchor: 'Continuous'
      },
      jsPlumbSourceOptions: {
        filter: '.flow-node-drag',
        filterExclude: false,
        anchor: 'Continuous',
        allowLoopback: false
      },
      jsPlumbTargetOptions: {
        filter: '.flow-node-drag',
        filterExclude: false,
        anchor: 'Continuous',
        allowLoopback: false
      },
      nodeTypes: [
        {
          value: 'start',
          label: '开始节点'
        },
        {
          value: 'route',
          label: '流程节点'
        },
        {
          value: 'end',
          label: '结束节点'
        }
      ],
      currentNode: {
        checkedWriteFields: [],
        checkedHiddenFields: [],
        nextNodes: [],
        auditor: {
          scope: []
        },
        transfer: {},
        others: {
          attachmentPermissions: []
        }
      },
      statusNode: {
        checkWriteAll: false,
        isWriteIndeterminate: false,
        checkHiddenAll: false,
        isHiddenIndeterminate: false
      }
    }
  },
  mounted () {
    const _this = this
    this.jsPlumb = jsPlumb.getInstance()
    this.jsPlumb.ready(function () {
      _this.jsPlumb.importDefaults(_this.jsPlumbSetting)
      _this.loadData(_this.flowData)

      // 点击连线
      _this.jsPlumb.bind('click', function (conn, originalEvent) {
        _this.$dlg.alert('确定删除所点击的连线吗?', {
          messageType: 'confirm',
          callback: function () {
            _this.jsPlumb.deleteConnection(conn)
          }
        })
      })

      // 连接之前
      _this.jsPlumb.bind('beforeDrop', function (evt, node) {
        // console.log('beforeDrop', evt)
        const from = evt.sourceId
        const to = evt.targetId
        if (from === to) {
          _this.$dlg.toast('不能连接自己!', {
            position: 'topCenter',
            closeTime: 3
          })
          return false
        }
        if (_this.hasConnected(from, to)) {
          _this.$dlg.toast('不能重复连线!', {
            position: 'topCenter',
            closeTime: 3
          })
          return false
        }
        if (_this.hasOppositeConnected(from, to)) {
          _this.$dlg.toast('存在回环连线!', {
            position: 'topCenter',
            closeTime: 3
          })
          return false
        }
        return true
      })

      // 建立连线
      _this.jsPlumb.bind('connection', function (evt) {
        _this.addConnected(evt.sourceId, evt.targetId)
      })

      // 删除连线
      _this.jsPlumb.bind('connectionDetached', function (evt) {
        // console.log('删除连线', evt)
        _this.deleteConnected(evt.sourceId, evt.targetId)
      })

      // 改变线的连接节点
      _this.jsPlumb.bind('connectionMoved', function (evt) {
        // console.log('改变线的连接节点', evt)
        _this.changeConnected(evt.originalSourceId, evt.originalTargetId)
      })

      // 删除连线前
      _this.jsPlumb.bind('beforeDetach', function (evt) {
        // console.log('beforeDetach', evt)
      })

      // build fields
      for (let i = 0; i < _this.formFields.length; i++) {
        _this.allFields.push(_this.formFields[i].field)
      }
    })
  },
  methods: {
    initData: function () {
      this.loading = true
      this.loadData(this.flowData)
      this.loading = false
    },
    loadData: function (flowData) {
      if (flowData.length === 0) {
        return
      }

      let maxIndex = 0
      for (let i = 0; i < flowData.length; i++) {
        const node = flowData[i]
        if (node.id.replace('node', '') > maxIndex) {
          maxIndex = parseInt(node.id.replace('node', ''))
        }
        this.jsPlumb.makeSource(node.id, this.jsPlumbSourceOptions)
        this.jsPlumb.makeTarget(node.id, this.jsPlumbTargetOptions)
        this.jsPlumb.draggable(node.id, {
          containment: 'parent'
        })
      }
      this.index = maxIndex
      for (let i = 0; i < flowData.length; i++) {
        const sourceNode = flowData[i]
        const nextNodes = sourceNode.nextNodes
        const length = nextNodes.length
        for (let j = 0; j < length; j++) {
          this.jsPlumb.connect(
            {
              source: sourceNode.id,
              target: nextNodes[j].id
            },
            this.jsPlumbConnectOptions
          )
        }
      }
    },
    saveData: function () {
      // this.$emit('get-data', JSON.stringify(this.flowData))
    },
    addNode: function () {
      const _this = this
      _this.index++
      const nodeId = 'node' + _this.index
      var node = {
        id: nodeId,
        name: '新增节点',
        left: '100px',
        top: '100px',
        type: 'flow',
        checkedWriteFields: [],
        checkedHiddenFields: [],
        nextNodes: [],
        auditor: {
          scope: []
        },
        transfer: {},
        others: {
          attachmentPermissions: []
        }
      }
      _this.flowData.push(node)
      _this.$nextTick(function () {
        _this.jsPlumb.makeSource(nodeId, _this.jsPlumbSourceOptions)
        _this.jsPlumb.makeTarget(nodeId, _this.jsPlumbTargetOptions)
        _this.jsPlumb.draggable(nodeId, {
          containment: 'parent'
        })
      })
    },
    // 设置节点属性
    settingNode: function (node) {
      this.resetStatusNode()

      const checkedWriteCount = node.checkedWriteFields.length
      this.statusNode.checkWriteAll = checkedWriteCount === this.allFields.length
      this.statusNode.isWriteIndeterminate = checkedWriteCount > 0 && checkedWriteCount < this.allFields.length
      const checkedHiddenCount = node.checkedHiddenFields.length
      this.statusNode.checkHiddenAll = checkedHiddenCount === this.allFields.length
      this.statusNode.isHiddenIndeterminate = checkedHiddenCount > 0 && checkedHiddenCount < this.allFields.length
      this.currentNode = node

      this.$dlg.modal(NodeEdit, {
        title: '节点配置',
        width: 900,
        height: 650
      })
    },
    resetStatusNode: function () {
      this.statusNode = {
        checkWriteAll: false,
        isWriteIndeterminate: false,
        checkHiddenAll: false,
        isHiddenIndeterminate: false
      }
    },
    deleteNode: function (node) {
      const _this = this
      this.$dlg.alert('您确定要删除节点-' + node.name + '?', {
        messageType: 'confirm',
        callback: function () {
          for (let i = 0; i < _this.flowData.length; i++) {
            if (_this.flowData[i].id === node.id) {
              _this.flowData.splice(i, 1)
              break
            }
          }
          _this.$nextTick(function () {
            _this.jsPlumb.removeAllEndpoints(node.id)
          })
        }
      })
      return true
    },
    addNodeToNextNodes (sourceId, target) {
      if (this.loading) {
        return
      }
      for (let i = 0; i < this.flowData.length; i++) {
        if (this.flowData[i].id !== sourceId) {
          continue
        }
        this.flowData[i].nextNodes.push(target)
      }
    },
    removeNodeFromNextNodes (sourceId, targetId) {
      for (let i = 0; i < this.flowData.length; i++) {
        if (this.flowData[i].id !== sourceId) {
          continue
        }
        for (let j = 0; j < this.flowData[i].nextNodes.length; j++) {
          if (this.flowData[i].nextNodes[j].id === targetId) {
            this.flowData[i].nextNodes.splice(j, 1)
            break
          }
        }
      }
    },
    changeNode (data) {
      for (var i = 0; i < this.flowData.length; i++) {
        const node = this.flowData[i]
        if (node.id === data.nodeId) {
          node.left = data.left
          node.top = data.top
        }
      }
    },
    // 添加连线
    addConnected (from, to) {
      this.addNodeToNextNodes(from, {
        id: to,
        name: this.getNodeNameById(to),
        rules: []
      })
    },
    // 删除连线
    deleteConnected (from, to) {
      this.removeNodeFromNextNodes(from, to)
    },
    // 改变连线
    changeConnected (oldFrom, oldTo) {
      this.deleteConnected(oldFrom, oldTo)
    },
    hasConnected (from, to) {
      let connected = false
      for (let i = 0; i < this.flowData.length; i++) {
        const node = this.flowData[i]
        if (node.id !== from) {
          continue
        }
        for (let j = 0; j < node.nextNodes.length; j++) {
          if (node.nextNodes[j].id === to) {
            connected = true
            break
          }
        }
      }
      return connected
    },
    // 是否含有相反的线
    hasOppositeConnected (from, to) {
      return this.hasConnected(to, from)
    },
    getNodeNameById (nodeId) {
      let nodeName = ''
      for (let i = 0; i < this.flowData.length; i++) {
        if (this.flowData[i].id === nodeId) {
          nodeName = this.flowData[i].name
          break
        }
      }
      return nodeName
    },
    currentNodeNameChange () {
      // 修改节点名字更新所有连接到当前节点的节点的nextNodes中当前节点的名字
      for (let i = 0; i < this.flowData.length; i++) {
        for (let j = 0; j < this.flowData[i].nextNodes.length; j++) {
          if (this.flowData[i].nextNodes[j].id === this.currentNode.id) {
            this.flowData[i].nextNodes[j].name = this.currentNode.name
          }
        }
      }
    }
  }
}
</script>

<style>
#flowContainer {
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%), linear-gradient(rgba(0, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
  background-size: 10px 10px;
  position: relative;
  min-height: 500px;
  /*flex-grow: 1;*/
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
}
</style>
