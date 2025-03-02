/**  Mini Challenge: Arrays */

//1. map() Challenge

const array=[1,2,3];

const mappedArray=array.map(function (values) {
    return values*2;
    
});
console.log(array);
console.log(mappedArray);

//2. forEach() Challenge

const fruits=["apple","banana","strawberry"];

fruits.forEach((fruits) => {
    console.log("This is", fruits);
    

});

//3. filter() Challenge

const numbers=[5,12,8,21];
const filteredNumbers=numbers.filter(function name(num) {
    return num>10;
    
});

console.log(filteredNumbers);

//4.find() Challenge

const fruits2=["apple", "banana","strawberry","pineapple"];
const findBanana=fruits2.find(function (fruit) {
    if(fruit==="banana"){
        return true;
    }
    
});

console.log(findBanana);

//5. includes() Challenge

const fruits3=["apple","banana","strawberry"];
const hasApple=fruits3.includes("apple");
console.log(hasApple);


//6. slice() Challenge

const numbers2=[1,2,3,4,5];
const firstTwo=numbers2.slice(0,2);
console.log(firstTwo);

//7. push() Challenge

const fruits4 = ['apple', 'banana'];
fruits4.push('watermelon');
console.log(fruits4);


//8.pop() Challenge

const fruits5 = ['apple', 'banana', 'watermelon'];
fruits5.pop();
console.log(fruits5);































