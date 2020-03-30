let server = require('./server/server.js')

let PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log("Your are connected on port: ", PORT)
})