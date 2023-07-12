import {GSLFunction} from "./GSLFunction";
import {Input} from "./Graphs/Input";
import {Deserialize} from "./Deserialize";

export class GraphFunction extends GSLFunction{

    elements = [new Input()];
    variables = [];
    name = "";
    path="";
    constructor(path, name) {
        super();
        this.path = path;
        this.name = name;
    }
    serialize() {
        return {
            type: 'GraphFunction',
            elements: this.elements.map(e => e.serialize()),
            connections: this.connections,
            name: this.name,
            path: this.path,
        }
    }
    static deserialize(x) {
        let graphFunction = new GraphFunction(x.path, x.name);
        graphFunction.elements = x.elements.map(e => Deserialize(e));
        graphFunction.connections = x.connections;
        return graphFunction;
    }
}