/*async:it makes a function to always return a promise.
it's a neat edition to handle asynchronous operations if we declare a fn with async keyword it means a fn will always return a promise.
if a fn returns a value then that value is rapped into the promise and returned*/


 function LoadFile(){
    let fileloaded=true;
    if(fileloaded){
        return promise.resolve("file loaded");
    }
    else{
     throw  promise.reject("file not loaded");
}
}
LoadFile().then(result=>console.log(result));
LoadFile().catch(error=>console.log(error));
