import { add } from './utils'

console.log(add(1, 2))

const el = $('xxx')


export var Bar: { a: Bar };
export interface Bar {
  count: number;
}

class Foo {
  x: number = 1;
}
// ... elsewhere ...
interface Foo {
  y: number;
}
declare let a: Foo;
console.log(a.x + a.y)

type M = {
  name: string
}

namespace M {
  export let age: number
}

declare const m: M

m.name