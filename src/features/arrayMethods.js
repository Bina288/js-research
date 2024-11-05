let numericArray = [4, 6, 3, 7, 3]

let stringArray = ['banana', 'Orange', 'apple', 'melon', 'Grapefruit']
let objArray = [
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

console.log('myXORResultReduce', XORReduce)
console.log('substractionReduce', substractionReduce)

console.log('substractionReduceRight', substractionReduceRight)
//reference data type
let ref = numericArray
ref[1] = 111
console.log('numericArray', numericArray)
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

  stringArray: stringArray,
  'stringArray.sort()': [...stringArray].sort(),

  //array comparisons
  '[]==[]': [] == [],
  '[0] == [0]': [0] == [0],
  'numericArray[0] == numericArray[0]': numericArray[0] == numericArray[0],
  'ref (reference of numericArray)': ref,
  'numericArray[0] == ref[0]': numericArray[0] == ref[0],

  //array coping
  'notRefConcat[0] = 555': (notRefConcat[0] = 555),
  'let notRefConcat = numericArray.concat();': notRefConcat,
  'notRefSlice[0] = 888': (notRefSlice[0] = 888),
  'let notRefSlice = numericArray.slice();': notRefSlice,

  //array finding

  'numericArray.indexOf(3)': numericArray.indexOf(3),
  'numericArray.lastIndexOf(3)': numericArray.lastIndexOf(3),
  'numericArray.indexOf(8)': numericArray.indexOf(8),
  'numericArray.indexOf(4(item),1(from))': numericArray.indexOf(4, 1),
  'numericArray.indexOf(4,-1)': numericArray.indexOf(4, -1),
  'numericArray.indexOf(666,-1)': numericArray.indexOf(666, -1),
  'stringArray.indexOf(Apple)': stringArray.indexOf('Apple'),
  //includes and indexOf

  objArray: objArray,
  'objArray.indexOf(NaN)': objArray.indexOf(NaN),
  'objArray.includes(NaN)': objArray.includes(NaN),
  'objArray.indexOf(undefined)': objArray.indexOf(undefined),
  'objArray.includes(undefined)': objArray.includes(undefined),
  'objArray.indexOf(null)': objArray.indexOf(null),
  'objArray.includes(null)': objArray.includes(null),
  'numericArray.includes(3)': numericArray.includes(3),

  //find, findIndex
  'objArray.find(item => item.id === 1)': objFindById.name,
  'objArray.find(item => item.skills.jumping === 8)':
    objFindByJumpingInSkills.name,
  //filter()
  'numericArray.filter(item => item % 2===0)': filterMethodArr,

  //map()
  'numericArray.map(item=>item*2)': mapMethodArr,
  'stringArray.map(item => item.length)': mapWordsLengthArr,
  'numericArray.map(item => item % 2 === 0)': mapBooleanArr,

  //join
  'numericArray.join()': joinNumArr,
  'objArray.join( ; )': joinObjArr,
  //reduce, reduceRight
  'boolArray.reduce((xor, current) => xor !== current)': XORReduce,
  'numericArray.reduce((item, current) => item - current)': substractionReduce,
  'numericArray.reduceRight((item, current) => item - current)':
    substractionReduceRight,

  'objArray.filter(team.canRunning, objArray)': objArray.filter(
    team.canRunning,
    objArray,
  ),
}
export default {
  result,
}
