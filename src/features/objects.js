const objArray = [
  { id: 1, name: 'Abc', skills: { jumping: 5, running: 6 } },
  { id: 2, name: 'Bca', skills: { jumping: 8, running: 4 } },
  NaN,
  null,
  undefined,
]

const theObject = {
  id: 1,
  name: 'Abc',
  skills: { jumping: 5, running: 6 },
  'can swimming': false,
}
let dynamicId = 'id'

let result = {
  theObject: theObject,
  'theObject.dynamicId': theObject.dynamicId,
  'theObject[dynamicId]': theObject[dynamicId],
}
export default {
  result,
}
