// assertions is telling ts you know better than it does

// as, any, unknown

// doesn't work
// const x = 'hello' as number

// works
const y = 'world' as unknown as number

// @ts-ignore: works on a single line of code
// @ts-noCheck: put at the top of the file, the entire file will be ignored by ts
// @ts-ignore and @ts-noCheck are useful when you migrate js code to ts code

let myName = 'charlie'

// @ts-ignore
myName = 123

// @ts-ignore
myName.toUpperCase()
