import {GSLClass} from "./GSLClass";
import {GraphFunction} from "./GraphFunction";
import {FunctionCall} from "./Graphs/FunctionCall";
import {Input} from "./Graphs/Input";
import {ConstantValue} from "./Graphs/ConstantValue";
import {If} from "./Graphs/If";

export function Deserialize(x) {
    switch (x.type) {
        case 'GSLClass':
            return GSLClass.deserialize(x);
        case 'GraphFunction':
            return GraphFunction.deserialize(x);
        case 'Input':
            return Input.deserialize(x);
        case 'FunctionCall':
            return FunctionCall.deserialize(x);
        case 'ConstantValue':
            return ConstantValue.deserialize(x);
        case 'If':
            return If.deserialize(x);
    }
}

export function Relink(x, classCollection) {
    for (let fun of x.functions) {
        for (let el of fun.elements) {
            if (el instanceof FunctionCall) {
                el.fun = classCollection.findClass(el.path).functions.find(f => f.name === el.name);
            }
        }
    }
}