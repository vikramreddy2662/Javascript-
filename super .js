class A{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class B  extends A{
    constructor(name,age,id){
        super(name,age)
        this.id=id;
}
}
class C extends A {
    constructor(name,age,salary){
        super(name,age)
        this.salary=salary;
        
    }
}
let obj3=new C("vikram",21);
let obj2=new B("mukesh",22,45235);
let obj1=new A("abhi",23);

console.log(obj3.name);
console.log(obj3.age);
console.log(obj3.salary);

console.log(obj1.name,obj1.age);
console.log(obj2.name,obj2.age,obj2.id);
//super keyword is used to invoke parent class constructor.