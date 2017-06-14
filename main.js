console.log('Hello World');
var multiply= function(a,b){
	return a*b;
}
console.log(multiply(2,5));

var mul=(a,b)=>a*b
console.log(mul(2,4));

Arrow functions
var deliveryBoy={
	name:"John",
	handleMessage:function(message, handler){
		handler(message);
	},
	receive:function(){
		this.handleMessage("Hello, ", message=>console.log(message+this.name))
	}
  }
  deliveryBoy.receive();

