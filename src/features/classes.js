import safeToString from '@/composables/safeToString'

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

class MyClass {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  method1() {
    return this
  }
}

const myClassInstance = new MyClass('myClassInstance', 4)

MyClass.prototype.method2 = function () {
  return this.name
}
Item1.prototype.method2 = function () {
  return this.name
}

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
}

export default {
  result,
}
