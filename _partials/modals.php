
<div id="modals">
    <?php

    foreach (glob("_partials/modals/*.php") as $filename)
    {
        include_once $filename;
    }

    ?>
</div>

