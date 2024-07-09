// child_process 子进程
// 子进程是Nodejs核心API，如果你会shell命令，他会有非常大的帮助
// 或者你喜欢编写前端工程化工具之类的，他也有很大的用处，以及处理CPU密集型应用

// 创建子进程

// Nodejs创建子进程共有7个API Sync同步API，不加是异步API
// spawn  执行命令
// exec   执行命令
// execFile   执行可执行文件
// fork   创建node子进程
// execSync 执行命令 同步执行
// execFileSync 执行可执行文件 同步执行
// spawnSync 执行命令 同步执行

import child_process from 'node:child_process'

// exec执行shell命令
// 获取node版本
child_process.exec('node -v', (error, stdout, stderr) => {
  if(!error) {
    console.log(stdout) // v20.15.0
  }
})

// execSync同步执行shell命令
// 获取node版本
const nodeVersion  = child_process.execSync('node -v')
console.log(nodeVersion) // Buffer
console.log(nodeVersion.toString()) // v20.15.0

// execFile()与exec()类似
// 不同的是指定的可执行文件 file

child_process.execFile('node', ['-v'], (error, stdout, stderr) => {
  if(!error) {
    console.log(stdout.toString()) // v20.15.0
  }
})

import process from 'node:process'
import path from 'node:path'
const dirname = process.cwd()
const filePath = path.resolve(dirname, 'mkdir/bat.cmd')
console.log(filePath)
child_process.execFile('E:\cuboWork\nodejs_notes\mkdir\bat.cmd', null,(error, stdout, stderr) => {
  console.log(error)
  if(!error) {
    console.log(stdout)
  }
})