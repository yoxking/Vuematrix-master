<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.salonNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="名称"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.salonName}}
          </a-form-item>
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
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="开始时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.startTime}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="结束时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.enditTime}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="地址"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.salonAddress}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="人员"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.registRusers}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="会议内容"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.salonContent}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="状态"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.checkState}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
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
import { getSalonsinfo } from '@/api/collect/salonsinfo'

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
        salonNo: '0',
        salonName: '',
        classNo: '',
        startTime: '',
        enditTime: '',
        salonAddress: '',
        registRusers: '',
        salonContent: '',
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
      getSalonsinfo(this.id).then(response => {
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
