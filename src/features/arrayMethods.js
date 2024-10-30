let numericArray = [4, 6, 3, 7]
let stringArray = ['banana', 'Orange', 'apple', 'melon', 'Grapefruit']
//reference data type
let ref = numericArray
ref[1] = 111
console.log('numericArray', numericArray)
numericArray.at(-1)

let result = {
  numericArray: numericArray,
  'numericArray.at(-1)': numericArray.at(-1),
  'numericArray.at(1)': numericArray.at(1),

  stringArray: stringArray,
  'stringArray.sort()': stringArray.sort(),
}
export default {
  result,
}
