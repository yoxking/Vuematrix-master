<template>
  <div :style="'height:'+ height">
    <iframe :src="src" frameborder="no" style="width: 100%;height: 100%" scrolling="auto" />
  </div>
</template>
<script>
export default {
  name: 'Swagger',
  data () {
    return {
      src: process.env.BASE_API + '/swagger-ui.html',
      height: document.documentElement.clientHeight - 94.5 + 'px;'
    }
  },
  mounted: function () {
    const that = this
    window.onresize = function temp () {
      that.height = document.documentElement.clientHeight - 94.5 + 'px;'
    }
  }
}
</script>
