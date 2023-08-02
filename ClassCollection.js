export class ClassCollection {
    constructor() {
        this.classes = {};
    }

    findClass(path) {
        return this.classes[path] ?? null;
    }

    add(x) {
        this.classes[x.path] = x;
    }

    clear() {
        this.classes = {}
    }
}