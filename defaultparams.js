default parameters
function greet(greeting, name="Dave"){
	console.log(greeting+","+name);
}
greet();
greet("Hello");
greet(undefined, "john");

let receive=(complete=()=>console.log("complete"))=>complete()
receive();
