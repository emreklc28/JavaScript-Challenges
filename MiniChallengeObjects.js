/** Mini Challenge: Objects */

const person={
    name:"John",
    age:30,
    country:"USA"
};

//Nesne Özellik Erişimi
console.log(person.name);
console.log(person.age);

//Yeni Özellik Ekleme
person.city="New York";

console.log(person);

//Özellik Güncelleme
person.age=35;
console.log("Güncel Yaş" ,person.age);

//Özellik Silme
delete person.country;
console.log("Country Silinmiş Person: ", person);

//Nesne Destructuring
const person1={
    name1:"Josh",
    age1:30,
    country1:"USA"
};
const {name1,country1}=person1;
console.log(name1);
console.log(country1);

//Nesne Anahtarları ve Değerleri


const keys=Object.keys(person);
console.log("Keys:",keys);
const values=Object.values(person);
console.log("Values:",values);




//İki Nesneyi Birleştirme
const person2 = { name: "John", age: 30 };
const address = { city: "New York", country: "USA" };
const birlesmis={...person2,...address};
console.log(birlesmis);

//İç İçe Nesne Erişimi

const user ={
    name:"John",
    adress:{
        city:"New York",
        country:"USA"
    }
};

console.log(user.adress.city);

// for...in ile Nesne İterasyonu

const person3 = { 
    name: "John", 
    age: 30, 
    country: "USA" 
};

for(const keys in person3 ){
    const value=person3[keys];
    console.log(keys,":",value);
    

};

//Özelliğin Var Olup Olmadığını Kontrol Etme

const person4 = { name: "John",
     age: 30, 
     country: "USA" 

};

if("city" in person4){
    console.log(person4.city);
    
}else{
    console.log("City not found");
    
}


























