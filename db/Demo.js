const foo =()=>{
  return [{data:1,loading:false, err:'error'},()=>{console.log('hello')}]
}

let [t,s] = foo()
let [{data,loading,err}, yoyo] = foo()
console.log(t)//{data:1,loading:false, err:'error'}
console.log(s)// function
console.log(data)// 1
console.log(loading)// false
console.log(err)// 'error'
s() // hello

//
let arr = [1,2]


// array destructoring
// declaring to variable called x,y
// let x = arr[0]
// let y = arr[1]

// the order is important here, not the names of variable
let [x,y] = arr
console.log(x)
console.log(y)

let obj = {a:3,b:4}
// obj destructoring
// declaring to variable called a,b
// the order is not important here, the names of variable is, has to match key
// let {b, a:newNameYo} = obj
// console.log(newNameYo) 3

let {b,a} = obj
console.log(a)
console.log(b)