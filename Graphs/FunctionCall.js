import {AbstractNode} from "./AbstractNode";

export class FunctionCall extends AbstractNode{
    name = "";
    path="";
    parameters = [];
    constructor(name, path, parameters) {
        super();

        this.name = name;
        this.path = path;
        this.parameters = parameters;

    }
    get inputs(){
        return {
            '__enter':{
                name:'Enter'
            }
        }
    }
    get outputs(){
        return {
            '__exit':{
                name:'Exit'
            }
        }
    }
}