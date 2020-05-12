export default function sketch(s) {
  let x, y, backgroundColor;

  const width = 500;
  const height = 500;
  const r = 50
  const r2 = 50
  let t=0

  s.setup = () => {
    s.createCanvas(width, height);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

    x = s.random(width);
    y = height / 2;
  };

  s.draw = () => {
    s.background(backgroundColor);

    t = t+0.1

    x = r*s.cos(t) + 250
    y = r*s.sin(t) + 250

    s.fill(s.color(255, 0, 0));
    s.ellipse(x, y, 100, 100);


    s.fill(s.color(0, 0, 0));

    let x1 = 2*r2*s.cos(-1.2*t) + x
    let y1 = 2*r2*s.sin(-1.2*t) + y
    s.ellipse(x1, y1, 50, 50);
    
  };

  s.mousePressed = () => {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  };
}
