<template>
  <div class="wrapbox">
    <br />
    <div>
      <div class="title">{{model.title}}</div>
      <div class="subtitle">分类:{{model.classNo}} &nbsp;&nbsp;&nbsp;&nbsp;作者:{{model.author}} &nbsp;&nbsp;&nbsp;&nbsp;发布时间:{{parseTime(model.pubdate, '{y}-{m}-{d}')}} &nbsp;&nbsp;&nbsp;&nbsp;审核状态:{{model.checkState}}</div>
      <div class="abstract">
        <a-descriptions>
          <a-descriptions-item label="摘要">
            {{model.abstracts}}
          </a-descriptions-item>
        </a-descriptions>
      </div>
      <a-divider />
      <div class="mcontent">
        {{model.ncontents}}
      </div>
      <div class="mattach">
        <a :href="model.poster"
           target="blank">附件下载</a>
      </div>
    </div>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getContentinfo } from '@/api/system/contentinfo'

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
        contzNo: '0',
        title: '',
        classNo: '',
        author: '',
        pubdate: '',
        poster: '',
        abstracts: '',
        ncontents: '',
        checkState: '1',
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
      getContentinfo(this.id).then(response => {
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
  width: 100%;
}
.title {
  text-align: center;
  font-size: 20px;
}
.subtitle {
  text-align: center;
  font-size: 12px;
}
.abstract {
  padding: 0 20px;
}
.mcontent {
  padding: 0 20px;
}
.mattach {
  padding: 0 20px;
}
.btnbox {
  text-align: center;
}
</style>
