// Globals - NO window!!!

// __dirname -  path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about environmnet where the program is being executed

console.log(__filename)
setInterval(() => {
    console.log("Hello World")
}, 1000)