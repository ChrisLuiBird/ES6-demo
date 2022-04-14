const e = document.getElementById('btn');

e.onclick = ()=>{
//测试点击事件

//在使用的时候 才 import
//import返回的函数是一个 Promise对象
    import('./clickEvent.js').then(module => {
        module.hello();
    })
}



