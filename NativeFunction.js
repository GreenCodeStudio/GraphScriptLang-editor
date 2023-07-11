import {GSLFunction} from "./GSLFunction";

export class NativeFunction extends GSLFunction {
    execute = null;

    constructor(path, name, execute, options = {}) {
        super();
        this.path = path;
        this.name = name;
        this.execute = execute;
        this.inputs = options.inputs ?? {};
        this.outputs = options.outputs ?? {};
        this.static = options.static ?? false;
        this.pure = options.pure ?? false;
    }
}