let numbers=[2,3,9,7,5];
let squares=numbers.map(square);
let cubes=numbers.map(cube);

function square(number){
return Math.pow(number,2)
}

function cube(number){
    return Math.pow(number,3);
}

/* function print(number)
{
    console.log(number);
}


cubes.forEach(print);*/
console.log(squares);
console.log(cubes);
