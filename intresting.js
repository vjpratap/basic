//var s = new student('jayanth',34,['guitar','football']);
//s.isintrestin('football') = true;
var Student = function(name,age,intrestarray){
	this.name = name;
	this.age = age;
	this.intrestarray = intrestarray;
}
//var s = new Student('jayanth',34,['guitar','football']);
//console.log(s.intrestarray);  
Student.prototype = {
 	isintrestin:function(check){
 		var intrest_checker = false;
 		this.intrestarray.forEach(function(data){
 			if(check == data)
 				intrest_checker = true;
 		});
 		return intrest_checker;
 	}
}
var s = new Student('jayanth',34,['guitar','football']);
var v = new Student('vijay',21,['watching_movies','sleeping']);
console.log(s.isintrestin('guitar'));
console.log(s.isintrestin('football'));
console.log(s.isintrestin('gymnastic'));
console.log(v.isintrestin('sleeping'));
console.log(v.isintrestin('watching_movies'));
console.log(v.isintrestin('reading'));
v.x = 'pratap';
console.log(v.isintrestin());




