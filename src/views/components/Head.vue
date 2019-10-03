<template>
	<div class="header">
		<div class="header-content">
			<div class="left-content">{{ title }}</div>
			<div class="right-content">
				<div class="header-message">
					<button type="button" class="iconfont icon-xiaoxi btn">
						<span>{{ message.number }}</span>
					</button>
					<!--
						消息列表没有想好
						<ul class="nav" v-show="status.message"></ul>
					-->
				</div>
				<div class="header-user">
					<button type="button"
							class="iconfont icon-yonghu btn"
							:class="{open: status.user}"
							@click="status.user = !status.user"
					></button>
					<transition name="bounce">
						<ul class="nav" v-show="status.user">
							<li class="title">admin</li>
							<li><router-link to="/">个人信息</router-link></li>
							<li><router-link to="/">设置</router-link></li>
							<li><router-link to="/">退出登录</router-link></li>
						</ul>
					</transition>
				</div>
			</div>
			<div style="clear: both"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'v-head',
		data: () => ({
			status: {
				message: false,
				user: false
			},
			message: {
				number: 99
			}
		}),
		computed: {
			title () {
				return this.$route.meta.title
			}
		},
		methods: {
			test() {
				console.log(this.$route)
			}
		}
	}
</script>