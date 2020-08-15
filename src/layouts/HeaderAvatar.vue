<template>
  <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial">
    <span style="cursor: pointer">
      <a-avatar class="avatar"
                size="small"
                shape="circle"
                :src="userAvatar" />
      <span>{{userName}}</span>
    </span>
    <a-menu style="width: 150px"
            slot="overlay">
      <a-menu-item>
        <a href="javascript:;"
           @click="handleProfile">
          <a-icon type="user" />
          <span>个人中心</span>
        </a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;"
           @click="handleSetting">
          <a-icon type="setting" />
          <span>基本设置</span>
        </a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a href="javascript:;"
           @click="handleLogout">
          <a-icon type="logout" />
          <span>退出登录</span>
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import profile from '@/pages/sysuser/UserProfile'
import setting from '@/pages/sysuser/SysSetting'

export default {
  name: 'HeaderAvatar',
  computed: {
    userName () {
      return this.$store.state.suser.uname
    },
    userAvatar () {
      return this.$store.state.suser.avatar
    }
  },
  methods: {
    handleProfile () {
      this.$layer.iframe({
        content: {
          content: profile,
          parent: this,
          data: { id: '' }
        },
        area: ['950px', '680px'],
        title: '个人中心',
        maxmin: false,
        shade: true,
        shadeClose: false
      })
    },
    handleSetting () {
      this.$layer.iframe({
        content: {
          content: setting,
          parent: this,
          data: { id: '' }
        },
        area: ['950px', '680px'],
        title: '基本设置',
        maxmin: false,
        shade: true,
        shadeClose: false
      })
    },
    handleLogout () {
      var that = this
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        okText: '确认',
        cancelText: '取消',
        onOk () {
          that.$store
            .dispatch('suser/Logout').then(() => {
              location.reload()
            })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.avatar {
  margin: 20px 4px 20px 0;
  color: #1890ff;
  background: hsla(0, 0%, 100%, 0.85);
  vertical-align: middle;
}
</style>
