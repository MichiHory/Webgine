class WGFunc{
    static isString(variable) {
        return typeof variable === 'string' || variable instanceof String;
    }

    static hasClass(element, classname){
        return element.classList.contains(classname);
    }

    static showModal(modalId) {
        let modalCont = document.getElementById('modals');
        let modal = document.getElementById(modalId);

        if(!WGFunc.hasClass(modalCont, 'active')){
            modalCont.classList.add('active');
        }

        WGFunc.hideAllModals();
        modal.classList.add('active');
    }

    static closeModal(modalId) {
        let modalCont = document.getElementById('modals');

        WGFunc.hideAllModals();
        modalCont.classList.remove('active');
    }

    static hideAllModals(){
        let modals = document.querySelectorAll('#modals .modal');

        for(let i = 0; i < modals.length; i++){
            let modal = modals[i];
            modal.classList.remove('active');
        }
    }

    static createNewProject(projectName, canW, canH){
        if(!WGFunc.isString(projectName) || !WGFunc.isNormalInteger(canW) || !WGFunc.isNormalInteger(canH)) return false;

        let projectNameElm = document.querySelector('#topMenu .project-name');
        let canvasElm = document.getElementById('workCanvas');

        projectNameElm.classList.remove('no-project');
        projectNameElm.innerHTML = projectName;

        WGFunc.setCanvasSize(canW, canH)

        return new WProject(projectName, parseInt(canW), parseInt(canW), canvasElm);
    }

    static setCanvasSize(canW, canH){
        if(!WGFunc.isNormalInteger(canW) || !WGFunc.isNormalInteger(canH)) return false;
        let canvasElm = document.getElementById('workCanvas');

        canvasElm.style.width = canW + "px";
        canvasElm.style.height = canH + "px";

        document.getElementById('canvasResizerWidth').value = canW;
        document.getElementById('canvasResizerHeight').value = canH;
    }

    static isNormalInteger(str) {
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    static setTreeSelected(id){
        let treeElms = document.querySelectorAll('#elmTree .tree-elm');
        let selectedElm = document.querySelector('#elmTree .tree-elm[data-elmid="'+id+'"]')

        for(let i = 0; i < treeElms.length; i++){
            let treeElm = treeElms[i];

            treeElm.classList.remove('active');
        }

        selectedElm.classList.add('active');
    }

    static selectElementById(id){
        let element = document.querySelector('#workCanvas [data-id="'+id+'"]');
        let elOffsetT = element.offsetTop;
        let elOffsetL = element.offsetLeft;
        let elOffsetB = elOffsetT + element.offsetHeight;
        let elOffsetR = elOffsetL + element.offsetWidth;

        let highlights = document.querySelectorAll('.editorSelector');

        let highlightT = document.querySelector('.sel-top');
        let highlightL = document.querySelector('.sel-left');
        let highlightB = document.querySelector('.sel-bottom');
        let highlightR = document.querySelector('.sel-right');

        for(let i = 0; i < highlights.length; i++){
            highlights[i].classList.add('active');
        }

        highlightT.style.top = elOffsetT + 'px';
        highlightL.style.left = elOffsetL + 'px';
        highlightB.style.top = elOffsetB + 'px';
        highlightR.style.left = elOffsetR + 'px';
    }
}

