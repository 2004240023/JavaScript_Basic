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
//[Symbol(async_id_symbol)]: 149,
//[Symbol(trigger_async_id_symbol)]: 5
//}
//Promise {
//<pending>,
//[Symbol(async_id_symbol)]: 151,
//[Symbol(trigger_async_id_symbol)]: 5
//}
//Timeout {
//_idleTimeout: 1000,
//_idlePrev: [TimersList],
//_idleNext: [Timeout],
//_idleStart: 59501,
//_onTimeout: [Function (anonymous)],
//_timerArgs: undefined,
//_repeat: null,
//_destroyed: false,
//[Symbol(refed)]: true,
//[Symbol(kHasPrimitive)]: false,
//[Symbol(asyncId)]: 154,
//[Symbol(triggerId)]: 5
//}
//> Uncaught SyntaxError: Unexpected token 不 in JSON at position 0
//> ********* 1秒後 **********
//Promise {
//{ foo: 1 },
//[Symbol(async_id_symbol)]: 149,
//[Symbol(trigger_async_id_symbol)]: 5
//}
//Promise {
//<rejected> [SyntaxError: Unexpected token 不 in JSON at position 0
//],
//[Symbol(async_id_symbol)]: 151,
//[Symbol(trigger_async_id_symbol)]: 5
