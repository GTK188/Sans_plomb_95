class Player{
    role;

    alive = true;
    name;

    ws;

    constructor(name, ws){
        this.name = name;
        this.role = null;
        this.ws = ws
    }

    canMessage(phase){
        if (phase == "night"){
            return this.alive && this.role=="sero";
        }
        return this.alive;
    }

}