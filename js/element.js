class WGElm{
    id;
    idName;
    tag;
    isPair;
    parent;
    styles = [];
    classes = [];
    attrs = [];
    childs = [];

    constructor(parent, tag, isPair, idName = null) {
        this.id = 'id' + Math.floor(Math.random() * 10000000);
        this.idName = idName;
        this.tag = tag;
        this.isPair = isPair;
        this.parent = parent;

        WProject.addElement(this);
    }

    addStyle(prop, val){
        this.styles.push({$prop: val});
    }

    addClass(className){
        this.classes.push(className);
    }
}