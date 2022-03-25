registerPaint('polygon-border', class  {
  static get inputProperties() {
    return [
      '--border',
      '--edges'
    ]
  }
  paint(ctx, size, properties) {
    const b = parseFloat(properties.get('--border').value);

    const w = size.width;
    const h = size.height;

    const edges = properties.get('--edges').toString().split(',');
    const baseEdges = ['0 0', '100% 0', '100% 100%', '0 100%'];

    const cc = function (t0, d, dir) {
      var fx=0;

      if (d.indexOf('%') > -1) {
        fx = (parseFloat(d)/100) * dir;
      } else if(d.indexOf('px') > -1) {
        fx = parseFloat(d);
      }


      return ((parseFloat(t0) / 100) * dir) +  (parseFloat(t0) === 0 ? fx : -fx);
    }


    const abs = function (p, dir) {
      return (parseFloat(p) / 100) * dir;
    }

    const percent = function (x, y) {
      return [((parseFloat(x)/100) * w), ((parseFloat(y)/100) * h)]
    }


    const edgesCoords = [];
    for (let i = 0; i < baseEdges.length; i++) {
      const [x0, y0] = baseEdges[i].trim().split(' ');
      const [dx, dy] = edges[i].trim().split(' ');


      if (parseFloat(dx) === 0 && parseFloat(dy) === 0) {
        edgesCoords.push(percent(x0, y0));

        continue;
      }

      var ddx = [cc(x0, dx, w), abs(y0, h)]
      var ddy = [abs(x0, w), cc(y0, dy, h)];


      if (i % 2 === 0) {

        edgesCoords.push(ddy, ddx)
      }else  {
        edgesCoords.push(ddx, ddy)
      }
    }

    let p = edgesCoords[0];

    ctx.beginPath();
    ctx.moveTo(p[0],p[1]);

    for (var i = 1; i < edgesCoords.length; i++) {
      const p = edgesCoords[i];

      ctx.lineTo(p[0],p[1]);
    }

    ctx.closePath();
    ctx.lineWidth = 2*b;
    ctx.strokeStyle = '#000';

    ctx.stroke();
  }
})