


  let date=new Date();
function Update(){

    let date=new Date();
   // let t=formatTime(date);

document.getElementById("mylabel").innerHTML=formatTime(date);

function  formatTime(date){
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();
  let amOrpm=hours>=12?"pm":"am";
   hours=hours%12||12;

  hours=formatZeroes(hours);
  minutes=formatZeroes(minutes);
  seconds=formatZeroes(seconds);


return `${hours}:${minutes}:${seconds}:${amOrpm}`;
}
function formatZeroes(time){
    time=time.toString();
    return time.length<2? "0"+time:time;

}
}
setInterval(Update,1000);
