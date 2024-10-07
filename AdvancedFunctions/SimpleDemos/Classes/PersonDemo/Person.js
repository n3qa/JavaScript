class Person{
    constructor( firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return  `Person: ${this.firstName} ${this.lastName}. With age ${this.age} and email: ${this.email} `
    }

}


const personOne = new Person('Adam', 'Halal', '1243', 'adam.halal@holy.com')
console.log(
    personOne.toString());