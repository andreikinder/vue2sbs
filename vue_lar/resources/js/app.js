
import  Vue from "vue";
// import axios from "axios"
 import Notification from './components/Notification'


// window.axios = axios


// new Vue({
// 	el: '#root',
// 	components : {Notification}

// })

let source = {
	user : {
		name : 'John Doe'
	}
}

new Vue({
	el: '#one',
	data:  {
		foo : 'bar',
		shared: source
	} 
})


new Vue({
	el: '#two',
	data: {
		foo : 'oneanoter bar',
		shared :	source
	}
})

// alert('fdsfds')