<template>
  <div class="page-header-index-wide page-header-wrapper-grid-content-main">
    <a-row :gutter="24">
      <a-col :md="24"
             :lg="7">
        <a-card :bordered="false">
          <div class="account-center-avatarHolder">
            <div class="avatar" @click="uptAvatar">
              <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png">
            </div>
            <div class="username">dfdsfsdf</div>
            <div class="bio">海纳百川，有容乃大</div>
          </div>
          <div class="account-center-detail">
            <p>
              <i class="title"></i>交互专家
            </p>
            <p>
              <i class="group"></i>技术部
            </p>
            <p>
              <i class="address"></i>
              <span>浙江省</span>
              <span>杭州市</span>
            </p>
          </div>
          <a-divider />
        </a-card>
      </a-col>
      <a-col :md="24"
             :lg="17">
        <a-card style="width:100%"
                :bordered="false">
          <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="基本资料"
                        key="1">
              <a-form>
                <a-form-item label="姓名"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 10}">
                  <a-input placeholder="姓名" />
                </a-form-item>
                <a-form-item label="性别"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 10}">
                  <a-radio-group name="radioGroup"
                                 :defaultValue="1">
                    <a-radio :value="1">男</a-radio>
                    <a-radio :value="0">女</a-radio>
                  </a-radio-group>
                </a-form-item>
                <a-form-item label="手机"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 10}">
                  <a-input placeholder="手机" />
                </a-form-item>
                <a-form-item label="邮箱"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 10}">
                  <a-input placeholder="邮箱" />
                </a-form-item>
                <a-form-item label="简介"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 16}">
                  <a-textarea rows="4"
                              placeholder="个人简介" />
                </a-form-item>
                <a-form-item :wrapperCol="{span: 10, offset: 3}">
                  <a-button type="primary">保存</a-button>
                  <a-button style="margin-left: 8px">关闭</a-button>
                </a-form-item>
              </a-form>
            </a-tab-pane>
            <a-tab-pane tab="修改密码"
                        key="2">
              <a-form>
                <a-form-item label="旧密码"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 10}">
                  <a-input type="password" placeholder="旧密码" />
                </a-form-item>
                <a-form-item label="新密码"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 10}">
                  <a-input type="password" placeholder="新密码" />
                </a-form-item>
                <a-form-item label="确认密码"
                             :labelCol="{span: 3}"
                             :wrapperCol="{span: 10}">
                  <a-input type="password" placeholder="确认密码" />
                </a-form-item>
                <a-form-item :wrapperCol="{span: 10, offset: 3}">
                  <a-button type="primary">保存</a-button>
                  <a-button style="margin-left: 8px">关闭</a-button>
                </a-form-item>
              </a-form>
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import avatarUpdt from './AvatarUpdt'

export default {
  data () {
    return {
    }
  },
  methods: {
    uptAvatar () {
      this.$dlg.modal(avatarUpdt, {
        title: '修改头像',
        maxButton: false,
        width: 800,
        height: 490
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

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
}
</style>
