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
        <div class="desc">基云后台管理系统 v1.0</div>
      </div>
      <div class="login">
        <h3><span>找回密码</span></h3>
        <a-form-model ref="ruleForm" :model="form" :rules="rules">
          <a-form-model-item prop="email" ref="email">
            <a-input size="large"
                     type="text"
                     v-model="form.email"
                     placeholder="邮箱地址"></a-input>
          </a-form-model-item>
          <a-form-model-item prop="password" ref="password">
            <a-input size="large"
                     type="password"
                     v-model="form.password"
                     placeholder="至少6位密码，区分大小写"></a-input>
          </a-form-model-item>
          <a-form-model-item prop="repsword" ref="repsword">
            <a-input size="large"
                     type="password"
                     v-model="form.repsword"
                     autocomplete="false"
                     placeholder="确认密码"></a-input>
          </a-form-model-item>
          <a-form-model-item prop="mobile" ref="mobile">
            <a-input size="large" v-model="form.mobile"
                     placeholder="11 位手机号">
              <a-select slot="addonBefore"
                        size="large"
                        defaultValue="+86">
                <a-select-option value="+86">+86</a-select-option>
                <a-select-option value="+87">+87</a-select-option>
              </a-select>
            </a-input>
          </a-form-model-item>
          <a-row :gutter="16">
            <a-col class="gutter-row"
                   :span="16">
              <a-form-model-item prop="txtcode" ref="txtcode">
                <a-input size="large"
                         type="text"
                         v-model="form.txtcode"
                         placeholder="验证码">
                  <a-icon slot="prefix"
                          type="mail"
                          :style="{ color: 'rgba(0,0,0,.25)' }" />
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col class="gutter-row"
                   :span="8">
              <a-button class="getCaptcha"
                        size="large">获取验证码</a-button>
            </a-col>
          </a-row>
          <a-form-model-item>
            <a-button :loading="loading"
                      size="large"
                      type="primary"
                      @click="onSubmit"
                      class="register-button">提交
            </a-button>
            <router-link class="login-link"
                         :to="{ path: '/login' }">使用已有账户登录</router-link>
          </a-form-model-item>
        </a-form-model>
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
      loading: false,
      form: {
        email: undefined,
        password: undefined,
        repsword: undefined,
        mobile: '',
        txtcode: ''
      },
      rules: {
        email: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' }],
        password: [{ required: true, message: '请输入新的密码', trigger: 'blur' }],
        repsword: [{ required: true, message: '请输入确认密码', trigger: 'blur' }],
        mobile: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        txtcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
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
    onSubmit () {
      const that = this
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          that.loading = true

          console.log(that.form)
          that.loading = false
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
