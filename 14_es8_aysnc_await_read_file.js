const file = require("fs");

//封装2个Promise函数
function engFile(){
    return new Promise((resolve, reject)=>{
        file.readFile('./resources/english.md',(err, data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}
function learnFile(){
    return new Promise((resolve, reject)=>{
        file.readFile('./resources/learning.md',(err, data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}
//开启async
async function fn(){
    let eng  = await engFile();
    console.log(eng.toString());

    let learn = await learnFile();
    console.log(learn.toString());
}

fn();