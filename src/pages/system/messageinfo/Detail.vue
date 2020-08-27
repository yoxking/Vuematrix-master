<template>
  <div class="wrapbox">
    <br />
    <div>
     <div class="title">{{model.mtitle}}</div>
     <div class="subtitle">消息类型:{{model.mssgType}} &nbsp;&nbsp;&nbsp;&nbsp;发送人:{{model.msender}} &nbsp;&nbsp;&nbsp;&nbsp;发送时间:{{parseTime(model.sendTime, '{y}-{m}-{d} {h}:{i}:{s}')}}  &nbsp;&nbsp;&nbsp;&nbsp;阅读状态:{{model.readState}}</div>
     <a-divider />
     <div class="mcontent">
       {{model.mcontent}}
     </div>
     <div class="mattach">
       <a :href="model.attachfile" target="blank">附件下载</a>
     </div>
    </div>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getMessageinfo } from '@/api/system/messageinfo'

export default {
  name: 'Detail',
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
      spanCol: 12,
      model: {
        mssgNo: '0',
        mtitle: '',
        mssgType: '',
        mreceiver: 1,
        msender: '',
        mcontent: '',
        attachfile: '',
        readState: '',
        receiveTime: '',
        sendTime: '',
        checkState: '',
        comments: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getMessageinfo(this.id).then(response => {
        that.model = response.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapbox {
  margin: 0;
  padding: 10px;
  width:100%;
}
.title{
  text-align: center;
  font-size: 20px;
}
.subtitle{
  text-align: center;
  font-size: 12px;
}
.mcontent{
  padding: 0 20px;
}
.mattach{
  padding: 0 20px;
}
.btnbox {
  text-align: center;
}
</style>
