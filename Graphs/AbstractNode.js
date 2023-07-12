export class AbstractNode {
    posX = 0;
    posY = 0;
    id = "";

    constructor() {
        this.id = AbstractNode.generateId()

    }
    static generateId(){
        return +new Date() + '' + Math.floor(Math.random() * 10000000000000000)
    }

    serialize() {
        return {
            type: this.constructor.name,
            posX: this.posX,
            posY: this.posY,
            id: this.id
        }
    }

}