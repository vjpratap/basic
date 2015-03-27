var Person = function(firstName,lastName){
	this.firstName = firstName;
	this.lastName = lastName;
};
Person.prototype = {
	toString:function(){
		return [this.lastName,this.firstName].join(', ');
	},
	truncatedName:function(){
		return this.toString().substr(0,10);
	},
	upperCaseName:function(){
		return toString().toUpperCase();
	}
}
var p = new Person('Aamir', 'Khan');
console.log('p.toString() = ', p.toString());
console.log('p.truncatedName() = ', p.truncatedName());
console.log('p.upperCaseName() = ',p.upperCaseName());
console.log("|||||p.proto||||||")
console.log('p.__proto__ = ', p.__proto__);
console.log('p.__proto__.toString() = ' ,p.__proto__.toString());
console.log('p.prototype = ', p.prototype);


p.firstName = 'Salman';
console.log('p.toString with p.firstName = Salman = ', p.toString());
this.firstName = 'Salman';
console.log('p.toString with this.firstName = Salman == ', p.toString());



var p = Object.create(Person.prototype);
console.log('p.__proto__ = ', p.__proto__);
console.log('p.prototype = ', p.prototype);