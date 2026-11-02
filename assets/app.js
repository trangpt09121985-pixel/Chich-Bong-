/* Ứng dụng ôn tập giữa kỳ I – Lớp 7 – THCS Trần Duy Hưng */
(function () {
  const QZ = window.QZ;
  const ORDER = ['toan', 'van', 'anh', 'khtn', 'lsdl', 'gdcd', 'cn', 'tin'].filter(id => QZ.subjects[id]);
  const LETTERS = ['A', 'B', 'C', 'D'];
  const KEY = 'ontap-gk1-lop7-v1';
  const app = document.getElementById('app');

  /* ---------- Icon môn học (vẽ tay bằng SVG) ---------- */
  const ICONS = {
    toan: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 34 L34 34 M6 34 L22 8"/><path d="M14 34 A8 8 0 0 0 11.5 26"/><path d="M27 12 h8 M31 8 v8"/></svg>',
    van: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9 C12 7 17 8 20 11 C23 8 28 7 34 9 V32 C28 30 23 31 20 34 C17 31 12 30 6 32 Z"/><path d="M20 11 V34"/><path d="M10 15 h6 M10 20 h6 M24 15 h6"/></svg>',
    anh: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9 h20 v14 h-9 l-6 5 v-5 h-5 Z"/><path d="M11 19 l4 -8 l4 8 M12.5 16 h5"/><path d="M28 15 h7 v13 h-4 v4 l-5 -4 h-6 v-3"/></svg>',
    khtn: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5 h10 M17 5 v10 L8 31 a3 3 0 0 0 3 4 h18 a3 3 0 0 0 3 -4 L23 15 V5"/><path d="M11.5 25 h17"/><circle cx="18" cy="29" r="1.4" fill="currentColor"/><circle cx="23" cy="27" r="1" fill="currentColor"/></svg>',
    lsdl: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="20" r="14"/><path d="M6 20 h28 M20 6 c-6 6 -6 22 0 28 M20 6 c6 6 6 22 0 28"/></svg>',
    gdcd: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 33 C8 25 5 18 8 12 C11 7 17 8 20 13 C23 8 29 7 32 12 C35 18 32 25 20 33 Z"/><path d="M14 19 h12 M20 15 v8"/></svg>',
    cn: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 34 V18"/><path d="M20 22 C12 22 8 16 8 9 C15 9 20 13 20 22 Z"/><path d="M20 18 C20 11 25 6 32 6 C32 13 27 18 20 18 Z"/><path d="M8 34 h24"/></svg>',
    tin: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="7" width="30" height="26" rx="3"/><path d="M5 15 h30 M5 23 h30 M15 7 v26 M25 7 v26"/></svg>'
  };

  /* ---------- Lưu tiến độ (chỉ trên trình duyệt của học sinh) ---------- */
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { store = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* bỏ qua */ } };
  const ans = (sid) => (store[sid] = store[sid] || {});

  /* ---------- Định dạng ký hiệu toán ---------- */
  function fmt(s) {
    if (s == null) return '';
    s = String(s);
    s = s.replace(/\{\{([^{}|]*)\|([^{}]*)\}\}/g, '<span class="frac"><span>$1</span><span>$2</span></span>');
    for (let i = 0; i < 3; i++) s = s.replace(/√\{((?:[^{}]|<[^>]*>)*?)\}/g, '<span class="sq"><span class="rad">√</span><span class="rc">$1</span></span>');
    return s;
  }
  function fig(spec) {
    if (!spec) return '';
    try {
      if (typeof spec === 'string') return spec;
      const [name, arg] = spec;
      return window.FIG[name](arg);
    } catch (e) { console.error('Lỗi vẽ hình', spec, e); return ''; }
  }
  const figWrap = (spec, wide) => spec ? `<div class="figbox${wide ? ' wide' : ''}">${fig(spec)}</div>` : '';

  /* ---------- Đọc tiếng Anh ---------- */
  function speak(text) {
    try {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/\(.*?\)/g, ''));
      u.lang = 'en-US'; u.rate = 0.88;
      const v = window.speechSynthesis.getVoices().find(v => /en(-|_)(US|GB)/i.test(v.lang));
      if (v) u.voice = v;
      window.speechSynthesis.speak(u);
    } catch (e) { /* bỏ qua */ }
  }

  /* ---------- Tính điểm ---------- */
  function stat(sid) {
    const S = QZ.subjects[sid], a = ans(sid);
    let done = 0, ok = 0;
    S.questions.forEach((q, i) => { const r = a[i]; if (r && r.done) { done++; if (r.ok) ok++; } });
    return { total: S.questions.length, done, ok };
  }

  /* ---------- Thanh trên cùng ---------- */
  function topbar(cur) {
    return `<header class="topbar"><div class="wrap">
      <a class="brand" href="#home">
        <svg class="brand-mark" viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="10" fill="var(--toan)"/><path d="M11 13 h18 M20 13 v16" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><circle cx="29" cy="28" r="3" fill="#ffd166"/></svg>
        <span class="brand-text"><b>Ôn tập giữa kỳ I · Lớp 7</b><small>Trường THCS Trần Duy Hưng · 2026–2027</small></span>
      </a>
      <nav class="topnav">${ORDER.map(id => `<a href="#${id}" ${cur === id ? 'aria-current="page"' : ''}>${QZ.subjects[id].short}</a>`).join('')}</nav>
      <button class="theme-btn" id="themeBtn" title="Đổi giao diện sáng/tối" aria-label="Đổi giao diện sáng/tối"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 4 a8 8 0 0 1 0 16 Z" fill="currentColor"/></svg></button>
    </div></header>`;
  }

  /* ---------- Trang chủ ---------- */
  function renderHome() {
    let T = 0, D = 0, O = 0;
    ORDER.forEach(id => { const s = stat(id); T += s.total; D += s.done; O += s.ok; });
    const pct = T ? Math.round(D / T * 100) : 0, C = 2 * Math.PI * 32;
    const cards = ORDER.map(id => {
      const S = QZ.subjects[id], st = stat(id);
      const g = st.total ? st.ok / st.total * 100 : 0, r = st.total ? (st.done - st.ok) / st.total * 100 : 0;
      return `<a class="scard" href="#${id}" style="--c:var(--${id})">
        <span class="sicon">${ICONS[id]}</span>
        <h2>${S.name}</h2>
        <p>${S.tagline}</p>
        <div class="meta">${S.topics.slice(0, 4).map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <div class="bar"><span class="track"><i class="g" style="width:${g}%"></i><i class="r" style="width:${r}%"></i></span><span>${st.done}/${st.total} câu · đúng ${st.ok}</span></div>
      </a>`;
    }).join('');
    app.innerHTML = topbar('home') + `<main class="wrap">
      <section class="hero">
        <div>
          <div class="eyebrow">Nội dung ôn tập giữa học kì I · Năm học 2026 – 2027</div>
          <h1>Ôn tập theo đề cương, <span>làm câu nào hiểu câu đó</span></h1>
          <p>${T} câu trắc nghiệm soạn theo đề cương của trường cho ${ORDER.length} môn: ${ORDER.map(id => QZ.subjects[id].short).join(', ')}. Chọn đáp án để xem lời giải chi tiết kèm hình vẽ và mô phỏng động.</p>
        </div>
        <div class="ring-box">
          <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--soft)" stroke-width="9"/><circle cx="40" cy="40" r="32" fill="none" stroke="var(--ok)" stroke-width="9" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct / 100)}" transform="rotate(-90 40 40)"/><text x="40" y="44" text-anchor="middle" style="font:700 17px var(--font-display);fill:var(--ink)">${pct}%</text></svg>
          <div><span class="num">${O}/${D}</span><small>câu đúng / câu đã làm</small><small>Đã làm ${pct}% của ${T} câu</small></div>
        </div>
      </section>
      <section class="subjects">${cards}</section>
      <section class="howto">
        <div><b>1</b><p><strong>Chọn môn</strong>Mỗi môn có phần "Phạm vi ôn tập" tóm tắt đề cương và phần luyện trắc nghiệm.</p></div>
        <div><b>2</b><p><strong>Chọn đáp án</strong>Đáp án đúng hiện màu xanh, sai hiện màu đỏ. Lời giải xuất hiện ngay bên dưới.</p></div>
        <div><b>3</b><p><strong>Xem lại câu sai</strong>Ô số màu đỏ là câu làm sai. Bấm "Làm lại câu sai" để luyện tiếp.</p></div>
      </section>
    </main>
    <footer class="foot"><div class="wrap">Tài liệu ôn tập soạn theo đề cương giữa học kì I của Trường THCS Trần Duy Hưng (phường Yên Hòa, Hà Nội). Tiến độ chỉ lưu trên trình duyệt của máy đang dùng.</div></footer>`;
    bindTheme();
  }

  /* ---------- Trang môn học ---------- */
  const view = {}; // trạng thái từng môn: {idx, topic, tab, onlyWrong}
  function V(sid) { return (view[sid] = view[sid] || { idx: 0, topic: 'Tất cả', tab: 'quiz', onlyWrong: false }); }
  function visible(sid) {
    const S = QZ.subjects[sid], v = V(sid), a = ans(sid);
    return S.questions.map((q, i) => i).filter(i => (v.topic === 'Tất cả' || S.questions[i].t === v.topic) && (!v.onlyWrong || (v.wrongSet || []).includes(i)));
  }

  function renderSubject(sid) {
    const S = QZ.subjects[sid], v = V(sid), st = stat(sid);
    let body = '';
    if (v.tab === 'scope') {
      body = `<div class="scope" style="--c:var(--${sid})">${S.scope.map(sec => `<section><h3>${sec.h}</h3><ul>${sec.items.map(li => `<li>${fmt(li)}</li>`).join('')}</ul>${sec.tip ? `<div class="tip">${fmt(sec.tip)}</div>` : ''}</section>`).join('')}</div>`;
    } else {
      body = `<div class="layout">${sidebar(sid)}<div id="qhost"></div></div>`;
    }
    app.innerHTML = topbar(sid) + `<div class="subj-head" style="--c:var(--${sid})"><div class="wrap">
        <span class="sicon">${ICONS[sid]}</span>
        <div><a href="#home" class="back">← Tất cả môn</a><h1>${S.name}</h1><p>${S.tagline}</p></div>
        <div class="stats"><div><b>${st.done}/${st.total}</b><small>đã làm</small></div><div><b style="color:var(--ok)">${st.ok}</b><small>câu đúng</small></div></div>
      </div></div>
      <main class="wrap" style="--c:var(--${sid})">
        <div class="tabs" role="tablist">
          <button class="tab" role="tab" aria-selected="${v.tab === 'quiz'}" data-tab="quiz">Luyện trắc nghiệm</button>
          <button class="tab" role="tab" aria-selected="${v.tab === 'scope'}" data-tab="scope">Phạm vi ôn tập</button>
        </div>
        ${body}
      </main>`;
    app.querySelectorAll('.tab').forEach(b => b.onclick = () => { v.tab = b.dataset.tab; renderSubject(sid); });
    bindTheme();
    if (v.tab === 'quiz') { bindSidebar(sid); renderQuestion(sid); }
  }

  function sidebar(sid) {
    const S = QZ.subjects[sid], v = V(sid), a = ans(sid);
    const list = visible(sid);
    const topics = ['Tất cả'].concat(S.topics);
    return `<aside class="side">
      <h3>Chủ đề</h3>
      <div class="filters">${topics.map(t => `<button class="filter" aria-pressed="${v.topic === t}" data-topic="${t}">${t}</button>`).join('')}</div>
      <h3>Câu hỏi (${list.length})</h3>
      <div class="palette">${list.map(i => { const r = a[i]; const c = r && r.done ? (r.ok ? 'ok' : 'bad') : ''; return `<button class="pal ${c} ${i === v.idx ? 'cur' : ''}" data-i="${i}" aria-label="Câu ${i + 1}">${i + 1}</button>`; }).join('')}</div>
      <div class="legend"><span><i class="lo"></i>Đúng</span><span><i class="lb"></i>Sai</span><span><i></i>Chưa làm</span></div>
      <div class="side-actions">
        <button class="ghost" id="onlyWrong">${v.onlyWrong ? 'Hiện tất cả câu' : 'Làm lại câu sai'}</button>
        <button class="ghost" id="resetBtn">Xoá kết quả môn này</button>
      </div>
    </aside>`;
  }

  function bindSidebar(sid) {
    const v = V(sid);
    app.querySelectorAll('.filter').forEach(b => b.onclick = () => {
      v.topic = b.dataset.topic; const l = visible(sid); if (l.length && !l.includes(v.idx)) v.idx = l[0]; renderSubject(sid);
    });
    app.querySelectorAll('.pal').forEach(b => b.onclick = () => {
      v.idx = +b.dataset.i; refreshPalette(sid); renderQuestion(sid);
      if (window.innerWidth <= 860) { const h = document.getElementById('qhost'); if (h) h.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    const ow = document.getElementById('onlyWrong');
    ow.onclick = () => {
      v.onlyWrong = !v.onlyWrong;
      if (v.onlyWrong) {
        const a = ans(sid);
        v.wrongSet = Object.keys(a).map(Number).filter(i => a[i] && a[i].done && !a[i].ok);
        v.wrongSet.forEach(i => { delete a[i]; }); save();
      }
      const l = visible(sid); if (l.length && !l.includes(v.idx)) v.idx = l[0];
      renderSubject(sid);
    };
    const rb = document.getElementById('resetBtn');
    let armed = false;
    rb.onclick = () => {
      if (!armed) { armed = true; rb.classList.add('warn'); rb.textContent = 'Bấm lần nữa để xoá hết'; setTimeout(() => { armed = false; rb.classList.remove('warn'); rb.textContent = 'Xoá kết quả môn này'; }, 3500); return; }
      store[sid] = {}; save(); v.idx = 0; v.onlyWrong = false; renderSubject(sid);
    };
  }

  function refreshPalette(sid) {
    const v = V(sid), a = ans(sid);
    app.querySelectorAll('.pal').forEach(b => {
      const i = +b.dataset.i, r = a[i];
      b.className = 'pal ' + (r && r.done ? (r.ok ? 'ok' : 'bad') : '') + (i === v.idx ? ' cur' : '');
    });
    const st = stat(sid), sb = app.querySelector('.stats');
    if (sb) sb.innerHTML = `<div><b>${st.done}/${st.total}</b><small>đã làm</small></div><div><b style="color:var(--ok)">${st.ok}</b><small>câu đúng</small></div>`;
  }

  function renderQuestion(sid) {
    const S = QZ.subjects[sid], v = V(sid), host = document.getElementById('qhost');
    const list = visible(sid);
    if (!list.length) {
      host.innerHTML = `<div class="qcard"><p class="qtext">${v.onlyWrong ? 'Không còn câu sai nào trong chủ đề này. Giỏi lắm!' : 'Chủ đề này chưa có câu hỏi.'}</p></div>`;
      return;
    }
    if (!list.includes(v.idx)) v.idx = list[0];
    const i = v.idx, q = S.questions[i], a = ans(sid), rec = a[i];
    const pos = list.indexOf(i);
    let h = `<article class="qcard" aria-live="polite">
      <div class="qtop"><span class="qnum">Câu ${i + 1}</span><span class="chip">${q.t}</span>${q.src ? `<span class="chip src">${q.src}</span>` : ''}${q.ic ? `<span class="qtopic-icon" aria-hidden="true">${q.ic}</span>` : ''}</div>`;
    if (q.passage) h += `<div class="passage">${fmt(q.passage)}</div>`;
    h += `<div class="qtext">${fmt(q.q)}</div>`;
    if (q.listen) h += `<button class="listen" id="listenBtn">▶ Nghe đoạn hội thoại</button>`;
    h += figWrap(q.f, q.wide);
    if (q.type === 'tf') {
      h += `<div class="tf">${q.s.map((st, k) => {
        const r = rec && rec.tf && rec.tf[k];
        const done = r != null;
        const okk = done && r === st.a;
        return `<div class="tfrow ${done ? (okk ? 'done-ok' : 'done-bad') : ''}"><div class="tfq"><span><b>${'abcd'[k]})</b> ${fmt(st.t)}</span>
          <span class="tfbtns">${[true, false].map(val => {
            let c = '';
            if (done) { if (val === st.a) c = 'correct'; else if (val === r) c = 'wrong'; }
            return `<button data-k="${k}" data-v="${val}" class="${c}" ${done ? 'disabled' : ''}>${val ? 'Đúng' : 'Sai'}</button>`;
          }).join('')}</span></div>
          ${done ? `<div class="tfexp">${okk ? '✔' : '✘'} ${fmt(st.e)}</div>` : ''}</div>`;
      }).join('')}</div>`;
    } else {
      const one = q.o.some(o => String(o).replace(/<[^>]+>/g, '').length > 38);
      h += `<div class="opts ${one ? 'one' : ''}">${q.o.map((o, k) => {
        let c = '';
        if (rec && rec.done) { if (k === q.a) c = 'correct'; else if (k === rec.c) c = 'wrong'; }
        return `<button class="opt ${c}" data-k="${k}" ${rec && rec.done ? 'disabled' : ''}><span class="L">${LETTERS[k]}</span><span class="T">${fmt(o)}</span>${q.say ? `<span class="say" role="button" tabindex="0" data-say="${String(o).replace(/<[^>]+>/g, '').replace(/"/g, '')}" aria-label="Nghe phát âm">🔊</span>` : ''}</button>`;
      }).join('')}</div>`;
    }
    if (rec && rec.done) h += explainBox(q, rec);
    h += `<div class="qnav"><button class="btn" id="prevBtn" ${pos <= 0 ? 'disabled' : ''}>← Câu trước</button><span class="hint-kb">Phím A–D để chọn, ← → để chuyển câu</span><button class="btn primary" id="nextBtn" ${pos >= list.length - 1 ? 'disabled' : ''}>Câu tiếp →</button></div></article>`;
    host.innerHTML = h;

    host.querySelectorAll('.opt').forEach(b => b.onclick = (ev) => {
      if (ev.target.closest('.say')) return;
      if (rec && rec.done) return;
      const k = +b.dataset.k; a[i] = { done: true, c: k, ok: k === q.a }; save(); refreshPalette(sid); renderQuestion(sid);
      const ex = host.querySelector('.explain'); if (ex) ex.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    host.querySelectorAll('.say').forEach(b => {
      b.onclick = (ev) => { ev.stopPropagation(); speak(b.dataset.say.replace(/^[A-D]\.\s*/, '')); };
      b.onkeydown = (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ev.stopPropagation(); speak(b.dataset.say); } };
    });
    host.querySelectorAll('.tfbtns button').forEach(b => b.onclick = () => {
      const k = +b.dataset.k, val = b.dataset.v === 'true';
      const r = a[i] || { tf: [] }; r.tf = r.tf || []; r.tf[k] = val;
      const all = q.s.every((st, j) => r.tf[j] != null);
      if (all) { r.done = true; r.ok = q.s.every((st, j) => r.tf[j] === st.a); r.n = q.s.filter((st, j) => r.tf[j] === st.a).length; }
      a[i] = r; save(); refreshPalette(sid); renderQuestion(sid);
    });
    const lb = document.getElementById('listenBtn'); if (lb) lb.onclick = () => speak(q.listen);
    const rp = host.querySelector('.replay'); if (rp) rp.onclick = () => { const fb = host.querySelector('.explain .figbox'); if (fb) fb.innerHTML = fig(q.ef); };
    document.getElementById('prevBtn').onclick = () => { if (pos > 0) { v.idx = list[pos - 1]; refreshPalette(sid); renderQuestion(sid); } };
    document.getElementById('nextBtn').onclick = () => { if (pos < list.length - 1) { v.idx = list[pos + 1]; refreshPalette(sid); renderQuestion(sid); } };
  }

  function explainBox(q, rec) {
    const ok = rec.ok;
    let verdict;
    if (q.type === 'tf') verdict = ok ? 'Chính xác cả 4 ý!' : `Đúng ${rec.n}/4 ý`;
    else verdict = ok ? 'Chính xác!' : `Chưa đúng. Đáp án đúng là ${LETTERS[q.a]}.`;
    return `<div class="explain ${ok ? 'ok' : 'bad'}">
      <div class="verdict">${ok ? '✔' : '✘'} ${verdict}</div>
      <h4>Lời giải</h4>
      <div>${fmt(q.e)}</div>
      ${q.ef ? `<h4>Hình minh hoạ ${q.efAnim ? '· mô phỏng động' : ''} <button class="replay">↻ Chạy lại</button></h4>${figWrap(q.ef, q.wide)}${q.efCap ? `<div class="figcap">${q.efCap}</div>` : ''}` : ''}
      ${q.tip ? `<div class="key"><b>Ghi nhớ:</b> ${fmt(q.tip)}</div>` : ''}
    </div>`;
  }

  /* ---------- Giao diện sáng/tối ---------- */
  function bindTheme() {
    const b = document.getElementById('themeBtn'); if (!b) return;
    b.onclick = () => {
      const root = document.documentElement, cur = root.getAttribute('data-theme');
      const dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', dark ? 'light' : 'dark');
      try { localStorage.setItem(KEY + '-theme', dark ? 'light' : 'dark'); } catch (e) { }
    };
  }
  try { const t = localStorage.getItem(KEY + '-theme'); if (t) document.documentElement.setAttribute('data-theme', t); } catch (e) { }

  /* ---------- Điều hướng ---------- */
  function route() {
    const h = (location.hash || '#home').slice(1);
    if (QZ.subjects[h]) renderSubject(h); else renderHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  document.addEventListener('keydown', (e) => {
    const h = (location.hash || '').slice(1);
    if (!QZ.subjects[h] || V(h).tab !== 'quiz' || e.target.matches('input,textarea')) return;
    const k = e.key.toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(k)) { const b = app.querySelector(`.opt[data-k="${LETTERS.indexOf(k)}"]`); if (b && !b.disabled) b.click(); }
    if (e.key === 'ArrowRight') { const b = document.getElementById('nextBtn'); if (b && !b.disabled) b.click(); }
    if (e.key === 'ArrowLeft') { const b = document.getElementById('prevBtn'); if (b && !b.disabled) b.click(); }
  });
  if ('speechSynthesis' in window) { try { window.speechSynthesis.getVoices(); } catch (e) { } }
  route();
})();
