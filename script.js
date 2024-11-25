// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class (Person) constructor
    this.jobTitle = jobTitle;
  }

  // Method for job-specific greeting
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Example usage (this part could be used for testing)
const person = new Person('Alice', 25);
person.greet(); // Expected output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee('Bob', 30, 'Manager');
employee.jobGreet(); // Expected output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
