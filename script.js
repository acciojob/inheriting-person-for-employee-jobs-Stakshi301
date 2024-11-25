 class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
            }
        }

        // Define the Employee class that inherits from Person
        class Employee extends Person {
            constructor(name, age, jobTitle) {
                super(name, age);
                this.jobTitle = jobTitle;
            }

            jobGreet() {
                console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
            }
        }

        // Expose the classes for testing purposes
        window.Person = Person;
        window.Employee = Employee;

        // Create instances of Person and Employee
        const person = new Person('Alice', 25);
        const employee = new Employee('Bob', 30, 'Manager');

        // Call the greet method for Person (this should print for Cypress)
        setTimeout(() => {
            person.greet();  // Expected output: "Hello, my name is Alice, I am 25 years old."
        }, 1000);

        // Call the jobGreet method for Employee (this should print for Cypress)
        setTimeout(() => {
            employee.jobGreet();  // Expected output: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."
        }, 3000);