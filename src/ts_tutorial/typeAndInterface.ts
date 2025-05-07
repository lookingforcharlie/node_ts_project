// interface is extendable, type is not
// describe an object, use interface
// describe other things, use type

type StreamerType = 'affiliate' | 'partner'

interface PersonOne {
  name: string
  favNumber: number
  dogName?: string
  streamerType: StreamerType
  currentTime?(): Date
}

// type PersonTwo = {
//   name: string
//   favNumber: number
//   dogName?: string
//   currentTime(): Date
// }

const randomPerson: PersonOne = {
  name: 'Charlie',
  favNumber: 1,
  streamerType: 'affiliate',
  currentTime: () => new Date(),
}

function greetOne(person: PersonOne) {
  return `Hello ${person.name}, it is ${person.currentTime?.()}`
}

console.log(greetOne(randomPerson))
