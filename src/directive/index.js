import hasRole from './hasRole'
import hasPermit from './hasPermit'

const install = function (Vue) {
  Vue.directive('hasRole', hasRole)
  Vue.directive('hasPermit', hasPermit)
}

if (window.Vue) {
  window['hasRole'] = hasRole
  window['hasPermit'] = hasPermit
  Vue.use(install); // eslint-disable-line
}

export default install
