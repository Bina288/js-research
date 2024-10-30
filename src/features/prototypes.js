function safeToString(value) {
  try {
    return value === null ? 'null' : value === undefined ? 'undefined' : value
  } catch {
    return 'toString() failed'
  }
}

function declFunc() {
  //   console.log(this)
  return 'Func'
}

const arrowExprFunc = () => {
  //   console.log(this)
  return 'Func2'
}

const exprButNotArrowFunc = function () {
  //   console.log(this)
  return 'Func3'
}

let numb = 5
let nextNumb = 6

class MyClass {}

let str = 'gfg'

let bool = true

let promise = new Promise(() => {})

let classInstance = new MyClass()
let obj = { id: 1 }

const resultobj = {
  'Object.prototype': safeToString(Object.prototype.constructor),
  '{}.prototype': safeToString({}.prototype?.constructor),
  '{}.__proto__': safeToString({}.__proto__.constructor),
  'MyClass.prototype': safeToString(MyClass.prototype.constructor),
  'MyClass.__proto__': safeToString(MyClass.__proto__.constructor),
  'Number.prototype': safeToString(Number.prototype.constructor),
  '5.prototype': safeToString(numb.prototype?.constructor),
  '5.__proto__': safeToString(numb.__proto__.constructor),
  'str.prototype': safeToString(str.prototype?.constructor),
  'str.__proto__': safeToString(str.__proto__.constructor),
  'bool.prototype': safeToString(bool.prototype?.constructor),
  'bool.__proto__': safeToString(bool.__proto__.constructor),
  'declFunc.prototype': safeToString(declFunc.prototype?.constructor),
  'declFunc.__proto__': safeToString(declFunc.__proto__.constructor),
  'arrowExprFunc.prototype': safeToString(arrowExprFunc.prototype?.constructor),
  'arrowExprFunc.__proto__': safeToString(arrowExprFunc.__proto__.constructor),
  'exprButNotArrowFunc.prototype': safeToString(
    exprButNotArrowFunc.prototype?.constructor,
  ),
  'exprButNotArrowFunc.__proto__': safeToString(
    exprButNotArrowFunc.__proto__.constructor,
  ),
  'declFunc.prototype===ExprButNotArrowFunc.prototype': safeToString(
    declFunc.prototype === exprButNotArrowFunc.prototype,
  ),
  'declFunc.__proto__===ExprButNotArrowFunc.__proto__': safeToString(
    declFunc.__proto__ === exprButNotArrowFunc.__proto__,
  ),
  'promise.prototype': safeToString(promise.prototype?.constructor),
  'promise.__proto__': safeToString(promise.__proto__?.constructor),
  'classInstance.prototype': safeToString(classInstance.prototype?.constructor),
  'classInstance.__proto__': safeToString(classInstance.__proto__?.constructor),
  '{}.prototype===obj.prototype': safeToString({}.prototype === obj.prototype),
  '{}.__proto__===obj.__proto__': safeToString({}.__proto__ === obj.__proto__),
  '5.prototype===6.prototype': safeToString(
    numb.prototype === nextNumb.prototype,
  ),
  '5.__proto__===6.__proto__': safeToString(
    numb.__proto__ === nextNumb.__proto__,
  ),
}

console.log('resultobj', resultobj)
export default {
  resultobj,
}
