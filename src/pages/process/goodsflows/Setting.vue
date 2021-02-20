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
            label="物品包名称"
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
        <a-col :span="spanCol">
          <a-form-model-item
            label="操作人"
            prop="opertNo"
            ref="opertNo"
          >
            <a-tree-select
              v-model="form.opertNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="ruserListData"
              placeholder="请选择操作人"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="操作时间"
            prop="opertDate"
            ref="opertDate"
          >
            <a-date-picker
              :format="dateFormat"
              v-model="form.opertDate"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="审核人"
            prop="checkNo"
            ref="checkNo"
          >
            <a-tree-select
              v-model="form.checkNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="ruserListData"
              placeholder="请选择审核人"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="审核时间"
            prop="checkDate"
            ref="checkDate"
          >
            <a-date-picker
              :format="dateFormat"
              v-model="form.checkDate"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="有效时长"
            prop="expireDays"
            ref="expireDays"
          >
            <a-tree-select
              v-model="form.expireDays"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="dtermInfoData"
              placeholder="请选择有效时长"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="有效期"
            prop="expireDate"
            ref="expireDate"
          >
            <a-date-picker
              :format="dateFormat"
              v-model="form.expireDate"
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
            label="清洗方式"
            prop="cleanType"
            ref="cleanType"
          >
            <a-tree-select
              v-model="form.cleanType"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="cleanTypeData"
              placeholder="请选择清洗方式"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="清洗程序"
            prop="cleanClass"
            ref="cleanClass"
          >
            <a-tree-select
              v-model="form.cleanClass"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="cleanClassData"
              placeholder="请选择清洗程序"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="清洗次数"
            prop="cleanNum"
            ref="cleanNum"
          >
            <a-input-number v-model="form.cleanNum" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
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
        <a-col :span="spanCol">
          <a-form-model-item
            label="灭菌程序"
            prop="steryClass"
            ref="steryClass"
          >
            <a-tree-select
              v-model="form.steryClass"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="steryClassData"
              placeholder="请选择灭菌程序"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="灭菌次数"
            prop="steryNum"
            ref="steryNum"
          >
            <a-input-number v-model="form.steryNum" />
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="是否加急"
            prop="priority"
            ref="priority"
          >
            <a-radio-group v-model="form.priority">
              <a-radio value="0">否</a-radio>
              <a-radio value="1">是</a-radio>
            </a-radio-group>
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
        <a-col :span="spanCol">
          <a-form-model-item
            label="是否内置"
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
            label="是否借包"
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
import { treeDeptment } from '@/api/system/department'
import { treePackclass } from '@/api/process/packclass'
import { treeSterytype } from '@/api/process/sterytype'
import { treeSteryclass } from '@/api/process/steryclass'
import { treePrintsinfo } from '@/api/process/printsinfo'
import { treePrintstyle } from '@/api/process/printstyle'
import { treeRuserinfo } from '@/api/system/ruserinfo'
import { treeDterminfo } from '@/api/process/dterminfo'
import { treeCleantype } from '@/api/process/cleantype'
import { treeCleanclass } from '@/api/process/cleanclass'
import { getGoodsflows, saveSetting } from '@/api/process/goodsflows'

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
      dateFormat: 'YYYY-MM-DD',
      form: {
        gflowNo: '',
        goodsNo: '0',
        goodsState: '1',
        depteNo: undefined,
        opertNo: undefined,
        opertDate: this.$moment(this.currentDate(), this.dateFormat),
        checkNo: undefined,
        checkDate: this.$moment(this.currentDate(), this.dateFormat),
        expireDays: undefined,
        expireDate: this.$moment(this.currentDate(), this.dateFormat),
        packeClass: undefined,
        cleanType: undefined,
        cleanClass: undefined,
        cleanNum: 1,
        steryType: undefined,
        steryClass: undefined,
        steryNum: 1,
        printNo: undefined,
        printStyle: undefined,
        priority: '0',
        hardflag: '0',
        lendflag: '0',
        branchNo: '',
        comments: ''
      },
      rules: {
        goodsNo: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      deptListData: [],
      packeClassData: [],
      steryTypeData: [],
      steryClassData: [],
      printStyleData: [],
      printListData: [],
      ruserListData: [],
      dtermInfoData: [],
      cleanTypeData: [],
      cleanClassData: []
    }
  },
  methods: {
    doOk () {
      const that = this
      saveSetting(that.form).then(response => {
        that.$layer.msg(response.msg)
        that.$parent.getDataSource()
        that.$layer.close(that.layerid)
      })
    },
    doCancel () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    const that = this
    if (this.id !== '') {
      getGoodsflows(this.id).then(response => {
        that.form = response.data
      })
    }
    treeDeptment().then(response => {
      that.deptListData = response.rows
    })
    treePackclass().then(response => {
      that.packeClassData = response.rows
    })
    treeSterytype().then(response => {
      that.steryTypeData = response.rows
    })
    treeSteryclass().then(response => {
      that.steryClassData = response.rows
    })
    treePrintsinfo().then(response => {
      that.printListData = response.rows
    })
    treePrintstyle().then(response => {
      that.printStyleData = response.rows
    })
    treeRuserinfo().then(response => {
      that.ruserListData = response.rows
    })
    treeDterminfo().then(response => {
      that.dtermInfoData = response.rows
    })
    treeCleantype().then(response => {
      that.cleanTypeData = response.rows
    })
    treeCleanclass().then(response => {
      that.cleanClassData = response.rows
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
