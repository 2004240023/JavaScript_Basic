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
async function tryAsync(json){
	try{
	     const result = await parseJSONAsync(json)
	     console.log('パース結果', JSON.stringify(result))
}catch(err){
	     console.log('エラーをキャッチ', err)
	}
}

tryAsync('{"foo": 1}')

tryAsync('不正なJSON')

const result = await parseJSONAsync('{"pom": 3}')
result.pom
result.pom
result.pom


result.pom
