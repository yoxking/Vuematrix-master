<template>
  <div class="wrapbox">
    <br />
    <a-row>
      <a-col :md="8">
          <div class="account-center-avatarHolder">
            <div class="avatar"
                 @click="uptAvatar">
              <img :src="userInfo.avatar">
            </div>
            <div class="username">{{userInfo.loginName}}</div>
            <div class="bio">海纳百川，有容乃大</div>
          </div>
          <a-divider />
          <div class="account-center-detail">
            <p>
              <i class="title"></i>类型：{{userInfo.userType}}
            </p>
            <p>
              <i class="group"></i>部门：{{userInfo.deptNo}}
            </p>
            <p>
              <i class="address"></i>地址：{{userInfo.telephone}}
            </p>
          </div>
      </a-col>
      <a-col :md="16">
          <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="基本资料" key="1">
              <a-form-model ref="ruleForm1"
                            :model="userInfo"
                            :rules="rules1"
                            :label-col="labelCol"
                            :wrapper-col="wrapperCol">
                <a-form-model-item label="姓名"
                                   prop="userCnname"
                                   ref="userCnname">
                  <a-input v-model="userInfo.userCnname"
                           placeholder="姓名" />
                </a-form-model-item>
                <a-form-model-item label="性别"
                                   prop="sex"
                                   ref="sex">
                  <a-radio-group v-model="userInfo.sex">
                    <a-radio value="1">男</a-radio>
                    <a-radio value="0">女</a-radio>
                  </a-radio-group>
                </a-form-model-item>
                <a-form-model-item label="手机"
                                   prop="telephone"
                                   ref="telephone">
                  <a-input v-model="userInfo.telephone"
                           placeholder="手机" />
                </a-form-model-item>
                <a-form-model-item label="邮箱"
                                   prop="email"
                                   ref="email">
                  <a-input v-model="userInfo.email"
                           placeholder="邮箱" />
                </a-form-model-item>
                <a-form-model-item label="简介"
                                   prop="comments"
                                   ref="comments">
                  <a-textarea v-model="userInfo.comments"
                              placeholder="个人简介"
                              :autoSize="{ minRows: 3, maxRows: 5 }" />
                </a-form-model-item>
                <a-form-model-item :wrapperCol="{span: 10, offset: 3}">
                  <a-button type="primary"
                            @click="saveProfile">保存</a-button>
                  <a-button @click="doCancel" style="margin-left: 8px">关闭</a-button>
                </a-form-model-item>
              </a-form-model>
            </a-tab-pane>
            <a-tab-pane tab="修改密码"
                        key="2">
              <a-form-model ref="ruleForm2"
                            :model="pswdInfo"
                            :rules="rules2"
                            :label-col="labelCol"
                            :wrapper-col="wrapperCol">
                <a-form-model-item label="旧密码"
                                   prop="oldpsword"
                                   ref="oldpsword">
                  <a-input type="password"
                           v-model="pswdInfo.oldpsword"
                           placeholder="旧密码" />
                </a-form-model-item>
                <a-form-model-item label="新密码"
                                   prop="newpsword"
                                   ref="newpsword">
                  <a-input type="password"
                           v-model="pswdInfo.newpsword"
                           placeholder="新密码" />
                </a-form-model-item>
                <a-form-model-item label="确认密码"
                                   prop="retpsword"
                                   ref="retpsword">
                  <a-input type="password"
                           v-model="pswdInfo.retpsword"
                           placeholder="确认密码" />
                </a-form-model-item>
                <a-form-model-item :wrapperCol="{span: 10, offset: 3}">
                  <a-button type="primary"
                            @click="savePassword">保存</a-button>
                  <a-button @click="doCancel" style="margin-left: 8px">关闭</a-button>
                </a-form-model-item>
              </a-form-model>
            </a-tab-pane>
          </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import upldAvatar from './UpldAvatar'
import { getSuserprofile, uptSuserinfo, uptSuserpswd } from '@/api/system/suserinfo'

export default {
  name: 'UserProfile',
  props: {
    layerid: {// 自动注入的layerid
      type: String,
      default: ''
    },
    id: {// 传递的数据
      type: String,
      default: ''
    },
    lydata: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      labelCol: { span: 3 },
      wrapperCol: { span: 10 },
      userInfo: {
        userNo: '',
        deptNo: '',
        loginName: '',
        password: '',
        userCnname: '',
        userType: '',
        sex: '1',
        telephone: '',
        email: '',
        avatar: '',
        checkState: '1',
        comments: ''
      },
      pswdInfo: {
        oldpsword: '',
        newpsword: '',
        retpsword: ''
      },
      rules1: {
        userCnname: [
          { required: true, message: '请输姓名', trigger: 'change' }
        ],
        telephone: [
          { required: true, message: '请输入电话', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'change' }
        ]
      },
      rules2: {
        oldpsword: [
          { required: true, message: '请输入原密码', trigger: 'change' }
        ],
        newpsword: [
          { required: true, message: '请输入新密码', trigger: 'change' }
        ],
        retpsword: [
          { required: true, message: '请输入确认密码', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    uptAvatar () {
      this.$layer.iframe({
        content: {
          content: upldAvatar,
          parent: this,
          data: {}
        },
        area: ['800px', '490px'],
        title: '修改头像',
        maxmin: false,
        shade: true,
        shadeClose: false
      })
    },
    getUserInfo () {
      const that = this
      getSuserprofile().then(response => {
        that.userInfo = response.data
        that.userInfo.avatar = process.env.BASE_API + that.userInfo.avatar
      })
    },
    saveProfile () {
      const that = this
      this.$refs.ruleForm1.validate(valid => {
        if (valid) {
          uptSuserinfo(that.userInfo).then(response => {
            // that.$message.success(response.msg)
            that.$layer.msg(response.msg)
            that.$layer.close(that.layerid)
          })
        } else {
          that.$layer.msg('输入有误，请重新输入!')
          return false
        }
      })
    },
    savePassword () {
      const that = this

      if (this.pswdInfo.newpsword === this.pswdInfo.retpsword) {
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            uptSuserpswd(that.pswdInfo.oldpsword, that.pswdInfo.newpsword).then(response => {
            // that.$message.success(response.msg)
              that.$layer.msg(response.msg)
              that.$layer.close(that.layerid)
            })
          } else {
            that.$layer.msg('输入有误，请重新输入!')
            return false
          }
        })
      } else {
        this.$message.warn('两次输入的新密码不相同!')
      }
    },
    doCancel () {
      this.$layer.close(this.layerid)
    }
  }
}
</script>

<style lang="less" scoped>
.wrapbox {
  margin: 0;
  padding: 10px 20px;
  width:100%;
}

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
    }

    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }
</style>
