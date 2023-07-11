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
}