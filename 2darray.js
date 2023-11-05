let names=['vikram', 'milkman','sagar'];
let name1=['vamshi','abhi','mukesh','ballvenky'];
let mates=['guddu','subbu','tulsi','vijay'];

let dosth=[names,name1,mates];
for(let i=0;i<dosth.length;i++){
    for(let j=0;j<dosth.length;j++){
        console.log(dosth[i][j]);
    }
}


dosth[2][1]='killer';
console.log(dosth);
