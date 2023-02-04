const myInfo1: object = { name: "My Name", age: 20 };
console.log(myInfo1);
const myInfo2: { name: string, age: number } = { name: "My Name", age: 20 };
console.log(myInfo2);

const myInfo: { name: string, age: number } = { name: "My Name", age: 20 };
// myInfo.name = 123
// src/ex2.ts:7:1 - error TS2322: Type 'number' is not assignable to type 'string'.
// 7 myInfo.name = 123
//   ~~~~~~~~~~~
// Found 1 error in src/ex2.ts:7

myInfo.name = "123"
console.log(myInfo);