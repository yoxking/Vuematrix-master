<template>
  <page-layout :avatar="currUser.avatar">
    <div slot="headerContent">
      <div class="title">{{currUser.timefix}}，{{currUser.name}}，{{currUser.welcome}}</div>
      <div>{{currUser.position}}</div>
    </div>
    <div slot="extra">
          <head-info title="项目数" content="56" :bordered="true"/>
          <head-info title="团队内排名" content="8/24" :bordered="true"/>
          <head-info title="项目访问" content="2,223"/>
    </div>
    <div>
      <a-row style="margin: 0 -12px">
        afasfaf
      </a-row>
    </div>
  </page-layout>
</template>

<script>
import PageHeader from '../../comps/page/PageHeader'
import PageLayout from '../../layouts/PageLayout'
import HeadInfo from '../../comps/tools/HeadInfo'

export default {
  name: 'Index',
  components: {HeadInfo, PageLayout, PageHeader},
  data () {
    return {
    }
  },
  computed: {
    currUser () {
      return this.$store.state.account.user
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .head-info{
    display: inline-block;
  }
</style>
