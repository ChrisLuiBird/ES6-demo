const fs = require('fs');

//普通嵌套, 日常例子: 读取用户, 再根据用户信息进一步读资料


//data容易重名 且难维护
// fs.readFile('./resources/learning.md', function(err, data1){
//     fs.readFile('./resources/english.md', function(err, data2){
//         let data = data1 + data2;
//         console.log(data);

//     })

// })


// promise 嵌套 将多个异步串联起来
const p = new Promise((resolve, reject)=>{
    fs.readFile('./resources/english.md', function(err, data){
        resolve([data]);
    })
})

p.then(value => {
    return new Promise(function(resolve, reject){
        fs.readFile('./resources/learning.md', function(err, data){
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.join('\r\n'))
})



