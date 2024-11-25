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

        // Define the Employee class that inherits from Person
        class Employee extends Person {
            constructor(name, age, jobTitle) {
                super(name, age); // Call the parent class constructor
                this.jobTitle = jobTitle;
            }

            /**
             * Prints a job greeting message to the console.
             */
            jobGreet() {
                console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
            }
        }

        // To expose the classes globally (for testing purposes)
        window.Person = Person;
        window.Employee = Employee;

        // Create instances and call methods for testing
        const person = new Person('Alice', 25);
        person.greet(); // Expected output: "Hello, my name is Alice, I am 25 years old."

        const employee = new Employee('Bob', 30, 'Manager');
        employee.jobGreet(); // Expected output: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."
        employee.greet();