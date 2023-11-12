/*promise:used for handling asynchronous operations=>it provides a way to handle asynchronous code.
it consists of 3 states:1.pending,2.fulfilled,3.rejected*/

let promise=new Promise((resolve,reject)=>{
      let fileloaded=false; 

     if(fileloaded){
        resolve("success,file loaded");}
        else{
            reject("failure,file not loaded");
        }
    }
);
promise.then(result=>console.log(result));
promise.catch(error=>console.log(error));



/*let promise=new Promise(resolve=>{
   
setTimeout(resolve,3000);
});
promise.then( () => console.log("thanks for waiting"));*/