//1.型の使用
// string型を使用した変数を定義して画面に出力してください
let uname : String = "YOU NAME";
console.log("↓-------------------------------------↓");
console.log(`uname: ${uname}`);
// number型を使用した変数を定義して画面に出力してください
let age : number = 21;
console.log("↓-------------------------------------↓");
console.log(`age: ${age}`);
// boolean型を使用した変数を定義して画面に出力してください
let authenticity : boolean = false;
console.log("↓-------------------------------------↓");
console.log(`authenticity: ${authenticity}`);
// string型の配列を定義してこれをfor ... of のループで画面に出力してください
let num : number = 0;
let arrays : String[] = [`${uname}`,`${age}`,`${authenticity}`];
for ( const array of arrays ) {
    num = num +1;
    console.log("↓-------------------------------------↓");
    console.log(`array${num}`, array);
}

//2.オブジェクト型の定義

// type文を使って以下の要素を持つオブジェクト型を定義して画面に出力してください
// name(名前)、age(年齢)、email(メールアドレス)、inClassRoom(校舎にいるかどうか)

type Student = {
    name: string;
    age: number;
    email: string;
    classroom: boolean;
};

let YouProfile: Student = {
    name: "YOUNAME",
    age: 30,
    email: "YOUEMAIL@edu.oca.ac.jp",
    classroom: false,
};
console.log("↓-------------------------------------↓");
console.log(YouProfile);

//3.関数
// function文で以下の関数を定義してください。
// 引数にnumber型のパラメータを2つ取る
// ２つのパラメータを足してnumber型を返却する

function calculate_fn1(x: number, y: number): number {
    return x * y
}
console.log("↓-------------------------------------↓");
console.log("計算結果1:", calculate_fn1(100, 50));
function calculate_fn2(x: number, y: number, z: number): number {
    return x * y / z;
}
console.log("↓-------------------------------------↓");
console.log("計算結果2:", calculate_fn2(100, 50, 25));


// アロー関数文で以下の関数を定義してください。
// 引数にnumber型のパラメータを2つ取る
// ２つのパラメータを足してnumber型を返却する

let calculate_arrow1: (x: number, y: number) => number = (x, y) => x + y;
console.log("↓-------------------------------------↓");
console.log("計算結果1", calculate_arrow1(200, 100));

let calculate_arrow2: (x: number, y: number, z: number) => number = (x, y, z) => (x + y)/z;
console.log("↓-------------------------------------↓");
console.log("計算結果2", calculate_arrow2(400, 200, 600));

//4.ジェネリクス
// ジェネリクスを使用して以下の関数を定義してnumber型とstring型の配列で実行してみてください。
// 引数にT型の配列とT型の値を取る

function message_data<T>(message_data: T): T {
    return message_data;
}
console.log("↓-------------------------------------↓");
console.log(message_data<string>("Hello World"));
console.log(message_data<number>(999));

// ジェネリクスを使用して以下の関数を定義してnumber型とstring型の配列で実行してみてください。
// 引数にT型の配列とT型の値を取る
// 返り値にT型の配列の後ろに引数のT型の値を足した配列を返却する
function arrry_add<T>(param1: T[], param2: T): T[] {
    param1.push(param2);
    return param1;
}
console.log("↓-------------------------------------↓");
console.log(arrry_add<number>([9, 99, 999], 9999));
console.log(arrry_add<string>(["good morning", "Hello", "Good evening"], "good night"));


export {uname, age, authenticity, arrays, Student, 
    calculate_fn1, calculate_arrow1, message_data, arrry_add,};