/**
 * 获取并返回当前权限
 */
export function getCurrentAuthority() {
  return ['admin']
}

/**
 * 检测当前权限
 * @param { Array } authority 
 */
export function check(authority) {
  const current = getCurrentAuthority()
  return current.some(item => authority.includes(item))
}

/**
 * 检测登录状态
 */
export function isLogin() {
  const current = getCurrentAuthority()
  return current && current[0] !== 'guest'
}