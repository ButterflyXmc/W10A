//Function 1 - will take 2 arguments expected to be integers.

function getNumber(number1, number2){
    let result = number1 + number2;
    return result * 5;
}
console.log(getNumber(4,4));

//Function 2 - will take 1 argument expected to be a string.

function getcolors(colors){
    if(colors.length > 10){
        return true;
} else return false;
}

getcolors(`black`);

//Function 3 - This function will take 1 argument expected to be an array of strings.

function getUsernames(names){
    console.log(`Welcome, ${names[0]}.`); 
    return names;
}

let names = [`philip`, `lucy`, `wilza`];
  
getUsernames(names)

