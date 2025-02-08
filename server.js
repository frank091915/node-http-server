// require http module
const http = require("http")

// create a http server instance
const server = http.createServer();

// listen to a specific port
server.listen(8088,()=>{
  console.log('http://127.0.0.1:8088')
})

// listen to request events
server.on('request',(req,res)=>{
  console.log('on request')
  // respose to the client
  res.write('091915')
  // close the connection
  res.end()
})