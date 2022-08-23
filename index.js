// Code your solution here
const findMatching = (drivers, character) => {
    return drivers.filter((driver) => driver.toLowerCase() === character.toLowerCase())
}

const fuzzyMatch = (drivers, character) => {
    return drivers.filter((driver) => driver.substring(0, character.length) === character)
}

const matchName = (drivers, character) => {
    return drivers.filter((driver) => driver.name === character)
}