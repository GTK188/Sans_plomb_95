let lastId = 1;

const NAMES = [
    "Blue",
    "Red",
    "Yellow",
    "Green",
    "Purple",
    "Black",
    "White",
    "Orange"
];

class Game{

    static games = {};

    static getUnusedName() {
        const pname = players.map(p => p.name);
        return NAMES.filter(n => !pname.includes(n)).pop();
    }

    players = [];

    id;

    phase = null;

    constructor() {
        this.id = lastId++;
        Game.games[this.id] = this;
    }

    onJoin(ws){
        const player = new Player( Game.getUnusedName(), ws );
        players.add(player);
        return player;
    }

    onClose() {
        Game.games[this.id] = undefined;
    }

}