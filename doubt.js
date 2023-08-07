/*c={name:'sneha',place:'warangal',age:21,1:2,college:'kitsw'}
console.log(c.1) output missing ) argument list*/
console.log('4'+'2')//output 42 string concantenation
console.log('4'-'2')//output 2
let user={name:'sneha',place:'warangal',age:()=>alert(21)}
console.log(this.age())//VM77:2 Uncaught TypeError: this.age is not a function
let user={name:'sneha',place:'warangal',age:()=>alert(this.place)}
console.log(user.age())//why the output is undefined
let user={name:'sneha',place:'warangal',age:function(){alert(this.place)}}
console.log(user.age())//here the output is warangal


let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced*/

// That's what got written!
console.log( visitsCountObj[john] ); // 123
function Alien(name,tech){
    return name
    return tech}
alien1=new Alien('sanjay','AI')//output alien{}
function Alien(name,tech){
    this.name= name
    this.tech=tech}
aien1=new Alien('sanjay','AI')//output Alien {name: 'sanjay', tech: 'AI'}

