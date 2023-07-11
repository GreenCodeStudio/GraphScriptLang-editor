import {GraphFunction} from "./GraphFunction";
import {NativeFunction} from "./NativeFunction";

export class GSLClass {
    functions = []
    constructor(path) {
        this.path = path;
    }

    addFunction(name, execute, options = {}) {
        this.functions.push(new NativeFunction(this.path, name, execute, options));
    }

    serialize() {
        return {
            type: 'GSLClass',
            path:this.path,
            functions: this.functions.map(f => f.serialize())
        }
    }

    static deserialize(x) {
        let gslClass = new GSLClass(x.path);
        gslClass.functions = x.functions.map(f => GraphFunction.deserialize(f));
        return gslClass;
    }
}