<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row>
            <a-col :md="8"
                   :sm="24">
              <a-form-item label="部门名称"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 1}">
                <a-input placeholder="请输入" v-model="queryParam.deptName" />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px;">
          <a-button type="primary"
                    @click="doQuery()">查询</a-button>
          <a-button style="margin-left: 8px"
                    @click="doReset()">重置</a-button>
          <a @click="toggleAdvanced"
             style="margin-left: 8px">
            {{advanced ? '收起' : '展开'}}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span>
      </a-form>
    </div>
    <div>
      <div class="operator">
        <a-button @click="handleAdd"
                  type="primary">新建</a-button>
        <a-button @click="handleDel">删除</a-button>
        <a-dropdown>
          <a-menu @click="handleMenu"
                  slot="overlay">
            <a-menu-item key="audit">审批</a-menu-item>
            <a-menu-item key="export">导出</a-menu-item>
          </a-menu>
          <a-button>
            更多操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
      <a-table bordered
               :columns="columns"
               :dataSource="dataSource"
               :pagination="pagination"
               :rowKey="dataSource => dataSource.deptNo"
               :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
               @change="onPagingChange">
        <span slot="action"
              slot-scope="text, record">
          <a href="javascript:;"
             @click="handleEdt(record)">编辑
          </a>
          <a-divider type="vertical" />
          <a href="javascript:;"
             @click="handleDet(record)">详细
          </a>
        </span>
      </a-table>
    </div>
  </a-card>
</template>

<script>
import { listDept, delDept } from '@/api/system/dept'
import edit from './Edit'
import detail from './Detail'

const columns = [
  {
    title: '编号',
    dataIndex: 'deptNo'
  },
  {
    title: '部门名称',
    dataIndex: 'deptName'
  },
  {
    title: '负责人',
    dataIndex: 'leader'
  },
  {
    title: '电话',
    dataIndex: 'telephone'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  name: 'QueryList',
  data () {
    return {
      advanced: false,
      columns: columns,
      dataSource: [],
      selectedRowKeys: [],
      // 查询参数
      queryParam: {
        deptName: ''
      },
      // 查询参数
      pageParam: {
        pageIndex: 1, // 第几页
        pageSize: 10, // 每页中显示数据的条数
        condition: ''
      },
      pagination: {
        total: 0,
        pageSize: 10, // 每页中显示10条数据
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'], // 每页中显示的数据
        showTotal: total => `共有 ${total} 条数据` // 分页中显示总的数据
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
      if (this.queryParam.deptName !== '') {
        this.pageParam.pageIndex = 1
        this.pageParam.condition = " dept_name like '%" + this.queryParam.deptName + "%'"
      } else {
        this.pageParam.condition = ''
      }
      this.getDataSource()
    },
    doReset () {
      console.log('reset')
    },
    handleAdd () {
      const that = this
      this.$dlg.modal(edit, {
        title: '新增',
        width: 950,
        height: 700,
        params: {
          id: ''
        },
        callback: data => {
          that.getDataSource()
        }
      })
    },
    handleDel () {
      const that = this
      if (this.selectedRowKeys.length > 0) {
        this.$confirm({
          title: '提示',
          content: '您确定要删除所选的记录吗?',
          okText: '确认',
          cancelText: '取消',
          onOk () {
            delDept(that.selectedRowKeys).then(response => {
              that.getDataSource()
            })
          }
        })
      } else {
        this.$message.warning('请至少选择一条记录!')
      }
    },
    handleEdt (val) {
      const that = this
      this.$dlg.modal(edit, {
        title: '编辑',
        width: 950,
        height: 700,
        params: {
          id: val.deptNo
        },
        callback: data => {
          that.getDataSource()
        }
      })
    },
    handleDet (val) {
      this.$dlg.modal(detail, {
        title: '详细',
        width: 950,
        height: 700,
        params: {
          id: val.deptNo
        }
      })
    },
    handleMenu (e) {
      if (e.key === 'audit') {
        console.log('audit')
      } else {
        console.log('export')
      }
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    onPagingChange (pagination) {
      this.pagination.current = pagination.current
      this.pagination.pageSize = pagination.pageSize
      this.pageParam.pageIndex = pagination.current
      this.pageParam.pageSize = pagination.pageSize
      this.getDataSource()
    },
    // 调用查询接口为dataSource 赋值
    getDataSource () {
      const that = this
      this.loading = true
      listDept(this.pageParam).then(response => {
        that.dataSource = response.rows
        that.pagination.total = response.total
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
</style>
