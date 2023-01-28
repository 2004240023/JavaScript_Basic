function parseJSONAsync(json){
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            try {
                // 成功
                resolve(JSON.parse(json))
            }catch(err){
               // 失敗
                reject(err)
            }
        }, 1000)
       )
}

const success = parseJSONAsync('{"foo": 1}')
const failure = parseJSONAsync('不正なJSON')
const ex17_1 = parseJSONAsync('{"foo": "pom"}').then(()=>console.log("成功")).finally(()=>console.log("最後に実行される関数"))
const ex17_2 = parseJSONAsync('不正なJSON').catch(()=>console.log("失敗")).finally(()=>console.log("最後に実行される関数"))
console.log('********* Promise生成直後 *********')
console.log(success)
console.log(failure)
setTimeout(()=>{
console.log('********* 1秒後 **********')
        console.log(success)
        console.log(failure)
}, 1000)

//実行結果
//********* Promise生成直後 *********
//Promise {
//<pending>,
//[Symbol(async_id_symbol)]: 104,
//[Symbol(trigger_async_id_symbol)]: 5
//}
//Promise {
//<pending>,
//[Symbol(async_id_symbol)]: 106,
//[Symbol(trigger_async_id_symbol)]: 5
//}
//Timeout {
//_idleTimeout: 1000,
//_idlePrev: [TimersList],
//_idleNext: [Timeout],
//_idleStart: 13298,
//_onTimeout: [Function (anonymous)],
//_timerArgs: undefined,
//_repeat: null,
//_destroyed: false,
//[Symbol(refed)]: true,
//[Symbol(kHasPrimitive)]: false,
//[Symbol(asyncId)]: 117,
//[Symbol(triggerId)]: 5
//}
//> Uncaught SyntaxError: Unexpected token 不 in JSON at position 0
//> 成功
//最後に実行される関数
//失敗
//最後に実行される関数
//********* 1秒後 **********
//Promise {
//{ foo: 1 },
//[Symbol(async_id_symbol)]: 104,
//[Symbol(trigger_async_id_symbol)]: 5
//}
//Promise {
//<rejected> [SyntaxError: Unexpected token 不 in JSON at position 0
//],
//[Symbol(async_id_symbol)]: 106,
//[Symbol(trigger_async_id_symbol)]: 5
//}
