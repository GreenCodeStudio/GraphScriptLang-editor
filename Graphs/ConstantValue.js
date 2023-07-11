import {AbstractNode} from "./AbstractNode";

export class ConstantValue extends AbstractNode {
    constructor(valueType, value) {
        super();
        this.valueType = valueType;
        this.value = value;
    }

    get inputs() {
        return {};
    }

    get outputs() {
        return {
            value: {
                type: this.valueType,
                name: 'value'
            }
        };
    }
    static deserialize(x) {
        let input = new ConstantValue(x.valueType, x.value);
        input.posX = x.posX;
        input.posY = x.posY;
        input.id = x.id;
        input.valueType = x.valueType;
        input.value = x.value;
        return input;
    }
    serialize() {
        return {...super.serialize(), valueType:this.valueType, value:this.value};
    }
}