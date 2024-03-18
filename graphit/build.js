class button {
    constructor(Graph) {
        if(Graph.Text == null) Graph.Text = "???";
        Graph.Element.innerHTML =
        `<div><button>${Graph.Text}</button></div>`;
    }
}

class graph {
    has(Attribute) {
        return this.Element.hasAttribute(Attribute);
    }
    
    get(Attribute) {
        return this.Element.getAttribute(Attribute);
    }

    constructor(Element) {
        this.Element = Element;
        this.Child = this.Element.innerHTML;
        this.X = this.get("x");
        this.Y = this.get("y");
        this.W = this.get("w");
        this.H = this.get("h");
        this.Text = this.get("txt");

        if(this.X == null) this.X = "0";
        if(this.Y == null) this.Y = "0";

        if (this.has("button")) new button(this);
    }
}

build();

function build() {
    let List = document.getElementsByTagName("graph");
    let Length = List.length;
    let i = 0;

    for (; i < Length; i++) {
        new graph(List[i]);
    }
}

    /*
    {
        let child = elem.innerHTML;

        let name = get("name", `object_${i}`);
        let x = get("x");
        let y = get("y");
        let w = get("w");
        let h = get("h");
        let txt = get("txt");
        let ref = get("ref", " ");
        let click = get("click");

        let tag = "";
        tag += `<div style='left:${x}px; top:${y}px;' >`

        if (has("group")) {
            tag += child;
        }

        if (has("textblock")) {
            tag += `<div id='${name}' class='default' style='width:${w}px; height:${h}px; text-align:left;'/>${child}</div>`
        }

        if (has("label")) {
            tag += `<input id='${name}' type='button' class='default' value='${txt}' style='width:${w}px; height:${h}px;'/>`
        }

        if (has("title")) {
            tag += `<input id='${name}' type='button' class='title' value='${txt}' style='width:${w}px; height:${h}px;'/>`
        }

        if (has("block")) {
            tag += `<input id='${name}' type='button' class='block' value='${txt}' style='width:${h}px; height:${w}px; transform: rotate(-90deg);'/>`
        }

        if (has("button")) {
            tag += `<input id='${name}' type='button' class='hover' value='${txt}' onclick='${click}' style='width:${w}px;'/>`
        }

        if (has("toggle")) {
            tag += `<input id='${name}' type='button' class='passive' onclick='toggle(${name})' value='OFF' style='width:40px;'/>`
        }

        if (has("input")) {
            tag += `<input id='${name}' type='text' class='focus' value='${txt}' placeholder='${ref}' style='width:${w}px;'/>`
        }

        if (has("password")) {
            tag += `<div style='width:165px;'><input id='${name}' type='password' class='focus' value='${txt}' placeholder='${ref}' style='width:135px;'/><input type='button' class='hover' onclick='password(${name})' value='?' style='width:25px; margin-left:5px;'/></div>`
        }

        if (has("value")) {
            tag += `<div style='width:165px;'><input id='${name}' type='button' class='value' value='${txt}' style='width:135px;'/><input type='button' class='reference' value='${ref}' style='width:25px; margin-left:5px;'/></div>`
        }

        if (has("svg"))
        {
            tag += `<svg id='${name}' width="${w}" height="${h}">${child}</svg>`
        }

        tag += "</div>";

        elem.innerHTML = tag;
    }
    */