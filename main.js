Vue.component('task',{
	template : '<li><slot></slot></li>',
	data(){

		return {
			message : 'foobar'
		}
	}
})

var app = new Vue({
	el: "#root",
})
 