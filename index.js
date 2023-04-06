

//also this function name is constructor function, bu default js all functions are constructor function
// function Person(name, age) {
//     let person = Object.create(Person.prototype)
//     person.name = name
//     person.age = age
//     return person;
// }
// Person.prototype = {
//     eat () {
//         console.log(`${this.name} is eating`) 
//         return `${this.name} is eating`
//     },
//     sleep(){
//         console.log(`${this.name} is sleeping`) 
//         return `${this.name} is sleeping`
   
//     }
// }

// const sakib = Person("Shakib", 32)
//  console.log(sakib.eat())



 // new and this keyword

//  function PersonWithNew (name, age){
//     this.name = name;
//     this.age = age;
//  }
//  PersonWithNew.prototype={
//     eat(){
//         return `${this.name} is eating`
//     },
//     sleep(){
//         return `${this.name} is sleeping`
//     },
//     code(){
//         return `${this.name} is coding`
//     }
//  }
//  const rejaul = new PersonWithNew("Rejaul karim", 21);
//  console.log(rejaul.eat())
//  console.log(rejaul.sleep())
//  console.log(rejaul.code())


 //class conversation
 class PersonWithClass{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
    code(){
        console.log(`${this.name} is coding`)
    }
 } 
 const rejaul = new PersonWithClass("Rejaul karim", 22)
 rejaul.eat()










