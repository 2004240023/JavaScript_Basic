function testFunc(){
	return new Promise(resolve=>setTimeout(resolve, 1000))
}

const start = perf_hooks.performance.now()
testFunc().then(testFunc).then(testFunc).then(testFunc).then(()=>
console.log('続けての実行', perf_hooks.performance.now() - start))


//実行結果
//Promise {
//	<pending>,
//	[Symbol(async_id_symbol)]: 91,
//	[Symbol(trigger_async_id_symbol)]: 90
//  }
//  > 続けての実行 15810.276491001248


Promise.all([testFunc(), testFunc(), testFunc(), testFunc()])
.then(()=>console.log('並行実行', perf_hooks.performance.now() - start))

//実行結果
//並行実行 167623.72563500144