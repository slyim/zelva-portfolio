export default function runSketch(canvas) {
  let myp5 = new window.p5((p) => {
    let squareSize;
    let lineWidth;
    let circleSize;

    p.setup = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.createCanvas(rect.width, rect.height);
      p.background(0);
    };

    p.draw = () => {
      squareSize = p.random(50, 150);
      lineWidth = p.random(4, 16);

      p.rectMode(p.CENTER);
      p.strokeWeight(lineWidth);
      p.stroke(0, 0, 255, 10);
      p.fill(0, 255, 0, 5);
      p.square(p.width / 2, p.height / 2, squareSize);

      p.fill(255, 0, 255, 5);
      circleSize = p.random(25, 75);
      p.circle(p.width / 2, p.height / 2, circleSize);
    };

    p.windowResized = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.resizeCanvas(rect.width, rect.height);
      p.background(0);
    };
  }, canvas.parentElement);

  canvas.style.display = 'none';

  return () => {
    myp5.remove();
    canvas.style.display = '';
  };
}
