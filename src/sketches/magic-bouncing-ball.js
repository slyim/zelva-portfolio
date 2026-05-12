export default function runSketch(canvas) {
  let myp5 = new window.p5((p) => {
    let xspd, yspd;
    let ballStroke, ballEye;
    let bx, by;

    p.setup = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.createCanvas(rect.width, rect.height);
      p.background(0);
      p.noStroke();
      p.frameRate(60);
      xspd = 6;
      yspd = 4;
      bx = p.width / 2;
      by = p.height / 2;
    };

    p.draw = () => {
      ballStroke = p.random(75, 100);
      ballEye = p.random(25, 100);

      p.fill(p.random(0, 255), p.random(0, 255), p.random(0, 255), 100);

      bx += xspd;
      by += yspd;

      if (bx >= p.width - 50 || bx <= 50) xspd *= -1;
      if (by >= p.height - 50 || by <= 50) yspd *= -1;

      if (p.dist(bx, by, p.mouseX, p.mouseY) < ballStroke / 2) {
        xspd *= -1;
        yspd *= -1;
        bx += xspd * 2;
        by += yspd * 2;
      }

      bx = p.constrain(bx, 50, p.width - 50);
      by = p.constrain(by, 50, p.height - 50);

      p.circle(bx, by, ballStroke);
      p.circle(bx, by, ballEye);
      p.fill(255, 30);
    };

    p.mousePressed = () => {
      p.background(p.random(0, 255), p.random(0, 255), p.random(0, 255));
      xspd = p.random(-12, 12);
      yspd = p.random(-8, 8);
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
