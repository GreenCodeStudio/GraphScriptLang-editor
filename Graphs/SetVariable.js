import {AbstractNode} from "./AbstractNode";

export class SetVariable extends AbstractNode {


    constructor(variable) {
        super();
        this.variable = variable;
    }


    get inputs() {

        return {
            '__enter': {
                name: 'Enter',
                type: 'flow'
            },
            'value': {
                name: this.variable.name,
                type: this.variable.type
            },
        }

    }

    get outputs() {
        return {
            '__exit': {
                name: 'Exit',
                type: 'flow'
            }
        }
    }

    static deserialize(x) {
        let item = new SetVariable();
        item.posX = x.posX;
        item.posY = x.posY;
        item.id = x.id;
        item.variableType = x.variableType;
        item.variableName = x.variableName;
        item.variableScope = x.variableScope;
        return item;
    }

    serialize() {
        return {
            ...super.serialize(),
            variableName: this.variable.name,
            variableType: this.variable.type,
            variableScope: this.variable.scope
        };
    }
}