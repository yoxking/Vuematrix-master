/**
 * 角色权限处理
 * Copyright (c) 2020 yoxking
 */

import stores from '@/stores'

export default {
  inserted (el, binding, vnode) {
    const { value } = binding
    const superadmin = 'admin'
    const roles = stores.state.suser.roles

    if (value && value instanceof Array && value.length > 0) {
      const roleFlag = value

      const hasRole = roles.some(role => {
        return superadmin === role || roleFlag.includes(role)
      })

      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置角色权限标签值"`)
    }
  }
}
