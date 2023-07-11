export class ClassCollection{
    constructor() {
        this.classes = {};
    }
    findClass(path){
        return this.classes[path]??null;
    }
}