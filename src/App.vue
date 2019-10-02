<template>
	<div id="app">
		<transition name="page" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>
<script>
	export default {
		name: 'app'
	}
</script>