Vue.component('coupon',{
	template : `<input placeholder="Enter your coupon" @blur="onCouponApplied">`,
	methods : {
		onCouponApplied() {
			this.$emit('applied')
		}
	}
})

 

 
var app = new Vue({
	el: "#root",
	data : {
		couponApplied : false
	},
	methods : {
		onCouponApplied() {
			this.couponApplied = true
		}
	}
})
 