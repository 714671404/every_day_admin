import Vue from 'vue'
import Sidebar from './Sidebar'
import PageWrapper from './PageWrapper'
import vHead from './Head'
[
	Sidebar,
	PageWrapper,
	vHead
].forEach(component => {
	Vue.component(component.name, component)
})