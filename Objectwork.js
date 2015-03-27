// var x = {name:'foo'};
// var y = Object.create(x);
// y.name = {first:'Sachin',last:'Tendulkar'};
// var p = Object.create(y);
// console.log(p.__proto__.__proto__.__proto__.name);
// console.log(p.propertyIsEnumerable("name"));


// var x = {name:'foo'};
// var p = Object.create(x);
// p.name = 'Sachin';
// console.log(p.propertyIsEnumerable("name"));
// var a = new Array(5)
// console.log(a[4]);
// var x = {get r(){return this.i+5},set r(i){this.i=i}};
// x.r = 5;
// console.log(x.r);
// console.log(Object.getOwnPropertyDescription(x,r));


// var x = {};
// Object.defineProperty(x,"name",{value:{first:'Sachin',last:'Tendulkar'},
// enumerable:true,configurable:false,writable:false})
// console.log(x.name);
// console.log(x.first);
// x.name = {first:'Rahul',last:'Dravid'};
// console.log(x.name);
// delete x.name
// console.log(x.name);
// x.name.first = 'Arjun';
// console.log(x.name);

// var plusFive = function(i){
// 	return function(){
// 		return i+5;
// 	}
// };
// var numbers = [10,-1,2,5];
// var plusFiveFunction = numbers.map(function(x){
// 	return plusFive(x)
// });
// console.log(plusFiveFunction);
// a = plusFiveFunction.map(function(x){return x()});
// console.log(a)

// var cycle = function(mod){
// 	var init = 0;
// 	return {
// 		next:function(){return init++%mod;}
// 	}
// };
// var cycleTwo = function(){return cycle(2);}
// var cyclethree = function(){return cycle(3);}

// var a = cycleTwo();
// var b = cyclethree();
// console.log(a.next());
// console.log(a.next());
// console.log(b.next());
// console.log(b.next());


// var isEven = function(){return this.valueOf()%2==0};
// console.log(isEven.bind((47))());

console.log(eval(["console.log(","\"goodbye\"", ")"].join("")));



