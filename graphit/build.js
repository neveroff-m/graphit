class group {
    constructor(Graph) {
        Graph.Element.innerHTML =
        `<div id='${Graph.ID}' style='left:${Graph.X}px; top:${Graph.Y}px;'>${Graph.Child}</div>`;
    }
}

class label {
    constructor(Graph) {
        if(Graph.W == null) Graph.W = "115"; else Graph.W =Graph.W * 30 - 5;
        if(Graph.H == null) Graph.H = "25"; else Graph.H = Graph.H * 30 - 5;
        if(Graph.Text == null) Graph.Text = "???";
        Graph.Element.innerHTML =
        `<div style='left:${Graph.X}px; top:${Graph.Y}px;'><input type='button' class='default' id='${Graph.ID}' value='${Graph.Text}' style='width:${Graph.W}px; height:${Graph.H}px;'/></div>`;
    }
}

class label_title {
    constructor(Graph) {
        if(Graph.W == null) Graph.W = "115"; else Graph.W =Graph.W * 30 - 5;
        if(Graph.H == null) Graph.H = "25"; else Graph.H = Graph.H * 30 - 5;
        if(Graph.Text == null) Graph.Text = "???";
        Graph.Element.innerHTML =
        `<div style='left:${Graph.X}px; top:${Graph.Y}px;'><input type='button' class='default title' id='${Graph.ID}' value='${Graph.Text}' style='width:${Graph.W}px; height:${Graph.H}px;'/></div>`;
    }
}

class button {
    constructor(Graph) {
        if(Graph.W == null) Graph.W = "115"; else Graph.W = Graph.W * 30 - 5;
        if(Graph.H == null) Graph.H = "25"; else Graph.H = Graph.H * 30 - 5;
        if(Graph.Text == null) Graph.Text = "???";
        Graph.Element.innerHTML =
        `<div style='left:${Graph.X}px; top:${Graph.Y}px;'><input type='button' class='hover' id='${Graph.ID}' value='${Graph.Text}' style='width:${Graph.W}px; height:${Graph.H}px;'/></div>`;
    }
}

class icon {
    constructor(Graph) {
        Graph.W = 25;    
        Graph.H = 25;
        if(Graph.Text == null) Graph.Text = "???"; else Graph.Text = `&#x${Graph.Text};`;
        Graph.Element.innerHTML =
        `<div style='left:${Graph.X}px; top:${Graph.Y}px;'><input type='button' class='hover icon' id='${Graph.ID}' value='${Graph.Text}' style='width:${Graph.W}px; height:${Graph.H}px;'/></div>`;
    }
}

class input {
    constructor(Graph) {
        if(Graph.W == null) Graph.W = "145"; else Graph.W = Graph.W * 30 - 5;
        if(Graph.H == null) Graph.H = "25"; else Graph.H = Graph.H * 30 - 5;
        if(Graph.Text == null) Graph.Text = "???";
        if(Graph.Reference == null) Graph.Text = "";
        Graph.Element.innerHTML =
        `<div style='left:${Graph.X}px; top:${Graph.Y}px;'><input type='input' class='hover focus' id='${Graph.ID}' value='${Graph.Text}' placeholder='${Graph.Reference}' style='width:${Graph.W}px; height:${Graph.H}px;'/></div>`;
    }
}

class input_password {
    constructor(Graph) {
        if(Graph.W == null) Graph.W = "115"; else Graph.W = Graph.W * 30 - 5;
        if(Graph.H == null) Graph.H = "25"; else Graph.H = Graph.H * 30 - 5;
        if(Graph.Text == null) Graph.Text = "???";
        if(Graph.Reference == null) Graph.Text = "";
        Graph.Element.innerHTML =
        `<div style='left:${Graph.X}px; top:${Graph.Y}px;'><input type='password' class='hover focus' id='${Graph.ID}' value='${Graph.Text}' placeholder='${Graph.Reference}' style='width:${Graph.W}px; height:${Graph.H}px;'/></div>`;
    }
}

class graph {
    has(Attribute) {
        return this.Element.hasAttribute(Attribute);
    }
    
    get(Attribute) {
        let Value = this.Element.getAttribute(Attribute);
        this.Element.removeAttribute(Attribute);
        return Value;
    }

    constructor(Element, Index) {
        this.Element = Element;
        this.Child = this.Element.innerHTML;
        this.ID = this.get("id");
        this.X = this.get("x");
        this.Y = this.get("y");
        this.W = this.get("w");
        this.H = this.get("h");
        this.Text = this.get("txt");
        this.Reference = this.get("ref");

        if(this.ID == null) this.ID = `OBJECT${Index}`;
        if(this.X == null) this.X = "0"; else this.X = this.X * 30;
        if(this.Y == null) this.Y = "0"; else this.Y = this.Y * 30;

        if (this.has("group")) new group(this);
        if (this.has("label")) new label(this);
        if (this.has("label_title")) new label_title(this);
        if (this.has("button")) new button(this);
        if (this.has("icon")) new icon(this);
        if (this.has("input")) new input(this);
        if (this.has("input_password")) new input_password(this);
    }
}

build();
function build() {
    let List = document.getElementsByTagName("graph");
    let Length = List.length;

    for (let i = 0; i < Length; i++) {
        new graph(List[i], i);
    }
}