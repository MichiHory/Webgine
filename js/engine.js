class WProject{
    name;
    canW;
    canH;
    canvasElm;
    static selectedElm;
    static styles = [];
    static elements = [];

    constructor(name, canW, canH, canvasElm) {
        this.name = name;
        this.canW = canW;
        this.canH = canH;
        this.canvasElm = canvasElm;

        WProject.elements = [];
        WProject.styles = [];

        WProject.selectedElm = new WGElm(null, 'div', true, 'workCanvas');
        canvasElm.dataset.id = WProject.selectedElm.id;

        let treeElm = document.querySelector('#elmTree .elm-tree');
        canvasElm.dataset.id = WProject.selectedElm.id;
        treeElm.dataset.elmid = WProject.selectedElm.id;

        console.log(WProject.selectedElm);
    }

    static getStyleByName(styleName){
        let style = WProject.styles.filter(style => style.styleName === styleName);

        return style[0];
    }

    static getElementById(elmId){
        let element = WProject.elements.filter(element => element.id === elmId);

        return element[0];
    }

    static getElementByIdName(elmIdName){
        let element = WProject.elements.filter(element => element.idName === elmIdName);

        return element[0];
    }

    static drawElements(elm = null){
        let mainElm = elm === null ? WProject.getCanvasElm() : elm;
        let childs = WProject.getElmChilds(mainElm);
        console.log(childs);
        if(mainElm.parent != null){
            WProject.drawElement(mainElm);
        }else{
            WProject.clearCanvas();
        }

        childs.forEach(function(child){
            WProject.drawElements(child);
        });
    }

    static getCanvasElm(){
        return WProject.getElementByIdName('workCanvas');
    }

    static getElmChilds(elm){
        return WProject.elements.filter(element => element.parent === elm);
    }

    static drawTree(elm = null){
        let mainElm = elm === null ? WProject.getCanvasElm() : elm;
        let childs = WProject.elements.filter(element => element.parent === mainElm);
        console.log(childs);
        if(mainElm.parent != null){
            WProject.drawTreeElement(mainElm);
        }else{
            WProject.clearTree();
        }

        childs.forEach(function(child){
            WProject.drawTree(child);
        });
    }

    static drawElement(element){
        let elm = document.createElement(element.tag);

        elm.dataset.id = element.id;

        for (let i = 0; i < element.classes.length; i++){
            elm.classList.add(element.classes[i]);
        }

        let parent = document.querySelector('[data-id="'+ element.parent.id +'"]');

        parent.appendChild(elm);
    }

    static drawTreeElement(element){
        let elm = document.createElement("div");
        let span = document.createElement("span");
        let idName = element.idName != null ? '#' + element.idName : '';

        elm.classList.add('proj-elm');
        elm.dataset.elmid = element.id;

        span.innerHTML = "(" + element.tag + "): " + idName;
        span.classList.add('tree-elm');
        span.dataset.elmid = element.id;

        if(element === WProject.selectedElm){
            span.classList.add('active');
        }

        span.addEventListener("click", function(e){
            GUI_treeElmSelect.guiFunction(e);
        });

        elm.appendChild(span);

        let parent = document.querySelector('.proj-elm[data-elmid="'+ element.parent.id +'"], .elm-tree[data-elmid="'+ element.parent.id +'"]');

        parent.appendChild(elm);
    }


    static setTestData(){
        let elm1 = new WGElm(WProject.getCanvasElm(), 'div', true);
        let elm2 = new WGElm(WProject.getElementById(elm1.id), 'div', true);
        let elm3 = new WGElm(WProject.getElementById(elm1.id), 'div', true);
        let elm4 = new WGElm(WProject.getElementById(elm2.id), 'div', true);
        let elm5 = new WGElm(WProject.getElementById(elm4.id), 'div', true);
        let elm6 = new WGElm(WProject.getElementById(elm3.id), 'div', true);
        let elm7 = new WGElm(WProject.getCanvasElm(), 'div', true);
    }

    static clearTree(){
        let treeElm = document.querySelector('#elmTree .elm-tree');
        treeElm.innerHTML = "";
    }

    static clearCanvas() {
        let canvasElm = document.getElementById('workCanvas');
        canvasElm.innerHTML = "";
    }

    static setSelectedElm(element){
        WProject.selectedElm = element;
    }

    static addElement(element){
        WProject.elements.push(element);

        if(element.parent === null) return;
        WProject.drawElement(element);
        WProject.drawTreeElement(element);
    }

}