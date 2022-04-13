const fs = require('fs');

//常规写法
// fs.readFile('./resources/learning.md', (err, value) =>{
//     if(err) console.log(err.message());
//     console.log(value.toString());
// });
//以上写法 如果遇到多个异步任务就会无限缩进

//promise写法

const p = new Promise(function(resolve, reject){
    fs.readFile('./resources/learning.md', (err, value) =>{
        if(err) reject(err);
        resolve(value);
    });
})

p.then(function(value){
    console.log(value.toString())
},function(err){
    console.log('read fail')
});