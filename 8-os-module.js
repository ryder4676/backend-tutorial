const os = require("os");

// info about current user from their current device
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(`System uptime is: ${os.uptime()} seconds!`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);