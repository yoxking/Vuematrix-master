<template>
  <div class="box-wrapper">
    <div class="box-search">
      <a-row>
        <a-col
          :md="10"
          :sm="24"
        >
          <a-form-item
            label="题库"
            :labelCol="{span: 5}"
            :wrapperCol="{span: 18, offset: 1}"
          >
            <a-tree-select
              v-model="queryParam.psetsNo"
              :multiple="false"
              :allow-clear="false"
              :show-search="false"
              :tree-data="psetsTree"
              placeholder="请选择题库"
              style="width: 100%"
            />
          </a-form-item>
        </a-col>
        <a-col
          :md="10"
          :sm="24"
        >
          <a-form-item
            label="题目名称"
            :labelCol="{span: 5}"
            :wrapperCol="{span: 18, offset: 1}"
          >
            <a-input
              placeholder="请输入题目名称"
              v-model="queryParam.questName"
            />
          </a-form-item>
        </a-col>
        <a-col
          :md="4"
          :sm="12"
        >
          <a-button
            type="primary"
            @click="onQuery()"
          >查询</a-button>
        </a-col>
      </a-row>
    </div>
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
      :data="dataSource"
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
    </vxe-table>
    <vxe-pager
      border
      size="medium"
      :loading="loading"
      :current-page="pageParam.pageIndex"
      :page-size="pageParam.pageSize"
      :total="pageParam.pageTotal"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="onPageChange"
    >
    </vxe-pager>
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
import { treeQuestsets } from '@/api/collect/questsets'
import { listQuestinfo } from '@/api/collect/questinfo'
import { uptPaperquests } from '@/api/collect/paperinfo'

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
      psetsTree: [],
      dataSource: [],
      // 查询参数
      queryParam: {
        psetsNo: '',
        questName: ''
      },
      // 查询参数
      pageParam: {
        pageIndex: 1, // 第几页
        pageSize: 10, // 每页中显示数据的条数
        pageTotal: 0,
        condition: ''
      }
    }
  },
  mounted () {
    const that = this
    treeQuestsets().then(response => {
      that.psetsTree = response.rows
    })
    this.getDataSource()
  },
  methods: {
    // 调用查询接口为dataSource 赋值
    getDataSource () {
      const that = this
      this.loading = true
      listQuestinfo(this.pageParam).then(response => {
        that.dataSource = response.rows
        that.pageParam.pageTotal = response.total
        that.loading = false
      })
    },
    onPageChange ({ currentPage, pageSize }) {
      this.pageParam.pageIndex = currentPage
      this.pageParam.pageSize = pageSize
      this.getDataSource()
    },
    onQuery () {
      this.pageParam.pageIndex = 1
      this.pageParam.condition = ''
      if (this.queryParam.psetsNo !== '') {
        this.pageParam.condition += " qsets_no='" + this.queryParam.psetsNo + "' "
      }
      if (this.queryParam.questName !== '') {
        if (this.pageParam.condition !== '') {
          this.pageParam.condition += ' And '
        }
        this.pageParam.condition += " quest_title like '%" + this.queryParam.questName + "%' "
      }
      this.getDataSource()
    },
    onOk () {
      const that = this
      let selectedRecords = this.$refs.myTable.getCheckboxRecords()
      if (selectedRecords.length > 0) {
        let selectedRowKeys = []
        selectedRecords.map(function (item) {
          selectedRowKeys.push(item.questNo)
        })
        uptPaperquests(that.id, selectedRowKeys.toString()).then(response => {
          that.$parent.getDataSource()
          that.$layer.close(that.layerid)
        })
      } else {
        this.$layer.close(this.layerid)
      }
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
.box-wrapper .box-search {
  margin: 0;
  padding: 0;
}
.box-wrapper .box-action {
  text-align: center;
}
</style>
