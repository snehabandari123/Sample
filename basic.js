/* vari
console.log( 'javascript dynamically typed language' )
let age
console.log(age)
const s=0
s=90000
console.log(s)
const s="sneha"
const i=2.4
const t = true
const u=undefined
const n=null
console.log(n)
console.log(t)
console.log(u)
console.log(t)
console.log(i)
console.log(s)
const person = {
    firstname:'sneha',
    age:30,
    date:7,
}
console.log(person.firstname)
a=[1,2,3,4,5,6,6]
console.log(a[0])
let x=10
let y='10'
/*console.log(x+y)
console.log(--x)
console.log(++y)
console.log(x==y)
/*console.log(x!=y)
console.log(x>=y)
let x=10
let y=1
const k =x>8 && 8>y
console.log(k)
const l =x>8 || 8>y
console.log(l)
console.log('sneha  '+'bandari')
const j=10%2===0 ? 'even' : 'odd'
console.log(j)
console.log(3+'true')
console.log('4'-'2')
console.log(3-true)
console.log(Number(2.50))
console.log(parseInt(2.50))
console.log(parseFloat('2.50'))
console.log(String(50000))
console.log(String(true))
console.log((500).toString())
console.log(Boolean(10))
const var1 = 10
const var2 ='10'
console.log(var1==var2)
console('this compares just the values where as triple equals compares valuee as well as datatype,double equal automatically converts datatype not compare ')
console.log(var1===var2)
const num = 0
if(num > 0){
    console.log('positive number')
}
else if(num<0){
    console.log('negative number')
}
else{
    console.log('zero')
}

const color='sneha'
switch(color){
    case 'red':
        console.log('color is red')
        break
    case 'green':
        console.log('color is green')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color not found')
}
function sum(){
let sum=0
for( let i=0;i<=5;i++){
    sum=sum + i
    console.log('sum is ' + sum)
}
}
/*
let i=6
do{
    console.log('iteration' + i)
    i++
}while(i<=5)
const a=[1,2,3,4,5,6]
for(const num of a ){
    console.log(num)
}
sum()
function greet(name)
{
    console.log('My name '+ name)
}
greet('sneha')
function add(a,b){
    return a + b
}
const sum= add(25,25)
console.log(sum)
const user1={
    name:'sneha',
    age:17,
    score:12,
    greet : function(){
        console.log(this.age)
    }
}
const user={
    name:'sneha',
    age:14,
    score:12,
    greet : function(){
    console.log(this.age)
}
}
console.log(user.greet)

let greet=(user)  => {
    console.log('hello'+user)
    return 1
}
console.log(greet('sneha'))
let add = (num1,num2) =>  num1+num2;

console.log(add(1,9))
function Alien(name,technology){
 this.name=name
 this.technology=technology
}
let alien= new Alien('navin','js')
console.log(alien)
console.log(Alien.name='sanjay')
console.log(Alien.technology='blockchain')
let greet=(num1,num2)=>{
   console.log(num1+num2)
}
greet(1,2)

let a= new Array()
a[0]=1
a[1]=2
a.push(3)
a[4]=4
console.log(a[4])
console.log(a.length)
a=[1,2,3,4,'sneha']
b=[1,2,3,4,'bandari']
console.log(a[0] + b[0],a[1]+b[1],a[2] + b[2],a[3] + b[3],a[4] + b[4])
data=[1,'sneha',{1:'key'},function(){console.log('hello world')}]
data.push(4)
data.pop()
data.shift()(removes first element)
data.unshift(10)(adds 10 to as first element)
data.splice(2,2,13)
console.log(data)

/*data[3]() calling a function in array
let sum=0
for(let i=0;i<5;i++){
    sum=sum+i
}
avg=sum/4
console.log(avg)
let a=[];
a[0]=1
a[99]=10
for(let n of  a){
    console.log(n)
}
for(let key in   a){
    console.log(a[key])
}
data=[1,2,3,4]
let [a,b,c,d]=data
console.log(d)
data='hello this is sneha how are you doing'.split(' ')
let [a,b,c,...d]=data
console.log(d)
let c=[1,2,3,4]
let result=c.filter(n => n%2===0)
 .map(n => n*2)
 .reduce((a,b)=>a+b)
console.log(result)
console.log(sum)
let a=[1,2,3,4]
a.forEach((n)=>{
    if(a[n]%2==0)
    console.log(a[n])
})
a=new Set()
a.add(3)
a.add(4)
a.add(4)
a.add('sneha')
a.add('bandari')
a=new Set('sneha')
a.forEach(n => {
    console.log(n)
})
console.log(a.has('s'))/*Used to search a elements in set*/
/*
b=new Set('3','4','5')
console.log(b)*/
/*let a=new Map()
a.set("sneha","javascript")//by set we are updating the value we are not adding the value so we are using 'add'
a.set('meghana','automation')
a.set('sujala','fullstack')
for (let [k,v] of a){
    console.log(k + ' : ' +v)
}
map.forEach((v,k) =>  console.log(v,':',k))*/
/*function hello(){
    console.log('hello team')
    hello()
}
hello()*/

     //function Hi(){
       // console.log('how are you')
        //hello()
    //}
//Hi
/*
function fact(n){
if(n==0)
return 1
 else
return f=n*fact(n-1)
}
let result=fact(5)
console.log(result)*/
let a = { 1: 2, 3: 4 };
let map = new Map(Object.entries(a));
console.log(map.get('1')); // Output: 2


