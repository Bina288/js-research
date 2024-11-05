let numericArray = [4, 6, 3, 7]
let stringArray = ['banana', 'Orange', 'apple', 'melon', 'Grapefruit']
//reference data type
let ref = numericArray
ref[1] = 111
console.log('numericArray', numericArray)
numericArray.at(-1)

let notStrictResult = {
  //array comparisons

  '[]==[]': [] == [],
  '[0] == [0]': [0] == [0],
  'numericArray[0] == numericArray[0]': numericArray[0] == numericArray[0],
  'ref (reference of numericArray)': ref,
  'numericArray[0] == ref[0]': numericArray[0] == ref[0],
  '0 == []': 0 == [],
  'empty string == []': '' == [],
}
export default {
  notStrictResult,
}
