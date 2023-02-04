//import {test_name, test_age} from "./test_export.js" //←注意!!tsでなくjsにすること!!
//console.log(test_name, test_age);

// import {test_name, test_age, test_export_fn, TestExportType} from "./test_export.js" 
// console.log(test_name, test_age);
// console.log(test_export_fn(3, 5));

// const testExport: TestExportType = {
// 	name: "TestExport",
// 	age: 24,
// }
// console.log(testExport);

import {another_name, another_age, test_export_fn as another_fn, TestExportType as AnotherType} from "./test_export.js" 
console.log(another_name, another_age);
console.log(another_fn(3, 5));

const testExport: AnotherType = {
	name: "AnotherExport",
	age: 24,
}
console.log(testExport);