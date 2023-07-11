import {GSLFunction} from "./GSLFunction";
import {Input} from "./Graphs/Input";
import {Deserialize} from "./Deserialize";

export class GraphFunction extends GSLFunction{

    elements = [new Input()];
    name = "";
    path="";
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
        let graphFunction = new GraphFunction();
        graphFunction.elements = x.elements.map(e => Deserialize(e));
        graphFunction.connections = x.connections;
        graphFunction.name = x.name;
        graphFunction.path = x.path;
        return graphFunction;
    }
}