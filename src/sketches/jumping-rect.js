export default function runSketch(canvas) {
  let myp5 = new window.p5((p) => {
    let px, py;
    let squareSize = 100;
    let bgColor;
    let squareColor;

    p.setup = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.createCanvas(rect.width, rect.height);
      p.rectMode(p.CENTER);
      p.noStroke();

      bgColor = p.color(0);
      squareColor = p.color(255);

      px = p.width / 2;
      py = p.height / 2;
    };

    p.draw = () => {
      p.background(bgColor);

      let halfSize = squareSize / 2;

      if (p.mouseX >= px - halfSize && p.mouseX <= px + halfSize &&
          p.mouseY >= py - halfSize && p.mouseY <= py + halfSize) {

        px = p.random(halfSize, p.width - halfSize);
        py = p.random(halfSize, p.height - halfSize);

        bgColor = p.color(p.random(255), p.random(255), p.random(255));
        squareColor = p.color(p.random(255), p.random(255), p.random(255));
        squareSize = p.random(40, 160);
      }

      p.fill(squareColor);
      p.rect(px, py, squareSize, squareSize, 8);
    };

    p.windowResized = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.resizeCanvas(rect.width, rect.height);
    };
  }, canvas.parentElement);

  canvas.style.display = 'none';

  return () => {
    myp5.remove();
    canvas.style.display = '';
  };
}
