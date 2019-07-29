### 如何安装

下载 https://github.com/qi2599/joce-ui.git

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



### 注意事项

带 * 的参数为必须参数

组件自定义的类名样式请不要写在含有 scoped 属性的 style 标签中，否则可能造成样式不生效



### confirm

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



### jc-slide

上拉加载、下拉刷新

组件的 width 和 height 为 100%，使用上拉加载功能时，此组件的高度不能由插槽撑开，请使用指定高度的div包裹此组件

```
<jc-slide :on_refresh="refresh" :on_infinite="infinite" :text="'没有更多商品'" ref="myslide">
	<div>插槽内容</div>
</jc-slide>
```

| 参数                | 说明                                                         | 类型     | 默认值       |
| ------------------- | ------------------------------------------------------------ | -------- | ------------ |
| text                | 调用 done( true )  之后显示的文字                            | string   | 没有更多数据 |
| on_refresh( reset ) | 下拉刷新触发                                                 | function |              |
| reset               | 下拉刷新成功后需要调用 reset()                               | function |              |
| on_infinite( done ) | 上拉加载触发                                                 | function |              |
| done                | 调用 done()  后下次上拉加载回调才会执行，<br />调用 done( true ) 下次上拉加载回调不会执行，<br />并显示 text 文字，亦可通过 $refs 调用此方法 | function |              |
| distance            | 提前触发上拉加载的距离                                       | number   | 200          |
| getPosition         | 返回当前垂直滚动条的距离，通过 $refs 调用此方法              | function |              |
| scrollto(y,ms)      | ms 时间内滚动条滚动到 y，通过 $refs 调用此方法               | function | y=0          |



### jc-mask

带过度的遮罩弹出层

```
<jc-mask :opacity="0.6" :maskState="maskState" :flex="true" @close="maskState=false">
	<div>插槽内容</div>
</jc-mask>
```

| 参数        | 说明                                     | 类型    | 默认值 |
| ----------- | ---------------------------------------- | ------- | ------ |
| * maskState | 是否显示遮罩                             | boolean |        |
| opacity     | 遮罩不透明度                             | number  | 0.5    |
| flex        | 插槽内容水平垂直居中，并且带有出入场过度 | boolean | false  |
| close       | 点击遮罩的触发的事件                     | 事件    |        |



### jc-tab

tab 栏，tab-item 超过 （100/minWidth） 项出现滚动条

```
<jc-tab v-model="tabIndex">
    <jc-tab-item>全部订单</jc-tab-item>
    <jc-tab-item>提交订单</jc-tab-item>
    <jc-tab-item>已发货订单</jc-tab-item>
    <jc-tab-item>已完成订单</jc-tab-item>
    <jc-tab-item>待评价订单</jc-tab-item>
</jc-tab>
```

| 参数          | 说明                                 | 类型             | 默认值    |
| ------------- | ------------------------------------ | ---------------- | --------- |
| * v-model     | 当前选中的 tab-item 下标            | number           |          |
| bar           | 是否显示 bar 及位置 ‘top’ / 'bottom' | boolean / string | 'bottom'  |
| activeColor   | 当前选中的 tab-item 字体颜色及 bar 的颜色 | string           | '#ffcd13' |
| minWidth | tab-item 的最小宽度，最大值为100 | number | 25 |
| tabClass      | tab 栏的 class 类名                  | string           |           |
| itemClass     | tab-item 的 class 类名               | string           |           |
| activeClass   | 当前选中的 class 类名                | string           |           |
| **tab-item 参数** |                                      |                  |           |
| itemClick     | 点击 tab-item 触发               | 事件             |           |



### jc-page

虚拟的多个页面横向排列

此组件使用三个页面模拟多个页面，左右两边的页面为 loading 页面，内容则在中间页面

提供插槽： left 、默认插槽 、right

需要在默认插槽上左右滑动才会切换页面，所以默认插槽的高度不宜过低

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
				<jc-tab-item >参数 API</jc-tab-item>
				<jc-tab-item >代码</jc-tab-item>
			</jc-tab>
		</div>
		<div>
			<jc-page 
                     :pageLength="3" 
                     @nextPage="nextPage" 
                     @previousPage="previousPage" 
                     v-model="tabIndex">
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



| 参数               | 说明                           | 类型     | 默认值 |
| ------------------ | ------------------------------ | -------- | ------ |
| * v-model          | 当前页面的下标                 | number   |        |
| * pageLength       | 页面的数量                     | number   |        |
| loop               | 是否开启循环                   | boolean  | false  |
| loading            | 是否显示 loading 图标          | boolean  | true   |
| nextPage(done)     | 显示右页面时触发               | 事件     |        |
| previousPage(done) | 显示左页面时触发               | 事件     |        |
| done               | 调用 done() 可以跳转到中间页面 | function |        |



