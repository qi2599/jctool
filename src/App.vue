<template>
	<div>
		<router-view/>
	</div>
</template>

<script>
	export default {
		watch:{
			$route(to){
				if(to.path !== '/home'){
					gtag('config', 'UA-145668721-1', { 'page_title': to.name, 'page_path': to.path });
				}
			}
		}
	}
</script>

<style lang="less">

</style>
