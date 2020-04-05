<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="header">
          <img alt="logo"
               class="logo"
               src="static/img/vue-antd-logo.png" />
          <span class="title">{{systemName}}</span>
        </div>
        <div class="desc">基云后台管理系统 v1.0</div>
      </div>
      <div class="login">
        <h3><span>找回密码</span></h3>
        <a-form ref="formRegister"
                id="formRegister">
          <a-form-item>
            <a-input size="large"
                     type="text"
                     placeholder="邮箱"></a-input>
          </a-form-item>

          <a-form-item>
            <a-input size="large"
                     type="password"
                     placeholder="至少6位密码，区分大小写"></a-input>
          </a-form-item>
          <a-form-item>
            <a-input size="large"
                     type="password"
                     autocomplete="false"
                     placeholder="确认密码"></a-input>
          </a-form-item>

          <a-form-item>
            <a-input size="large"
                     placeholder="11 位手机号">
              <a-select slot="addonBefore"
                        size="large"
                        defaultValue="+86">
                <a-select-option value="+86">+86</a-select-option>
                <a-select-option value="+87">+87</a-select-option>
              </a-select>
            </a-input>
          </a-form-item>

          <a-row :gutter="16">
            <a-col class="gutter-row"
                   :span="16">
              <a-form-item>
                <a-input size="large"
                         type="text"
                         placeholder="验证码">
                  <a-icon slot="prefix"
                          type="mail"
                          :style="{ color: 'rgba(0,0,0,.25)' }" />
                </a-input>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row"
                   :span="8">
              <a-button class="getCaptcha"
                        size="large">获取验证码</a-button>
            </a-col>
          </a-row>

          <a-form-item>
            <a-button size="large"
                      type="primary"
                      htmlType="submit"
                      class="register-button">注册
            </a-button>
            <router-link class="login-link"
                         to="/login">使用已有账户登录</router-link>
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

export default {
  name: 'Login',
  components: { GlobalFooter },
  data () {
    return {
      logging: false,
      error: ''
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
  methods: {
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
    url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg")
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

    .register-button {
      width: 50%;
    }

    .login-link {
      float: right;
      line-height: 40px;
    }
  }
}
</style>
