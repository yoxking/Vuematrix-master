<template>
  <div class="box-wrapper">
    <h3>{{paper.paperTitle}}</h3>
    <div class="top">
      {{paper.viewType}}
    </div>
    <a-card class="box-card">
      <div class="box-report">
        <span>填空题:{{questData.qType1Nums}}题</span><span>单选题:{{questData.qType2Nums}}题</span><span>多选题:{{questData.qType3Nums}}题</span><span>总分:{{questData.qTotalScore}}分</span>
      </div>
      <div class="box-report">
        <span>已选择 {{questData.qTotalNums}}个题目</span>
        <a-button
          size="small"
          @click="onSelectQuests()"
        >从题库中选择题目</a-button>
      </div>
    </a-card>
    <vxe-table
      ref="myTable"
      border
      stripe
      resizable
      highlight-current-row
      highlight-hover-row
      :loading="loading"
      class="mytable-scrollbar"
      height="400"
      :data="questData.questsList"
    >
      <vxe-table-column
        type="checkbox"
        width="60"
      ></vxe-table-column>
      <vxe-table-column
        type="seq"
        title="序号"
        width="60"
      ></vxe-table-column>
      <vxe-table-column
        field="questNo"
        title="编号"
        width="120"
        show-overflow="tooltip"
      ></vxe-table-column>
      <vxe-table-column
        field="questTitle"
        title="题目名称"
      ></vxe-table-column>
      <vxe-table-column
        field="questType"
        title="题目类型"
      ></vxe-table-column>
      <vxe-table-column
        field="questTscore"
        title="得分"
        show-overflow="tooltip"
      ></vxe-table-column>
      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <vxe-button
            type="text"
            @click="handleDel(row.questNo)"
          >删除</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
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
import { getPaperinfo, getPaperquests, delPaperquests } from '@/api/collect/paperinfo'
import selectQuests from './SelectQuests.vue'

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
      questData: {
        qType1Nums: 0,
        qType2Nums: 0,
        qType3Nums: 0,
        qTotalNums: 0,
        qTotalScore: 0,
        questsList: []
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
      getPaperquests(this.id).then(response => {
        that.questData = response.data
        that.loading = false
      })
    },
    onSelectQuests () {
      this.$layer.iframe({
        content: {
          content: selectQuests,
          parent: this,
          data: { id: this.paper.paperNo }
        },
        area: ['950px', '700px'],
        title: '选择题目',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
    },
    handleDel (val) {
      const that = this
      this.$confirm({
        title: '提示',
        content: '您确定要删除所选的记录吗?',
        okText: '确认',
        cancelText: '取消',
        onOk () {
          delPaperquests(that.id, val).then(response => {
            that.getDataSource()
          })
        }
      })
    },
    onOk () {
      this.$layer.close(this.layerid)
    },
    onCancel () {
      this.$layer.close(this.layerid)
    }
  }
}
</script>

<style lang="less" scoped>
/*滚动条整体部分*/
.mytable-scrollbar div::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条的轨道*/
.mytable-scrollbar div::-webkit-scrollbar-track {
  background-color: #ffffff;
}
/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar div::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.mytable-scrollbar div::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
.mytable-scrollbar div::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.mytable-scrollbar div::-webkit-scrollbar-corner {
  background-color: #ffffff;
}
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
.box-wrapper .box-action {
  text-align: center;
}
</style>
