
try{
	const sum = function(a){
		if(typeof a !== 'string'){
			return 999 + a
		}else{
		throw Error("a is String");
		}
	}
	sum("abc");
}catch(e){
	console.log(e)
}finally{
	console.log('終了');
}
