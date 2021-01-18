const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"

const getRandomLetters = () =>
  alphabet[Math.floor(Math.random() * alphabet.length)]
const getRandomNumbers = () =>
  numbers[Math.floor(Math.random() * numbers.length)]

const createName = () => {
  const letters = Array.from({ length: 2 }, getRandomLetters).join("")
  const numbers = Array.from({ length: 3 }, getRandomNumbers).join("")

  return letters + numbers
}

let robotsList = new Set()

const getRandomName = () => {
  let robotName = createName()

  // if the random name already exists in the Set,
  // keep going until a unique one is generated
  while (robotsList.has(robotName)) {
    robotName = createName()
  }

  robotsList.add(robotName)

  return robotName
}

export class Robot {
  constructor() {
    this._name = getRandomName()
  }

  // read access only
  get name() {
    return this._name
  }

  reset() {
    this._name = getRandomName()
  }
}

Robot.releaseNames = () => {
  robotsList = new Set()
}
