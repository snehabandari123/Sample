/*let a={name:'sneha'}
console.log(a)
let b={class:5}
console.log(b)
a.__proto__=b
console.log(a.class)

a={name:'sneha'}
console.log(a)
let b={class:5}
console.log(b)
a.user=b
console.log(a.user)
let animal={type:'mammal',walk:function(){}}
let rabbit={jumps:'yes',__proto__:animal}
console.log(rabbit.type)
let animal={type:'mammal',walk:function(){}}
let rabbit={jumps:'yes',_proto_:animal,walk:function(){console.log(`yes it's walks`)}}
console.log(rabbit.walk())*/
let map=new Map()
map.set(1,'pig')
map.set('1','buffalo')
map.set('name','sneha')
console.log(map[1])
console.log(map.size)
console.log(map.get('1'))
