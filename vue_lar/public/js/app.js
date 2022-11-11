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
		if (field) {
			delete this.errors[field]
			return 
		} 

		 this.errors = {}
	}

	has(field) {
		return this.errors.hasOwnProperty(field)
	}
	any(){
		return Object.keys(this.errors).length > 0
	}
}

class Form {

	constructor(data)
	{
		this.OriginalData = data

		for (let field in data) {
			this[field] = data[field]
		}

		this.errors =  new Errors()
	}

	reset() {
		for (let field in this.OriginalData) {
			this[field] = ''
		}
		this.errors.clear()
	}

	data() {

		let data = {}

		for (let property in this.OriginalData) {
			data[property] = this[property]
		}
		// let data = Object.assign({}, this);
		// delete data.OriginalData
		// delete data.errors

		return data
	}

	submit(requestType, url) {
		return new Promise( (resolve, reject) => {
			axios[requestType](url, this.data() )
			.then( response => { 
				this.onSuccess(response.data)
				resolve(response.data)
			 } )
			 .catch(error => {
				 this.onFail(error.response.data.errors)

				 reject(error.response.data.errors)
			 })
			
		})

	}

	post(url) {
		return this.submit('post', url)
	}

	delete(url) {
		return this.submit('delete', url)
	}

	onSuccess(data) {
		///response => this.onSuccess(response)

		alert(data.message)

		// this.name=''
		// this.description=''
		 this.reset()
	}
	onFail(errors) {
		//this.errors.record( error.response.data.errors)
		this.errors.record(errors)
	}
}

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