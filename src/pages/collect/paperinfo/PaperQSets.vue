<template>
  <div class="box-wrapper">
    <h3>{{paper.paperTitle}}</h3>
    <div class="top">
      {{paper.viewType}}
    </div>
    <a-card class="box-card">
      <div class="box-report">
        <span>填空题：{{qsetsData.qType1TNums}}题</span><span>单选题：{{qsetsData.qType2TNums}}题</span><span>多选题：{{qsetsData.qType3TNums}}题</span><span>总分：{{qsetsData.qTotalScore}}分</span>
      </div>
      <div class="box-report">
        <span>已选择{{qsetsData.qsetsNums}}个题库:</span>
        <a-tag
          v-for="item in qsetsData.qsetsList"
          :key="item.id"
          closable
          @close="onDeletePsets(item.id)"
        >{{item.name}}</a-tag>
        <a-tag @click="onSelectPSets()">
          <a-icon type="plus" />选择题库
        </a-tag>
      </div>
    </a-card>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
    >
      <tr>
        <td>填空题数量{{qsetsData.qType1TNums}}题</td>
        <td>抽题数量
          <a-input-number v-model="qsetsData.qType1RNums" />
        </td>
        <td>每题分值
          <a-input-number v-model="qsetsData.qType1Score" />
        </td>
      </tr>
      <tr>
        <td>单选题数量{{qsetsData.qType2TNums}}题</td>
        <td>抽题数量
          <a-input-number v-model="qsetsData.qType2RNums" />
        </td>
        <td>每题分值
          <a-input-number v-model="qsetsData.qType2Score" />
        </td>
      </tr>
      <tr>
        <td>多选题数量{{qsetsData.qType3TNums}}题</td>
        <td>抽题数量
          <a-input-number v-model="qsetsData.qType3RNums" />
        </td>
        <td>每题分值
          <a-input-number v-model="qsetsData.qType3Score" />
        </td>
      </tr>
    </table>
    <a-divider />
    <div class="box-action">
      <a-button
        type="primary"
        @click="onOk()"
      >确定</a-button>
      <a-button @click="onCancel()">关闭</a-button>
    </div>
    <br /><br />
  </div>
</template>

<script>
import { getPaperinfo, getPaperqsets, delPaperqsets, uptPaperqrules } from '@/api/collect/paperinfo'
import selectQSets from './SelectQSets.vue'

export default {
  name: 'Preview',
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
      loading: false, // 页面加载中
      paper: {
        paperNo: '0',
        paperTitle: '',
        paperPoster: '',
        paperDesc: '',
        paperType: '1',
        dataFrom: '管理后台',
        viewType: '1',
        classNo: '',
        orderNo: 1,
        paperQnums: 1,
        paperQsets: '',
        paperQuests: '',
        paperQrules: '',
        paperTscore: 100,
        checkState: '1',
        comments: ''
      },
      qsetsData: {
        qType1TNums: 0,
        qType1RNums: 0,
        qType1Score: 0,
        qType2TNums: 0,
        qType2RNums: 0,
        qType2Score: 0,
        qType3TNums: 0,
        qType3RNums: 0,
        qType3Score: 0,
        qTotalNums: 0,
        qTotalScore: 0,
        qsetsNums: 0,
        qsetsList: []
      }
    }
  },
  mounted () {
    const that = this
    if (this.id !== '') {
      getPaperinfo(this.id).then(response => {
        that.paper = response.data
      })
      this.getDataSource()
    }
  },
  methods: {
    getDataSource () {
      const that = this
      this.loading = true
      getPaperqsets(this.id).then(response => {
        that.qsetsData = response.data
        that.loading = false
      })
    },
    onSelectPSets () {
      this.$layer.iframe({
        content: {
          content: selectQSets,
          parent: this,
          data: { id: this.paper.paperNo }
        },
        area: ['950px', '700px'],
        title: '选择题库',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
    },
    onDeletePsets (val) {
      const that = this
      this.$confirm({
        title: '提示',
        content: '您确定要删除所选的记录吗?',
        okText: '确认',
        cancelText: '取消',
        onOk () {
          delPaperqsets(that.id, val).then(response => {
            that.getDataSource()
          })
        }
      })
    },
    onOk () {
      const that = this
      let qrules = '['
      qrules += '{questType:1,questLimit:' + this.qsetsData.qType1RNums + ',questScore:' + this.qsetsData.qType1Score + '},'
      qrules += '{questType:2,questLimit:' + this.qsetsData.qType2RNums + ',questScore:' + this.qsetsData.qType2Score + '},'
      qrules += '{questType:3,questLimit:' + this.qsetsData.qType3RNums + ',questScore:' + this.qsetsData.qType3Score + '}'
      qrules += ']'

      uptPaperqrules(this.id, qrules).then(response => {
        that.$layer.close(this.layerid)
      })
    },
    onCancel () {
      this.$layer.close(this.layerid)
    }
  }
}
</script>

<style lang="less" scoped>
.box-wrapper {
  padding: 20px;
  width: 100%;
  text-align: center;
}
.box-wrapper .top {
  color: #606266;
  padding: 0 10px 10px 10px;
  border-bottom: 3px solid #409eff;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
}
.box-card {
  margin: 10px 0;
  width: 100%;
  text-align: left;
}
.box-card .box-report {
  font-size: 18px;
}
.box-card .box-report span {
  padding-right: 30px;
}
.box-wrapper table {
  width: 100%;
  border: 1px solid #e8e8e8;
  font-size: 16px;
}
.box-wrapper table tr {
  line-height: 46px;
  border-top: 1px solid #e8e8e8;
}
.box-wrapper .box-action {
  text-align: center;
}
</style>
