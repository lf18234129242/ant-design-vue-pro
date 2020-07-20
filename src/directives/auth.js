import { check } from './../utils/auth';

/**
 * Vue.js 的插件应该暴露一个 install 方法
 * @param {Vue} 构造器
 * @param {options} 可选的选项对象
 */
function install(Vue, options = {}) {
  Vue.directive(options.name || 'auth', {
    inserted(el, binding) {
      if(!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  })
}

export default { install }