<template>
	<div class="sidebar">
		<div class="navbar-header">
			<router-link to="/" class="log">every day</router-link>
			<button type="button" class="iconfont icon-more-line btn menu-button" @click="test_status = !test_status"></button>
		</div>
		<div class="navbar-content">
			<ul class="nav">
				<template v-for="(menu_item, index) in menu_items">
					<template v-if="!menu_item.children.length">
						<li :key="index">
							<router-link :to="{path: menu_item.path}">
								<i class="iconfont" :class="menu_item.left_class"></i>
								<span>{{ menu_item.name }}</span>
							</router-link>
						</li>
					</template>
					<template v-else>
						<li :key="index" :class="{open: menu_items_status === index}">
							<a href="javascript:void(0);" @click="nav_open(index)">
								<i class="iconfont" :class="menu_item.left_class"></i>
								<span>{{ menu_item.name }}</span>
								<i class="iconfont icon-left-point" :class="{direction: menu_items_status === index}"></i>
							</a>
							<template v-if="menu_items_status === index">
								<ul class="nav-menu">
									<template v-for="(item, i) in menu_item.children">
										<li :key="i">
											<router-link :to="{path: item.path}">{{ item.name }}</router-link>
										</li>
									</template>
								</ul>
							</template>
						</li>
					</template>
				</template>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'sidebar',
		data: () => ({
			test_status: true,
			menu_items_status: false,
			menu_items: [
				{path: '/', name: 'Home', left_class: 'icon-home-page', children: []},
				{
					path: '',
					name: '待收货',
					left_class: 'icon-daishouhuo',
					children: [
						{path: '/', name: '测试列表1'},
						{path: '/', name: '测试列表2'},
						{path: '/', name: '测试列表3'},
						{path: '/', name: '测试列表4'},
						{path: '/', name: '测试列表5'},
						{path: '/', name: '测试列表6'},
					]
				},
				{
					path: '',
					name: '代付款',
					left_class: 'icon-daifukuan',
					children: [
						{path: '/', name: '测试列表1'},
						{path: '/', name: '测试列表2'},
						{path: '/', name: '测试列表3'},
						{path: '/', name: '测试列表4'},
						{path: '/', name: '测试列表5'},
						{path: '/', name: '测试列表6'},
					]
				},
				{path: '/about', name: 'About', left_class: 'icon-home-page', children: []},
			]
		}),
		methods: {
			nav_open(index) {
				this.menu_items_status = this.menu_items_status === index ? false : index
			}
		}
	}
</script>