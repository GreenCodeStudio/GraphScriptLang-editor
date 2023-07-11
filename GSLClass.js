import {GraphFunction} from "./GraphFunction";

export class GSLClass {
    functions = [new GraphFunction()]

    serialize() {
        return {
            type: 'GSLClass',
            functions: this.functions.map(f => f.serialize())
        }
    }

    static deserialize(x) {
        let gslClass = new GSLClass();
        gslClass.functions = x.functions.map(f => GraphFunction.deserialize(f));
        return gslClass;
    }
}