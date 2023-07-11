import {AbstractNode} from "./AbstractNode";

export class FunctionCall extends AbstractNode {


    constructor(fun) {
        super();
        this.fun = fun;

    }

    get fun() {
        return this._fun;
    }

   set fun(value) {
        this._fun = value;
        this.name = value?.name;
        this.path = value?.path;
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
    static deserialize(x) {
        let fun = new FunctionCall();
        fun.posX = x.posX;
        fun.posY = x.posY;
        fun.id = x.id;
        fun.name = x.name;
        fun.path = x.path;
        return fun;
    }
    serialize() {
        return {...super.serialize(), name:this.name, path:this.path};
    }
}