/** Challenge: Select the Color*/

function selectTheColor(number) {
    
    if(number>=0 && number<=10){
        return "Blue";
        
    }else if(number>=11 && number<=20){
        return "Yellow";
        
    }else if (number>=21 && number<=30) {
        return "Purple";

    }else if(number>=31 && number<=40) {
        return "White";
        
    }else if(number>=41 && number<=50){
        return "Red";

    }else{
        return "Black";
    }
    
}

console.log(selectTheColor(-5));
console.log(selectTheColor(18));
console.log(selectTheColor(51));
console.log(selectTheColor(43));
console.log(selectTheColor(35));









