const all_fail = Promise.any([
Promise.reject(new Error('エラー')),
Promise.reject(new Error('エラー')),
Promise.reject(new Error('エラー'))
])
all_fail

//実行結果

// > Uncaught [AggregateError: All promises were rejected] {
// [errors]: [t(new Error('エラー')),
// Error: エラーw Error('エラー')),
// at REPL3:2:16ror('エラー'))
// at Script.runInThisContext (node:vm:129:12)
// at REPLServer.defaultEval (node:repl:572:29)
// at bound (node:domain:433:15)
// at REPLServer.runBound [as eval] (node:domain:444:12)
// at REPLServer.onLine (node:repl:902:10)
// at REPLServer.emit (node:events:525:35)
// at REPLServer.emit (node:domain:489:12)
// at [_onLine] [as _onLine] (node:internal/readline/interface:422:12)
// at [_line] [as _line] (node:internal/readline/interface:892:18),
// Error: エラー
// at REPL3:3:16
// at Script.runInThisContext (node:vm:129:12)
// at REPLServer.defaultEval (node:repl:572:29)
// at bound (node:domain:433:15)
// at REPLServer.runBound [as eval] (node:domain:444:12)
// at REPLServer.onLine (node:repl:902:10)
// at REPLServer.emit (node:events:525:35)
// at REPLServer.emit (node:domain:489:12)
// at [_onLine] [as _onLine] (node:internal/readline/interface:422:12)
// at [_line] [as _line] (node:internal/readline/interface:892:18),
// Error: エラー
// at REPL3:4:16
// at Script.runInThisContext (node:vm:129:12)
// at REPLServer.defaultEval (node:repl:572:29)
// at bound (node:domain:433:15)
// at REPLServer.runBound [as eval] (node:domain:444:12)
// at REPLServer.onLine (node:repl:902:10)
// at REPLServer.emit (node:events:525:35)
// at REPLServer.emit (node:domain:489:12)
// at [_onLine] [as _onLine] (node:internal/readline/interface:422:12)
// at [_line] [as _line] (node:internal/readline/interface:892:18)
// ]

// all_fail
// omise {
// <rejected> [AggregateError: All promises were rejected] {
// [errors]: [
// Error: エラー
// at REPL3:2:16
// at Script.runInThisContext (node:vm:129:12)
// at REPLServer.defaultEval (node:repl:572:29)
// at bound (node:domain:433:15)
// at REPLServer.runBound [as eval] (node:domain:444:12)
// at REPLServer.onLine (node:repl:902:10)
// at REPLServer.emit (node:events:525:35)
// at REPLServer.emit (node:domain:489:12)
// at [_onLine] [as _onLine] (node:internal/readline/interface:422:12)
// at [_line] [as _line] (node:internal/readline/interface:892:18),
// Error: エラー
// at REPL3:3:16
// at Script.runInThisContext (node:vm:129:12)
// at REPLServer.defaultEval (node:repl:572:29)
// at bound (node:domain:433:15)
// at REPLServer.runBound [as eval] (node:domain:444:12)
// at REPLServer.onLine (node:repl:902:10)
// at REPLServer.emit (node:events:525:35)
// at REPLServer.emit (node:domain:489:12)
// at [_onLine] [as _onLine] (node:internal/readline/interface:422:12)
// at [_line] [as _line] (node:internal/readline/interface:892:18),
// Error: エラー
// at REPL3:4:16
// at Script.runInThisContext (node:vm:129:12)
// at REPLServer.defaultEval (node:repl:572:29)
// at bound (node:domain:433:15)
// at REPLServer.runBound [as eval] (node:domain:444:12)
// at REPLServer.onLine (node:repl:902:10)
// at REPLServer.emit (node:events:525:35)
// at REPLServer.emit (node:domain:489:12)
// at [_onLine] [as _onLine] (node:internal/readline/interface:422:12)
// at [_line] [as _line] (node:internal/readline/interface:892:18)
// ]
// },
// [Symbol(async_id_symbol)]: 190,
// [Symbol(trigger_async_id_symbol)]: 5
// }