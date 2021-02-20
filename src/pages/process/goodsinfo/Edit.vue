<template>
  <div class="wrapbox">
    <br />
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="编号"
            prop="goodsNo"
            ref="goodsNo"
          >
            <a-input
              v-model="form.goodsNo"
              readOnly
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="物品包名称"
            prop="goodsCname"
            ref="goodsCname"
          >
            <a-input v-model="form.goodsCname" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="默认科室"
            prop="depteNo"
            ref="depteNo"
          >
            <a-tree-select
              v-model="form.depteNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="deptListData"
              placeholder="请选择默认科室"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="18">
          <a-form-model-item
            label="图片"
            prop="goodsImage"
            ref="goodsImage"
            :labelCol="{span: 4}"
            :wrapperCol="{span: 19}"
          >
            <a-input v-model="form.goodsImage" />
          </a-form-model-item>
        </a-col>
        <a-col :span="6">
          <a-upload
            name="file"
            :multiple="true"
          >
            <a-button>
              <a-icon type="upload" /> 上传图片
            </a-button>
          </a-upload>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="系统类型"
            prop="goodsType"
            ref="goodsType"
          >
            <a-tree-select
              v-model="form.goodsType"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="goodsTypeData"
              placeholder="请选择系统类型"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="用户类型"
            prop="goodsClass"
            ref="goodsClass"
          >
            <a-tree-select
              v-model="form.goodsClass"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="goodsClassData"
              placeholder="请选择用户类型"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="包装方式"
            prop="packeClass"
            ref="packeClass"
          >
            <a-tree-select
              v-model="form.packeClass"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="packeClassData"
              placeholder="请选择包装方式"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="灭菌方式"
            prop="steryType"
            ref="steryType"
          >
            <a-tree-select
              v-model="form.steryType"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="steryTypeData"
              placeholder="请选择灭菌方式"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="打印机"
            prop="printNo"
            ref="printNo"
          >
            <a-tree-select
              v-model="form.printNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="printListData"
              placeholder="请选择打印机"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="打印样式"
            prop="printStyle"
            ref="printStyle"
          >
            <a-tree-select
              v-model="form.printStyle"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="printStyleData"
              placeholder="请选择打印样式"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item
            label="器械列表"
            prop="equipTlist"
            ref="equipTlist"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            <a-textarea
              v-model="form.equipTlist"
              placeholder="器械列表"
              :autoSize="{ minRows: 3, maxRows: 5 }"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="是否有植入物"
            prop="hardflag"
            ref="hardflag"
          >
            <a-radio-group v-model="form.hardflag">
              <a-radio value="0">否</a-radio>
              <a-radio value="1">是</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="是否借包发放"
            prop="lendflag"
            ref="lendflag"
          >
            <a-radio-group v-model="form.lendflag">
              <a-radio value="0">否</a-radio>
              <a-radio value="1">是</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="状态"
            prop="checkState"
            ref="checkState"
          >
            <a-radio-group v-model="form.checkState">
              <a-radio value="1">正常</a-radio>
              <a-radio value="0">停用</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="备注"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            <a-textarea
              v-model="form.comments"
              placeholder="备注信息"
              :autoSize="{ minRows: 3, maxRows: 5 }"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form-model>
    <a-divider />
    <div class="btnbox">
      <a-button
        @click="doOk"
        type="primary"
      >确定</a-button>
      <a-button @click="doCancel">取消</a-button>
    </div>
  </div>
</template>

<script>
import { treeGoodstype } from '@/api/process/goodstype'
import { treeGoodsclass } from '@/api/process/goodsclass'
import { treeDeptment } from '@/api/system/department'
import { treePackclass } from '@/api/process/packclass'
import { treeSterytype } from '@/api/process/sterytype'
import { treePrintsinfo } from '@/api/process/printsinfo'
import { treePrintstyle } from '@/api/process/printstyle'
import { getGoodsinfo, addGoodsinfo, uptGoodsinfo } from '@/api/process/goodsinfo'

export default {
  name: 'Edit',
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
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      spanCol: 12,
      form: {
        goodsNo: '0',
        goodsCname: '',
        goodsEname: '',
        goodsImage: '',
        goodsType: undefined,
        goodsClass: undefined,
        depteNo: undefined,
        packeClass: undefined,
        cleanType: '',
        cleanClass: '',
        steryType: undefined,
        steryClass: '',
        printNo: undefined,
        printStyle: undefined,
        equipTlist: '',
        equipTprice: 1,
        equipTnum: 1,
        expireDays: 1,
        priority: 1,
        hardflag: '0',
        lendflag: '0',
        goodsState: '1',
        checkState: '1',
        branchNo: '',
        comments: ''
      },
      rules: {
        goodsCname: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      goodsTypeData: [],
      goodsClassData: [],
      deptListData: [],
      packeClassData: [],
      steryTypeData: [],
      printStyleData: [],
      printListData: []
    }
  },
  methods: {
    doOk () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (that.form.goodsNo === '0') {
            addGoodsinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          } else {
            uptGoodsinfo(that.form).then(response => {
              that.$layer.msg(response.msg)
              that.$parent.getDataSource()
              that.$layer.close(that.layerid)
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    doCancel () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    const that = this
    if (this.id !== '') {
      getGoodsinfo(this.id).then(response => {
        that.form = response.data
      })
    }
    treeGoodstype().then(response => {
      that.goodsTypeData = response.rows
    })
    treeGoodsclass().then(response => {
      that.goodsClassData = response.rows
    })
    treeDeptment().then(response => {
      that.deptListData = response.rows
    })
    treePackclass().then(response => {
      that.packeClassData = response.rows
    })
    treeSterytype().then(response => {
      that.steryTypeData = response.rows
    })
    treePrintsinfo().then(response => {
      that.printListData = response.rows
    })
    treePrintstyle().then(response => {
      that.printStyleData = response.rows
    })
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
