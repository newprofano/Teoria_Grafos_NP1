export default class Node {
  constructor(id, isDirected, connectedTo = [], values = []) {
    this.p = null;
    this.id = id;
    // this.pos = pos;
    this.connectedTo = connectedTo;
    this.values = values;
    this.isDirected = isDirected || true;
    this.strokeColor = null;
  }
  // , connectedToIds, values, isDirected

  show = () => {
    if (this.connectedTo.length !== 0) {
      this.showConnectedLines();
    }
    this.p.stroke(0);
    this.p.ellipse(this.pos.x, this.pos.y, 30, 30);
    // this.p.ellipse(this.pos.x - 15, this.pos.y, 15, 15);
    this.p.text(this.id, this.pos.x - 3, this.pos.y + 3);
  };

  addConnectedNode = node => {
    this.connectedTo.push(node);
  };

  addValue = valueObj => {
    this.values.push(valueObj);
  };

  changePos = pos => {
    this.pos = pos;
  };

  setP = p => {
    this.p = p;
  };

  showConnectedLines = () => {
    const { pos, connectedTo, p, isDirected, id, values, strokeColor } = this;

    connectedTo.map(letter => {
      const node = avaiableConfig.filter(l => letter === l.id)[0];
      // drawing the node
      if (node.id === id) {
        p.push();
        p.noFill();
        p.stroke(0);
        p.ellipse(pos.x - 15, pos.y - 5, 20, 20);
        p.pop();
        return null;
      }

      if (values.length !== 0) {
        let value = values.filter(val => val.connectedId === node.id)[0];
        if (value) {
          if (value.connectedId === id) {
            p.push();
            p.fill(...strokeColor);
            p.noStroke();
            p.text(value.weight, pos.x - 55, pos.y);
            p.pop();
          } else {
            p.push();
            // let positiveX = pos.x - node.pos.x > 0;
            let positiveY = pos.y - node.pos.y > 0;

            // let x = positiveX
            //   ? (pos.x + node.pos.x) / 2 + pos.x / 20
            //   : (pos.x + node.pos.x) / 2 - pos.x / 20;
            let y = positiveY
              ? (pos.y + node.pos.y) / 2 + pos.y / 5
              : (pos.y + node.pos.y) / 2 - pos.y / 5;

            p.fill(...strokeColor);
            p.noStroke();
            p.text(value.weight, (pos.x + node.pos.x) / 2, y);
            p.pop();
          }
        }
      }

      // drawing the line
      p.push();
      p.stroke(...strokeColor);
      p.line(pos.x, pos.y, node.pos.x, node.pos.y);
      p.pop();

      // draw the triangle on the line
      if (isDirected) {
        let r = 16; // vertex radius
        let offset = r;
        p.push();
        let angle = p.atan2(pos.y - node.pos.y, pos.x - node.pos.x);
        p.translate(node.pos.x, node.pos.y);
        p.rotate(angle - p.HALF_PI);
        p.stroke(...strokeColor);
        p.triangle(
          -offset * 0.5,
          offset + 20,
          offset * 0.5,
          offset + 20,
          0,
          -offset / 2 + 20
        ); //draws the arrow point as a triangle
        p.pop();
      }
      return null;
    });
  };
}

let avaiableConfig = [
  { id: 'A', pos: { x: 100, y: 50 }, color: [255, 0, 0] },
  { id: 'B', pos: { x: 300, y: 30 }, color: [10, 54, 158] },
  { id: 'C', pos: { x: 250, y: 270 }, color: [0, 260, 255] },
  { id: 'D', pos: { x: 50, y: 200 }, color: [77, 0, 255] },
  { id: 'E', pos: { x: 350, y: 250 }, color: [0, 255, 102] },
  { id: 'F', pos: { x: 140, y: 300 }, color: [0, 102, 255] },
  { id: 'G', pos: { x: 430, y: 230 }, color: [51, 169, 8] },
  { id: 'H', pos: { x: 430, y: 150 }, color: [214, 220, 13] },
  { id: 'I', pos: { x: 400, y: 50 }, color: [247, 148, 0] },
  { id: 'J', pos: { x: 220, y: 10 }, color: [247, 0, 255] }
];
