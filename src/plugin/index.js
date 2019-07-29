import jcConfirm from './jc-confirm'
import jcSlide from './jc-slide'
import jcMask from './jc-mask'
import jcPage from './jc-page'
import jcTab from './jc-tab'
import jcToast from './jc-toast'
export default {
  install(Vue){
    Vue.use(jcConfirm)
    Vue.use(jcSlide)
    Vue.use(jcMask)
    Vue.use(jcPage)
    Vue.use(jcTab)
    Vue.use(jcToast)
  }
}
