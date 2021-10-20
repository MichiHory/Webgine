<!DOCTYPE html>

<html lang="cs">
    <?php
        require_once "_partials/head.php";
    ?>

    <body>
    <div id="engine">
        <div id="topPanel">
            <div id="topMenu">
                <div id="menuProject" class="menu-item">
                    <div class="webgine-icon"></div>
                    <div class="submenu">
                        <div id="menuNewProject" class="submenu-item">Nový</div>
                        <div id="menuSaveProject" class="submenu-item">Uložit projekt</div>
                        <div id="menuLoadProject" class="submenu-item">Nahrát projekt</div>
                        <div id="menuExportApp" class="submenu-item">Export aplikace</div>
                    </div>
                </div>
                <div class="project-name no-project">
                    Žádný projekt
                </div>
            </div>
            <div id="topTools">
                <div id="canvasResizer">
                    <label>
                        Velikost Plátna:
                        <input id="canvasResizerWidth" type="text" placeholder="Width"> x
                        <input id="canvasResizerHeight" type="text" placeholder="Height">
                        <input id="canvasResizerBtn" type="button" value="Resize">
                    </label>
                </div>

            </div>
        </div>
        <div id="leftPanel">
            <div id="elementsList">
                <div class="panel-name">
                    Elementy
                </div>
                <div class="panel-content elements">
                    <div class="panel-elm">&lt;div&gt; <div class="add-icon" data-type="div"></div></div>
                    <div class="panel-elm">&lt;span&gt;<div class="add-icon" data-type="span"></div></div>
                    <div class="panel-elm">&lt;p&gt;<div class="add-icon" data-type="p"></div></div>
                    <div class="panel-elm">&lt;nav&gt;<div class="add-icon" data-type="nav"></div></div>
                    <div class="panel-elm">&lt;a&gt;<div class="add-icon" data-type="a"></div></div>
                    <div class="panel-elm">&lt;ul&gt;<div class="add-icon" data-type="ul"></div></div>
                    <div class="panel-elm">&lt;li&gt;<div class="add-icon" data-type="li"></div></div>
                    <div class="panel-elm">&lt;img&gt;<div class="add-icon" data-type="img"></div></div>
                    <div class="panel-elm">&lt;picture&gt;<div class="add-icon" data-type="picture"></div></div>
                    <div class="panel-elm">&lt;source&gt;<div class="add-icon" data-type="source"></div></div>
                    <div class="panel-elm">&lt;article&gt;<div class="add-icon" data-type="article"></div></div>
                    <div class="panel-elm">&lt;button&gt;<div class="add-icon" data-type="button"></div></div>
                    <div class="panel-elm">&lt;input&gt;<div class="add-icon" data-type="input"></div></div>
                    <div class="panel-elm">&lt;table&gt;<div class="add-icon" data-type="table"></div></div>
                    <div class="panel-elm">&lt;tbody&gt;<div class="add-icon" data-type="tbody"></div></div>
                    <div class="panel-elm">&lt;thead&gt;<div class="add-icon" data-type="thead"></div></div>
                    <div class="panel-elm">&lt;tfoot&gt;<div class="add-icon" data-type="tfoot"></div></div>
                    <div class="panel-elm">&lt;tr&gt;<div class="add-icon" data-type="tr"></div></div>
                    <div class="panel-elm">&lt;td&gt;<div class="add-icon" data-type="td"></div></div>
                    <div class="panel-elm">&lt;th&gt;<div class="add-icon" data-type="th"></div></div>
                </div>
            </div>
        </div>
        <div id="rightPanel">
            <div id="elmTree">
                <div class="panel-name">
                    Strom
                </div>
                <div class="panel-content elm-tree">
                    <div class="proj-elm">
                        <span>ELM</span>
                        <div class="proj-elm">
                            <span>ELM</span>
                        </div>
                        <div class="proj-elm">
                            <span>ELM</span>
                            <div class="proj-elm">
                                <span>ELM</span>
                            </div>
                        </div>
                    </div>
                    <div class="proj-elm">
                        <span>ELM</span>
                    </div>
                    <div class="proj-elm">
                        <span>ELM</span>
                        <div class="proj-elm">
                            <span>ELM</span>
                        </div>
                        <div class="proj-elm">
                            <span>ELM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="elmSettings">
                <div class="panel-name">
                    Vlastnosti
                </div>
                <div class="panel-content elm-properties">
                    <div class="properties-row">
                        <div class="elm-property">Width: </div>
                        <div class="elm-property-val">
                            <input type="text" placeholder="0">
                            <select id="elm-property-val-w-unit">
                                <option value="px">px</option>
                                <option value="%">%</option>
                                <option value="vw">vw</option>
                                <option value="vh">vh</option>
                                <option value="pt">pt</option>
                                <option value="em">em</option>
                                <option value="rem">rem</option>
                            </select>
                        </div>
                    </div>
                    <div class="properties-row">
                        <div class="elm-property">Height: </div>
                        <div class="elm-property-val">
                            <input type="text" placeholder="0">
                            <select id="elm-property-val-h-unit">
                                <option value="px">px</option>
                                <option value="%">%</option>
                                <option value="vw">vw</option>
                                <option value="vh">vh</option>
                                <option value="pt">pt</option>
                                <option value="em">em</option>
                                <option value="rem">rem</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="workspace">
            <div class="editorSelector sel-left" data-editor_element="Highlight"></div>
            <div class="editorSelector sel-right" data-editor_element="Highlight"></div>
            <div class="editorSelector sel-top" data-editor_element="Highlight"></div>
            <div class="editorSelector sel-bottom" data-editor_element="Highlight"></div>

            <div id="workCanvas">

            </div>
        </div>
        <div id="bottomPanel">

        </div>
    </div>



    <?php
    require_once "_partials/modals.php";
    ?>

    <?php
    require_once "_partials/scripts.php";
    ?>
    </body>

</html>

