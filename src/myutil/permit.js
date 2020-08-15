import stores from '@/stores'

/**
 * 字符权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkPermit (value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = stores.getters && stores.getters.permissions
    const permissionDatas = value

    const hasPermission = permissions.some(permission => {
      return permissionDatas.includes(permission)
    })

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like checkPermi="['system:user:add','system:user:edit']"`)
    return false
  }
}

/**
 * 角色权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkRole (value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = stores.getters && stores.getters.roles
    const permissionRoles = value

    const hasRole = roles.some(role => {
      return permissionRoles.includes(role)
    })

    if (!hasRole) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like checkRole="['admin','editor']"`)
    return false
  }
}
