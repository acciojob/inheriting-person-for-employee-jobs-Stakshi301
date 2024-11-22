let employee = new Employee('Bob', 30, 'Manager');
employee.jobGreet(); 

class Person {
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  

    greet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
  
    constructor(name, age, jobTitle) {
      super(name, age); // Call the parent class constructor
      this.jobTitle = jobTitle;
    }
  
   
    jobGreet() {
      console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
      );
    }
}

// Expose the classes to the global window object for Cypress testing
window.Person = Person;
window.Employee = Employee;