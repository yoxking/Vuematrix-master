<template>
  <div>
    <div>
      <a-row style="margin: 0">
        <a-col style="padding: 0 12px" :md="12">
          <a-card title="图表1" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <div class="item-group">
              <ve-line :data="chartData"></ve-line>
            </div>
          </a-card>
          <a-card title="图表3" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <div class="item-group">
              <ve-line :data="chartData"></ve-line>
            </div>
          </a-card>
        </a-col>
        <a-col style="padding: 0 12px" :md="12">
          <a-card title="图表2" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <div class="item-group">
              <ve-line :data="chartData"></ve-line>
            </div>
          </a-card>
          <a-card title="图表4" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <div class="item-group">
              <ve-line :data="chartData"></ve-line>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'

export default {
  name: 'Index',
  components: { VeLine },
  data () {
    return {
      chartData: {
        columns: ['date', 'PV'],
        rows: [
          { 'date': '01-01', 'PV': 1231 },
          { 'date': '01-02', 'PV': 1223 },
          { 'date': '01-03', 'PV': 2123 },
          { 'date': '01-04', 'PV': 4123 },
          { 'date': '01-05', 'PV': 3123 },
          { 'date': '01-06', 'PV': 7123 }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .item-group{
    padding: 20px 0 8px 24px;
    font-size: 0;
    a{
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }
</style>
