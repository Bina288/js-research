import safeToString from '@/composables/safeToString'

const nestedObject = { firstNumber: 0, firstString: 'rtgghtg' }

//research keys properties
let dynamicKey = 'id'
let notExistDynamicKey = 'notExistDynamicKey'

//experimental subject
const theObject = {
  id: 1,
  name: 'Abc',
  skills: { jumping: 5, running: 6 },
  'can swimming': false,
  [dynamicKey]: 'dynamicKey instead  of id = 1',
  5: 'five',
  115: 'two hundred fifteen',
  arrayValue: [5, 10, 15],
  otherObj: nestedObject,
}

let dynamicName = 'name'

const keysArray = []
for (let key in theObject) keysArray.push(key)

//research referencies and copies

let clone2 = {}
const cloneAssign = Object.assign(clone2, theObject)

const clone3Spread = { ...theObject }
clone3Spread.name = 'Def'
clone3Spread.otherObj.firstNumber++

const structClone = structuredClone(theObject)
structClone.otherObj.firstString = 'STRUCT CLONE)'

//proto
nestedObject.__proto__ = theObject

const result = {
  theObject,
  'theObject.dynamicName': safeToString(theObject.dynamicName),
  'theObject[dynamicName]': safeToString(theObject[dynamicName]),
  'theObject[dynamicKey]': safeToString(theObject[dynamicKey]),
  'theObject[notExistDynamicKey]': safeToString(theObject[notExistDynamicKey]),
  'dynamicKey in theObject': safeToString(dynamicKey in theObject),
  '[dynamicKey] in theObject': safeToString([dynamicKey] in theObject),
  'notExistDynamicKey in theObject': safeToString(
    notExistDynamicKey in theObject,
  ),
  keysArray,
  'let clone2 = {}': clone2,
  'const cloneAssign = Object.assign(clone2, theObject)': cloneAssign,
  'const clone3Spread = {...theObject}; clone3Spread.name = Def, oterObj.firstNumber++(0->1)':
    clone3Spread,
  'const structClone = structuredClone(theObject)': structClone,
  'nestedObject.__proto__ = theObject; nestedObject.name': nestedObject.name,
}
export default {
  result,
}
