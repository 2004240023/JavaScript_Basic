type Data<T> = {
	dataType: T
}
// 実際に使用する場合には型<型>で表現する
const strData:Data<string> = {dataType:"文字列"}
const numData:Data<number> = {dataType:123}

console.log(strData);
console.log(numData);

//関数での使用
function makeArray<T>(param1: T, param2: T): T[]{
	return [param1, param2]
}
console.log(makeArray<string>("abc", "xyz"))
console.log(makeArray<number>(123, 456))

function makeArray2<T>(param1: T, param2: T ,param3: T, param4:T): T[]{
	return [param1, param2, param3,param4];
}


console.log(makeArray2<string>("abc", "def","ghi","jkl"))
console.log(makeArray2<number>(123, 345, 567, 789))