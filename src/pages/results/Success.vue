<template>
    <a-card :bordered="false">
      <result style="margin-bottom: 16px; margin-top: 48px" :is-success="true" :title="title" :description="description">
        <template slot="action">
          <a-button type="primary">返回列表</a-button>
        </template>
         <div>
          <div style="fontSize: 16px; color: rgba(0, 0, 0, 0.85); fontWeight: 500; marginBottom: 16px">
            您提交的内容成功：
          </div>
          <div style="margin-bottom: 16px">
            <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
            您的账户已被冻结
            <a style="margin-left: 16px">立即解冻 <a-icon type="right" /></a>
          </div>
          <div>
            <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
            您的账户还不具备申请资格
            <a style="margin-left: 16px">立即升级 <a-icon type="right" /></a>
          </div>
        </div>
      </result>
    </a-card>
</template>

<script>
import Result from '../../comps/result/Result'

export default {
  name: 'Success',
  components: {Result},
  data () {
    return {
      title: '提交成功',
      description: '提交结果页用于反馈一系列操作任务的处理结果，\n'
    }
  }
}
</script>

<style scoped>

</style>
