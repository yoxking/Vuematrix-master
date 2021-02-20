<template>
  <div class="wrapbox">
    <br />
    <a-form layout="horizontal">
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
              v-model="queryParam.goodsName"
            />
          </a-form-item>
        </a-col>
        <a-col
          :md="8"
          :sm="24"
        >
          <a-form-item
            label="类别"
            :labelCol="{span: 5}"
            :wrapperCol="{span: 18, offset: 1}"
          >
            <a-input
              placeholder="类别"
              v-model="queryParam.goodsClass"
            />
          </a-form-item>
        </a-col>
        <a-col
          :md="8"
          :sm="24"
          style="text-align: center;"
        >
          <a-button
            type="primary"
            @click="doQuery()"
          >查询</a-button>
        </a-col>
      </a-row>
    </a-form>
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
        field="goodsNo"
        title="编号"
        width="120"
        show-overflow="tooltip"
      ></vxe-table-column>
      <vxe-table-column
        field="goodsCname"
        title="名称"
      ></vxe-table-column>
      <vxe-table-column
        field="goodsType"
        title="类别"
      ></vxe-table-column>
      <vxe-table-column
        field="goodsClass"
        title="分类"
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
    <div class="btnbox">
      <a-button
        @click="doOk"
        type="primary"
      >确认</a-button>
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { listGoodsinfo } from '@/api/process/goodsinfo'

export default {
  name: 'Multiple',
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
      loading: false,
      dataSource: [],
      // 查询参数
      queryParam: {
        goodsCname: ''
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
  methods: {
    // 调用查询接口为dataSource 赋值
    getDataSource () {
      const that = this
      this.loading = true
      listGoodsinfo(this.pageParam).then(response => {
        that.dataSource = response.rows
        that.pageParam.pageTotal = response.total
        that.loading = false
      })
    },
    doOk () {

    },
    doClose () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    this.getDataSource()
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
