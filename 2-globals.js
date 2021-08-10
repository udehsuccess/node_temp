// GLOBALS - NO WINDOW !!!! (Means that anywhere variables are l can access them)

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// Process - info about env where the program is being executed


console.log (__dirname)
setInterval(() => {
    console.log("Loving Node World")
}, 1200)