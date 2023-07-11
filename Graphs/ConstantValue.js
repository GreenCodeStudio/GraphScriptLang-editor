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
            }
        };
    }
    static deserialize(x) {
        let input = new ConstantValue(x.valueType, x.value);
        input.posX = x.posX;
        input.posY = x.posY;
        input.id = x.id;
        return input;
    }
}