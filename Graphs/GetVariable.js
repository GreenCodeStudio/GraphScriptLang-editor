import {AbstractNode} from "./AbstractNode";

export class GetVariable extends AbstractNode {


    constructor(variable) {
        super();
        this.varaible = variable;
    }


    get inputs() {
        return {}
    }

    get outputs() {

        return {
            'value': {
                name: this.varaible.name,
                type: this.varaible.type
            },
        }
    }

    static deserialize(x) {
        let item = new GetVariable();
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
            variableName: this.varaible.name,
            variableType: this.varaible.type,
            variableScope: this.varaible.scope
        };
    }
}