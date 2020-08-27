<template>
  <div class="design-wrapper">
    <h3>{{title}}</h3>
    <div class="top"
         v-if="desc!=''">
      {{desc}}
    </div>
    <a-card :loading="loading"
            class="box-card"
            v-for="(item,index) in detail"
            :key="item.id">
      <div class="box-header">
        <div class="qustitle">
          <!--显示必填标识-->
          <span style="color: #F56C6C;">
            <span v-if="item.must">*</span>
            <span v-else>&nbsp;</span>
          </span>
          <span style="color: black;margin-right: 3px;">{{(index+1)+'.'}}</span>
          {{item.title}}
        </div>
        <div style="float: right;">
          <a-button style="padding: 2px"
                    type="link"
                    @click="editorQuestion(item)">编辑</a-button>
          <a-button style="padding: 2px;color: #F56C6C"
                    type="link"
                    @click="deleteQuestion(index)">删除</a-button>
        </div>
      </div>

      <a-radio-group v-if="item.type=='radio'"
                     v-model="item.radioValue">
        <!--单选题展示-->
        <div class="box-item"
             v-for="(option,index) in item.options"
             :key="option.id">
          <a-radio :value="option.value">{{index}}.{{ option.title }}</a-radio>
        </div>
      </a-radio-group>

      <!--多选题展示-->
      <a-checkbox-group v-if="item.type=='checkbox'"
                        v-model="item.checkboxValue">
        <div class="box-item"
             v-for="(option,index) in item.options"
             :key="option.id">
          <a-checkbox :value="option.value">{{index}}.{{ option.title }}</a-checkbox>
        </div>
      </a-checkbox-group>

      <!--填空题展示-->
      <a-input v-if="item.type=='text'"
               type="textarea"
               :rows="item.row"
               resize="none"
               v-model="item.textValue">
      </a-input>
    </a-card>
    <a-button icon="plus-circle"
              @click="addnewQuestion"
              style="margin-top: 10px;">添加题目</a-button>
    <br /><br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false, // 页面加载中
      detail: [],
      wjId: 0,
      title: '',
      desc: '',
      allType: [
        {
          value: 'radio',
          label: '单选题'
        },
        {
          value: 'checkbox',
          label: '多选题'
        },
        {
          value: 'text',
          label: '填空题'
        }
      ]
    }
  },
  mounted () {
    this.init(1, '测试问卷', '这是一个测试问卷')
  },
  methods: {
    // 初始化问卷所有问题
    init (wjId, title, desc) {
      this.wjId = wjId
      this.title = title
      this.desc = desc
      this.getQuestionList()
    },
    // 获取问题列表(问卷内容)
    getQuestionList () {
    },
    // 点击添加问题按钮
    addnewQuestion () {

    },
    // 删除问题
    deleteQuestion (index) {
      console.log('del')
    },
    // 确认添加/保存题目
    checkAddQuestion () {

    },
    // 点击编辑问题按钮
    editorQuestion (item) {
      console.log('edit')
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
