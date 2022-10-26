Vue.component('task-list',{
	template : `
					<div>
						<task v-for="task in tasks"> {{task.task}} </task>
					</div>`,
	data(){
		return  {
			tasks : [
				{task: 'Go to the work', complete : true},
				{task: 'Go to the home', complete : false},
				{task: 'Go to the coffee', complete : true},
				{task: 'Go to the farm', complete : false}
				]
			}
		
	}
})

Vue.component('task',{
	template : '<li><slot></slot></li>',
})


 
var app = new Vue({
	el: "#root",
})
 