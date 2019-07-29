import jcTab from './jc-tab'
import jcTabItem from './jc-tab-item'
export default {
  install(Vue){
    Vue.component('jc-tab',jcTab)
    Vue.component('jc-tab-item',jcTabItem)
  }
}
