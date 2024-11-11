import safeToString from '@/composables/safeToString'

//https://learn.javascript.ru/prototype-inheritance

const nestedObject = { firstNumber: 0, firstString: 'rtgghtg' }

//research keys properties
let dynamicKey = 'id'
let notExistDynamicKey = 'notExistDynamicKey'

//experimental subject
const theObject = {
  id: 1,
  name: 'Abc',
  // skills: { jumping: 5, running: 6 },
  // 'can swimming': false,
  // [dynamicKey]: 'dynamicKey instead  of id = 1',
  // 5: 'five',
  // 115: 'two hundred fifteen',
  // arrayValue: [5, 10, 15],
  // otherObj: nestedObject,
  objMethod() {
    return 'objMethod ' + this
  },
  objMethodLikeField: function () {
    return 'objMethodLikeField ' + this
  },
  objarrayMethod: () => {
    return 'objMethodLikeField ' + this
  },
}
theObject.objMethod()
theObject.objarrayMethod

let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
}

let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
])

const arrayFromMap = Object.fromEntries(map)
//hints
let first = {
  id: 1,
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this.id : `id = ${this.id}`
  },
}
let second = {
  id: 2,
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this.id : `id = ${this.id}`
  },
}

let entries = { a: 1, b: 2 }
let longKeys = Object.fromEntries(
  Object.entries(entries).map(([key, value]) => [key + key, value]),
)

const result = {
  theObject,
  'Array.from(arrayLike)': Array.from(arrayLike),
  //[...arrayLike]//- TypeError: arrayLike is not iterable
  'theObject.objMethod()': theObject.objMethod(),
  'theObject.objarrayMethod()': theObject.objarrayMethod(), //TypeError: Cannot read properties of undefined (reading 'name')
  'arrayFromMap = Object.fromEntries(map)': arrayFromMap,
  '[Symbol.toPrimitive](hint): first.id=1, second.id=2, first>second':
    first > second,
  'first<second': first < second,
  'entries = {a: 1, b: 2};longKeys = Object.fromEntries(Object.entries(entries).map(([key,value]) => [key+key,value]))':
    longKeys,
}

export default {
  result,
}
