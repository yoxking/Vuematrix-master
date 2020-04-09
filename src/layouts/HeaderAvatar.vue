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
        <router-link :to="{ path: '/account/userprofile' }">
          <a-icon type="user" />
          <span>个人中心</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link :to="{ path: '/account/syssetting' }">
          <a-icon type="setting" />
          <span>基本设置</span>
        </router-link>
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
export default {
  name: 'HeaderAvatar',
  computed: {
    userName () {
      return 'admin'
      // return this.$store.state.uname
    },
    userAvatar () {
      return require('@/assets/image/profile.jpg')
      // return this.$store.state.avatar
    }
  },
  methods: {
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
