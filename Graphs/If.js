import {AbstractNode} from "./AbstractNode";

export class If extends AbstractNode {

    constructor() {
        super();
    }

    get inputs() {
        return {'__enter': {name: 'Enter', type: 'flow'}, 'condition': {name: 'Condition', type: 'bool'}};
    }

    get outputs() {
        return {
            'true': {
                name: 'True',
                type: 'flow'
            },
            'false': {
                name: 'False',
                type: 'flow'
            }
        }
    }

    static deserialize(x) {
        let input = new If();
        input.posX = x.posX;
        input.posY = x.posY;
        input.id = x.id;
        return input;
    }

}