//Destructuring Assignment 

var {color}={
	color:"red"
}
console.log(color);

function generateObj(){
	return{
		color:"blue",
		name:"John",
		state:"NewYork",
		position:"Forward"
	}
  }
var {name, state}=generateObj();
console.log(name);
console.log(state);

var [first,,,,fifth]=["red","yellow","green","blue","orange"];
console.log(first);
console.log(fifth);
