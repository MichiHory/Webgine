class GUI{
    static guis = [];
    guiname;
    selector;
    event;
    job;

    constructor(guiname, selector, event, job) {
        if(!WGFunc.isString(guiname) || !WGFunc.isString(selector) || !WGFunc.isString(event)) return;

        this.guiname = guiname;
        this.selector = selector;
        this.event = event;
        this.job = job;

        GUI.guis.push(this);
    }

    guiFunction(e = null){
        try{
            this.job(e);
        } catch(i) {
            console.log(i)
        }
    }
}

let GUI_newProjectModal = new GUI('newProjectModal', '#menuNewProject', 'click', function(e){
    WGFunc.showModal('modalNewProject');
});

let GUI_modalClose = new GUI('modalClose', '.dialog .close-btn', 'click', function(e){
    WGFunc.closeModal();
});

let GUI_startNewProject = new GUI('startNewProject', '#inputNewProjCreate', 'click', function(e){
    let projectName = document.getElementById('inputNewProjName').value ;
    let canW = document.getElementById('inputNewProjWidth').value ;
    let canH = document.getElementById('inputNewProjHeight').value ;

    WebgineProj = WGFunc.createNewProject(projectName, canW, canH);
    WProject.setTestData();
    WProject.drawTree();
    WGFunc.closeModal();
});

let GUI_canvasResizer = new GUI('canvasResizer', '#canvasResizerBtn', 'click', function(e){
    let canW = document.getElementById('canvasResizerWidth').value ;
    let canH = document.getElementById('canvasResizerHeight').value ;

    WGFunc.setCanvasSize(canW, canH);
});

let GUI_addElement = new GUI('addElement', '.panel-elm .add-icon', 'click', function(e){
    let elmType = e.target.dataset.type;
    new WGElm(WProject.selectedElm, elmType, true);
});

let GUI_treeElmSelect = new GUI('treeElmSelect', '.elmTree', 'click', function(e){
    let selectedElm = e.target;
    let element = WProject.getElementById(selectedElm.dataset.elmid)

    console.log(selectedElm);
    WProject.setSelectedElm(element);
    WGFunc.setTreeSelected(selectedElm.dataset.elmid);
    WGFunc.selectElementById(selectedElm.dataset.elmid);
});
