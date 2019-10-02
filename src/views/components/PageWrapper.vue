<template>
	<div class="page-wrapper">
		<v-head/>
		<div class="content">
			<transition name="page" mode="out-in">
				<router-view/>
			</transition>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'page-wrapper'
	}
</script>