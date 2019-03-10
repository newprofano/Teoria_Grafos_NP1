export default function sketch(p) {
  let avaiableConfig = [
    { pos: { x: 100, y: 50 }, color: [255, 0, 0] },
    { pos: { x: 300, y: 30 }, color: [10, 54, 158] },
    { pos: { x: 250, y: 270 }, color: [0, 260, 255] },
    { pos: { x: 50, y: 200 }, color: [77, 0, 255] },
    { pos: { x: 350, y: 250 }, color: [0, 255, 102] },
    { pos: { x: 140, y: 300 }, color: [0, 102, 255] },
    { pos: { x: 430, y: 230 }, color: [51, 169, 8] },
    { pos: { x: 430, y: 150 }, color: [214, 220, 13] },
    { pos: { x: 400, y: 50 }, color: [247, 148, 0] },
    { pos: { x: 220, y: 10 }, color: [247, 0, 255] }
  ];

  let nodes = [];

  // nodes[0].node.addConnectedNode(nodes[1].node);
  // nodes[1].node.addValue({ connectedId: 'A', weight: '10.2' });
  // nodes[1].node.addConnectedNode(nodes[0].node);

  p.setup = function() {
    p.createCanvas(600, 400);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.nodes) {
      nodes = [...props.nodes];
      nodes.map(({ node }, i) => {
        node.setP(p);
        node.pos = avaiableConfig[i].pos;
        node.strokeColor = avaiableConfig[i].color;

        return null;
      });
    }
  };

  p.draw = function() {
    p.background(100);
    nodes.map(({ node }) => node.show());
  };
}
