<template>
  <div class="design-wrapper">
    <h3>{{paper.paperTitle}}</h3>
    <div
      class="top"
      v-if="paper.paperDesc!=''"
    >
      {{paper.paperDesc}}
    </div>
    <a-card
      :loading="loading"
      class="box-card"
      v-for="(item,index) in quests"
      :key="item.questNo"
    >
      <div class="box-header">
        <div class="qustitle">
          <!--显示必填标识-->
          <span style="color: #F56C6C;">
            <span v-if="item.questMust==='1'">*</span>
            <span v-else>&nbsp;</span>
          </span>
          <span style="color: black;margin-right: 3px;">{{(index+1)+'.'}}</span>
          {{item.questTitle}}
        </div>
      </div>

      <!--填空题展示-->
      <template v-if="item.questType==='1'">
        <a-textarea
          placeholder="请输入内容"
          :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </template>

      <!--单选题展示-->
      <template v-if="item.questType==='2'">
        <a-radio-group v-model="item.radioValue">
          <div
            class="box-item"
            v-for="(option,index) in item.options"
            :key="option.optNo"
          >
            <a-radio :value="option.optNo">{{index}}.{{ option.optTitle }}</a-radio>
          </div>
        </a-radio-group>
      </template>

      <!--多选题展示-->
      <template v-if="item.questType==='3'">
        <a-checkbox-group v-model="item.checkboxValue">
          <div
            class="box-item"
            v-for="(option,index) in item.options"
            :key="option.optNo"
          >
            <a-checkbox :value="option.optNo">{{index}}.{{ option.optTitle }}</a-checkbox>
          </div>
        </a-checkbox-group>
      </template>

    </a-card>
    <a-divider />
    <a-button @click="doCancel">关闭</a-button>
    <br /><br />
  </div>
</template>

<script>
import { getPaperinfo } from '@/api/collect/paperinfo'

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
        paperType: '0',
        paperDesc: '',
        classNo: '',
        orderNo: 1,
        questClass: '',
        questRules: '',
        paperScore: 100,
        paperQuests: '',
        paperRusers: '',
        startDate: '',
        enditDate: '',
        exDuration: 120,
        checkState: '1',
        comments: ''
      },
      quests: []
    }
  },
  mounted () {
    const that = this
    if (this.id !== '') {
      getPaperinfo(this.id).then(response => {
        that.paper = response.data
      })
    }
  },
  methods: {
    doCancel () {
      this.$layer.close(this.layerid)
    }
  }
}
</script>

<style lang="less" scoped>
.design-wrapper {
  padding: 20px;
  width: 100%;
  text-align: center;
}
.design-wrapper .top {
  color: #606266;
  padding: 0 10px 10px 10px;
  border-bottom: 3px solid #409eff;
  font-size: 12px;
  line-height: 22px;
  text-align: left;
}
.box-card {
  margin: 10px 0;
  width: 100%;
  text-align: left;
}
.box-card .box-header {
  margin: 0 0 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #e8e8e8;
}
.box-card .qustitle {
  display: inline-block;
  width: 80%;
  font-size: 16px;
  color: #303133;
}
.box-card .box-item {
  padding: 5px;
}
</style>
