<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.rentNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="租户中文名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.rcnname}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="租户英文名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.renname}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="服务编码"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appCode}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="租户类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.classNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="服务Url"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appUrl}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="服务版本"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.appVer}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="电话"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.telephone}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="邮箱"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.email}}
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
import { getRenterinfo } from '@/api/system/renterinfo'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        rentNo: '0',
        rcnname: '',
        renname: '',
        classNo: '',
        orderNo: '1',
        appCode: '',
        appUrl: '',
        appVer: '1.0',
        telephone: '',
        email: '',
        summary: '',
        edogType: 1,
        registDate: '',
        activeDate: '',
        activeCount: 1,
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
      getRenterinfo(this.id).then(response => {
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
