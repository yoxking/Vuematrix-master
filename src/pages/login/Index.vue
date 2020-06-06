<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="header">
          <img alt="logo"
               class="logo"
               src="static/images/vmatrix-logo.png" />
          <span class="title">{{systemName}}</span>
        </div>
        <div class="desc">热度空间管理系统 v1.0</div>
      </div>
      <div class="login">
        <a-form @submit="onSubmit"
                :form="form">
          <a-tabs size="large"
                  :tabBarStyle="{textAlign: 'center'}"
                  style="padding: 0 2px;">
            <a-tab-pane tab="账户密码登录"
                        key="1">
              <a-alert type="error"
                       :closable="true"
                       v-show="errinfo"
                       :message="errinfo"
                       showIcon
                       style="margin-bottom: 24px;" />
              <a-form-item>
                <a-input size="large"
                         placeholder="admin"
                         v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入您的账号' }]},]">
                  <a-icon slot="prefix"
                          type="user" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input size="large"
                         placeholder="123"
                         type="password"
                         v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入您的密码' }]},]">
                  <a-icon slot="prefix"
                          type="lock" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-row :gutter="8"
                       style="margin: 0 -4px">
                  <a-col :span="16">
                    <a-input size="large"
                             placeholder="验证码"
                             v-decorator="[
                'codetext',
                {rules: [{ required: true, message: '请输入验证码' }]},]">
                      <a-icon slot="prefix"
                              type="safety-certificate" />
                    </a-input>
                  </a-col>
                  <a-col :span="8"
                         style="padding-left: 4px">
                    <img :src="codeUrl"
                         @click="getCode" />
                  </a-col>
                </a-row>
              </a-form-item>
            </a-tab-pane>
            <a-tab-pane tab="手机号登录"
                        key="2">
              <a-form-item>
                <a-input size="large"
                         placeholder="手机号码">
                  <a-icon slot="prefix"
                          type="mobile" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-row :gutter="8"
                       style="margin: 0 -4px">
                  <a-col :span="16">
                    <a-input size="large"
                             placeholder="验证码">
                      <a-icon slot="prefix"
                              type="mail" />
                    </a-input>
                  </a-col>
                  <a-col :span="8"
                         style="padding-left: 4px">
                    <a-button style="width: 100%"
                              class="captcha-button"
                              size="large">获取验证码</a-button>
                  </a-col>
                </a-row>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>
          <div>
            <a-checkbox :checked="loginInfo.rememberMe" @change="onRembme">自动登录</a-checkbox>
            <router-link style="float: right"
                         :to="{ path: '/forgetpwd' }">忘记密码</router-link>
          </div>
          <a-form-item>
            <a-button :loading="logging"
                      style="width: 100%;margin-top: 24px"
                      size="large"
                      htmlType="submit"
                      type="primary">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <global-footer :link-list="linkList"
                   :copyright="copyright" />
  </div>
</template>

<script>
import GlobalFooter from '../../layouts/GlobalFooter'
// import { encrypt, decrypt } from '@/myutil/encrypt'
// import Cookies from 'js-cookie'
import { getCodeImg } from '@/api/login'

export default {
  name: 'Login',
  components: { GlobalFooter },
  data () {
    return {
      form: this.$form.createForm(this),
      redirect: undefined,
      logging: false,
      errinfo: '',
      codeUrl: '',
      loginInfo: {
        username: 'admin',
        password: '123',
        rememberMe: false,
        code: '',
        uuid: ''
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  computed: {
    systemName () {
      return this.$store.state.setting.systemName
    },
    linkList () {
      return this.$store.state.setting.footerLinks
    },
    copyright () {
      return this.$store.state.setting.copyright
    }
  },
  created () {
    this.getCode()
  },
  methods: {
    getCode () {
      getCodeImg().then(res => {
        this.codeUrl = 'data:image/gif;base64,' + res.img
        this.loginInfo.uuid = res.uuid
      })
    },
    onRembme (e) {
      this.loginInfo.rememberMe = !this.loginInfo.rememberMe
    },
    onSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.logging = true

          this.loginInfo.username = this.form.getFieldValue('username')
          this.loginInfo.password = this.form.getFieldValue('password')
          this.loginInfo.code = this.form.getFieldValue('codetext')

          this.$store
            .dispatch('suser/Login', this.loginInfo)
            .then(() => {
              this.$router.push({ path: this.redirect || '/home/index' })
            })
            .catch(() => {
              this.logging = false
              this.getCode()
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5
    url("/static/images/login-bg-img.svg")
    no-repeat center 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 112px 0 24px;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
            sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .login {
      width: 368px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-width: 320px) {
        .captcha-button {
          font-size: 14px;
        }
      }
      .icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}
</style>
