import confirm from './confirm'
export default {
  install(Vue){
    let Confirm = Vue.extend(confirm)
    let myConfirm = new Confirm({
      el: document.createElement('div')
    })
    document.body.appendChild(myConfirm.$el)
    let confirmMethods = {
      show(options){
        myConfirm.isShow = true
        // 渲染 dom 后改变过度属性
        setTimeout(()=>{
          myConfirm.toggleShow = true
        },20)
        
        // 设置显示文字
        myConfirm.text = options.text ? options.text : ''
        myConfirm.confirmText = options.confirmText ? options.confirmText : '确定'
        myConfirm.cancelText = options.cancelText ? options.cancelText : '取消'
        
        // 清除 myConfirm 的 on-cancel 事件
        myConfirm.$off('on-cancel')
        myConfirm.$off('on-confirm')
        // myConfirm 内可以使用 this.$emit('on-confirm') 调用 options.onConfirm()
        myConfirm.$on('on-cancel', () => {
          options && options.onCancel && options.onCancel()
        })
        myConfirm.$on('on-confirm', () => {
          options && options.onConfirm && options.onConfirm()
        })
      }
    }
    if(!Vue.prototype.$jcConfirm) Vue.prototype.$jcConfirm = confirmMethods
  }
}
