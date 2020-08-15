<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu :theme="theme" :menuData="menuData" :collapsed="false" :collapsible="false" @menuSelect="onMenuSelect"/>
    </drawer>
    <sider-menu :theme="theme" v-else-if="layout === 'side'" :menuData="menuData" :collapsed="collapsed" :collapsible="true" />
    <drawer :open-drawer="showSetting" placement="right"  @change="onSettingDrawerChange">
      <div class="setting" slot="handler">
        <a-icon :type="showSetting ? 'close' : 'setting'" />
      </div>
      <setting />
    </drawer>
    <a-layout>
      <global-header :menuData="menuData" :collapsed="collapsed" @toggleCollapse="toggleCollapse" @changeTopMenu="onChangeMenu"/>
      <a-layout-content :style="{minHeight: minHeight, margin: '24px 24px 0'}">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <global-footer :link-list="linkList" :copyright="copyright" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import router from '../router'
import stores from '../stores'

import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'
import Drawer from '../comps/tools/Drawer'
import SiderMenu from '../comps/menu/SiderMenu'
import Setting from '../comps/setting/Setting'

const minHeight = window.innerHeight - 64 - 24 - 122

let menuData = []

export default {
  name: 'GlobalLayout',
  components: {Setting, SiderMenu, Drawer, GlobalFooter, GlobalHeader},
  data () {
    return {
      minHeight: minHeight + 'px',
      collapsed: false,
      menuData: menuData,
      showSetting: false
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    theme () {
      return this.$store.state.setting.theme
    },
    layout () {
      return this.$store.state.setting.layout
    },
    linkList () {
      return this.$store.state.setting.footerLinks
    },
    copyright () {
      return this.$store.state.setting.copyright
    }
  },
  methods: {
    toggleCollapse () {
      this.collapsed = !this.collapsed
    },
    onDrawerChange (show) {
      this.collapsed = show
    },
    onMenuSelect () {
      this.toggleCollapse()
    },
    onSettingDrawerChange (val) {
      this.showSetting = val
    },
    onChangeMenu (parentId) {
      const that = this
      stores.dispatch('menus/GenertRoutes', parentId).then(accessRoutes => {
        if (accessRoutes != null && accessRoutes.length > 0) {
          that.menuData = accessRoutes[0].children
          router.options.routes = []
          router.options.routes = stores.state.menus.routes
          // router.addRoutes(accessRoutes) // 动态添加可访问路由表
          router.$addRoutes(accessRoutes)

          router.push('/')
        }
      })
    }
  },
  beforeCreate () {
    const routes = router.options.routes.find((item) => item.path === '/')
    menuData = (routes && routes.children) || []
  }
}
</script>

<style lang="less" scoped>
  .setting{
    background-color: #1890ff;
    color: #fff;
    border-radius: 5px 0 0 5px;
    line-height: 40px;
    font-size: 22px;
    width: 40px;
    height: 40px;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  }
</style>
