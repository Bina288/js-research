import safeToString from '@/composables/safeToString'

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done'), 3000)
})
console.log(promise)
const result = {
  promise,
}

export default {
  result,
}
