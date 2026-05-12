export default function runSketch(canvas) {
  let myp5 = new window.p5((p) => {
    let c1, c2, bgColor;

    p.setup = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.createCanvas(rect.width, rect.height);
      c1 = p.color('#00ff2a');
      c2 = p.color('#ff0000');
      bgColor = p.lerpColor(c1, c2, 0.1);
      p.noLoop();
    };

    p.draw = () => {
      for (let i = 0; i < p.width; i++) {
        let t = p.map(i, 0, p.width - 1, 0, 1);
        let gradient = p.lerpColor(c1, c2, t);
        p.stroke(gradient);
        p.line(i, 0, i, p.height);
      }

      p.fill(bgColor);
      p.noStroke();
      p.rect(0, 0, p.width, p.height / 5);
      p.rect(0, p.height * 4 / 5, p.width, p.height / 5);
    };

    p.windowResized = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.resizeCanvas(rect.width, rect.height);
      p.redraw();
    };
  }, canvas.parentElement);

  canvas.style.display = 'none';

  return () => {
    myp5.remove();
    canvas.style.display = '';
  };
}
