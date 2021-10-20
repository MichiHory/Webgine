class WGStyle{
    property;
    value;

    constructor(property, value, css = null) {
        this.property = property;
        this.value = value;
    }
}


class WGStyles{
    id;
    styleName;
    selector;
    css;

    constructor(styleName, selector, css = null) {
        this.id = 'styleid' + (new Date()).getTime();
        this.styleName = styleName;
        this.selector = selector;
        this.css = css;

        WProject.styles.push(this);
    }
}