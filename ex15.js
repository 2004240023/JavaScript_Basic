fs.readdir(
	'.', // nodeを実行している現在のディレクトリ
	(err, files)=>{ // コールバック
		console.log('fs.readdir()を実行結果')
			console.log('err', err)
		console.log('files', files)
	}
)

fs.readdir(
'nonefile',
(err, files)=>{
        console.log('fs.readdir()を実行結果')
                console.log('err', err)
        console.log('files', files)
	}
)

//実行結果
//> fs.readdir()を実行結果
//err nulld
//files [
//'.ex15.js.swp',   '.git',
//'.gitignore',     'Hello',
//'LICENSE',        'ex1.js',
//'ex14.js',        'ex15.js',
//'ex2.js',         'ex4.js',
//'ext3.js',        'test2_es.mjs',
//'test_common.js', 'test_es.mjs'
//]
//
//実行結果
//> fs.readdir()を実行結果
//err [Error: ENOENT: no such file or directory, scandir 'nonefile'] {
//errno: -2,
//code: 'ENOENT',
//syscall: 'scandir',
//path: 'nonefile'
//}
//files undefined
