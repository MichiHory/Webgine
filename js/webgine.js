let WebgineProj = null;
let SelectedElm = null;

window.addEventListener('load', function () {

    GUI.guis.forEach(function (gui){
        let guiElms = document.querySelectorAll(gui.selector);
        for(let i = 0; i < guiElms.length; i++){
            let guiElm = guiElms[i];
            guiElm.addEventListener(gui.event, function (e){
                gui.guiFunction(e);
            });
        }
    });

});