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
        <a-form-model ref="ruleForm" :model="form" :rules="rules">
          <a-tabs size="large" default-active-key="1"
                  :tabBarStyle="{textAlign: 'center'}"
                  style="padding: 0 2px;">
            <a-tab-pane tab="账户密码登录" key="1">
              <a-form-model-item  prop="username" ref="username">
                <a-input size="large" v-model="form.username" placeholder="admin">
                  <a-icon slot="prefix" type="user" />
                </a-input>
              </a-form-model-item>
              <a-form-model-item prop="password" ref="password">
                <a-input size="large" v-model="form.password" placeholder="123" type="password">
                  <a-icon slot="prefix" type="lock" />
                </a-input>
              </a-form-model-item>
              <a-form-model-item prop="txtcode" ref="txtcode">
                <a-row :gutter="8" style="margin: 0 -4px">
                  <a-col :span="16">
                    <a-input size="large" v-model="form.txtcode" placeholder="验证码">
                      <a-icon slot="prefix" type="safety-certificate" />
                    </a-input>
                  </a-col>
                  <a-col :span="8" style="padding-left: 4px">
                    <img :src="codeUrl" @click="getTxtCode" />
                  </a-col>
                </a-row>
              </a-form-model-item>
            </a-tab-pane>
            <a-tab-pane tab="手机号登录" key="2">
              <a-form-model-item prop="mobile" ref="mobile">
                <a-input size="large" placeholder="手机号码">
                  <a-icon slot="prefix" type="mobile" />
                </a-input>
              </a-form-model-item>
              <a-form-model-item prop="txtcode2" ref="txtcode2">
                <a-row :gutter="8" style="margin: 0 -4px">
                  <a-col :span="16">
                    <a-input size="large" placeholder="验证码">
                      <a-icon slot="prefix" type="mail" />
                    </a-input>
                  </a-col>
                  <a-col :span="8" style="padding-left: 4px">
                    <a-button style="width: 100%" class="captcha-button" size="large">获取验证码</a-button>
                  </a-col>
                </a-row>
              </a-form-model-item>
            </a-tab-pane>
          </a-tabs>
          <div>
            <a-checkbox :checked="form.rememberMe"
                        @change="onRemember">自动登录</a-checkbox>
            <router-link style="float: right"
                         :to="{ path: '/forgetpwd' }">忘记密码</router-link>
          </div>
          <a-form-model-item>
            <a-button :loading="logging"
                      style="width: 100%;margin-top: 24px"
                      size="large"
                      type="primary"
                      @click="onLogin"
                      >登录</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
    <global-footer :link-list="linkList" :copyright="copyright" />
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
      redirect: undefined,
      logging: false,
      codeUrl: '',
      renterList: [],
      form: {
        username: undefined,
        password: undefined,
        txtcode: '',
        uuid: '',
        rememberMe: false
      },
      rules: {
        username: [{ required: true, message: '请输入您的账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入您的密码', trigger: 'blur' }],
        txtcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
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
    this.getTxtCode()
  },
  methods: {
    getTxtCode () {
      const that = this
      getCodeImg().then(res => {
        that.codeUrl = 'data:image/gif;base64,' + res.img
        that.form.uuid = res.uuid
      })
    },
    onRemember () {
      this.form.rememberMe = !this.form.rememberMe
    },
    onLogin () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          that.logging = true

          that.$store
            .dispatch('suser/Login', that.form)
            .then(() => {
              that.$router.push({ path: that.redirect || '/home/index' })
            })
            .catch(() => {
              that.logging = false
              that.getTxtCode()
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
  background: #f0f2f5 url("/static/images/login-bg-img.svg") no-repeat center
    110px;
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
