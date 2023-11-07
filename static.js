/*static its used in memory management it states that it belongs to class but not object.*/

class Student{
     college;
     static scores=0;
constructor(name,age,id){
    this.name=name;
    this.age=age;
    this.id =id;
    Student.scores+=1;
}

static display(){
    console.log(`hello my name  is ${this.name}`);
}
}
const s1=new Student('vikram reddy',21,'geethanjali');
//const s2=new Student('venkat reddy',22,'geethanjali');
//const s3=new Student('sanvith',21,'geethanjali');

console.log(s1.name,s1.age,s1.id, Student.scores);
//console.log(s2.name,s2.age,s2.id,s2.scores);
//console.log(s3.name,s3.age,s3.id,s3.scores);


Student.display();
//***we can invoke using class name as static is created as class member but not as object member
