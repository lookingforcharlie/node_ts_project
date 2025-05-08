// Generics are a way to create reusable components that can work with multiple types while keeping the type safety and flexibility

//<T> is a generic type parameter, it's a placeholder for the type of the items in the array
// When you see <T> in the function, it's a generic type function, it means that the function can work with any type of array
// T is a convention, you can use any letter you want
function sortItems<T = number>(
  items: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  // The function you pass to sort must return:
  // < 0 if a should come before b,
  // 0 if they’re considered equal (order unchanged),
  // > 0 if a should come after b.
  return items.sort(compareFn)
}

// function can be called with array of any type
const myNumbers = [5, 2, 8, 1, 9, 3]

// we can remove <number> because the function can infer the type from the array
const sortedNumbers = sortItems<number>(myNumbers, (a, b) => a - b)
console.log(sortedNumbers)

// we can remove <string> because the function can infer the type from the array
const myStrings = ['banana', 'apple', 'cherry']

// localeCompare() returns 1, or 0, or -1
const sortedStrings = sortItems<string>(myStrings, (a, b) => a.localeCompare(b))
console.log(sortedStrings)
