import {AbstractNode} from "./AbstractNode";

export class FunctionCall extends AbstractNode {


    constructor(fun) {
        super();
        this.fun = fun;

    }

    get name() {
        return this.fun.name;
    }

    get path() {
        return this.fun.path;
    }

    get inputs() {
        return {
            '__enter': {
                name: 'Enter'
            },
            ...this.fun.inputs
        }
    }

    get outputs() {
        return {
            '__exit': {
                name: 'Exit'
            },
            ...this.fun.outputs
        }
    }
}