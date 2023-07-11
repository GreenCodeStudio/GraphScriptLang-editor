import {AbstractNode} from "./AbstractNode";

export class Input extends AbstractNode {

    constructor() {
        super();


    }

    get inputs() {
        return {}
    }

    get outputs() {
        return {
            '__exit': {
                name: 'Exit'
            }
        }
    }

    static deserialize(x) {
        let input = new Input();
        input.posX = x.posX;
        input.posY = x.posY;
        input.id = x.id;
        return input;
    }

}