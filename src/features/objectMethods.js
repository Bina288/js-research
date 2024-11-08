const numericArray = [4, 6, 3, 7, 3]

const stringArray = ['banana', 'Orange', 'apple', 'melon', 'Grapefruit']
const objArray = [
  { id: 1, name: 'Abc', skills: { jumping: 5, running: 6 } },
  { id: 2, name: 'Bca', skills: { jumping: 8, running: 4 } },
  NaN,
  null,
  undefined,
]

let team = {
  canRunning(obj) {
    return obj?.skills?.running > 5
  },
}

let boolArray = [false, true, true, false]

let XORReduce = boolArray.reduce((xor, current) => xor !== current)
let substractionReduce = numericArray.reduce((item, current) => item - current)
let substractionReduceRight = numericArray.reduceRight(
  (item, current) => item - current,
)
//reference data type
let ref = numericArray
ref[1] = 111
numericArray.at(-1)

let notRefConcat = numericArray.concat()
let notRefSlice = numericArray.slice()

let objFindById = objArray.find(item => item.id === 1)
let objFindByJumpingInSkills = objArray.find(item => item.skills.jumping === 8)

let filterMethodArr = numericArray.filter(item => item % 2 === 0)

let mapMethodArr = numericArray.map(item => item * 2)

let mapBooleanArr = numericArray.map(item => item % 2 === 0)

let mapWordsLengthArr = stringArray.map(item => item.length)

let joinNumArr = numericArray.join()
let joinObjArr = objArray.join(' ; ')

let result = {
  numericArray: numericArray,
  'numericArray.at(-1)': numericArray.at(-1),
  'numericArray.at(0)': numericArray.at(0),
  'numericArray.at(1)': numericArray.at(1),
  'numericArray.sort()': numericArray.sort(),
}
export default {
  result,
}
