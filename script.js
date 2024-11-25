 // Define the Person class
class Person {
  /**
   * Constructs a new Person instance.
   * @param {string} name - The person's name.
   * @param {number} age - The person's age.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * Prints a greeting message to the console.
   */
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class which extends Person
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
