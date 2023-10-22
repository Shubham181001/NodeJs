let os = require('os');
console.log(os.platform()); //win32 platform
console.log(os.arch()); //x64 platform
console.log(os.cpus().length + " core"); // 8 core
console.log(os.freemem()); //1641832448 bytes
console.log(os.uptime()); //671784 sec