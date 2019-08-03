import toast from './jc-toast'

export default {
  install(Vue){
    let jcToast = Vue.extend(toast)
    let vm = new jcToast({
      el: document.createElement('div')
    })
    document.body.appendChild(vm.$el)
    let timeId
    let time2
    let showToast = function (text,time=2000){
      vm.text = text
      vm.isShow = true
      setTimeout(()=>{
        vm.scale = 1
        vm.opacity = 1
      },20)
      clearInterval(timeId)
      clearInterval(time2)
      timeId = setTimeout(()=>{
        vm.scale = 0.7
        vm.opacity = 0
        time2 = setTimeout(()=>{
          vm.scale = 1.2
          vm.isShow = false
        },300)
      },time)
    }
    Vue.prototype.$jcToast = showToast
  }
}
