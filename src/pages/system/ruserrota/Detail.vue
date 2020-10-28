<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.rotaNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="用户"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.userNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.rotaType}}
          </a-form-item>
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
          <a-form-item label="周一"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.weekDay1}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="周二"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.weekDay2}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="周三"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.weekDay3}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="周四"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.weekDay4}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="周五"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.weekDay5}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="周六"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.weekDay6}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="周日"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.weekDay7}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
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
import { getRuserrota } from '@/api/system/ruserrota'

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
        rotaNo: '0',
        userNo: '',
        rotaType: '1',
        startTime: '',
        enditTime: '',
        weekDay1: '0',
        weekDay2: '0',
        weekDay3: '0',
        weekDay4: '0',
        weekDay5: '0',
        weekDay6: '0',
        weekDay7: '0',
        rota_format: '',
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
      getRuserrota(this.id).then(response => {
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
