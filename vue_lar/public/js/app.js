class Errors {
	constructor(){
		this.errors = {}
	}

	get(field) {

		if( this.errors[field]) {
			return this.errors[field][0]
		}

	}
	record(errors){
		this.errors = errors
	}

	clear(field) {
		delete this.errors[field]
	}

	has(field) {
		return this.errors.hasOwnProperty(field)
	}
	any(){
		return Object.keys(this.errors).length > 0
	}
}

new Vue({
	el: '#root',
	data : {
		name : '',
		description : '',
		errors : new Errors()
	},

	methods : {
		onSubmit() {
			axios.post('/projects', this.$data )
			.then(response => this.onSuccess(response))
			.catch(error =>  	this.errors.record( error.response.data.errors))
		},
		onSuccess(response)
		{
			alert('success')
			this.name=''
			this.description=''
			// form.reset
		}
	}
	// }
})