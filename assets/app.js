/* Ứng dụng ôn tập giữa kỳ I – Lớp 7 – THCS Trần Duy Hưng */
(function () {
  const QZ = window.QZ;
  const ORDER = ['toan', 'van', 'anh', 'khtn', 'lsdl', 'gdcd', 'cn', 'tin'].filter(id => QZ.subjects[id]);
  const LETTERS = ['A', 'B', 'C', 'D'];
  const KEY = 'ontap-gk1-lop7-v1';
  const MINUTES = { toan: 90, van: 90, anh: 60 };           // các môn còn lại: 45 phút
  const minutesOf = (sid) => MINUTES[sid] || 45;
  const MASCOT = { toan: '🔢', van: '📖', anh: '🔤', khtn: '🧪', lsdl: '🗺️', gdcd: '💛', cn: '🌱', tin: '💻' };
  const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

  /* Linh vật: chú cú đội mũ tốt nghiệp (mắt chớp, cánh vẫy) */
  const OWL = `<svg class="owl" viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="122" rx="34" ry="5" class="owl-shadow"/>
    <g class="owl-body">
      <path class="owl-wing owl-wl" d="M24 70 C10 78 12 100 26 106 C30 92 30 80 24 70 Z"/>
      <path class="owl-wing owl-wr" d="M96 70 C110 78 108 100 94 106 C90 92 90 80 96 70 Z"/>
      <ellipse cx="60" cy="80" rx="36" ry="38" class="owl-fur"/>
      <ellipse cx="60" cy="92" rx="22" ry="22" class="owl-belly"/>
      <circle cx="46" cy="66" r="13" class="owl-eye-w"/><circle cx="74" cy="66" r="13" class="owl-eye-w"/>
      <circle cx="47" cy="67" r="6" class="owl-pupil"/><circle cx="75" cy="67" r="6" class="owl-pupil"/>
      <circle cx="49" cy="65" r="2" fill="#fff"/><circle cx="77" cy="65" r="2" fill="#fff"/>
      <g class="owl-lids"><rect x="32" y="52" width="28" height="28" class="owl-lid"/><rect x="60" y="52" width="28" height="28" class="owl-lid"/></g>
      <path d="M56 76 L60 84 L64 76 Z" class="owl-beak"/>
      <path d="M44 112 l-4 6 M48 112 v7 M72 112 v7 M76 112 l4 6" class="owl-feet"/>
      <g class="owl-cap"><path d="M30 40 L60 28 L90 40 L60 52 Z" class="cap-top"/><path d="M44 46 v8 c10 6 22 6 32 0 v-8" class="cap-base"/><path d="M90 40 v14" class="cap-string"/><circle cx="90" cy="56" r="3" class="cap-tassel"/></g>
    </g></svg>`;

  /* ---------- Lưu tiến độ (chỉ trên trình duyệt của học sinh) ---------- */
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { store = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* bỏ qua */ } };
  const ans = (sid) => (store[sid] = store[sid] || {});
  const tl = (sid) => (store['tl-' + sid] = store['tl-' + sid] || {});
  const exams = () => (store.exam = store.exam || {});

  /* ---------- Định dạng ký hiệu toán ---------- */
  function fmt(s) {
    if (s == null) return '';
    s = String(s);
    for (let i = 0; i < 3; i++) s = s.replace(/\{\{([^{}|]*)\|([^{}]*)\}\}/g, '<span class="frac"><span>$1</span><span>$2</span></span>');
    for (let i = 0; i < 3; i++) s = s.replace(/√\{((?:[^{}]|<[^>]*>)*?)\}/g, '<span class="sq"><span class="rad">√</span><span class="rc">$1</span></span>');
    return s;
  }
  function fig(spec) {
    if (!spec) return '';
    try { if (typeof spec === 'string') return spec; const [name, arg] = spec; return window.FIG[name](arg); }
    catch (e) { console.error('Lỗi vẽ hình', spec, e); return ''; }
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

  /* ---------- Hiệu ứng vui: pháo giấy, sao bay, rung ---------- */
  function confetti(el) {
    if (RM || !el) return;
    const r = el.getBoundingClientRect(), box = document.createElement('div');
    box.className = 'confetti'; box.style.left = (r.left + r.width / 2) + 'px'; box.style.top = (r.top + r.height / 2) + 'px';
    const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#ff924c'];
    for (let i = 0; i < 26; i++) {
      const p = document.createElement('i');
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 90;
      p.style.setProperty('--x', Math.cos(a) * d + 'px'); p.style.setProperty('--y', (Math.sin(a) * d - 40) + 'px');
      p.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg'); p.style.background = colors[i % colors.length];
      box.appendChild(p);
    }
    const star = document.createElement('b'); star.textContent = '+1 ⭐'; box.appendChild(star);
    document.body.appendChild(box); setTimeout(() => box.remove(), 1300);
  }
  function shake(el) { if (!el || RM) return; el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
  const PRAISE = ['Tuyệt vời!', 'Xuất sắc!', 'Chính xác!', 'Giỏi quá!', 'Đúng rồi!', 'Siêu đỉnh!'];
  let streak = 0;

  /* ---------- Thi thử: đồng hồ đếm ngược ---------- */
  const examOf = (sid) => exams()[sid];
  const examActive = (sid) => { const e = examOf(sid); return !!e && (e.status === 'running' || e.status === 'paused'); };
  const remaining = (sid) => { const e = examOf(sid); if (!e) return 0; return e.status === 'paused' ? e.left : Math.max(0, e.end - Date.now()); };
  const mmss = (ms) => { const s = Math.ceil(ms / 1000), m = Math.floor(s / 60); return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };
  function startExam(sid) {
    store[sid] = {}; store['tl-' + sid] = {};
    exams()[sid] = { status: 'running', end: Date.now() + minutesOf(sid) * 60000, total: minutesOf(sid) * 60000 };
    save(); streak = 0; V(sid).idx = 0; V(sid).onlyWrong = false; renderSubject(sid);
  }
  function pauseExam(sid) { const e = examOf(sid); if (!e) return; if (e.status === 'running') { e.left = remaining(sid); e.status = 'paused'; } else if (e.status === 'paused') { e.end = Date.now() + e.left; e.status = 'running'; } save(); renderPill(); }
  function submitExam(sid, timeout) {
    const e = examOf(sid); if (!e) return;
    e.status = 'submitted'; e.used = e.total - remaining(sid); e.timeout = !!timeout; save();
    showResult(sid); if ((location.hash || '').slice(1) === sid) renderSubject(sid);
  }
  function showResult(sid) {
    const S = QZ.subjects[sid], st = stat(sid), e = examOf(sid);
    const score = st.total ? Math.round(st.ok / st.total * 100) / 10 : 0;
    const emoji = score >= 8 ? '🏆' : score >= 6.5 ? '🎉' : score >= 5 ? '👍' : '💪';
    const ov = document.createElement('div'); ov.className = 'overlay';
    ov.innerHTML = `<div class="modal" role="dialog" aria-label="Kết quả thi thử">
      <div class="big-emoji">${e.timeout ? '⏰' : emoji}</div>
      <h2>${e.timeout ? 'Hết giờ làm bài!' : 'Đã nộp bài!'}</h2>
      <p>${S.name} · thời gian làm: <b>${mmss(e.used || 0)}</b> / ${minutesOf(sid)}:00</p>
      <div class="res-grid"><div><b>${st.ok}/${st.total}</b><small>câu trắc nghiệm đúng</small></div><div><b>${score.toFixed(1)}</b><small>điểm quy đổi (thang 10)</small></div></div>
      <p class="muted">Bây giờ lời giải đã mở. Hãy xem lại câu sai và tự chấm phần tự luận bằng lời giải mẫu.</p>
      <div class="modal-actions"><button class="btn" data-go="essay">Chấm tự luận</button><button class="btn primary" data-go="quiz">Xem lời giải trắc nghiệm</button></div></div>`;
    document.body.appendChild(ov);
    if (!e.timeout && score >= 6.5) confetti(ov.querySelector('.big-emoji'));
    ov.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { ov.remove(); V(sid).tab = b.dataset.go; if ((location.hash || '').slice(1) !== sid) location.hash = sid; else renderSubject(sid); });
    ov.onclick = (ev) => { if (ev.target === ov) ov.remove(); };
  }
  function renderPill() {
    let pill = document.getElementById('examPill');
    const sid = (location.hash || '').slice(1);
    if (!QZ.subjects[sid] || !examActive(sid)) { if (pill) pill.remove(); return; }
    if (!pill) { pill = document.createElement('div'); pill.id = 'examPill'; pill.className = 'pill'; document.body.appendChild(pill); }
    const e = examOf(sid), left = remaining(sid), pct = left / e.total * 100;
    pill.className = 'pill' + (left <= 5 * 60000 ? ' warn' : '') + (e.status === 'paused' ? ' paused' : '');
    pill.style.setProperty('--c', `var(--${sid})`);
    pill.innerHTML = `<span class="hourglass" aria-hidden="true">⏳</span>
      <span class="pill-main"><b id="pillTime">${mmss(left)}</b><small>${e.status === 'paused' ? 'Đang tạm dừng' : left <= 5 * 60000 ? 'Sắp hết giờ!' : 'Thi thử ' + QZ.subjects[sid].short}</small><span class="pill-bar"><i style="width:${pct}%"></i></span></span>
      <button class="pill-btn" id="pillPause" title="${e.status === 'paused' ? 'Tiếp tục' : 'Tạm dừng'}" aria-label="${e.status === 'paused' ? 'Tiếp tục' : 'Tạm dừng'}">${e.status === 'paused' ? '<svg viewBox="0 0 16 16" width="14" height="14"><path d="M4 2 L13 8 L4 14 Z" fill="currentColor"/></svg>' : '<svg viewBox="0 0 16 16" width="14" height="14"><rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor"/><rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor"/></svg>'}</button>
      <button class="pill-btn submit" id="pillSubmit">Nộp bài</button>`;
    pill.querySelector('#pillPause').onclick = () => pauseExam(sid);
    const sb = pill.querySelector('#pillSubmit'); let armed = false;
    sb.onclick = () => { if (!armed) { armed = true; sb.textContent = 'Chắc chắn?'; setTimeout(() => { armed = false; if (sb.isConnected) sb.textContent = 'Nộp bài'; }, 3000); return; } submitExam(sid, false); };
  }
  setInterval(() => {
    Object.keys(exams()).forEach(sid => { const e = examOf(sid); if (e.status === 'running' && remaining(sid) <= 0) submitExam(sid, true); });
    const sid = (location.hash || '').slice(1), t = document.getElementById('pillTime');
    if (t && examActive(sid)) {
      const left = remaining(sid), e = examOf(sid); t.textContent = mmss(left);
      const bar = document.querySelector('#examPill .pill-bar i'); if (bar) bar.style.width = (left / e.total * 100) + '%';
      const p = document.getElementById('examPill'); if (p && left <= 5 * 60000 && !p.classList.contains('warn')) renderPill();
    }
  }, 1000);

  /* ---------- Tính điểm ---------- */
  function stat(sid) {
    const S = QZ.subjects[sid], a = ans(sid);
    let done = 0, ok = 0;
    S.questions.forEach((q, i) => { const r = a[i]; if (r && r.done) { done++; if (r.ok) ok++; } });
    const es = S.essays || [], t = tl(sid);
    return { total: S.questions.length, done, ok, eTotal: es.length, eDone: es.filter((x, i) => t[i]).length };
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
    let T = 0, D = 0, O = 0, ET = 0, ED = 0;
    ORDER.forEach(id => { const s = stat(id); T += s.total; D += s.done; O += s.ok; ET += s.eTotal; ED += s.eDone; });
    const pct = T ? Math.round(D / T * 100) : 0, C = 2 * Math.PI * 32;
    const cards = ORDER.map((id, k) => {
      const S = QZ.subjects[id], st = stat(id);
      const g = st.total ? st.ok / st.total * 100 : 0, r = st.total ? (st.done - st.ok) / st.total * 100 : 0;
      const ex = examActive(id) ? '<span class="chip live">⏳ Đang thi thử</span>' : '';
      return `<a class="scard" href="#${id}" style="--c:var(--${id});animation-delay:${k * 60}ms">
        <span class="mascot" aria-hidden="true">${MASCOT[id]}</span>
        <span class="sicon">${ICONS[id]}</span>
        <h2>${S.name}</h2>
        <p>${S.tagline}</p>
        <div class="meta"><span class="chip timer-chip">⏱ ${minutesOf(id)} phút</span><span class="chip">✍️ ${st.eTotal} bài tự luận</span>${ex}</div>
        <div class="bar"><span class="track"><i class="g" style="width:${g}%"></i><i class="r" style="width:${r}%"></i></span><span>${st.done}/${st.total} câu · đúng ${st.ok}</span></div>
      </a>`;
    }).join('');
    const floats = ['📚', '✏️', '⭐', '🧪', '🌍', '📐', '🎨', '💡', '🔬', '🏆'].map((e, i) => `<span class="fl" style="--i:${i};top:${8 + (i * 37) % 80}%">${e}</span>`).join('');
    app.innerHTML = topbar('home') + `<main class="wrap">
      <section class="hero">
        <div class="floats" aria-hidden="true">${floats}</div>
        <div class="hero-text">
          <div class="eyebrow">Nội dung ôn tập giữa học kì I · Năm học 2026 – 2027</div>
          <h1>Ôn tập theo đề cương, <span>làm câu nào hiểu câu đó</span></h1>
          <p>${T} câu trắc nghiệm và ${ET} bài tự luận có lời giải cho ${ORDER.length} môn. Luyện từng câu để xem giải thích ngay, hoặc bấm <b>⏱ Thi thử</b> để làm bài có tính giờ như khi kiểm tra.</p>
        </div>
        <div class="hero-side">
          <div class="owl-wrap">${OWL}<span class="bubble">${D === 0 ? 'Bắt đầu thôi nào! 🚀' : pct >= 100 ? 'Hoàn thành rồi! 🏆' : 'Cố lên, sắp xong rồi! 💪'}</span></div>
          <div class="ring-box">
            <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--soft)" stroke-width="9"/><circle cx="40" cy="40" r="32" fill="none" stroke="var(--ok)" stroke-width="9" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct / 100)}" transform="rotate(-90 40 40)"/><text x="40" y="44" text-anchor="middle" style="font:700 17px var(--font-display);fill:var(--ink)">${pct}%</text></svg>
            <div><span class="num">${O}/${D}</span><small>câu đúng / câu đã làm</small><small>Tự luận đã tự chấm: ${ED}/${ET}</small></div>
          </div>
        </div>
      </section>
      <section class="subjects">${cards}</section>
      <section class="howto">
        <div><b>1</b><p><strong>📝 Luyện trắc nghiệm</strong>Chọn đáp án để thấy ngay đúng/sai và lời giải có hình động.</p></div>
        <div><b>2</b><p><strong>✍️ Tự luận</strong>Tự làm ra giấy, rồi bấm "Xem lời giải" để so sánh từng bước và tự chấm.</p></div>
        <div><b>3</b><p><strong>⏱ Thi thử</strong>Toán, Văn 90 phút · Anh 60 phút · các môn khác 45 phút. Lời giải mở sau khi nộp bài.</p></div>
      </section>
    </main>
    <footer class="foot"><div class="wrap">Tài liệu ôn tập soạn theo đề cương giữa học kì I của Trường THCS Trần Duy Hưng (phường Yên Hòa, Hà Nội). Tiến độ chỉ lưu trên trình duyệt của máy đang dùng.</div></footer>`;
    bindTheme();
  }

  /* ---------- Trang môn học ---------- */
  const view = {};
  function V(sid) { return (view[sid] = view[sid] || { idx: 0, topic: 'Tất cả', tab: 'quiz', onlyWrong: false, etopic: 'Tất cả' }); }
  function visible(sid) {
    const S = QZ.subjects[sid], v = V(sid);
    return S.questions.map((q, i) => i).filter(i => (v.topic === 'Tất cả' || S.questions[i].t === v.topic) && (!v.onlyWrong || (v.wrongSet || []).includes(i)));
  }

  function examBox(sid) {
    const e = examOf(sid), m = minutesOf(sid);
    if (examActive(sid)) return `<div class="exam-box live"><span class="hourglass">⏳</span><div><b>Đang thi thử · ${m} phút</b><small>Lời giải tạm ẩn. Đồng hồ ở góc dưới màn hình.</small></div></div>`;
    return `<div class="exam-box" id="examBox"><span class="clock" aria-hidden="true">⏱</span><div><b>Thi thử ${m} phút</b><small>Trắc nghiệm + tự luận${e && e.status === 'submitted' ? ' · lần trước: ' + mmss(e.used || 0) : ''}</small></div><button class="btn primary" id="examStart">Bắt đầu</button></div>`;
  }

  function renderSubject(sid) {
    const S = QZ.subjects[sid], v = V(sid), st = stat(sid), active = examActive(sid);
    let body = '';
    if (v.tab === 'scope') {
      body = `<div class="scope" style="--c:var(--${sid})">${S.scope.map(sec => `<section><h3>${sec.h}</h3><ul>${sec.items.map(li => `<li>${fmt(li)}</li>`).join('')}</ul>${sec.tip ? `<div class="tip">${fmt(sec.tip)}</div>` : ''}</section>`).join('')}</div>`;
    } else if (v.tab === 'essay') {
      body = essayView(sid);
    } else {
      body = `<div class="layout">${sidebar(sid)}<div id="qhost"></div></div>`;
    }
    app.innerHTML = topbar(sid) + `<div class="subj-head" style="--c:var(--${sid})"><div class="wrap">
        <span class="sicon">${ICONS[sid]}<span class="mini-mascot" aria-hidden="true">${MASCOT[sid]}</span></span>
        <div class="sh-title"><a href="#home" class="back">← Tất cả môn</a><h1>${S.name}</h1><p>${S.tagline}</p></div>
        <div class="stats">${statsHtml(sid)}</div>
        ${examBox(sid)}
      </div></div>
      <main class="wrap" style="--c:var(--${sid})">
        <div id="confirmHost"></div>
        <div class="tabs" role="tablist">
          <button class="tab" role="tab" aria-selected="${v.tab === 'quiz'}" data-tab="quiz">📝 Trắc nghiệm <span class="count">${st.total}</span></button>
          <button class="tab" role="tab" aria-selected="${v.tab === 'essay'}" data-tab="essay">✍️ Tự luận <span class="count">${st.eTotal}</span></button>
          <button class="tab" role="tab" aria-selected="${v.tab === 'scope'}" data-tab="scope">📌 Phạm vi ôn tập</button>
        </div>
        ${body}
      </main>`;
    app.querySelectorAll('.tab').forEach(b => b.onclick = () => { v.tab = b.dataset.tab; renderSubject(sid); });
    const es = document.getElementById('examStart');
    if (es) es.onclick = () => {
      document.getElementById('confirmHost').innerHTML = `<div class="confirm"><span class="big-emoji sm">⏱</span><div><b>Bắt đầu thi thử ${S.name} – ${minutesOf(sid)} phút?</b><p>Kết quả trắc nghiệm và tự chấm tự luận cũ của môn này sẽ được xoá. Trong lúc thi, đáp án và lời giải được ẩn; bấm "Nộp bài" hoặc khi hết giờ sẽ hiện kết quả. Hãy chuẩn bị giấy nháp để làm phần tự luận.</p></div><div class="confirm-actions"><button class="btn" id="cfNo">Huỷ</button><button class="btn primary" id="cfYes">Bắt đầu làm bài</button></div></div>`;
      document.getElementById('cfNo').onclick = () => { document.getElementById('confirmHost').innerHTML = ''; };
      document.getElementById('cfYes').onclick = () => startExam(sid);
    };
    bindTheme();
    if (v.tab === 'quiz') { bindSidebar(sid); renderQuestion(sid); }
    if (v.tab === 'essay') bindEssays(sid);
    renderPill();
  }

  function statsHtml(sid) {
    const st = stat(sid), active = examActive(sid);
    return `<div><b>${st.done}/${st.total}</b><small>trắc nghiệm</small></div><div><b style="color:var(--ok)">${active ? '?' : st.ok}</b><small>câu đúng</small></div><div><b>${st.eDone}/${st.eTotal}</b><small>tự luận</small></div>`;
  }

  /* ---------- Tự luận ---------- */
  function essayView(sid) {
    const S = QZ.subjects[sid], v = V(sid), t = tl(sid), es = S.essays || [], active = examActive(sid);
    if (!es.length) return '<div class="qcard"><p>Môn này chưa có bài tự luận.</p></div>';
    const topics = ['Tất cả'].concat([...new Set(es.map(e => e.t))]);
    const list = es.map((e, i) => i).filter(i => v.etopic === 'Tất cả' || es[i].t === v.etopic);
    return `<div class="essay-head"><div class="filters">${topics.map(x => `<button class="filter" aria-pressed="${v.etopic === x}" data-et="${x}">${x}</button>`).join('')}</div>
      <p class="essay-tip">${active ? '🔒 Đang thi thử: hãy làm bài ra giấy. Lời giải sẽ mở khi nộp bài hoặc hết giờ.' : '💡 Cách học: đọc đề → tự làm ra giấy → bấm <b>Xem lời giải</b> để so sánh từng bước → đánh dấu <b>Em đã làm được</b>.'}</p></div>
      <div class="essays">${list.map(i => {
        const e = es[i], done = !!t[i];
        return `<article class="essay ${done ? 'done' : ''}" data-i="${i}" style="animation-delay:${Math.min(list.indexOf(i), 8) * 50}ms">
          <div class="qtop"><span class="qnum">${e.src || 'Bài ' + (i + 1)}</span><span class="chip">${e.t}</span>${e.ic ? `<span class="qtopic-icon" aria-hidden="true">${e.ic}</span>` : ''}</div>
          <div class="qtext">${fmt(e.q)}</div>
          ${figWrap(e.f, e.wide)}
          <div class="essay-actions">
            <button class="btn primary reveal" ${active ? 'disabled' : ''} aria-expanded="false">${active ? '🔒 Mở sau khi nộp bài' : '💡 Xem lời giải'}</button>
            <label class="selfcheck"><input type="checkbox" ${done ? 'checked' : ''} ${active ? 'disabled' : ''}> <span>Em đã làm được ✓</span></label>
          </div>
          <div class="solution" hidden><h4>Lời giải gợi ý</h4><div class="sol-body">${fmt(e.a)}</div>${e.ef ? figWrap(e.ef, e.wide) : ''}${e.tip ? `<div class="key"><b>Ghi nhớ:</b> ${fmt(e.tip)}</div>` : ''}</div>
        </article>`;
      }).join('')}</div>`;
  }
  function bindEssays(sid) {
    const v = V(sid);
    app.querySelectorAll('[data-et]').forEach(b => b.onclick = () => { v.etopic = b.dataset.et; renderSubject(sid); });
    app.querySelectorAll('.essay').forEach(card => {
      const i = +card.dataset.i, btn = card.querySelector('.reveal'), sol = card.querySelector('.solution'), cb = card.querySelector('.selfcheck input');
      btn.onclick = () => { const open = sol.hidden; sol.hidden = !open; btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? '🙈 Ẩn lời giải' : '💡 Xem lời giải'; };
      cb.onchange = () => {
        const t = tl(sid); if (cb.checked) t[i] = 1; else delete t[i]; save(); card.classList.toggle('done', cb.checked);
        if (cb.checked) confetti(cb);
        const sb = app.querySelector('.stats'); if (sb) sb.innerHTML = statsHtml(sid);
      };
    });
  }

  /* ---------- Trắc nghiệm ---------- */
  function sidebar(sid) {
    const S = QZ.subjects[sid], v = V(sid), a = ans(sid), active = examActive(sid);
    const list = visible(sid);
    const topics = ['Tất cả'].concat(S.topics);
    return `<aside class="side">
      <h3>Chủ đề</h3>
      <div class="filters">${topics.map(t => `<button class="filter" aria-pressed="${v.topic === t}" data-topic="${t}">${t}</button>`).join('')}</div>
      <h3>Câu hỏi (${list.length})</h3>
      <div class="palette">${list.map(i => `<button class="pal ${palClass(sid, i)}" data-i="${i}" aria-label="Câu ${i + 1}">${i + 1}</button>`).join('')}</div>
      <div class="legend">${active ? '<span><i class="ld"></i>Đã chọn</span><span><i></i>Chưa làm</span>' : '<span><i class="lo"></i>Đúng</span><span><i class="lb"></i>Sai</span><span><i></i>Chưa làm</span>'}</div>
      ${active ? '' : `<div class="side-actions">
        <button class="ghost" id="onlyWrong">${v.onlyWrong ? 'Hiện tất cả câu' : '🔁 Làm lại câu sai'}</button>
        <button class="ghost" id="resetBtn">🗑 Xoá kết quả môn này</button>
      </div>`}
    </aside>`;
  }
  function palClass(sid, i) {
    const r = ans(sid)[i], v = V(sid);
    let c = '';
    if (r && (r.done || (r.tf && r.tf.some(x => x != null)))) c = examActive(sid) ? 'picked' : (r.done ? (r.ok ? 'ok' : 'bad') : '');
    return c + (i === v.idx ? ' cur' : '');
  }

  function bindSidebar(sid) {
    const v = V(sid);
    app.querySelectorAll('.filter[data-topic]').forEach(b => b.onclick = () => {
      v.topic = b.dataset.topic; const l = visible(sid); if (l.length && !l.includes(v.idx)) v.idx = l[0]; renderSubject(sid);
    });
    app.querySelectorAll('.pal').forEach(b => b.onclick = () => {
      v.idx = +b.dataset.i; refreshPalette(sid); renderQuestion(sid);
      if (window.innerWidth <= 860) { const h = document.getElementById('qhost'); if (h) h.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    const ow = document.getElementById('onlyWrong');
    if (ow) ow.onclick = () => {
      v.onlyWrong = !v.onlyWrong;
      if (v.onlyWrong) { const a = ans(sid); v.wrongSet = Object.keys(a).map(Number).filter(i => a[i] && a[i].done && !a[i].ok); v.wrongSet.forEach(i => { delete a[i]; }); save(); }
      const l = visible(sid); if (l.length && !l.includes(v.idx)) v.idx = l[0];
      renderSubject(sid);
    };
    const rb = document.getElementById('resetBtn');
    let armed = false;
    if (rb) rb.onclick = () => {
      if (!armed) { armed = true; rb.classList.add('warn'); rb.textContent = 'Bấm lần nữa để xoá hết'; setTimeout(() => { armed = false; rb.classList.remove('warn'); rb.textContent = '🗑 Xoá kết quả môn này'; }, 3500); return; }
      store[sid] = {}; save(); v.idx = 0; v.onlyWrong = false; renderSubject(sid);
    };
  }

  function refreshPalette(sid) {
    app.querySelectorAll('.pal').forEach(b => { b.className = 'pal ' + palClass(sid, +b.dataset.i); });
    const sb = app.querySelector('.stats'); if (sb) sb.innerHTML = statsHtml(sid);
  }

  function renderQuestion(sid) {
    const S = QZ.subjects[sid], v = V(sid), host = document.getElementById('qhost'), active = examActive(sid);
    const list = visible(sid);
    if (!list.length) { host.innerHTML = `<div class="qcard"><p class="qtext">${v.onlyWrong ? '🎉 Không còn câu sai nào trong chủ đề này. Giỏi lắm!' : 'Chủ đề này chưa có câu hỏi.'}</p></div>`; return; }
    if (!list.includes(v.idx)) v.idx = list[0];
    const i = v.idx, q = S.questions[i], a = ans(sid), rec = a[i];
    const pos = list.indexOf(i), reveal = rec && rec.done && !active;
    let h = `<article class="qcard" aria-live="polite">
      <div class="qtop"><span class="qnum">Câu ${i + 1}</span><span class="chip">${q.t}</span>${q.src ? `<span class="chip src">${q.src}</span>` : ''}${!active && streak >= 2 ? `<span class="chip streak">🔥 ${streak} câu đúng liên tiếp</span>` : ''}${q.ic ? `<span class="qtopic-icon" aria-hidden="true">${q.ic}</span>` : ''}</div>`;
    if (q.passage) h += `<div class="passage">${fmt(q.passage)}</div>`;
    h += `<div class="qtext">${fmt(q.q)}</div>`;
    if (q.listen) h += `<button class="listen" id="listenBtn">▶ Nghe đoạn hội thoại</button>`;
    h += figWrap(q.f, q.wide);
    if (q.type === 'tf') {
      h += `<div class="tf">${q.s.map((st, k) => {
        const r = rec && rec.tf ? rec.tf[k] : null, chosen = r != null, show = reveal;
        const okk = chosen && r === st.a;
        return `<div class="tfrow ${show ? (okk ? 'done-ok' : 'done-bad') : ''}"><div class="tfq"><span><b>${'abcd'[k]})</b> ${fmt(st.t)}</span>
          <span class="tfbtns">${[true, false].map(val => {
            let c = '';
            if (show) { if (val === st.a) c = 'correct'; else if (val === r) c = 'wrong'; } else if (chosen && val === r) c = 'picked';
            return `<button data-k="${k}" data-v="${val}" class="${c}" ${show || (chosen && !active) ? 'disabled' : ''}>${val ? 'Đúng' : 'Sai'}</button>`;
          }).join('')}</span></div>
          ${show ? `<div class="tfexp">${okk ? '✔' : '✘'} ${fmt(st.e)}</div>` : ''}</div>`;
      }).join('')}</div>`;
    } else {
      const one = q.o.some(o => String(o).replace(/<[^>]+>/g, '').length > 38);
      h += `<div class="opts ${one ? 'one' : ''}">${q.o.map((o, k) => {
        let c = '';
        if (reveal) { if (k === q.a) c = 'correct'; else if (k === rec.c) c = 'wrong'; } else if (rec && rec.done && k === rec.c) c = 'picked';
        return `<button class="opt ${c}" data-k="${k}" ${reveal ? 'disabled' : ''}><span class="L">${LETTERS[k]}</span><span class="T">${fmt(o)}</span>${q.say ? `<span class="say" role="button" tabindex="0" data-say="${String(o).replace(/<[^>]+>/g, '').replace(/"/g, '')}" aria-label="Nghe phát âm">🔊</span>` : ''}</button>`;
      }).join('')}</div>`;
    }
    if (reveal) h += explainBox(q, rec);
    else if (active && rec && (rec.done || rec.tf)) h += `<div class="exam-note">📌 Đã ghi nhận lựa chọn. Em vẫn có thể đổi đáp án trước khi nộp bài.</div>`;
    h += `<div class="qnav"><button class="btn" id="prevBtn" ${pos <= 0 ? 'disabled' : ''}>← Câu trước</button><span class="hint-kb">Phím A–D để chọn, ← → để chuyển câu</span><button class="btn primary" id="nextBtn" ${pos >= list.length - 1 ? 'disabled' : ''}>Câu tiếp →</button></div></article>`;
    host.innerHTML = h;

    host.querySelectorAll('.opt').forEach(b => b.onclick = (ev) => {
      if (ev.target.closest('.say') || reveal) return;
      const k = +b.dataset.k; a[i] = { done: true, c: k, ok: k === q.a }; save();
      if (!active) { streak = a[i].ok ? streak + 1 : 0; }
      refreshPalette(sid); renderQuestion(sid);
      if (!active) {
        const nb = host.querySelector(`.opt[data-k="${k}"]`);
        if (a[i].ok) { confetti(nb); const vd = host.querySelector('.verdict'); if (vd) vd.innerHTML = '✔ ' + PRAISE[Math.floor(Math.random() * PRAISE.length)]; } else shake(nb);
        const ex = host.querySelector('.explain'); if (ex) ex.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
    host.querySelectorAll('.say').forEach(b => {
      b.onclick = (ev) => { ev.stopPropagation(); speak(b.dataset.say); };
      b.onkeydown = (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ev.stopPropagation(); speak(b.dataset.say); } };
    });
    host.querySelectorAll('.tfbtns button').forEach(b => b.onclick = () => {
      const k = +b.dataset.k, val = b.dataset.v === 'true';
      const r = a[i] || { tf: [] }; r.tf = r.tf || []; r.tf[k] = val;
      const all = q.s.every((st, j) => r.tf[j] != null);
      if (all) { r.done = true; r.ok = q.s.every((st, j) => r.tf[j] === st.a); r.n = q.s.filter((st, j) => r.tf[j] === st.a).length; }
      a[i] = r; save();
      if (all && !active) streak = r.ok ? streak + 1 : 0;
      refreshPalette(sid); renderQuestion(sid);
      if (all && !active && r.ok) confetti(host.querySelector('.tf'));
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
    if (QZ.subjects[h]) renderSubject(h); else { renderHome(); renderPill(); }
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
