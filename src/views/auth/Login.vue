<template>
	<div class="auth">
		<div class="auth-content">
			<div class="title">every day</div>
			<div class="form">
				<form @submit.prevent="login">
					<div class="control-layout">
						<input type="test" v-model="form.username" placeholder="请输账号">
						<span class="error"
							  v-show="true"
						>账号不存在</span>
					</div>
					<div class="control-layout">
						<input type="password" v-model="form.password" placeholder="请输密码">
						<span class="error"
							  v-show="true"
						>密码不正确</span>
					</div>
					<div class="control-layout">
						<button type="submit" class="btn btn-blue">登录</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'login',
		data: () => ({
			form: {
				username: '',
				password: ''
			},
			whitelist: {
				phone: /^1\d{10}$/, // 验证手机号码简单正则
				user: []
			},
			passwordLength: 6,
			passwordLevel: [
				'密码长度不能小于6',
				'低等安全',
				'中等安全',
				'高等安全'
			]
		}),
		computed: {
			AnalyzePasswordSecurityLevel() { // 分析密码安全
				let password = this.form.password;
				let securityLevelFlag = 0; // 密码安全等级
				if (password.length < this.passwordLength) { // 密码长度小于规定长度直接返回0
					return 0;
				}
				else {
					let securityLevelFlagArray = new Array(0, 0, 0, 0);
					for (let i = 0; i < password.length; i++) {
						let asciiNumber = password.substr(i, 1).charCodeAt();
						if (asciiNumber >= 48 && asciiNumber <= 57) {
							securityLevelFlagArray[0] = 1;  //digital
						}
						else if (asciiNumber >= 97 && asciiNumber <= 122) {
							securityLevelFlagArray[1] = 1;  //lowercase
						}
						else if (asciiNumber >= 65 && asciiNumber <= 90) {
							securityLevelFlagArray[2] = 1;  //uppercase
						}
						else {
							securityLevelFlagArray[3] = 1;  //specialcase
						}
					}

					for (let i = 0; i < securityLevelFlagArray.length; i++) {
						if (securityLevelFlagArray[i] == 1) {
							securityLevelFlag++;
						}
					}
					return securityLevelFlag;
				}
			}
		},
		methods: {
			login() {

			},
			// verification(values) {
				// 验证字符串
				// if (values) {
				//
				// }
			// }
		}
	}
</script>