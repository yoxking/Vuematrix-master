<template>
  <a-dropdown :trigger="['click']">
    <template slot="overlay">
      <a-spin :spinning="loading">
        <a-tabs :tabBarStyle="{textAlign: 'center'}" :style="{backgroundColor: 'white', width: '297px'}">
          <a-tab-pane tab="我的消息" key="1" :style="{padding: '0 24px'}">
            <a-list>
              <a-list-item v-for="item in mssgData" :key="item.id">
                <a-list-item-meta :title="item.title" :description="item.desc" @click="readMessage(item.id)">
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </template>
    <span @click="fetchNotice" class="header-notice">
      <a-badge :count="mssgCount">
        <a-icon :class="['header-notice-icon', theme]" type="bell" />
      </a-badge>
    </span>
  </a-dropdown>
</template>

<script>
import { getMyMessages } from '@/api/system/messageinfo'
import detail from '@/pages/system/messageinfo/Detail'

export default {
  name: 'HeaderNotice',
  data () {
    return {
      loading: false,
      mssgData: [],
      mssgCount: 0
    }
  },
  mounted () {
    const that = this
    this.loading = true
    getMyMessages().then(response => {
      that.mssgData = response.rows
      that.mssgCount = response.total
      that.loading = false
    })
  },
  computed: {
    theme () {
      return this.$store.state.setting.layout === 'side' ? 'light' : this.$store.state.setting.theme
    }
  },
  methods: {
    fetchNotice () {
      if (this.loading) {
        this.loading = false
        return
      }
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    readMessage (val) {
      this.$layer.iframe({
        content: {
          content: detail,
          parent: this,
          data: { id: val }
        },
        area: ['950px', '700px'],
        title: '消息阅读',
        maxmin: true,
        shade: true,
        shadeClose: false
      })
    }
  }
}
</script>

<style lang="less">
  .header-notice{
    display: inline-block;
    transition: all 0.3s;
    span {
      vertical-align: initial;
    }
    .header-notice-icon{
      font-size: 16px;
      padding: 4px;
      &.dark{
        color: #fff;
      }
      &.light{
        color: rgba(0,0,0,.65);
      }
    }
  }
  .ant-dropdown-menu-container{
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
  }
</style>
