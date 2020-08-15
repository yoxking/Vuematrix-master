/**
 * 操作权限处理
 * Copyright (c) 2020 yoxking
 */

import stores from '@/stores'

export default {
  inserted (el, binding, vnode) {
    const { value } = binding
    const allpermit = '*:*:*'
    const permits = stores.state.suser.permits

    if (value && value instanceof Array && value.length > 0) {
      const permitFlag = value

      const hasPermits = permits.some(permission => {
        return allpermit === permission || permitFlag.includes(permission)
      })

      if (!hasPermits) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置操作权限标签值`)
    }
  }
}
