import safeToString from '@/composables/safeToString'

//Class Expression
let myClassExpression = class {
  method1() {
    return 'it`s a myClassExpression method'
  }
}

const exprInstance = new myClassExpression()

function makeClass(name) {
  return class {
    method1() {
      return `Class in function, ${name}`
    }
  }
}
const makeClassInstance = makeClass('TheName')

//constructor function
function Item1(name, number) {
  ;(this.name = name), (this.number = number)
  return this //test
}

const item1 = new Item1('abc', 3)

function Item2(name, number) {
  ;(this.name = name), (this.number = number)
  return { name: 'sdgdsg' } //test
}
const item2 = new Item2('abc', 3)

const item21 = new Item2()
const item11 = new Item1()

Item1.prototype.method2 = function () {
  return this.name
}

class MyClass {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  method1() {
    return this
  }
  get name() {
    return this._name.toUpperCase()
  }

  set name(value) {
    if (value.length < 4) {
      alert('Имя слишком короткое.')
      return
    }
    this._name = value
  }
}
const myClassInstance = new MyClass('myClassInstance', 4)

MyClass.prototype.method2 = function () {
  return this.name
}

const anotherInstance = { bool: true }

anotherInstance.__proto__ = MyClass

const result = {
  'Item1: return this; item1 = new Item1(abc, 3)': item1,
  'Item2: return { name: sdgdsg}; item2 = new Item2(abc, 3)': item2,
  'item21 = new Item2': item21,
  'item11 = new Item1': item11,
  'item1.name': safeToString(item11.name),
  'typeof Item1': typeof Item1,
  'typeof MyClass': typeof MyClass,
  'Item1.prototype.constructor': Item1.prototype.constructor,
  'MyClass.prototype.constructor': MyClass.prototype.constructor,
  'item1.__proto__': item1.__proto__.constructor,
  'myClassInstance.__proto__': myClassInstance.__proto__.constructor,
  'item1.method2()': item1.method2(),
  'myClassInstance.method2()': myClassInstance.method2(),
  'let myClassExpression = class { method1(){return it`s a myClassExpression method}}':
    exprInstance.method1(),
  'function makeClass(name){return class {method1(){return Class in function, ${name}}};makeClassInstance = makeClass(TheName); new makeClassInstance().method1()':
    new makeClassInstance().method1(),
  'anotherInstance = {bool: true};anotherInstance.prototype = MyClass;anotherInstance.method1()':
    anotherInstance.method1(),
}

export default {
  result,
}
