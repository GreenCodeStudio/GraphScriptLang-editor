import {AbstractNode} from "./AbstractNode";

export class Input extends AbstractNode{

    constructor() {
        super();


    }
    get inputs(){
        return {
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