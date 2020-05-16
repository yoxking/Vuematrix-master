<template>
  <div ref="node" :style="nodeStyle" @mouseenter="showHoverState" @mouseleave="hideHoverState" @dblclick="settingNode" @mouseup="changeNode">
    <div class="flow-node-header">
      <a-icon type="delete" class="flow-node-delete" :style="mouseEnter && node.type === 'flow' ? 'display: inline-block;' : ''" @click="deleteNode" />
      <span class="flow-node-drag" :style="node.type === 'end' ? 'display: none;' : ''">+</span>
    </div>
    <div class="flow-node-body">{{ node.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'FlowNode',
  props: {
    node: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      mouseEnter: false
    }
  },
  computed: {
    nodeStyle: {
      get () {
        return {
          position: 'absolute',
          top: this.node.top,
          left: this.node.left,
          boxShadow: this.mouseEnter ? '#66a6e0 0px 0px 12px 0px' : '',
          backgroundColor: 'transparent'
        }
      }
    }
  },
  methods: {
    showHoverState () {
      this.mouseEnter = true
    },
    // 鼠标离开
    hideHoverState () {
      this.mouseEnter = false
    },
    // 删除节点
    deleteNode () {
      this.$emit('deleteNode', this.node)
    },
    settingNode () {
      this.$emit('settingNode', this.node)
    },
    // 鼠标移动后抬起
    changeNode () {
      // 避免抖动
      if (this.node.left === this.$refs.node.style.left && this.node.top === this.$refs.node.style.top) {
        return
      }
      this.$emit('changeNode', {
        nodeId: this.node.id,
        left: this.$refs.node.style.left,
        top: this.$refs.node.style.top
      })
    }
  }
}
</script>

<style scoped>
.flow-node-header {
  background-color: #66a6e0;
  height: 30px;
  cursor: pointer;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.flow-node-header i {
  line-height: 30px;
  margin: 0 5px;
}
.flow-node-body {
  background-color: white;
  text-align: center;
  cursor: pointer;
  width: 150px;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.flow-node-drag {
  float: right;
  font-size: 20px;
  padding:0 6px ;
}
.flow-node-delete {
  display: none;
}
</style>
