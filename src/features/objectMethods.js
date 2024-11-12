import safeToString from '@/composables/safeToString'

const nestedObject = { firstNumber: 0, firstString: 'rtgghtg' }

//experimental subject
const theObject = {
  id: 1,
  name: 'Abc',
  get capsName() {
    return this.name.toUpperCase()
  },
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
  //get set
  'theObject = { name: Abc,  get capsName()}, theObject.capsName':
    theObject.capsName,
}

export default {
  result,
}
