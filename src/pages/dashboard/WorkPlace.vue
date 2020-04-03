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
import PageHeader from '../../components/page/PageHeader'
import PageLayout from '../../layouts/PageLayout'
import HeadInfo from '../../components/tool/HeadInfo'

export default {
  name: 'WorkPlace',
  components: {HeadInfo, PageLayout, PageHeader},
  data () {
    return {
      projects: [],
      loading: true,
      activities: [],
      teams: []
    }
  },
  computed: {
    currUser () {
      return this.$store.state.account.user
    }
  },
  mounted () {
    this.getProjectList()
    this.getActivites()
    this.getTeams()
  },
  methods: {
    getProjectList () {
      this.$axios({
        method: 'get',
        url: '/project'
      }).then(res => {
        this.projects = res.data
        this.loading = false
      })
    },
    getActivites () {
      this.$axios({
        method: 'get',
        url: '/work/activity'
      }).then(res => {
        this.activities = res.data
      })
    },
    getTeams () {
      this.$axios({
        method: 'get',
        url: '/work/team'
      }).then(res => {
        this.teams = res.data
      })
    }
  }
}
</script>

<style lang="less">
  .project-list {
    .card-title {
      font-size: 0;
      a {
        color: rgba(0, 0, 0, 0.85);
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        &:hover {
          color: #1890ff;
        }
      }
    }
    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;
        &:hover {
          color: #1890ff;
        }
      }
      .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
      }
    }
      .ant-card-meta-description {
        color: rgba(0, 0, 0, 0.45);
        height: 44px;
        line-height: 22px;
        overflow: hidden;
      }
  }
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
  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0,0,0,.65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }
  .head-info{
    display: inline-block;
  }
</style>
