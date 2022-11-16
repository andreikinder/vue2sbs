import Errors from "./Errors";

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

export default Form;