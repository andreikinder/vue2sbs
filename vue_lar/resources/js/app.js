
import Vue from "vue";
import axios from "axios"
import Form from "./core/Form"


window.axios = axios
window.Form = Form

new Vue({
	el: '#root',
	data : {
		form : new Form({
			name : '',
			description : ''
		}),
		 
	},

	methods : {
		onSubmit() {
			this.form.post('/projects')
			.then(data => console.log(data))
			.catch(errors => console.log(errors))
		},
	}
})

// alert('fdsfds')