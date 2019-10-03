export default {
	state: {
		sidebar_status: true
	},
	mutations: {
		sidebar_update_status(state) {
			state.sidebar_status = !state.sidebar_status
		}
	}
}