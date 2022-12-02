const express = require('express');
const enableWs = require('express-ws');
const path = require('path');

const Game = require('./Game');

const app = express()
enableWs(app)

app.ws('/echo', (ws, req) => {

    let game;
    if (req.id == undefined || Game.games.includes(req.id)){
        game = Game.games[req.id];
    } else{
        game = new Game();
    }

    const player = game.onJoin(ws);

    ws.send({type: "id", id : game.id });

    ws.on('message', msg => {
        switch (msg.type){
            case "message":
                if (player.canMessage(game.phase)){
                    game.players.filter(p => p.canMessage(game.phase).forEach(p => p.ws.send({
                        author: player.name,
                        message: msg.data
                    })))
                }

        }
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