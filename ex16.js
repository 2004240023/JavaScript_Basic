ifunction parseJSONAsync1(json, callback){
	try{
		setTimeout(()=>{
			callback(JSON.parse(json))
		}, 1000)
	} catch (err){
		console.log('エラーをキャッチ', err)
	}
}
parseJSONAsync1('不正なJSON', result=>console.log('parse結果', result))

//実行結果
//undefined
//> Uncaught SyntaxError: Unexpected token 不 in JSON at position 0

function parseJSONAsync2(json, callback){
	setTimeout(()=>{
		try{
			callback(null, JSON.parse(json))
	}catch(err){
			callback(err)
		}
	}, 1000)
}
parseJSONAsync2('不正なJSON', (err, result)=>console.log('parse結果', err, result))

//実行結果
//undefined
//> parse結果 SyntaxError: Unexpected token 不 in JSON at position 0
//at JSON.parse (<anonymous>)
//at Timeout._onTimeout (REPL3:4:24)
//at listOnTimeout (node:internal/timers:564:17)
//at process.processTimers (node:internal/timers:507:7) undefined
