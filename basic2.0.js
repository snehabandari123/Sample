/*function greet(name)
{
    console.log('Im '+name)
}
greet('sneha')
let a=10
function outer(){
    let b=20
    function inner(){
        let c=30
        console.log(b,c,a)
    }
    inner()
}
outer()
function outer(){
    let counter=0
    function inner(){
        counter++
        console.log(counter)
    }
     inner()
}
outer()
outer()
function outer(){
    let counter=1
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()*/

 let result = sum(1, 2);
 result()/*
 function outer(){
     let counter=1
     function inner(){
         counter++
         console.log(counter)
     }
     return inner
 }
 const fn = outer()
 fn()
 fn()*/
