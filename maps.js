//Maps and Weak Maps

var myMap = new Map();
myMap.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.get('foo'));
console.log(myMap.get('querty'));

console.log(myMap.size);
console.log(myMap.has('querty'));

for(var key of myMap.keys()){
	console.log(key);
}
for(var value of myMap.values()){
	console.log(value);
}
for(var [key, value] of myMap.entries()){
	console.log(key + '=' + value);
}


var myMap = new WeakMap();
var myObj={};
var myFunc=function(){};
myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);  // Weak Map cannot have the string as the key
// Weak Map will not consider the iterators and API's  such as keys, entries and values, set, get....



