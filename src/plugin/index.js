import jcConfirm from './jc-confirm'
import jcSlide from './jc-slide'
import jcDialog from './jc-dialog'
import jcPage from './jc-page'
import jcTab from './jc-tab'
import jcToast from './jc-toast'
import jcNotice from './jc-notice'
import jcBanner from './jc-banner'
export default {
  install(Vue){
    Vue.use(jcConfirm)
    Vue.use(jcSlide)
    Vue.use(jcDialog)
    Vue.use(jcPage)
    Vue.use(jcTab)
    Vue.use(jcToast)
    Vue.use(jcNotice)
    Vue.use(jcBanner)
  }
}
