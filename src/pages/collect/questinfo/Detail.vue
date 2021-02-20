<template>
  <div class="wrapbox">
    <br />
    <a-form>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="编号"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.questNo}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          &nbsp;
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="题目"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.questTitle}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="类别"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.questType}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="类型"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.classNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-model-item
            label="题库"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.qsetsNo}}
          </a-form-model-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-model-item
            label="是否必填"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.questMust}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="spanCol">
          <a-form-item
            label="总得分"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.questTscore}}
          </a-form-item>
        </a-col>
        <a-col :span="spanCol">
          <a-form-item
            label="排序"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 16}"
          >
            {{model.orderNo}}
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item
            label="题目"
            prop="questTitle"
            ref="questTitle"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.questTitle}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item
            label="描述"
            prop="questDesc"
            ref="questDesc"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.questDesc}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <template v-if="model.questType!=='1'">
        <a-row
          v-for="item in model.options"
          :key="item.optNo"
        >
          <a-col :span="spanCol">
            <a-form-model-item
              :label="item.optsIndex+':'"
              :labelCol="{span: 6}"
              :wrapperCol="{span: 16}"
            >
              {{item.optsTitle}}
            </a-form-model-item>
          </a-col>
          <a-col :span="spanCol">
            <a-form-model-item
              label="得分"
              :labelCol="{span: 6}"
              :wrapperCol="{span: 16}"
            >
              {{item.optsScore}}
            </a-form-model-item>
          </a-col>
        </a-row>
      </template>
      <a-row>
        <a-col :span="24">
          <a-form-model-item
            label="答案"
            prop="questAnswer"
            ref="questAnswer"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.questAnswer}}
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-model-item
            label="答案解析"
            prop="questExplain"
            ref="questExplain"
            :labelCol="{span: 3}"
            :wrapperCol="{span: 20}"
          >
            {{model.questExplain}}
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider />
    <div class="btnbox">
      <a-button @click="doClose">关闭</a-button>
    </div>
  </div>
</template>

<script>
import { getQuestinfo } from '@/api/collect/questinfo'

export default {
  name: 'Detail',
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
      spanCol: 12,
      model: {
        questNo: '0',
        questTitle: '',
        questImage: '',
        questType: '1',
        questDesc: '',
        classNo: undefined,
        qsetsNo: undefined,
        orderNo: 1,
        questMust: '1',
        questTscore: 0,
        questAnswer: '',
        questKeyword: '',
        questExplain: '',
        options: [{
          optsNo: '1',
          optsTitle: '选项内容',
          optsIndex: 'A',
          optsImage: '',
          optsDesc: '',
          optsScore: 0
        }],
        checkState: '1',
        comments: ''
      }
    }
  },
  methods: {
    doClose () {
      this.$layer.close(this.layerid)
    }
  },
  mounted () {
    if (this.id !== '') {
      const that = this
      getQuestinfo(this.id).then(response => {
        that.model = response.data
      })
    }
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
