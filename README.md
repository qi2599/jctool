### 简介

一套实用、精致的个人组件库，组件以封装功能为主，以使用简单、灵活为设计理念。

组件演示连接 https://gakei-1306431061.cos-website.ap-guangzhou.myqcloud.com

<br>

### 如何安装

下载 https://github.com/qi2599/jctool.git

复制 src\plugin 文件夹到你项目 src 下面

在 main.js 中引入

全部引入 

```
import plugin from './plugin'
Vue.use(plugin)
```

按需引入

```
import confirm from './plugin/confirm'
Vue.use(confirm)
```

Vue.use 之后会根据组件的使用，注册全局组件或往 Vue 的原型上添加方法

<br>

### 注意事项

带 * 的属性为必须属性

组件自定义的类名样式请不要写在含有 scoped 属性的 style 标签中，否则可能造成样式不生效

<br>

### jc-banner

图片轮播

```vue
<!-- template -->
<jc-banner :imgs="imgs" :radius="6"></jc-banner>

// imgs 数据结构
imgs = ['./image/banner/1.jpg','./image/banner/2.jpg']
```

| 属性             | 说明                                        | 类型    | 默认值    |
| ---------------- | ------------------------------------------- | ------- | --------- |
| *imgs            | 图片路径                                    | array   |           |
| radius           | 图片圆角                                    | number  | 0         |
| auto             | 自动播放间隔时间，0为禁用自动播放，单位：秒 | number  | 3         |
| duration         | 过度时间，单位：毫秒                        | number  | 500       |
| dots             | 是否显示提示点                              | boolean | true      |
| activeColor      | 当前提示点颜色                              | string  | '#3dd3ff' |
| clickItem(index) | 点击图片触发，index点击的图片下标           | 事件    |           |

<br>

### jc-notice

公告栏

```
<jc-notice>
	实用、精致的移动端 VUE 组件库
</jc-notice>
```

| 属性  | 说明         | 类型    | 默认值 |
| ----- | ------------ | ------- | ------ |
| speed | 文字滚动速度 | number  | 8      |
| icon  | 是否显示图标 | boolean | true   |

<br>

### jc-confirm

ios风格 “确定、取消” 对话框

```javascript
this.$jcConfirm.show ({
	text: '确定要这样做吗？'，
	onConfirm: () => {
		console.log('确定的回调')
	},
	onCancel: () => {
		console.log('取消的回调')
	}
})
```

| 参数        | 说明             | 类型     | 默认值 |
| ----------- | ---------------- | -------- | ------ |
| text        | 提示文字         | string   | ''     |
| confirmText | Confirm 按钮文字 | string   | 确定   |
| cancelText  | cancel 按钮文字  | string   | 取消   |
| onConfirm   | Confirm 的回调   | function |        |
| onCancel    | Cancel 的回调    | function |        |

<br>

### jc-slide

上拉加载、下拉刷新

使用上拉加载功能时，此组件的高度不能由插槽撑开，请使用指定高度的div包裹此组件。

```html
<jc-slide 
        :on_refresh="refresh" 
        :on_infinite="infinite" 
        :text="'没有更多商品'" 
        ref="myslide">
	<div>插槽内容</div>
</jc-slide>
```

| 属性                | 说明                                                         | 类型     | 默认值       |
| ------------------- | ------------------------------------------------------------ | -------- | ------------ |
| on_refresh( reset ) | 下拉刷新触发                                                 | function |              |
| reset               | 下拉刷新成功后需要调用 reset()                               | function |              |
| on_infinite( done ) | 上拉加载触发                                                 | function |              |
| done                | 调用 done()  后下次上拉加载回调才会执行，<br>调用 done( true ) 下次上拉加载回调不会执行，<br>并显示 text 文字，亦可通过 $refs 调用此方法 | function |              |
| text                | 调用 done( true )  之后显示的文字                            | string   | 没有更多数据 |
| distance            | 提前触发上拉加载的距离                                       | number   | 0            |
| getPosition         | 返回当前垂直滚动条的距离，通过 $refs 调用此方法              | function |              |
| scrollto(y,ms)      | ms 时间内滚动条滚动到 y，通过 $refs 调用此方法               | function | y=0          |

<br>

### jc-popup

弹出层

```html
<jc-popup :show="popupState" @onOverlay="popupState = false">
    <div>这里是插槽内容</div>
</jc-popup>
```

| 属性      | 说明                                               | 类型    | 默认值   |
| --------- | -------------------------------------------------- | ------- | -------- |
| * show    | 是否显示此组件                                     | boolean |          |
| opacity   | 遮罩不透明度                                       | number  | 0.5      |
| position  | 插槽内容位置，可选值：left/right/top/bottom/middle | string  | 'middle' |
| onOverlay | 点击遮罩触发                                       | 事件    |          |

<br>

### jc-tab

 tab 栏组件还是比较常见的，这里的 tab 栏主要是结合 jc-page 组件使用。

```vue
<jc-tab v-model="tabIndex">
    <jc-tab-item>全部订单</jc-tab-item>
    <jc-tab-item>提交订单</jc-tab-item>
    <jc-tab-item>已发货订单</jc-tab-item>
    <jc-tab-item>已完成订单</jc-tab-item>
    <jc-tab-item>待评价订单</jc-tab-item>
</jc-tab>
```

| 属性          | 说明                                 | 类型             | 默认值    |
| ------------- | ------------------------------------ | ---------------- | --------- |
| * v-model     | 当前选中的 tab-item 下标            | number           |          |
| bar           | 是否显示 bar 及位置 ‘top’ / 'bottom' | boolean / string | 'bottom'  |
| activeColor   | 当前选中的 tab-item 字体颜色及 bar 的颜色 | string           | '#ffcd13' |
| minWidth | tab-item 的最小宽度，最大值为100 | number | 25 |
| tabClass      | tab 栏的 class 类名                  | string           |           |
| itemClass     | tab-item 的 class 类名               | string           |           |
| activeClass   | 当前选中的 class 类名                | string           |           |
| **tab-item** |                                      |                  |           |
| itemClick     | 点击 tab-item 触发               | 事件             |           |

<br>

### jc-page

虚拟的多个页面横向排列

此组件使用三个页面模拟多个页面，左右两边的页面为 loading 页面，内容则在中间页面

提供插槽： left 、默认插槽 、right

需要在默认插槽上左右滑动才会切换页面，所以默认插槽的高度不宜过低

如何使用：

```vue
<jc-page 
		v-model="tabIndex"
        :pageLength="4" 
        @nextPage="nextPage" 
        @previousPage="previousPage">
    <div slot="left" class="page-left"></div>
    <div class="content">
    	<div>当前页面是{{pageIndex}}</div>
    </div>
    <div slot="right" class="page-right"></div>
</jc-page>
```

组合使用：

```vue
<template>
	<div>
		<div>
			<jc-tab 
                    v-model="tabIndex" 
                    :active-color="'#f7b838'" 
                    :tabClass="'my-tab'" 
                    :activeClass="'my-active'">
				<jc-tab-item >使用说明</jc-tab-item>
				<jc-tab-item >如何使用</jc-tab-item>
				<jc-tab-item >组合使用</jc-tab-item>
				<jc-tab-item >API</jc-tab-item>
			</jc-tab>
		</div>
		<div>
			<jc-page 
                     v-model="tabIndex"
                     :pageLength="4" 
                     @nextPage="nextPage" 
                     @previousPage="previousPage" >
				<div slot="left" class="page-left"></div>
				<div class="content">
					<div>当前页面是{{pageIndex}}</div>
				</div>
				<div slot="right" class="page-right"></div>
			</jc-page>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			tabIndex:0,
			pageIndex:0,
		}
	},
	methods:{
		nextPage(done){
			setTimeout(()=>{
				done()
				this.pageIndex = this.tabIndex
			},500)
		},
		previousPage(done){
			setTimeout(()=>{
				done()
				this.pageIndex = this.tabIndex
			},500)
		}
	}
}
</script>

<style scoped>
.my-tab{
	line-height: 45px;
	background-color: #00294c;
	color: #68e1ff;
}
.my-active{
	background-color: #00385f;
}
.content, .page-left, .page-right{
    height: 78vh;
    margin: 10px;
    padding: 10px;
    background-color: white;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>

```

<br>

| 参数               | 说明                           | 类型     | 默认值 |
| ------------------ | ------------------------------ | -------- | ------ |
| * v-model          | 当前页面的下标                 | number   |        |
| * pageLength       | 页面的数量                     | number   |        |
| loop               | 是否开启循环                   | boolean  | false  |
| loading            | 是否显示 loading 图标          | boolean  | true   |
| nextPage(done)     | 显示右页面时触发               | 事件     |        |
| previousPage(done) | 显示左页面时触发               | 事件     |        |
| done               | 调用 done() 可以跳转到中间页面 | function |        |

<br>

### jc-toast

组件库中需要使用 toast ， 顺便做了一个，和其他组件库的 toast 没多大区别

如何使用

```javascript
this.$jcToast({
    text:'这里是提示文字',
    icon:'success',
    time: 1000
})
```

| 属性 | 说明                                       | 类型   | 默认值 |
| ---- | ------------------------------------------ | ------ | ------ |
| text | 提示文字                                   | string |        |
| icon | 图标，可选值：'success'，'fail'，'warning' | string |        |
| time | 显示时长                                   | number | 2000   |

<br>

### 图片懒加载

此功能函数特色：

1. 由于图片懒加载需要监听滚动条事件，而滚动条事件触发非常频繁，因此函数内部做了众多优化；
2. 无论滚动条是 html 的、 body 的，或者某个容器的，都能通过此函数实现懒加载功能；
3. 使用简单：只需调用 $lazyloadFn(<传入滚动条元素节点>) 即可实现。

<br>

### 使用方法

1. 在 index.html 的 script 标签中添加下面的代码，把 $lazyloadFn 添加为 window 的方法；
2. img 标签的 data-src 属性添加真实图片地址，src 属性添加 loading 图片地址；
3. 图片地址请求回来并且添加到 img 的 data-src 之后调用 $lazyloadFn(<传入滚动条元素节点>);
4. 滚动条是 html 或者 body 时，<传入滚动条元素节点> 为 window，如果图片在某个容器里滚动的，则传入这个容器节点；
5. 注意如果传入滚动条元素节点不是 window 则滚动条元素须开启定位，且滚动条元素到 img 标签之间的元素不能开启定位和 transform。

<br>

### 函数内部的优化

1. 滚动条往回滚时退出滚动条监听事件函数；
2. 滚动条往前滚且停止滚动时才执行遍历图片是否可见；
3. 当遍历到图片不可见时，那么它之后的图片都是不可见的，退出遍历；
4. 已经替换为真实图片地址的不会再遍历；
5. 当所有图片地址都替换为真实图片地址时，删除滚动条监听；
6. 获取不到 data-src 属性的 img 标签，删除滚动条监听。

<br>

```javascript
window.$lazyloadFn = function (el) {
  if(el === undefined) return
  let index=0, oldScroll=0, timeId, imgs
  let scrolly = el.scrollTop || el.pageYOffset || 0
  el.addEventListener('scroll',lazyload)
  forFn()
  function lazyload(){
    scrolly = el.scrollTop || el.pageYOffset || 0
    if(scrolly < oldScroll && scrolly > 5) return
    if(scrolly - oldScroll > 300) forFn()
    clearInterval(timeId)
    timeId = setTimeout(forFn,200)
  }
  function forFn() {
    imgs = document.querySelectorAll('[data-src]')
    if(imgs.length === 0){
      el.removeEventListener('scroll',lazyload)
      return
    }
    if(scrolly > oldScroll) oldScroll = scrolly
    if(index === imgs.length) el.removeEventListener('scroll',lazyload)
    if(el === window){
      for (let i=index,length=imgs.length; i<length; i++){
        if(imgs[i].getBoundingClientRect().top-window.innerHeight<0){
          imgs[i].src = imgs[i].getAttribute("data-src")
          index++
        }else break
      }
    } else {
      for (let i=index,length=imgs.length; i<length; i++){
        if(imgs[i].offsetTop <= el.clientHeight + el.scrollTop){
          imgs[i].src = imgs[i].getAttribute("data-src")
          index++
        }else break
      }
    }
  }
}
```

