class Person {
    constructor(Name,Age,Gender,DOB,Address){
       this.Name = Name;
       this.Age = Age;
       this.Gender = Gender;
       this.DOB = DOB;
       this.Address = Address;

    }       
 }               
const Deepak = new Person("Deepak",22,"Male","01-05-1999","Chennai TamilNadu");
const Ram = new Person("Ram", 21, "Male", "07-07-1999", "Madurai TamilNadu" )
console.log(Deepak);
console.log(Ram);
