class A{
   constructor(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;
}
    set Name(name){
    this.name=name;
 }
get Name(){
    return this.name;
}
set Age(age){
    this.age=age;
}
get Age(){
    return this.age;
}
set Id(id){
this.id=id;
}
get Id(){
    return this.id;
}
}
let x=new A("vikram",21,20000);

console.log(x.name);
console.log(x.age);
console.log(x.id);
//set:binds an object property  to function when that property is assigned a value.
//get:binds an object property to a function when that property.





