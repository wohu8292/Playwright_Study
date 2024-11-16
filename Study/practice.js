// node Study/practice.js

let person = {                          // create object
    firstName: "Tim",
    lastName: "Joe",
    fullName: function(){console.log(this.firstName+this.lastName)}
}

console.log(person.lastName)            // first way
console.log(person['lastName'])         // second way
console.log(person.fullName())          // calling function

person.gender = "male"                  // add property
console.log(person)
delete person.gender                    // delete property
console.log(person)

console.log('gender' in person)         // check existence of property

for (let key in person){                // print all the value of object
    console.log(person[key])
}

