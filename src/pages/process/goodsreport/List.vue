<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item
                label="名称"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-input
                  placeholder="请输入"
                  v-model="queryParam.gflowNo"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px;">
          <a-button
            type="primary"
            @click="doQuery()"
          >查询</a-button>
          <a-button
            style="margin-left: 8px"
            @click="doReset()"
          >重置</a-button>
          <a
            @click="toggleAdvanced"
            style="margin-left: 8px"
          >
            {{advanced ? '收起' : '展开'}}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span>
      </a-form>
    </div>
    <div>
      <div class="operator">
        <a-button
          @click="handlePrint"
          v-hasPermit="['process:goodsreport:print']"
        >打印</a-button>
        <a-dropdown>
          <a-menu
            @click="handleMenu"
            slot="overlay"
          >
            <a-menu-item
              key="audit"
              v-hasPermit="['process:goodsreport:audit']"
            >审批</a-menu-item>
            <a-menu-item
              key="import"
              v-hasPermit="['process:goodsreport:import']"
            >导入</a-menu-item>
            <a-menu-item
              key="export"
              v-hasPermit="['process:goodsreport:export']"
            >导出</a-menu-item>
          </a-menu>
          <a-button>
            更多操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
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
          field="gflowNo"
          title="编号"
          width="120"
          show-overflow="tooltip"
        ></vxe-table-column>
        <vxe-table-column
          field="gflowType"
          title="类型"
        ></vxe-table-column>
        <vxe-table-column
          field="goodsNo"
          title="物品名称"
        ></vxe-table-column>
        <vxe-table-column
          field="deptNo"
          title="部门"
          show-overflow="tooltip"
        ></vxe-table-column>
        <vxe-table-column title="操作">
          <template v-slot="{ row }">
            <vxe-button
              type="text"
              @click="handleDet(row.gflowNo)"
              v-hasPermit="['process:goodsreport:detail']"
            >详细</vxe-button>
          </template>
        </vxe-table-column>
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
    </div>
  </a-card>
</template>

<script>
import { listGoodsreport, exptGoodsreport } from '@/api/process/goodsreport'
import detail from './Detail'

export default {
  name: 'List',
  data () {
    return {
      advanced: false,
      loading: false,
      dataSource: [],
      // 查询参数
      queryParam: {
        gflowNo: ''
      },
      // 查询参数
      pageParam: {
        pageIndex: 1, // 第几页
        pageSize: 10, // 每页中显示数据的条数
        pageTotal: 0,
        condition: '',
        dataParam: ''
      }
    }
  },
  mounted () {
    this.getDataSource()
  },
  methods: {
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    doQuery () {
      this.pageParam.pageIndex = 1
      if (this.queryParam.gflowNo !== '') {
        this.pageParam.condition = " gflow_no like '%" + this.queryParam.gflowNo + "%'"
      } else {
        this.pageParam.condition = ''
      }
      this.getDataSource()
    },
    doReset () {
      console.log('reset')
    },
    handlePrint () {
    },
    handleDet (val) {
      this.$layer.iframe({
        content: {
          content: detail,
          parent: this,
          data: { id: val }
        },
        area: ['950px', '700px'],
        title: '详细',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
    },
    handleMenu (e) {
      const that = this
      if (e.key === 'audit') {
        console.log(this.pagination)
      } else if (e.key === 'export') {
        exptGoodsreport(this.pageParam).then(response => {
          that.download(response.msg)
          that.$message.success('导出成功!')
        })
      }
    },
    onPageChange ({ currentPage, pageSize }) {
      this.pageParam.pageIndex = currentPage
      this.pageParam.pageSize = pageSize
      this.getDataSource()
    },
    // 调用查询接口为dataSource 赋值
    getDataSource () {
      const that = this
      this.loading = true
      listGoodsreport(this.pageParam).then(response => {
        that.dataSource = response.rows
        that.pageParam.pageTotal = response.total
        that.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  margin-bottom: 54px;
}
.fold {
  width: calc(100% - 216px);
  display: inline-block;
}
.operator {
  margin-bottom: 18px;
}
@media screen and (max-width: 900px) {
  .fold {
    width: 100%;
  }
}
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
</style>
