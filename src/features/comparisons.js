const numericArray = [4, 6, 3, 7]
const stringArray = ['banana', 'Orange', 'apple', 'melon', 'Grapefruit']
//reference data type
const ref = numericArray
ref[1] = 111
console.log('numericArray', numericArray)
numericArray.at(-1)

const theObject = {
  id: 1,
  name: 'Abc',
  skills: { jumping: 5, running: 6 },
  'can swimming': false,
  5: 'five',
  115: 'two hundred fifteen',
}
//reference data type
const ref2 = theObject
ref2.id = 111

let notStrictResult = {
  //array comparisons

  '[]==[]': [] == [],
  '[0] == [0]': [0] == [0],
  'numericArray[0] == numericArray[0]': numericArray[0] == numericArray[0],
  'ref (reference of numericArray)': ref,
  'numericArray[0] == ref[0]': numericArray[0] == ref[0],
  '0 == []': 0 == [],
  'empty string == []': '' == [],
  'ref (reference of theObject)': ref2,
  'ref2.id = 111, the Object': theObject,
}
export default {
  notStrictResult,
}
