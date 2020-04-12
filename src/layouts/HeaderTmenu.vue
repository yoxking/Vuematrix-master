<template>
  <span>
    <a-button-group>
      <a-button size="large" v-for='item in tmenulist' :key="item.no" @click="buttonHandle(item.no,item.path)">{{item.name}}</a-button>
    </a-button-group>
  </span>
</template>

<script>
import store from '../stores'

export default {
  name: 'HeaderTmenu',
  data () {
    return {
    }
  },
  computed: {
    tmenulist () {
      return this.$store.state.menus.tMenuList
    }
  },
  methods: {
    buttonHandle (id, url) {
      store.dispatch('menus/TopMenuIndexNo', id)
      store.dispatch('menus/TopMenuChanged', true)
      console.log(url)

      this.$router.push({path: url})
    }
  }
}
</script>

<style scoped>
</style>
