// process: 进程对象，全局变量，无需导入或定义
// process对象对象提供有关当前 Node.js 进程的信息并对其进行控制

import process from 'node:process'

import { argv, env, cwd, exit, pid } from 'node:process'
// argv返回一个数组, 其中包含启动 Node.js 进程时传入的命令行参数
// 第一个元素是nodejs执行文件的绝对路径
// 第二个元素是被执行的js文件的路径
// 其余元素是传递给脚本的命令行参数

console.log(argv)
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'E:\\cuboWork\\nodejs_notes\\2.process进程.mjs'
// ]


// env返回包含当前环境变量的对象
// 可以通过process.env访问并操作环境变量
// 在win操作系统上，环境变量不区分大小写
env.LEARNNODEJS = '你好'
console.log(env.learnnodejs)
// 你好


// cwd 返回当前工作目录的路径
console.log(cwd()) // E:\cuboWork\nodejs_notes

// process.arch 返回cpu架构，跟os.arch()一样
console.log(process.arch) // x64

// process.memoryUsage() 返回描述 Node.js 进程的内存使用量（以字节为单位）的对象。
console.log(process.memoryUsage())
// {
//   rss: 28274688,
//   heapTotal: 4935680,
//   heapUsed: 4552448,
//   external: 1711589,
//   arrayBuffers: 12829
// }


//  process.kill()
// 尽管此函数的名字是 process.kill()
// 但它实际上只是信号发送者，就像 kill 系统调用。发送的信号可能会做其他事情而不是杀死目标进程。
process.kill(process.pid)


// process.env 属性返回包含用户环境的对象, 也可以修改和查询环境变量
// 此类修改不会反映在 Node.js 进程之外,而是只在当前线程生效，线程结束便释放
console.log(process.env)

// process.on(event, listener): 用于注册事件监听器
// 可以使用process.on监听诸如
// exit （当Node.js 进程即将退出时触发）
// uncaughtException （当未捕获的异常发生时触发）
// 等事件，并在事件发生时执行相应的回调函数
process.on('exit', code => {
  console.log(code)
})

// pid 返回当前的PID(进程id)
console.log(pid)
// 17400

// exit方法用于退出当前的Node.js进程
// 可以传递一个退出码作为参数
exit(888)