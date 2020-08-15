<template>
    <div>
      <a-row style="margin: 0 -12px">
        <a-col style="padding: 0 12px" :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card class="cpu-list" :loading="loading" style="margin-bottom: 24px;" :bordered="false"
          title="CPU、内存" :body-style="{padding: 0}">
            <div>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="CPU核心数">
                    <div slot="title" class="card-title">
                      <a>3</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="用户使用率">
                    <div slot="title" class="card-title">
                      <a>2.5%</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="系统使用率">
                    <div slot="title" class="card-title">
                      <a>5.8%</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="总内存">
                    <div slot="title" class="card-title">
                      <a>7.64G/509.5M</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="已用内存">
                    <div slot="title" class="card-title">
                      <a>3.26G/301.14M</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="内存使用率">
                    <div slot="title" class="card-title">
                      <a>42.7%/45.7%</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
            </div>
          </a-card>
          <a-card class="cpu-list" :loading="loading" style="margin-bottom: 24px;" :bordered="false"
          title="服务器、虚拟机" :body-style="{padding: 0}">
            <div>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="服务器名称">
                    <div slot="title" class="card-title">
                      <a>iZwz98m68yy5bxZ</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="操作系统">
                    <div slot="title" class="card-title">
                      <a>Linux</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="服务器IP">
                    <div slot="title" class="card-title">
                      <a>172.18.233.53</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="系统架构">
                    <div slot="title" class="card-title">
                      <a>amd64</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="Java名称">
                    <div slot="title" class="card-title">
                      <a>Java HotSpot(TM) 64-Bit Server VM</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="Java版本">
                    <div slot="title" class="card-title">
                      <a>1.8.0_111</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="启动时间">
                    <div slot="title" class="card-title">
                      <a>2020-04-26 21:03:37</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="运行时长">
                    <div slot="title" class="card-title">
                      <a>8天16小时59分钟</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="安装路径">
                    <div slot="title" class="card-title">
                      <a>/usr/java/jdk1.8.0_111/jre</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
              <a-card-grid>
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta description="项目路径">
                    <div slot="title" class="card-title">
                      <a>/home/ruoyi/projects/ruoyi-vue</a>
                    </div>
                  </a-card-meta>
                </a-card>
              </a-card-grid>
            </div>
          </a-card>
        </a-col>
        <a-col style="padding: 0 12px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card title="快速操作" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <div class="item-group">
              <a-button type="primary" @click="refreshServer">立即刷新</a-button>
            </div>
          </a-card>
          <a-card :loading="loading" title="磁盘状态" :bordered="false">
            <div class="members">
              <a-row>
                <a-col :span="24">
                  <a>
                    <span class="member">盘符路径：/ </span>
                  </a>
                </a-col>
                <a-col :span="24">
                  <a>
                    <span class="member">文件系统：ext4</span>
                  </a>
                </a-col>
                <a-col :span="24">
                  <a>
                    <span class="member">盘符类型：/</span>
                  </a>
                </a-col>
                <a-col :span="24">
                  <a>
                    <span class="member">总大小：39.2 GB</span>
                  </a>
                </a-col>
                <a-col :span="24">
                  <a>
                    <span class="member">可用大小：11.7 GB</span>
                  </a>
                </a-col>
                <a-col :span="24">
                  <a>
                    <span class="member">已用大小：27.5 GB</span>
                  </a>
                </a-col>
                <a-col :span="24">
                  <a>
                    <span class="member">已用百分比：70.17%</span>
                  </a>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
</template>

<script>
import { getServerinfo } from '@/api/monitor/server'

export default {
  name: 'Index',
  data () {
    return {
      loading: false,
      // 服务器信息
      server: []
    }
  },
  mounted () {
    this.refreshServer()
  },
  methods: {
    /** 查询服务器信息 */
    refreshServer () {
      const that = this
      this.loading = true
      getServerinfo().then(response => {
        console.log(response)
        that.server = response.data
        that.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .item-group{
    padding: 20px 0 8px 24px;
    font-size: 0;
    a{
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }
  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0,0,0,.65);
        line-height: 24px;
        width: 100%;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }
</style>
