<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.userNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="账号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.loginName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="用户类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.userType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="姓名"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.userCnname}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="部门"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.deptNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="性别"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.sex}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="头像"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.avatar}}
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
        <a-col :span="spanCol">
          <a-form-model-item label="状态"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.checkState}}
          </a-form-model-item>
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
import { getSuserinfo } from '@/api/system/suserinfo'

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
        userNo: '0',
        loginName: '',
        userCnname: '',
        userEnname: '',
        deptNo: '',
        userType: '1',
        telephone: '',
        email: '',
        sex: '',
        avatar: '',
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
      getSuserinfo(this.id).then(response => {
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
.btnbox {
  text-align: center;
}
</style>
