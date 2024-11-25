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

        // Create Person and Employee instances
        const person = new Person('Alice', 25);
        const employee = new Employee('Bob', 30, 'Manager');

        // Ensure the greet and jobGreet methods are being called correctly
        person.greet(); // Expected output: "Hello, my name is Alice, I am 25 years old."
        employee.jobGreet(); 