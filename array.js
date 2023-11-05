let students=["vikram","abhi","hemanth"];
students.push("mukesh");//adds an element at the end
console.log(students);
students.pop("abhi");//removes an element at the end
console.log(students);
students.unshift("akka");//adds an element at the begining
console.log(students);
students.shift("akka");//deletes an element at the begining
console.log(students);

console.log(students[1].toUpperCase());

students[1]='don';//abhi will be replaced with don//

console.log(students);
let  a=[12,21,32,44,67];

console.log(a.indexOf(21));
/*f or(let i=0;i<a.length;i++){
console.log(a[i]);
}*/
for(let i=a.length-1;i>=0;i--){
    console.log(a[i]);
}
for(let i of a){
console.log(i);
}






