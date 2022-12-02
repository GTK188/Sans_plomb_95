const express = require('express');
const enableWs = require('express-ws');
const path = require('path');

const app = express()
enableWs(app)

app.ws('/echo', (ws, req) => {
    ws.on('message', msg => {
        ws.send(msg)
    })

    ws.on('close', () => {
        console.log('WebSocket was closed')
    })
})

app.use(express.static(path.join(__dirname, '../Front/dist')))

app.get('/*', function (req, res, next) {
    console.log("serving index")
    res.sendFile(path.join(__dirname, '../Front/dist/index.html'));
})


app.listen(80)

console.log("Done");