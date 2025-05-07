// Class allows define a blueprint for an object
// you can also combine the class with interface in TS

class Person {
  name: string
  favNumber: number
  dogName?: string

  constructor(name: string, favNumber: number, dogName?: string) {
    this.name = name
    this.favNumber = favNumber
    this.dogName = dogName
  }
}

// no need to define the type of the properties, just use public as the access modifier
class PersonShorthand {
  static genus = 'Homosapien' // static property, exists on the class itself, not the instance
  constructor(
    public name: string,
    public favNumber: number,
    public dogName: string,
    protected internalSecret: string, // only accessible within the class and subclasses
    private privateSecret: string // only accessible within the class
  ) {}
}

const myPerson = new Person('Charlie', 1, 'Rex')

console.log(myPerson.dogName)
console.log(myPerson.name)

function greet(person: Person) {
  console.log(`Hello ${person.name}`)
}

greet(myPerson)

const myPersonShorthand = new PersonShorthand(
  'Bino',
  44,
  'Chocolate',
  'confidential',
  'super secret'
)

console.log(myPersonShorthand.dogName)
console.log(myPersonShorthand.name)

console.log(PersonShorthand.genus)

function greetShorthand(person: PersonShorthand) {
  // person.internalSecret is not accessible because it's protected
  console.log(`Hello ${person.name}`)
}

greetShorthand(myPersonShorthand)
