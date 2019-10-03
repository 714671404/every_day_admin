<template>
	<div class="page-wrapper" :class="{open: !sidebar_statue}">
		<v-head/>
		<div class="content">
			<transition name="page" mode="out-in">
				<router-view/>
			</transition>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		name: 'page-wrapper',
		computed: {
			...mapState({
				sidebar_statue: state => state.sidebar.sidebar_status
			})
		}
	}
</script>