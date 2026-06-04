import { add } from './utils'

console.log(add(1, 2))

const el = $('xxx')


function isNumber (val: unknown): asserts val is number {
}

declare const x: never 

function un(val: unknown) {
  isNumber(val)

  const x = val
}

let s = {a: '1'} as const
let a = [1, '2'] as const

declare module 'my-lib' {
  export const name: string
}

declare function p<T, K extends keyof T>(val: T, key: K): T[K]
declare function p1<T>(val: T, key: keyof T): T[keyof T]

const r = p({a: '1', b: 2}, 'a')
const r1 = p1({a: '1', b: 2}, 'a')
