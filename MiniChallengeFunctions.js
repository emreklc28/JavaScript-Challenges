// Function Declaration 

function sayHello(name){
    let message="Merhaba, "+name+"!";
    return message;
}

console.log("Mesaj:",sayHello("Alice"));


// Function Expression

const multiply=function(number1,number2){
    return result=number1*number2;

};
console.log("İki Sayının Çarpımı:"+" "+multiply(5,3));

//Arrow Functions 

const divide=(number1,number2)=>{
    return division=number1/number2;
}

console.log("Bölüm: ",divide(10,2));

// Varsayılan Parametreler


function selam(surname,name="Misafir") {
    
    return "Hoş geldin, "+name+" "+surname+"!";
    
}

console.log(selam("Doe"));
console.log(selam("Doe","John"));