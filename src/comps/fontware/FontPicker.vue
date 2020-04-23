<template>
  <div>
    <a-popover placement="bottom"
               v-model="fontVisible">
      <template v-slot:content>
        <a-input-search placeholder="搜索图标"
                        @search="fontSearch"
                        v-model="fontSearchValue" />
        <div :style="{ width: '260px', height: '250px', overflow: 'auto' }">
          <div class="font-container">
            <div v-for="item in showJson"
                 :key="item"
                 @click="fontClick(item)"
                 class="my-font">
              <font-awesome-icon :icon="item" />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:title>
        <span>图标</span>
      </template>
      <a-input :read-only="true"
               :value="value"
               @mouseover="mouseOver"
               :placeholder="placeholder">
        <template v-slot:addonAfter>
          <a href="#">
            <div v-if="value">
              <font-awesome-icon :icon="value" />
            </div>
            <div v-else>
              <a-icon type="font-colors" />
            </div>
          </a>
        </template>
      </a-input>
    </a-popover>
  </div>
</template>

<script>
import fontJson from './FontJson.json'
import Popover from 'ant-design-vue/lib/popover'
import Input from 'ant-design-vue/lib/input'
import InputSearch from 'ant-design-vue/lib/input/Search'
import Icon from 'ant-design-vue/lib/icon'
import 'ant-design-vue/dist/antd.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
export default {
  name: 'fontawesomePicker',
  data () {
    return {
      showJson: null,
      fontVisible: false,
      fontSearchValue: null
    }
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    'a-popover': Popover,
    'a-input': Input,
    'a-input-search': InputSearch,
    'a-icon': Icon
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String
    }
  },
  methods: {
    mouseOver () {
      this.fontSearchValue = null
      this.showJson = fontJson
      console.log(this.showJson)
    },
    fontSearch (value) {
      if (value) {
        this.showJson = fontJson.filter(item => {
          return item.startsWith(value)
        })
      } else {
        this.showJson = fontJson
      }
    },
    fontClick (item) {
      this.$emit('change', item)
      this.fontVisible = false
    }
  }
}
</script>

<style scoped>
.font-container {
  font-size: 18px;
  width: 235px;
  height: 235px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
}
.my-font {
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  padding-top: 5px;
  text-align: center;
  border-radius: 6px;
  width: 45px;
  height: 40px;
  border: 1px solid #ccc;
}
.my-font:hover {
  background-color: rgba(206, 206, 206, 0.5);
}
</style>
