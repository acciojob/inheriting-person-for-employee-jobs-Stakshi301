	class Person{
		constructor(name,age){
			this.name=name;
			this.age=age;
		}
		greet(Alice, 25){
			console.log(`Hello my name is ${this.name}, I am ${this.age} years old`);
		}
	}

class Employee extends Person{
	constructor(name,age,jobTitle){
		this.name=name;
		this.age=age;
		this.jobTitle=jobTitle;
	}
	jobGreet(Bob , 30 , Manager){
		console.log(`Hello, my name is ${this.name}, I sm ${this.age} years old, and my job title is ${jobTitle}`);
	}
}

window.Person=Person;
window.Employww=Employee;