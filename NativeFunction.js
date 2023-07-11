import {GSLFunction} from "./GSLFunction";

export class NativeFunction extends GSLFunction {
    execute = null;

    constructor(path, name, execute, inputs={}, outputs={}) {
        super();
        this.path = path;
        this.name = name;
        this.execute = execute;
        this.inputs = inputs;
        this.outputs = outputs;
    }
}