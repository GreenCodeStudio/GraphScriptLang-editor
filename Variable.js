export class Variable {
    scope = "function";
    name = "";
    type = "";
    nullable = false;

    value = null;

    constructor(scope, name, type, nullable, value) {
        this.scope = scope;
        this.name = name;
        this.type = type;
        this.nullable = nullable;
        this.value = value;
    }
}