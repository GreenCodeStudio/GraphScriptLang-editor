export class AbstractNode {
    posX = 0;
    posY = 0;
    id="";

    constructor() {
        this.id=+new Date() + ''+Math.floor(Math.random() * 10000000000000000)

    }

}