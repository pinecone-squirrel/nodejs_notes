// 在nodejs中使用global定义全局变量
console.log(global)

// 在浏览器中我们定义的全局变量都在window
// nodejs在global
// 不同的环境还需要判断
// 于是在ECMAScript 2020 出现了一个globalThis全局变量
// 在nodejs环境会自动切换成global，浏览器环境自动切换window
console.log(globalThis)


// 在cjs规范中
// 注入了__dirname，__filename, module, exports, require五个内置变量用于实现导入导出的能力

// 但是在esm规范中
// 模块导入导出用 import/export
// __dirname和__filename也有规范的写法

// __dirname：当前模块的目录名（绝对路径）
// __filename：当前模块的完整绝对路径和文件名（包括文件的拓展名）

// 在esm规范中需要按照以下方式获取这两个变量
import.meta.url
// 模块的绝对 file: URL
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// console.log(__filename)
// console.log(__dirname)

// 在node 20.11.0后加入了以下变量，可以直接获取
import.meta.filename
import.meta.dirname