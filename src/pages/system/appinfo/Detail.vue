<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="中文名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appCnname}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="英文名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appEnname}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="应用编码"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appCode}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="应用类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.classNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="应用Url"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appUrl}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="应用版本"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appVer}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="邮箱"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.email}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="排序"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.orderNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="简介"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.summary}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="加密狗ID"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.edogNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="加密狗类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.edogType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="注册时间"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.registDate}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="有效至"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.activeDate}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="注册数量"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.activeCount}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="注册码"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.activeCode}}
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
import { getAppinfo } from '@/api/system/appinfo'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        appNo: '0',
        appCnname: '',
        appEnname: '',
        appCode: '',
        classNo: '',
        orderNo: '1',
        appUrl: '',
        appVer: '',
        email: '',
        summary: '',
        edogType: '',
        registDate: '',
        activeDate: '',
        activeCount: '',
        activeCode: '',
        checkState: '1',
        comments: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$dlg.closeAll()
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getAppinfo(this.id).then(response => {
        that.model = response.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapbox {
  margin: 0;
  padding: 0;
}
.btnbox {
  text-align: center;
}
</style>
