let myName: string = 'Charlie'

console.log(myName)

function add(a: number, b: number) {
  return a + b
}

console.log(add(1, 2))

// union type
type myItem = number | string

const myList: myItem[] = [1, 'foo']
