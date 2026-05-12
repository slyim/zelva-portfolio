export default function runSketch(canvas) {
  let myp5 = new window.p5((p) => {
    let particles = [];
    let shapeX = 50;
    let shapeY = 50;
    let z;
    let trans;

    p.setup = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      p.createCanvas(rect.width, rect.height);
      p.background(0);
      p.noStroke();
    };

    p.draw = () => {
      p.noStroke();
      p.background(0);
      p.fill(175);
      p.rectMode(p.CENTER);
      trans = p.random(10, 90);

      if (p.mouseX > (p.width * 2) / 3) {
        p.stroke(1);
        p.fill(221, 76, 170, trans); // #DD4CAA
        p.circle(p.width / 2, p.height / 2, shapeX);
        shapeX = p.random(0, 100);
      } else if (p.mouseX > p.width / 3) {
        p.stroke(1);
        p.fill(101, 255, 170, trans); // #65FFAA
        shapeY = p.random(0, 100);
        p.square(p.width / 2, p.height / 2, shapeY);
      } else {
        p.stroke(1);
        p.fill(255, 207, 112, trans); // #FFCF70
        z = p.random(p.height / 2 + 20, p.height / 2 - 40);
        shapeX = p.random(p.width / 2 - 260, p.width / 2 - 180);
        p.triangle(p.width / 2, shapeX, p.width / 2 + 20, z, p.width / 2 - 20, z);
      }

      particles.push(p.createVector(p.width / 2, p.height / 2));

      for (let i = particles.length - 1; i >= 0; i--) {
        p.noStroke();
        let pt = particles[i];
        p.circle(pt.x, pt.y, 10);

        if (p.mouseX > (p.width * 2) / 3) {
          // stays still
        } else if (p.mouseX > p.width / 3) {
          pt.y++;
        } else {
          pt.y--;
        }
      }

      if (particles.length > 60) {
        particles.shift();
      }

      p.stroke(24, 24, 24);
      p.strokeWeight(p.random(1, 2));
      p.line(p.width / 3, 0, p.width / 3, p.height);
      p.line((p.width * 2) / 3, 0, (p.width * 2) / 3, p.height);
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
