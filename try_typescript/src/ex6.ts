let anyValue: any = "Any Name" // any型で変数を宣言
anyValue = 123 //any型で宣言した変数にはどんな型の値でも代入できる
anyValue = "example"
console.log(anyValue.toUpperCase()) //正常に実行できる。
anyValue = false
console.log(anyValue.toUpperCase())

// cre@605-13:~/JavaScript_Basic/try_typescript$ npx tsc
// cre@605-13:~/JavaScript_Basic/try_typescript$ node dist/ex6.js
// EXAMPLE
// file:///home/cre/JavaScript_Basic/try_typescript/dist/ex6.js:7
// console.log(anyValue.toUpperCase());
//                      ^
// TypeError: anyValue.toUpperCase is not a function
//     at file:///home/cre/JavaScript_Basic/try_typescript/dist/ex6.js:7:22
//     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
// Node.js v18.13.0