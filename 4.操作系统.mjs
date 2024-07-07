// node:os 模块提供了与操作系统相关的实用方法和属性
import os from 'node:os'
// os.type() 返回的操作系统名称
// 它在 Linux 上返回 'Linux'，在 macOS 上返回 'Darwin'，在 Windows 上返回 'Windows_NT'
console.log(os.type()) // Windows_NT


// os.platform() 返回标识为其编译 Node.js 二进制文件的操作系统平台的字符串
// 该值在编译时设置。可能的值为 'aix'、'darwin'、'freebsd'、'linux'、'openbsd'、'sunos'、以及 'win32'
console.log(os.platform()) // win32

// os.release() 返回操作系统的版本
console.log(os.release()) // 10.0.19045

// os.homedir() 返回用户目录
// 原理就是 windows echo %USERPROFILE% posix $HOME
console.log(os.homedir()) // C:\Users\yuanmogul

// os.arch() 返回CPU 架构
// 可能的值为 'arm'、'arm64'、'ia32'、'loong64'、'mips'、'mipsel'、
// 'ppc'、'ppc64'、'riscv64'、's390'、's390x' 和 'x64'
console.log(os.arch()) // x64

// os.cpus() 返回包含有关每个逻辑 CPU 内核（线程）的信息的对象数组
console.log(os.cpus())
const cpusList = [
  {
    model: 'Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz', // 名称
    speed: 2808, // cpu时钟频率
    times: { user: 885437, nice: 0, sys: 1170875, idle: 10333437, irq: 182015 }
  },
  // ...还有5个
]
// i5-8400确实是6核6线程，2.8GHz频率

// os.networkInterfaces()
console.log(os.networkInterfaces())