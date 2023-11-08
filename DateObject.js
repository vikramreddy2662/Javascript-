//Date:date object is used to work with dates and times.

let date=new Date();
/*date.getFullYear();
date.getMonth();
date.getMinutes();
date.getSeconds();*/

//date=new Date(1970,1,2,3,4,5);

/*let  year=date.getFullYear();
let month=date.getMonth();
let day=date.getDate();
let minutes=date.getMinutes();*/


/*let year=date.setYear(2024);
let month=date.setMonth(2);
let day=date.setDate(21);
let hours=date.setHours(5);
let minutes=date.setMinutes(34);
let seconds=date.setSeconds(57);
//console.log(date);
*/
function updateDate(date){
    let  year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
   
    return `${year}/${month}/${day}`;
    }
    function updateTime(date){
        let  hours=date.getHours();
        let minute=date.getMinutes();
        let second=date.getSeconds();
        let amOrpm=hours>=12?"pm":"am";
        hours=(hours%12)||12;
        return `${hours}:${minute}:${second}:${amOrpm}`;
        }

let x=updateDate(date);
let v=updateTime(date);



document.getElementById("mylabel").innerHTML=x +"  "+v;





