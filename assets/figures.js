/* Thư viện hình minh hoạ (SVG/HTML) – tất cả vẽ bằng mã, không cần ảnh ngoài */
(function () {
  const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const r1 = (n) => Math.round(n * 10) / 10;
  const P = (cx, cy, r, deg) => { const a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; };
  const svg = (w, h, body, label, cls) => `<svg class="fig${cls ? ' ' + cls : ''}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label || 'Hình minh hoạ'}">${body}</svg>`;
  const T = (x, y, s, cls, anchor) => `<text x="${r1(x)}" y="${r1(y)}" class="${cls || ''}" text-anchor="${anchor || 'middle'}" dominant-baseline="middle">${s}</text>`;
  const L = (a, b, cls) => `<line x1="${r1(a[0])}" y1="${r1(a[1])}" x2="${r1(b[0])}" y2="${r1(b[1])}" class="${cls || 'ln'}"/>`;
  const wedge = (cx, cy, r, s, e, cls) => {
    const [x1, y1] = P(cx, cy, r, s), [x2, y2] = P(cx, cy, r, e);
    const large = (e - s) > 180 ? 1 : 0;
    return `<path class="${cls}" d="M${r1(cx)} ${r1(cy)} L${r1(x1)} ${r1(y1)} A${r} ${r} 0 ${large} 0 ${r1(x2)} ${r1(y2)} Z"/>`;
  };
  const arc = (cx, cy, r, s, e, cls) => {
    const [x1, y1] = P(cx, cy, r, s), [x2, y2] = P(cx, cy, r, e);
    const large = (e - s) > 180 ? 1 : 0;
    return `<path class="${cls}" d="M${r1(x1)} ${r1(y1)} A${r} ${r} 0 ${large} 0 ${r1(x2)} ${r1(y2)}"/>`;
  };
  const anim = (s) => RM ? '' : s;

  const FIG = {};

  /* Hai đường thẳng a, b bị cắt bởi một cát tuyến.
     o = {dir:'/'|'\\', lines:['a','b'], t:'c', pts:['A','B'], labels:[{UL,UR,LL,LR},{...}],
          hl:{'0LR':'w1','1UL':'w2'}, vals:{'0LR':'55°'}, perp:false} */
  FIG.parallel = function (o) {
    const W = 340, H = 220, ya = 70, yb = 155, dir = o.dir || '/';
    const A = dir === '/' ? [192, ya] : [148, ya];
    const B = dir === '/' ? [148, yb] : [192, yb];
    const dx = A[0] - B[0], dy = A[1] - B[1];
    const len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
    const theta = Math.atan2(-dy, dx) * 180 / Math.PI;
    const ranges = [[0, theta], [theta, 180], [180, theta + 180], [theta + 180, 360]];
    const qname = (m) => m < 90 ? 'UR' : m < 180 ? 'UL' : m < 270 ? 'LL' : 'LR';
    let s = '';
    const lines = o.lines || ['a', 'b'];
    s += L([18, ya], [W - 18, ya]) + T(26, ya - 11, lines[0], 'b');
    s += L([18, yb], [W - 18, yb]) + T(26, yb - 11, lines[1], 'b');
    const T1 = [A[0] + ux * 60, A[1] + uy * 60], T2 = [B[0] - ux * 60, B[1] - uy * 60];
    s += L(T1, T2);
    if (o.t) s += T(T1[0] + (dir === '/' ? 10 : -10), T1[1] + 2, o.t, 'b');
    [A, B].forEach((pt, i) => {
      ranges.forEach(([a, b]) => {
        const q = qname((a + b) / 2), key = i + q;
        if (o.hl && o.hl[key]) s += wedge(pt[0], pt[1], 27, a, b, o.hl[key] + ' pulse');
        const lab = o.labels && o.labels[i] && o.labels[i][q];
        if (lab) { const [lx, ly] = P(pt[0], pt[1], 16, (a + b) / 2); s += T(lx, ly, lab, 'mut b'); }
        if (o.vals && o.vals[key]) { const [vx, vy] = P(pt[0], pt[1], 44, (a + b) / 2); s += T(vx, vy, o.vals[key], 'a'); }
      });
      s += `<circle cx="${pt[0]}" cy="${pt[1]}" r="3.2" class="dot"/>`;
      const nm = (o.pts || ['A', 'B'])[i];
      if (nm) s += T(pt[0] + 46, pt[1] + (i === 0 ? -14 : 16), nm, 'big');
    });
    if (o.perp) {
      // đường c vuông góc: ký hiệu góc vuông tại giao điểm thứ ba
      const px = 60;
      s += L([px, ya - 40], [px, yb + 30]);
      s += `<path d="M${px} ${ya + 10} h10 v-10" class="ln-thin"/><path d="M${px} ${yb + 10} h10 v-10" class="ln-thin"/>`;
      s += T(px - 8, ya - 34, 'c', 'b');
    }
    if (o.texts) o.texts.forEach(([x, y, t, c]) => { s += T(x, y, t, c || 'big'); });
    if (o.note) s += T(W / 2, H - 10, o.note, 'c');
    return svg(W, H, s, 'Hai đường thẳng và một cát tuyến');
  };

  /* Sơ đồ tập hợp số N ⊂ Z ⊂ Q ⊂ R, I ⊂ R. o = {hl:'Q'} */
  FIG.sets = function (o) {
    const W = 380, H = 200, hl = (o && o.hl) || '';
    const box = (x, y, w, h, n, ex, key) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" class="${hl === key ? 'w1' : 'fill-card'}" style="stroke:var(--${hl === key ? 'toan' : 'line'});stroke-width:${hl === key ? 2.4 : 1.4}"/>` + T(x + 14, y + 16, n, 'big', 'start') + (ex ? T(x + 14, y + 34, ex, 'mut', 'start') : '');
    let s = box(6, 6, 368, 188, 'ℝ  số thực', '', 'R');
    s += box(18, 46, 230, 140, 'ℚ  số hữu tỉ', '−3/2;  0,5;  1,(3)', 'Q');
    s += box(30, 88, 150, 90, 'ℤ  số nguyên', '−6;  −1', 'Z');
    s += box(42, 128, 100, 44, 'ℕ', '0; 1; 2', 'N');
    s += box(258, 46, 108, 140, '𝕀  vô tỉ', '√2;  π', 'I');
    s += T(312, 122, '0,1010010001…', 'mut');
    return svg(W, H, s, 'Các tập hợp số');
  };

  /* Trục số. o = {min,max,div, pts:[{v,n,cls,txt}], seg:[from,to], step:true} */
  FIG.numberLine = function (o) {
    const W = 380, H = o.seg || o.tall ? 110 : 92, x0 = 28, x1 = 352, y = 58;
    const X = (v) => x0 + (v - o.min) / (o.max - o.min) * (x1 - x0);
    let s = `<line x1="${x0 - 12}" y1="${y}" x2="${x1 + 16}" y2="${y}" class="ln"/><path d="M${x1 + 16} ${y} l-8 -5 v10 z" class="dot"/>`;
    const n = Math.round((o.max - o.min) * o.div);
    for (let k = 0; k <= n; k++) {
      const v = o.min + k / o.div, x = X(v), major = Math.abs(v - Math.round(v)) < 1e-9;
      s += `<line x1="${r1(x)}" y1="${y - (major ? 7 : 4)}" x2="${r1(x)}" y2="${y + (major ? 7 : 4)}" class="ln"/>`;
      if (major) s += T(x, y + 20, String(Math.round(v)).replace('-', '−'), 'b');
    }
    if (o.seg) {
      const [a, b] = o.seg;
      s += `<line x1="${r1(X(a))}" y1="${y}" x2="${r1(X(b))}" y2="${y}" class="ln-a draw" style="stroke-width:5;opacity:.8"/>`;
      if (o.segTxt) s += T((X(a) + X(b)) / 2, y + 40, o.segTxt, 'a');
    }
    (o.pts || []).forEach((p, i) => {
      const x = X(p.v);
      s += `<circle cx="${r1(x)}" cy="${y}" r="5" class="${p.cls || 'dot-c'}${o.seg ? ' pop d' + (i + 1) : ''}"/>`;
      if (p.n) s += T(x, y - 18, p.n, 'big');
      if (p.txt) s += T(x, y - 36, p.txt, 'c');
    });
    return svg(W, H + (o.pts && o.pts.some(p => p.txt) ? 0 : 0), s, 'Trục số');
  };

  /* Thước đo góc. o = {deg, explain} */
  FIG.protractor = function (o) {
    const W = 340, H = 200, cx = 170, cy = 170, R = 128;
    let s = `<path d="M${cx - R} ${cy} A${R} ${R} 0 0 1 ${cx + R} ${cy} Z" class="fill-soft" style="stroke:var(--line)"/>`;
    for (let d = 0; d <= 180; d += 10) {
      const [a, b] = P(cx, cy, R, d), [c, e] = P(cx, cy, R - (d % 30 === 0 ? 12 : 7), d);
      s += L([a, b], [c, e], 'ln-thin');
      if (d % 30 === 0) { const [tx, ty] = P(cx, cy, R - 22, d); s += T(tx, ty, d, 'mut'); }
    }
    s += L([cx - R - 10, cy], [cx + R + 14, cy]);
    s += T(cx + R + 10, cy - 10, 'x', 'b');
    const [yx, yy] = P(cx, cy, R + 16, o.deg);
    if (o.explain) {
      s += wedge(cx, cy, 42, 0, o.deg, 'w1 pulse') + wedge(cx, cy, 58, o.deg, 180, 'w2 pulse');
      const [t1x, t1y] = P(cx, cy, 30, o.deg / 2), [t2x, t2y] = P(cx, cy, 72, (o.deg + 180) / 2);
      s += T(t1x, t1y - 4, o.deg + '°', 'c') + T(t2x, t2y, (180 - o.deg) + '°', 'a');
      s += T(cx - R - 4, cy - 10, "x'", 'b');
    }
    s += L([cx, cy], [yx, yy], 'ln-c') + T(yx - 8, yy - 6, 'y', 'b');
    s += `<circle cx="${cx}" cy="${cy}" r="3.5" class="dot"/>` + T(cx, cy + 14, 'O', 'b');
    return svg(W, H, s, 'Thước đo góc');
  };

  /* Các tia chung gốc. o = {rays:[{n,d,cls}], arcs:[{a,b,t,c,r}], O, W,H,cx,cy,len} */
  FIG.rays = function (o) {
    const W = o.W || 340, H = o.H || 210, cx = o.cx || 170, cy = o.cy || 175, len = o.len || 135;
    const deg = {}; o.rays.forEach(r => deg[r.n] = r.d);
    let s = '';
    (o.arcs || []).forEach(a => {
      const d1 = Math.min(deg[a.a], deg[a.b]), d2 = Math.max(deg[a.a], deg[a.b]);
      const r = a.r || 34;
      s += wedge(cx, cy, r, d1, d2, (a.c || 'w1') + (a.still ? '' : ' pulse'));
      if (a.t) { const [tx, ty] = P(cx, cy, r + 15, (d1 + d2) / 2); s += T(tx, ty, a.t, a.tc || 'a'); }
    });
    o.rays.forEach(r => {
      const [x, y] = P(cx, cy, r.l || len, r.d);
      s += L([cx, cy], [x, y], r.cls || 'ln');
      const [nx, ny] = P(cx, cy, (r.l || len) + 12, r.d);
      s += T(nx, ny, r.n, 'b');
    });
    s += `<circle cx="${cx}" cy="${cy}" r="3.2" class="dot"/>` + T(cx + (o.Ox || 0), cy + 15, o.O || 'O', 'b');
    if (o.note) s += T(W / 2, 14, o.note, 'c');
    return svg(W, H, s, 'Các tia chung gốc');
  };

  /* Tam giác có tia phân giác. */
  FIG.triangle = function (o) {
    const A = [150, 22], B = [40, 172], C = [304, 172], E = [212.6, 82.6], D = [172, 172];
    const ang = (p, q) => Math.atan2(-(q[1] - p[1]), q[0] - p[0]) * 180 / Math.PI;
    let s = '';
    const bE = ang(B, E), bA = ang(B, A), bC = ang(B, C);
    s += wedge(B[0], B[1], 30, bC, bE, o && o.explain ? 'w1 pulse' : 'w1') + wedge(B[0], B[1], 30, bE, bA, o && o.explain ? 'w2 pulse' : 'w1');
    s += arc(B[0], B[1], 24, bC, bE, 'wedge-plain') + arc(B[0], B[1], 24, bE, bA, 'wedge-plain');
    const aB = ang(A, B), aD = ang(A, D), aC = ang(A, C);
    s += arc(A[0], A[1], 22, aB, aD, 'wedge-plain') + arc(A[0], A[1], 26, aD, aC, 'wedge-plain');
    s += L(A, B) + L(B, C) + L(C, A) + L(A, D, 'ln') + L(B, E, o && o.explain ? 'ln-c' : 'ln');
    [[A, 'A', 0, -12], [B, 'B', -10, 10], [C, 'C', 10, 8], [D, 'D', 0, 15], [E, 'E', 12, -6]].forEach(([p, n, dx, dy]) => {
      s += `<circle cx="${p[0]}" cy="${p[1]}" r="2.8" class="dot"/>` + T(p[0] + dx, p[1] + dy, n, 'b');
    });
    if (o && o.explain) s += T(110, 196, 'Hai góc nhỏ tại B bằng nhau → BE là tia phân giác của góc ABC', 'c');
    return svg(340, o && o.explain ? 205 : 190, s, 'Tam giác ABC');
  };

  /* Đồ thị quãng đường – thời gian. o = {pts:[[t,s]], names, hl:[[i,cls,text]], car, tmax, smax, sStep} */
  FIG.stGraph = function (o) {
    const W = 360, H = 250, x0 = 52, y0 = 210, tmax = o.tmax || 6, smax = o.smax || 240, sStep = o.sStep || 60, tStep = o.tStep || 1;
    const sx = 260 / tmax, sy = 170 / smax;
    const X = t => x0 + t * sx, Y = v => y0 - v * sy;
    let s = '';
    for (let t = tStep; t <= tmax + 1e-9; t += tStep) s += L([X(t), y0], [X(t), Y(smax)], 'gridl');
    for (let v = sStep; v <= smax; v += sStep) s += L([x0, Y(v)], [X(tmax), Y(v)], 'gridl');
    s += L([x0, y0], [X(tmax) + 16, y0]) + L([x0, y0], [x0, Y(smax) - 18]);
    s += `<path d="M${X(tmax) + 18} ${y0} l-8 -5 v10z" class="dot"/><path d="M${x0} ${Y(smax) - 20} l-5 8 h10z" class="dot"/>`;
    for (let t = tStep; t <= tmax + 1e-9; t += tStep) s += T(X(t), y0 + 14, String(Math.round(t * 10) / 10).replace('.', ','), 'mut');
    for (let v = sStep; v <= smax; v += sStep) s += T(x0 - 8, Y(v), v, 'mut', 'end');
    s += T(x0 - 8, y0 + 12, 'O', 'b', 'end') + T(X(tmax) + 14, y0 - 12, o.tl || 't (h)', 'b') + T(x0 + 4, Y(smax) - 30, o.sl || 's (km)', 'b', 'start');
    const pts = o.pts;
    const d = pts.map((p, i) => (i ? 'L' : 'M') + r1(X(p[0])) + ' ' + r1(Y(p[1]))).join(' ');
    s += `<path d="${d}" class="ln-c${o.drawIn ? ' draw' : ''}"/>`;
    (o.hl || []).forEach(([i, cls, txt]) => {
      const a = pts[i], b = pts[i + 1];
      s += `<line x1="${r1(X(a[0]))}" y1="${r1(Y(a[1]))}" x2="${r1(X(b[0]))}" y2="${r1(Y(b[1]))}" class="${cls} pulse" style="stroke-width:5"/>`;
      if (txt) s += T((X(a[0]) + X(b[0])) / 2 + 4, (Y(a[1]) + Y(b[1])) / 2 - 14, txt, cls === 'ln-a' ? 'a' : cls === 'ln-ok' ? 'ok' : 'c');
    });
    (o.guides || []).forEach(([t, v]) => {
      s += `<path d="M${r1(X(t))} ${y0} V${r1(Y(v))} H${x0}" class="ln-thin" style="stroke-dasharray:4 3"/>`;
    });
    pts.forEach((p, i) => {
      s += `<circle cx="${r1(X(p[0]))}" cy="${r1(Y(p[1]))}" r="3.5" class="dot"/>`;
      if (o.names && o.names[i] && i) s += T(X(p[0]) - 2, Y(p[1]) - 12, o.names[i], 'b');
    });
    if (o.car && !RM) s += `<circle r="7" class="dot-a"><animateMotion dur="5s" repeatCount="indefinite" path="${d}"/></circle>`;
    return svg(W, H, s, 'Đồ thị quãng đường – thời gian');
  };

  /* Mô hình nguyên tử Rutherford – Bohr. o = {Z, hlOuter, counts, name, still} */
  FIG.atom = function (o) {
    const Z = o.Z, shells = [];
    let left = Z; [2, 8, 8, 2].forEach(cap => { if (left > 0) { const k = Math.min(cap, left); shells.push(k); left -= k; } });
    const radii = [30, 50, 70, 90], rmax = radii[shells.length - 1];
    const W = 2 * rmax + (o.counts ? 120 : 30), H = 2 * rmax + 30, cx = rmax + 15, cy = rmax + 15;
    let s = '';
    shells.forEach((n, i) => {
      const r = radii[i], outer = i === shells.length - 1;
      s += `<circle cx="${cx}" cy="${cy}" r="${r}" class="${outer && o.hlOuter ? 'shell-hl' : 'shell'}"/>`;
      let g = '';
      for (let k = 0; k < n; k++) {
        const [ex, ey] = P(cx, cy, r, 90 + k * 360 / n);
        g += `<circle cx="${r1(ex)}" cy="${r1(ey)}" r="4.6" class="elec"/>`;
      }
      const dur = 6 + i * 4;
      s += `<g>${g}${(o.still || RM) ? '' : `<animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="${i % 2 ? -360 : 360} ${cx} ${cy}" dur="${dur}s" repeatCount="indefinite"/>`}</g>`;
      if (o.counts) {
        const ly = cy - r;
        s += `<line x1="${cx}" y1="${ly}" x2="${2 * rmax + 34}" y2="${ly}" class="ln-thin" style="stroke-dasharray:3 3"/>`;
        s += T(2 * rmax + 38, ly, `Lớp ${i + 1}: ${n}e`, outer && o.hlOuter ? 'a' : 'c', 'start');
      }
    });
    s += `<circle cx="${cx}" cy="${cy}" r="17" class="nucleus"/>` + `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" style="fill:#fff;font-weight:800;font-size:12px">+${Z}</text>`;
    if (o.name) s += T(cx, H - 6, o.name, 'b');
    return svg(W, H, s, 'Mô hình nguyên tử');
  };

  /* Âm thanh từ đàn guitar đến tai */
  FIG.sound = function () {
    const W = 380, H = 170;
    let s = '';
    // đàn guitar
    s += `<ellipse cx="62" cy="98" rx="36" ry="40" class="fill-soft" style="stroke:var(--ink);stroke-width:2"/><circle cx="62" cy="98" r="11" style="fill:var(--ink)"/>`;
    s += `<rect x="54" y="18" width="16" height="44" rx="3" class="fill-soft" style="stroke:var(--ink);stroke-width:2"/>`;
    s += `<path d="M62 22 L62 136" class="ln-a" style="stroke-width:2">${anim('<animate attributeName="d" dur="0.18s" repeatCount="indefinite" values="M62 22 Q58 80 62 136;M62 22 Q66 80 62 136;M62 22 Q58 80 62 136"/>')}</path>`;
    s += T(62, 158, 'Dây đàn dao động', 'a');
    // sóng âm
    for (let i = 0; i < 4; i++) {
      const x = 120 + i * 42;
      s += `<path d="M${x} 62 Q${x + 16} 95 ${x} 128" class="wave">${anim(`<animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="${i * 0.4}s" repeatCount="indefinite"/>`)}</path>`;
    }
    s += T(196, 40, 'Không khí dao động → sóng âm', 'c');
    s += `<path d="M118 146 H290" class="ln-thin flow"/><path d="M290 146 l-8 -4 v8z" class="dot"/>`;
    // tai
    s += `<path d="M318 64 C352 50 368 84 352 104 C344 114 344 124 336 132 C326 142 312 134 316 122" class="ln" style="stroke-width:3"/><path d="M330 88 C338 84 344 92 338 100" class="ln"/>`;
    s += T(338, 158, 'Tai (màng nhĩ)', 'b');
    return svg(W, H, s, 'Âm truyền từ đàn guitar đến tai');
  };

  /* Camera bắn tốc độ */
  FIG.speedCam = function (o) {
    const W = 380, H = 160;
    let s = `<rect x="10" y="70" width="360" height="56" rx="6" class="road"/>`;
    s += `<line x1="10" y1="98" x2="370" y2="98" class="ln-thin" style="stroke-dasharray:10 8"/>`;
    s += `<line x1="80" y1="66" x2="80" y2="130" class="ln-a" style="stroke-width:3"/><line x1="290" y1="66" x2="290" y2="130" class="ln-a" style="stroke-width:3"/>`;
    s += T(80, 142, 'Vạch 1', 'a') + T(290, 142, 'Vạch 2', 'a');
    s += `<path d="M80 52 H290" class="ln"/><path d="M80 52 l7 -4 v8z M290 52 l-7 -4 v8z" class="dot"/>` + T(185, 42, '10 m', 'big');
    s += `<rect x="330" y="8" width="26" height="18" rx="4" style="fill:var(--ink)"/><circle cx="337" cy="17" r="4" style="fill:var(--amber)"/>` + T(343, 34, 'camera', 'mut');
    const truck = `<g class="trk"><rect x="0" y="78" width="40" height="22" rx="3" class="truck"/><rect x="40" y="84" width="16" height="16" rx="3" class="truck" style="opacity:.75"/><circle cx="12" cy="103" r="5" class="wheel"/><circle cx="46" cy="103" r="5" class="wheel"/></g>`;
    s += `<g>${truck}${anim('<animateTransform attributeName="transform" type="translate" values="24 0;234 0;234 0" keyTimes="0;0.7;1" dur="3s" repeatCount="indefinite"/>')}</g>`;
    if (o && o.txt) s += T(W / 2, 14, o.txt, 'c');
    return svg(W, H, s, 'Camera đo tốc độ');
  };

  /* Quang hợp */
  FIG.photo = function () {
    const W = 380, H = 220;
    let s = '';
    s += `<circle cx="46" cy="40" r="20" class="sun"/>`;
    for (let i = 0; i < 8; i++) { const [a, b] = P(46, 40, 26, i * 45), [c, d] = P(46, 40, 34, i * 45); s += `<line x1="${r1(a)}" y1="${r1(b)}" x2="${r1(c)}" y2="${r1(d)}" style="stroke:#f2b01e;stroke-width:2.5;stroke-linecap:round"/>`; }
    s += `<path d="M190 200 L190 120" class="ln" style="stroke:var(--khtn);stroke-width:5"/>`;
    s += `<path d="M190 120 C130 110 120 50 190 34 C260 50 250 110 190 120 Z" class="leaf"/><path d="M190 120 L190 40" style="stroke:#fff;stroke-width:1.5;opacity:.7"/>`;
    const arrow = (x1, y1, x2, y2, cls) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls} flow"/><circle cx="${x2}" cy="${y2}" r="4" class="${cls === 'ln-a' ? 'dot-a' : 'dot-c'}"/>`;
    s += arrow(72, 58, 148, 70, 'ln-a') + T(96, 86, 'Ánh sáng', 'a');
    s += arrow(30, 140, 150, 100, 'ln-c') + T(52, 156, 'Khí CO₂', 'c');
    s += arrow(140, 205, 186, 160, 'ln-c') + T(120, 192, 'Nước (rễ hút)', 'c', 'end');
    s += arrow(232, 80, 330, 60, 'ln-a') + T(340, 48, 'Khí O₂', 'a');
    s += arrow(236, 108, 330, 140, 'ln-a') + T(330, 160, 'Glucose', 'a');
    s += T(190, 14, 'Lục lạp (chứa diệp lục) trong lá', 'b');
    return svg(W, H, s, 'Sơ đồ quang hợp');
  };

  /* Hành trình Hà Nội – Ninh Bình */
  FIG.trip = function () {
    const W = 380, H = 120, x0 = 30, x1 = 350, X = (k) => x0 + k / 90 * (x1 - x0);
    let s = `<line x1="${x0}" y1="62" x2="${x1}" y2="62" class="ln" style="stroke-width:5;stroke:var(--line)"/>`;
    s += `<line x1="${x0}" y1="62" x2="${r1(X(75))}" y2="62" class="ln-c draw" style="stroke-width:5"/>`;
    s += `<circle cx="${x0}" cy="62" r="6" class="dot"/><circle cx="${x1}" cy="62" r="6" class="dot"/>`;
    s += T(x0, 86, 'Hà Nội · 8h00', 'b', 'start') + T(x1, 86, 'Ninh Bình', 'b', 'end');
    s += T(r1(X(75)), 38, '9h30', 'c') + T((x0 + X(75)) / 2, 104, '75 km trong 1,5 h', 'c');
    s += `<path d="M${r1(X(75))} 54 V70" class="ln-a"/>` + T((X(75) + x1) / 2, 46, 'còn 15 km', 'a');
    s += `<circle r="7" cx="${x0}" cy="62" class="dot-a">${anim(`<animate attributeName="cx" values="${x0};${r1(X(75))};${r1(X(75))}" keyTimes="0;0.75;1" dur="3s" repeatCount="indefinite"/>`)}</circle>`;
    s += T(W / 2, 14, 'Tổng quãng đường 90 km', 'mut');
    return svg(W, H, s, 'Hành trình Hà Nội – Ninh Bình');
  };

  /* Nối cột A – cột B */
  FIG.match = function (o) {
    const W = 380, H = 30 + o.left.length * 40;
    let s = '';
    o.left.forEach((t, i) => { s += `<rect x="6" y="${14 + i * 40}" width="150" height="30" rx="8" class="fill-card"/>` + T(14, 29 + i * 40, t, '', 'start'); });
    o.right.forEach((t, i) => { s += `<rect x="224" y="${14 + i * 40}" width="150" height="30" rx="8" class="fill-card"/>` + T(232, 29 + i * 40, t, '', 'start'); });
    (o.pairs || []).forEach(([a, b], k) => {
      s += `<line x1="156" y1="${29 + a * 40}" x2="224" y2="${29 + b * 40}" class="ln-c draw" style="animation-delay:${k * 0.4}s"/>`;
    });
    return svg(W, H, s, 'Nối cột A với cột B');
  };

  /* Thang đo tốc độ (biển báo) */
  FIG.signs = function () {
    const W = 360, H = 130;
    let s = '';
    s += `<circle cx="90" cy="60" r="38" style="fill:#fff;stroke:#d12d2d;stroke-width:8"/><text x="90" y="62" text-anchor="middle" dominant-baseline="middle" style="fill:#111;font-weight:800;font-size:26px">100</text>`;
    s += `<circle cx="270" cy="60" r="38" style="fill:#1f5fd1"/><text x="270" y="62" text-anchor="middle" dominant-baseline="middle" style="fill:#fff;font-weight:800;font-size:26px">60</text>`;
    s += T(90, 116, 'Viền đỏ: tốc độ TỐI ĐA', 'bad') + T(270, 116, 'Nền xanh: tốc độ TỐI THIỂU', 'c');
    return svg(W, H, s, 'Biển báo tốc độ');
  };

  /* ---------- Các hình HTML (không phải SVG) ---------- */
  FIG.sentence = function (parts) {
    return `<div class="sent">${parts.map(p => `<span class="part ${p[1] || ''}"><span>${p[0]}</span>${p[2] ? `<small>${p[2]}</small>` : ''}</span>`).join('')}</div>`;
  };
  FIG.poem = function (lines) { return `<div class="poem">${lines.join('<br>')}</div>`; };
  FIG.flow = function (steps) {
    return `<div class="flowbox">${steps.map((t, i) => `<span class="st" style="animation-delay:${i * 0.35}s">${t}</span>`).join('<span class="ar">→</span>')}</div>`;
  };
  FIG.table = function (o) {
    return `<div class="tbl-wrap"><table class="mtable"><thead><tr>${o.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${o.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  };
  FIG.html = function (h) { return h; };

  /* Bảng tính kiểu Excel. o = {cols:['A','B',..], rows:[[...],...], start:1, hl:{'D3':'w1'}, formula:'=D3*E3', cell:'F3'} */
  FIG.sheet = function (o) {
    const start = o.start || 1, hl = o.hl || {};
    let h = '<div class="tbl-wrap"><div class="xl">';
    if (o.formula) h += `<div class="xl-bar"><span class="xl-name">${o.cell || ''}</span><span class="xl-fx">fx</span><span class="xl-f">${o.formula}</span></div>`;
    h += '<table class="xl-t"><thead><tr><th></th>' + o.cols.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
    o.rows.forEach((r, i) => {
      const rn = start + i;
      h += `<tr><th>${rn}</th>` + r.map((v, j) => { const ref = o.cols[j] + rn; const c = hl[ref] ? ` class="${hl[ref]}"` : ''; return `<td${c}>${v}</td>`; }).join('') + '</tr>';
    });
    return h + '</tbody></table></div></div>';
  };

  /* Trục thời gian. o = {items:[[năm, nhãn]], min, max} */
  FIG.timeline = function (o) {
    const W = 380, H = 40 + o.items.length * 0 + 110, x0 = 24, x1 = 356;
    const X = (v) => x0 + (v - o.min) / (o.max - o.min) * (x1 - x0);
    let s = `<line x1="${x0}" y1="60" x2="${x1}" y2="60" class="ln"/>`;
    o.items.forEach(([y, t], i) => {
      const x = X(y), up = i % 2 === 0;
      s += `<circle cx="${r1(x)}" cy="60" r="5" class="dot-c pop" style="animation-delay:${i * 0.4}s"/>`;
      s += `<line x1="${r1(x)}" y1="60" x2="${r1(x)}" y2="${up ? 40 : 82}" class="ln-thin"/>`;
      s += T(x, up ? 30 : 94, y, 'c') + T(x, up ? 14 : 110, t, 'mut');
    });
    return svg(W, 124, s, 'Trục thời gian');
  };

  /* Sơ đồ hành trình phát kiến địa lí (giản lược, không theo tỉ lệ) */
  FIG.voyages = function (o) {
    const W = 380, who = (o && o.who) || 'all';
    let s = `<rect x="2" y="2" width="376" height="222" rx="16" class="fill-soft"/>`;
    const land = (x, y, rx, ry, n) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" class="fill-card" style="stroke:var(--line)"/>` + T(x, y, n, 'mut b');
    s += land(78, 66, 40, 32, 'Bắc Mĩ') + land(104, 150, 24, 40, 'Nam Mĩ') + land(204, 52, 26, 20, 'Châu Âu') + land(214, 134, 32, 44, 'Châu Phi') + land(306, 66, 54, 34, 'Châu Á') + land(330, 172, 28, 18, 'Ô-xtrây-li-a');
    s += T(150, 124, 'Đại Tây', 'mut') + T(150, 136, 'Dương', 'mut') + T(282, 132, 'Ấn Độ Dương', 'mut') + T(16, 120, 'Thái Bình', 'mut', 'start') + T(16, 132, 'Dương', 'mut', 'start');
    const route = (d, cls, delay) => `<path d="${d}" class="${cls} flow" style="fill:none;stroke-width:2.6;animation-delay:${delay}s"/>`;
    const legend = [];
    if (who === 'all' || who === 'col') { s += route('M190 60 C160 80 130 96 102 104', 'ln-a', 0); legend.push(['ln-a', 'a', 'C. Cô-lôm-bô (1492): vượt Đại Tây Dương tới châu Mĩ']); }
    if (who === 'all' || who === 'gama') { s += route('M196 72 C164 110 160 186 208 194 C252 200 266 132 284 98', 'ln-c', 0.3); legend.push(['ln-c', 'c', 'Va-xcô đơ Ga-ma (1497–1498): vòng châu Phi tới Ấn Độ']); }
    if (who === 'dias') { s += route('M196 72 C164 110 160 186 208 194', 'ln-c', 0); legend.push(['ln-c', 'c', 'B. Đi-a-xơ (1487): tới cực nam châu Phi – mũi Bão Táp']); }
    if (who === 'all' || who === 'mag') { s += route('M192 66 C160 110 146 180 132 204 C118 222 80 222 56 200 L14 176', 'ln-ok', 0.6); legend.push(['ln-ok', 'ok', 'Ph. Ma-gien-lăng (1519–1522): vòng quanh thế giới']); }
    if (who === 'dias') s += `<circle cx="208" cy="194" r="5" class="dot-a"/>`;
    const H = 236 + legend.length * 15;
    legend.forEach(([cls, tc, t], i) => { const y = 240 + i * 15; s += `<line x1="12" y1="${y}" x2="34" y2="${y}" class="${cls}"/>` + T(40, y, t, tc, 'start'); });
    return svg(W, H, s, 'Sơ đồ các cuộc phát kiến địa lí (giản lược)');
  };

  /* Tháp dân số đơn giản. o = {groups:[[nhãn, %nam, %nữ]], title} */
  FIG.pyramid = function (o) {
    const W = 360, rowH = 22, H = 40 + o.groups.length * rowH, cx = 180;
    let s = T(cx - 70, 14, 'Nam', 'c') + T(cx + 70, 14, 'Nữ', 'a');
    o.groups.forEach(([n, m, f], i) => {
      const y = 26 + i * rowH;
      s += `<rect x="${cx - 22 - m * 12}" y="${y}" width="${m * 12}" height="${rowH - 5}" rx="3" class="dot-c" style="opacity:.75"/>`;
      s += `<rect x="${cx + 22}" y="${y}" width="${f * 12}" height="${rowH - 5}" rx="3" class="dot-a" style="opacity:.75"/>`;
      s += T(cx, y + 9, n, 'mut');
    });
    if (o.title) s += T(cx, H - 6, o.title, 'b');
    return svg(W, H + 4, s, 'Tháp dân số');
  };

  /* Lịch thời vụ. o = {seasons:[[tên, tháng bắt đầu, tháng kết thúc (có thể > 12)]], hl} */
  FIG.seasons = function (o) {
    const W = 380, x0 = 70, cw = 24, H = 46 + o.seasons.length * 30;
    let s = '';
    for (let m = 1; m <= 12; m++) s += T(x0 + (m - 0.5) * cw, 14, 'T' + m, 'mut');
    o.seasons.forEach(([n, a, b], i) => {
      const y = 28 + i * 30, cls = o.hl === i ? 'dot-a' : 'dot-c';
      const seg = (s1, e1) => `<rect x="${x0 + (s1 - 1) * cw + 1}" y="${y}" width="${(e1 - s1 + 1) * cw - 2}" height="20" rx="6" class="${cls}" style="opacity:${o.hl === i ? 0.9 : 0.45}"/>`;
      if (b > 12) { s += seg(a, 12) + seg(1, b - 12); } else s += seg(a, b);
      s += T(x0 - 6, y + 10, n, o.hl === i ? 'a' : 'b', 'end');
    });
    return svg(W, H, s, 'Lịch thời vụ');
  };

  window.FIG = FIG;
})();
