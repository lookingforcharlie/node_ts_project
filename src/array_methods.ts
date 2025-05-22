const mafiaNames: string[] = [
  'Don Corleone',
  'Tony Soprano',
  'Michael Corleone',
  'Lucky Luciano',
  'Al Capone',
  'Lefty Ruggiero',
  'Donnie Brasco',
]

function myForEach<T>(array: T[], callback: (item: T) => void) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

myForEach(mafiaNames, (name) => console.log(name))
