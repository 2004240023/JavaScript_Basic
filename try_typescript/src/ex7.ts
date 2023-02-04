type Animal = {
	species: string;
}

// type Human = {
// 	name: string;
// }
//type User = Animal | Human
// Human型のデータもUser型に代入できる
// const mike: User = {
// 	name: "Mike"
// }

//案①
type Human = {
	name: string;
    age : number;
}

//案②
type age = {
    age : number;
}

//案②
type User = Animal | Human | age
// Animal型のデータをUser型に代入できる
const tama: User = {
	species : "cat"
}

//案②
const mike: User = {
	name: "Mike",
    age : 18
}

// Animal型でもHuman型でもないデータを代入しようとするとエラーとなる
const bob: User = {
	age: 33
}

// cre@605-13:~/JavaScript_Basic/try_typescript$ npx tsc
// src/ex7.ts:18:2 - error TS2322: Type '{ age: number; }' is not assignable to type 'User'.
// Object literal may only specify known properties, and 'age' does not exist in type 'User'.18  age: 33
//     ~~~~~~~
// Found 1 error in src/ex7.ts:18