// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

//#region

// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
//     getPersonInfo() {
//         console.log(`Name:${this.name}`);
//         console.log(`Age:${this.age}`);
//         console.log(`Country:${this.country}`);
//     }
// }

// let person1 = new Person("Jane", 25, "Germany");
// let person2 = new Person("Jack", 28, "Italy");
// person1.getPersonInfo();
// console.log("------------------------------------------------")
// person2.getPersonInfo();

//#endregion



// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

//#region

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     calcArea() {
//         console.log("Area:" + this.width * this.height);
//     }
//     calcPerimeter() {
//         console.log("Perimeter:" + (this.width + this.height) * 2);
//     }
// }

// let rectangle1 = new Rectangle(8, 10);
// rectangle1.calcArea();
// rectangle1.calcPerimeter();

//#endregion



// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

//#region

// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     getVehicleInfo() {
//         console.log(`Make: ${this.make}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Year: ${this.year}`);
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, numberOfDoors) {
//         super(make, model, year);
//         this.numberOfDoors = numberOfDoors;
//     }
//     getVehicleInfo() {
//         super.getVehicleInfo();
//         console.log(`NumberOfDoors: ${this.numberOfDoors}`);
//     }
// }
// let vehicle1 = new Vehicle("Mercedes", "A-Class", 2021)
// vehicle1.getVehicleInfo();
// console.log("------------------------------------------------")
// let car1 = new Car("Audi", "R8", 2020, 4);
// car1.getVehicleInfo();

//#endregion


// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

//#region

// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     getDeposit(amountOfMoney) {
//         this.balance += amountOfMoney;
//         console.log(`Balance:${this.balance}`)
//     }
//     getWithDraw(amountOfMoney) {
//         if (this.balance > amountOfMoney) {
//             this.balance -= amountOfMoney;
//             console.log(`Balance:${this.balance}`)
//         } else {
//             console.log("there is not enough balance");
//         }
//     }
// }


// let account1 = new BankAccount(1234567, 300);
// let account2 = new BankAccount(1234589, 400);

// console.log("Initial Balance: " + account1.balance)
// account1.getDeposit(200);
// console.log("------------------------------------------------")
// console.log("Initial Balance: " + account2.balance)
// account2.getWithDraw(350);

//#endregion



// 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class

//#region

// class Shape {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     calcArea() {
//         console.log("This method calculate the area.")
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     calcArea(radius) {
//         console.log(Math.PI * (this.radius ** 2))
//     }
// }
// class Triangle extends Shape {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }
//     calcArea(radius) {
//         console.log(this.base * this.height / 2)
//     }
// }
// let circle1 = new Circle(3);
// let triangle1 = new Triangle(4, 8);


// circle1.calcArea();
// console.log("------------------------------------------------")

// triangle1.calcArea();

//#endregion

// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

//#region

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
//     calcAnnualSalary() {
//         console.log(`Balance:${this.balance}`)
//     }
// }

// class Manager extends Employee {
//     constructor(name, salary, bonus) {
//         super(name, salary);
//         this.bonus = bonus;
//     }
//     calcAnnualSalary() {
//         console.log(this.salary * 12 + (this.salary * this.bonus / 100));
//     }
// }
// let manager1 = new Manager("Sander", 1100, 20);
// let manager2 = new Manager("Aisha", 2400, 25);
// manager1.calcAnnualSalary();
// console.log("------------------------------------------------")

// manager2.calcAnnualSalary();

//#endregion


// 7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year.Include a method to display book details.Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price.Override the display method to include the book price.Create an instance of the 'Ebook' class and display its details

//#region

// class Book {
//     constructor(title, author, publication) {
//         this.title = title;
//         this.author = author;
//         this.publication = publication;
//     }
//     getBookDetails() {
//         console.log(`Title:${this.title}`);
//         console.log(`Author:${this.author}`);
//         console.log(`Publication:${this.publication}`);
//     }
// }

// class EBook extends Book {
//     constructor(title, author, publication, bookPrice) {
//         super(title, author, publication);
//         this.bookPrice = bookPrice;
//     }
//     getBookDetails() {
//         super.getBookDetails();
//         console.log(`Book Price: ${this.bookPrice}`);
//     }

// }
// let ebook1 = new EBook("Little Prens", "Antoine de Saint-Exupéry", 1915, 25);
// ebook1.getBookDetails();
//#endregion

// 8. Write a JavaScript program that creates a class called 'Animal' with properties for species and sound.Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color.Create an instance of the 'Dog' class and make it make its sound.

//#region

// class Animal {
//     constructor(species, sound) {
//         this.species = species;
//         this.sound = sound;
//     }
//     getAnimalSound() {
//         console.log(`${this.sound} `);
//     }
// }

// class Dog extends Animal {
//     constructor(species, sound, color) {
//         super(species, sound);
//         this.color = color;
//     }
//     getAnimalSound() {
//         super.getAnimalSound();
//         console.log(`Dog's color: ${this.color}`);
//     }

// }
// let dog1 = new Dog("Buldog", "Haww Haww", "black");
// dog1.getAnimalSound();
//#endregion



// 9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches.Include methods to add a branch, remove a branch, and display all branches.Create an instance of the Bank class and perform operations to add and remove branches.

//#region

// class Bank {
//     constructor(name, branches) {
//         this.name = name;
//         this.branches = branches;
//     }
//     addingBranch(branch) {
//         this.branches.push(branch);
//         console.log(`${branch} added`);
//     }
//     removingBranch(branch) {
//         if (this.branches.includes(branch)) {
//             let i = this.branches.indexOf(branch);
//             this.branches.splice(i, 1);
//             console.log(`Department "${branch}" removed from ${this.name}.`);
//         } else {
//             console.log(`Department "${branch}" does not exist in ${this.name}.`);
//         }
//     }
//     allBranches() {
//         console.log(`Branches:\n  ${this.branches}\n`);
//     }
// }


// let bank1 = new Bank("YeloBank", []);
// bank1.addingBranch("first branch");
// bank1.addingBranch("secound branch");
// bank1.addingBranch("third branch");
// bank1.allBranches();
// bank1.removingBranch("first branch");
// bank1.allBranches();
//#endregion




// 10. Write a JavaScript program that creates a class called Product with properties for product ID, name, and price.Include a method to calculate the total price by multiplying the price by the quantity.Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period.Override the total price calculation method to include the warranty period.Create an instance of the PersonalCareProduct class and calculate its total price.


//#region 
// class Product {
//     constructor(id, name, price) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
//     totalPrice(quantity) {
//         console.log(quantity * this.price);
//     }

// }

// class PersonalCareProduct extends Product {
//     constructor(id, name, price, warrantyPeriod) {
//         super(id, name, price);
//         this.warrantyPeriod = warrantyPeriod;
//     }

//     totalPrice(quantity) {
//         super.totalPrice(quantity);
//         console.log(quantity * this.price + this.warrantyPeriod);
//     }
// }

// let person1 = new PersonalCareProduct(1234, "Susan", 25, 4);
// person1.totalPrice(2);

//#endregion



// 11. Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance.Include methods to deposit, withdraw, and transfer money between accounts.Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

//#region 
// class BankAccount {
//     constructor(accountNumber, name, balance) {
//         this.accountNumber = accountNumber;
//         this.name = name;
//         this.balance = balance;
//     }
//     getDeposit(amountOfMoney) {
//         this.balance += amountOfMoney;
//         console.log(`${amountOfMoney} AZN  deposited to ${this.name}`);
//     }
//     getWithDraw(amountOfMoney) {
//         if (this.balance > amountOfMoney) {
//             this.balance -= amountOfMoney;
//             console.log(`${amountOfMoney} AZN withdraw from ${this.name}`);
//         } else {
//             console.log(`there is not enough money in ${this.name} balance`);
//         }
//     }
//     getTransfer(amountOfMoney, transferAccount) {
//         if (amountOfMoney < this.balance) {
//             this.balance -= amountOfMoney;
//             transferAccount.getDeposit(amountOfMoney);
//             console.log(`${amountOfMoney} AZN transfered from ${this.name}`)
//         }
//         else {
//             console.log(`There is not enough money in ${this.name} account`)
//         }
//     }
// }

// let person1 = new BankAccount(1234567, "Jane", 300);
// let person2 = new BankAccount(1234589, "Alex", 400);
// let person3 = new BankAccount(1298762, "Lucy", 800);

// person1.getDeposit(50);
// console.log(person1);
// person1.getWithDraw(100);
// console.log(person1);
// person1.getTransfer(100, person2)
// console.log(person1);

// person2.getDeposit(400);
// console.log(person2);
// person2.getWithDraw(100);
// console.log(person2);
// person2.getTransfer(200, person3)
// console.log(person2);

// console.log(person3);
// person3.getWithDraw(700);
// console.log(person3);
// person3.getTransfer(500, person1)
//#endregion


// 12. Write a JavaScript program that creates a class called University with properties for university name and departments.Include methods to add a department, remove a department, and display all departments.Create an instance of the University class and add and remove departments.

//#region 
class University {
    constructor(name, department) {
        this.name = name;
        this.department = [];
    }
    addingDepartment(department) {
        this.department.push(department);
        console.log(`${department} added to ${this.name}`);
    }
    removingDepartment(department) {
        if (this.department.includes(department)) {
            let i = this.department.indexOf(department)
            this.department.splice(i, 1);
            console.log(`Department "${department}" removed from ${this.name}.`);
        } else {
            console.log(`Department "${department}" does not exist in ${this.name}.`);
        }
    }
    getDepartment() {
        console.log(`Departments in ${this.name}: ${this.department}`);
    }
}

let uni1 = new University("Oxford");
let uni2 = new University("Harvard");

uni1.addingDepartment("IT");
uni1.addingDepartment("Finance");
uni1.addingDepartment("Mathematic");
uni1.getDepartment();
uni1.removingDepartment("IT");
uni1.getDepartment();

uni2.addingDepartment("History");
uni2.addingDepartment("Art");
uni2.addingDepartment("Music");
uni2.getDepartment();
uni2.removingDepartment("Music");
uni2.getDepartment();

//#region 