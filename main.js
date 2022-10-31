Vue.component('tabs',{
	template : `
	<div> 
		<div class="tabs is-centered">
			<ul>
				<li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
					<a :href="tab.href" @click="selectTab(tab)"> {{tab.name}} </a> 
				</li>
			</ul>
		</div>

		<div class="details">
			<slot> </slot>
		</div>
	</div>
	`,
	data(){
		return {
			tabs : []
		}
	},
	created() {
		this.tabs =  this.$children;
	},
	methods : {
		selectTab(selectedTab) {
			this.tabs.forEach( tab => {
				tab.isActive = ( tab.name == selectedTab.name)
			} )
		}
	}
})

Vue.component('tab', {
	template : `
		<div v-show="isActive"> <slot> </slot> </div>
	`,
	props : {
		name : {
			required : true
		},
		selected : {
			default: false
		}
	},

	computed : {
		href() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-')
		}
	},
	data(){
		return {
			isActive : true
		}
	},
	mounted(){
		this.isActive = this.selected
	}
})

 .details
var app = new Vue({
	el: "#root",
	data : {
	 
	}
})
 