// sort function

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// slice does not mutate the original array
// splice does mutate the original array
const newArr = myArray.slice(0, 5)

console.log(myArray)
console.log(newArr)

// Expected result: 'hellohello'
const someString = 'hello'.repeat(2)

console.log('321'.split(''))

// digits explosion: '312' -> '333122'
function explosion(str: string): string {
  const arr = str.split('')
  return arr.reduce((result, char) => {
    return result + char.repeat(Number(char))
  }, '')
}

console.log(explosion('425'))

// love equals friendship: calculate the value of a word, a  = 1 and z = 26
console.log('a'.charCodeAt(0)) // 97
console.log('b'.charCodeAt(0)) // 98
console.log('z'.charCodeAt(0)) // 122
console.log('z'.charCodeAt(0) - 'a'.charCodeAt(0)) // 25

// function calculateWordValue(word: string): number {
//   return word.split('').reduce((result, char) => {
//     return result + (char.charCodeAt(0) - 'a'.charCodeAt(0))
//   }, 0)
// }

function calculateWordValue(word: string): number {
  return word.split('').reduce((result, char) => {
    return result + (char.toLowerCase().charCodeAt(0) - 96)
  }, 0)
}

console.log(calculateWordValue('love'))
console.log(calculateWordValue('friendship'))

const programmingLanguages = {
  JavaScript: 90,
  Python: 90,
  Java: 80,
  'C++': 80,
  TypeScript: 80,
  Ruby: 70,
  PHP: 70,
  Swift: 70,
  Go: 60,
  Rust: 60,
  'C#': 50,
  Kotlin: 30,
  Scala: 30,
  R: 20,
  MATLAB: 20,
}

console.log(Object.entries(programmingLanguages))

// create a function retrieve the language its score is greater than 60 and return the list of it
function getLanguagesAbove60(languages: Record<string, number>): string[] {
  return Object.entries(languages)
    .filter(([_, score]) => score > 60)
    .map(([name, _]) => name)
}

// console.log(getLanguagesAbove60(programmingLanguages))

export { calculateWordValue, explosion, getLanguagesAbove60 }
