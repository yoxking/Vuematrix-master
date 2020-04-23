<template>
  <div class="wrapbox">
    <a-divider />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="编号"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.permitNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="菜单名称"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.permitName}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="菜单类型"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.permitType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="排序"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.orderNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="是否外链"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.linkType}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item label="权限标识"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.permitCode}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item label="组件路径"
                       :labelCol="{span: 6}"
                       :wrapperCol="{span: 16}">
            {{model.component}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item label="页面地址"
                       :labelCol="{span: 3}"
                       :wrapperCol="{span: 20}">
            {{model.pathUrl}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="菜单图标"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.menuIcon}}
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="是否外链"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.linkType}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="重定向"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.redirect}}
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="打开方式"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.target}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item label="显示状态"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.visible}}
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item label="菜单状态"
                             :labelCol="{span: 6}"
                             :wrapperCol="{span: 16}">
            {{model.checkState}}
          </a-form-model-item>
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
import { getPermitinfo } from '@/api/system/permitinfo'

export default {
  name: 'Detail',
  props: { id: String },
  data () {
    return {
      spanCol: 12,
      model: {
        permitNo: '0',
        permitName: '',
        permitCode: '',
        permitType: 'M',
        parentNo: '1',
        orderNo: '1',
        linkType: '0',
        menuIcon: 'none',
        pathUrl: '',
        component: 'MenuView/PageView',
        redirect: 'noredirect',
        target: 'menuItem',
        visible: '0',
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
      getPermitinfo(this.id).then(response => {
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
