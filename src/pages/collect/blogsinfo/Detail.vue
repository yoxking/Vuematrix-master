<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.blogNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="标题"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.blogTitle}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.classNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="用户"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.ruserNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="内容"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.blogContent}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="喜欢"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.dolikeHit}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="转发"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.repostHit}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.checkState}}
          </a-form-item>
        </a-col>
        <a-col :span="12">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="备注"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.comments}}
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getBlogsinfo } from '@/api/collect/blogsinfo'

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
        blogNo: '0',
        blogTitle: '',
        classNo: '',
        ruserNo: '',
        blogContent: '',
        dolikeHit: 0,
        repostHit: 0,
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
      getBlogsinfo(this.id).then(response => {
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
.btnbox {
  text-align: center;
}
</style>
