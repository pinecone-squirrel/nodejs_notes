// 学习path模块先了解POSIX
// path模块在不同的操作系统是有差异的(windows | posix)

// posix（Portable Operating System Interface of UNIX）
// posix表示可移植操作系统接口，也就是定义了一套标准
// 遵守这套标准的操作系统有(unix,like,unix,linux,macOs,windows wsl)

// posix标准包含多个部分，主要涵盖了文件管理、进程控制、用户权限、系统调用等方面
// posix是为了让不同的操作系统之间具有更好的兼容性，以便编写跨平台程序

// Windows 并没有完全遵循 POSIX 标准。Windows 在设计上采用了不同于 POSIX 的路径表示方法。
// 在 Windows 系统中，路径使用反斜杠（\）作为路径分隔符。这与 POSIX 系统使用的正斜杠（/）是不同的。
// 这是 Windows 系统的历史原因所致，早期的 Windows 操作系统采用了不同的设计选择。


import { win32, basename, dirname, extname, join, resolve, posix, parse, format } from 'node:path'
// windows与posix 差异

// path.basename() 方法返回 path 的最后一部分
console.log(basename('\\files\\index.html')) // index.html
// 但是如果以上代码在posix上会返回 \\files\\index.html
// 如果要在posix系统处理windows的路径需要调用对应操作系统的方法应该修改为
console.log(win32.basename('\\files\\index.html')) // index.html

// path.dirname() 方法返回 path 的目录名(除了最后一个路径的其他路径)
console.log(dirname('/aaa/bbb/ccc/ddd')) // /aaa/bbb/ccc

// path.extname() 方法返回 path 的扩展名
// 如果有多个 . 返回最后一个 如果没有扩展名返回空
// 或者除了 path 的基本名称（参见 path.basename()）的第一个字符之外没有 . 个字符，则返回空字符串
console.log(extname('index.html')) // html
console.log(extname('index')) // ''
console.log(extname('index.html.js')) // '.js'
console.log(extname('.js')) // ''

// path.join() 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径
// 支持./  ../操作
console.log(join('aaa', '/bbb', 'ccc', '/ddd/eee', '..'))
// aaa\bbb\ccc\ddd(因为是在windows平台，所以是反斜杠)
console.log(posix.join('aaa', '/bbb', 'ccc', '/ddd/eee', '..'))
// aaa/bbb/ccc/ddd 这样就是正斜杠
// 反复理解这句话   使用特定于平台的分隔符作为定界符

// path.resolve() 方法将路径或路径片段的序列解析为绝对路径
// 零长度的path将会被忽略
// 不传path将会返回当前工作目录
console.log(resolve()) // E:\cuboWork\nodejs_notes
console.log(resolve('/aaa', '/bbb')) // /bbb
// 给定路径是从右往左处理的，每个path会被追加到前面，直到构建绝对路径
// 一旦构建出绝对路径，剩下多余的路径将会被抛弃掉，例如
console.log(resolve('/aaa', '/bbb', 'ccc')) // /bbb/ccc
// 因为ccc不是绝对路径，但是/bbb/ccc已经构建出了绝对路径，那么/aaa就被抛弃了
// 如果处理完所有的path还没有构建出绝对路径，则使用当前工作目录作为
console.log(resolve('aaa', 'bbb')) // E:\cuboWork\nodejs_notes\aaa\bbb


// path.parse和path.format正好相反
// path.parse() 方法接收一个路径字符串作为参数，返回一个包含路径各个组成部分的对象
console.log(parse('/aaa/bbb/ccc/index.js'))
// 返回对象具有以下属性
const pathObject = {
  root: '/', // 路径的根目录
  dir: '/aaa/bbb/ccc', // 文件所在的目录
  base: 'index.js', // 文件名
  ext: '.js', // 文件扩展名
  name: 'index' // 文件去除扩展名
}

// path.format() 方法从对象返回路径字符串
console.log(format(pathObject))
// /aaa/bbb/ccc/index.js