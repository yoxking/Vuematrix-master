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
                <a-input placeholder="请输入"
                         v-model="queryParam.deptName" />
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
        <a-button @click="handleAdd" v-hasPermit="['system:department:addnew']" type="primary">新增</a-button>
        <a-button @click="handleDel" v-hasPermit="['system:department:delete']">删除</a-button>
        <a-dropdown>
          <a-menu @click="handleMenu"
                  slot="overlay">
            <a-menu-item key="audit" v-hasPermit="['system:department:audit']">审批</a-menu-item>
            <a-menu-item key="import" v-hasPermit="['system:department:import']">导入</a-menu-item>
            <a-menu-item key="export" v-hasPermit="['system:department:export']">导出</a-menu-item>
          </a-menu>
          <a-button>
            更多操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
      <vxe-table ref="myTable"
                 border
                 tree-config
                 resizable
                 highlight-current-row
                 highlight-hover-row
                 :loading="loading"
                 :data="dataSource">
        <vxe-table-column type="checkbox"
                          width="60"></vxe-table-column>
        <vxe-table-column type="seq"
                          title="序号"
                          width="60"></vxe-table-column>
        <vxe-table-column field="deptNo"
                          title="编号"
                          width="120"
                          show-overflow="tooltip"></vxe-table-column>
        <vxe-table-column field="deptName"
                          title="部门名称"
                          tree-node></vxe-table-column>
        <vxe-table-column field="leader"
                          title="负责人"></vxe-table-column>
        <vxe-table-column field="telephone"
                          title="电话"
                          show-overflow></vxe-table-column>
        <vxe-table-column title="操作">
          <template v-slot="{ row }">
            <vxe-button type="text"
                        @click="handleEdt(row.deptNo)" v-hasPermit="['system:department:update']">编辑</vxe-button>
            <vxe-button type="text"
                        @click="handleDet(row.deptNo)" v-hasPermit="['system:department:detail']">详细</vxe-button>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
  </a-card>
</template>

<script>
import { treeDeptment, delDeptment, exptDeptment } from '@/api/system/department'
import edit from './Edit'
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
        deptName: ''
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
    this.getDataSource()
  },
  methods: {
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    doQuery () {
      this.pageParam.pageIndex = 1
      if (this.queryParam.deptName !== '') {
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
      this.$layer.iframe({
        content: {
          content: edit,
          parent: this,
          data: { id: '' }
        },
        area: ['950px', '700px'],
        title: '新增',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
    },
    handleDel () {
      const that = this
      let selectedRecords = this.$refs.myTable.getCheckboxRecords()
      if (selectedRecords.length > 0) {
        this.$confirm({
          title: '提示',
          content: '您确定要删除所选的记录吗?',
          okText: '确认',
          cancelText: '取消',
          onOk () {
            let selectedRowKeys = []
            selectedRecords.map(function (item) {
              selectedRowKeys.push(item.deptNo)
            })
            delDeptment(selectedRowKeys).then(response => {
              that.getDataSource()
            })
          }
        })
      } else {
        this.$message.warning('请至少选择一条记录!')
      }
    },
    handleEdt (val) {
      this.$layer.iframe({
        content: {
          content: edit,
          parent: this,
          data: { id: val }
        },
        area: ['950px', '700px'],
        title: '编辑',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
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
        exptDeptment(this.pageParam).then(response => {
          that.download(response.msg)
          that.$message.success('导出成功!')
        })
      }
    },
    // 调用查询接口为dataSource 赋值
    getDataSource () {
      const that = this
      this.loading = true
      treeDeptment().then(response => {
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
</style>
