// ============================================================
// match-me.js — Collex "Match Me" v4
// Groq finds colleges → DB enriches with real data
// ============================================================

const MatchMe = (() => {

const GROQ_PROXY = '/api/groq';

function budgetLabel(v) {
  if (v >= 5) return '₹5L+ / year';
  if (v < 1)  return `₹${Math.round(v * 100)}K / year`;
  return `₹${v}L / year`;
}

// ── GROQ: AI finds best-fit colleges ─────────────────────
async function findCollegesWithGroq(ans) {
  const dbNames = Object.values(DB).map(c => c.name).join(', ');

  const prompt = `You are an Indian college counselor. From the college list below, pick the 6 best matches for this student.

Student:
- Stream: ${ans.stream}
- 12th marks: ${ans.marks}%
- Course wanted: ${ans.field}
- Annual fee budget: ${budgetLabel(ans.budget || 1.5)}
- Preferred location: ${ans.city || 'Anywhere in India'}

Available colleges: ${dbNames}

Rules:
- Only pick from the list above, exact names
- Match marks realistically (90%+ for top tier, 60-75% for mid tier)
- Respect fee budget strictly
- If city/state given, prefer colleges in that region
- Return ONLY this JSON, no extra text:
{"picks":[{"name":"exact college name","reason":"one sentence why this fits the student"},{"name":"...","reason":"..."},{"name":"...","reason":"..."},{"name":"...","reason":"..."},{"name":"...","reason":"..."},{"name":"...","reason":"..."}]}`;

  const res = await fetch(GROQ_PROXY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 450,
      temperature: 0.2
    })
  });

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || '';
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Bad response from AI');
  return JSON.parse(jsonMatch[0]).picks || [];
}

// ── ENRICH: match Groq picks with DB ─────────────────────
function enrichWithDB(picks) {
  return picks.map(pick => {
    const key = Object.keys(DB).find(k => {
      const dbName   = (DB[k].name || k).toLowerCase();
      const pickName = pick.name.toLowerCase();
      return dbName === pickName ||
             dbName.includes(pickName) ||
             pickName.includes(dbName) ||
             dbName.split(' ').some(w => w.length > 4 && pickName.includes(w));
    });
    if (key) return { ...DB[key], aiReason: pick.reason };
    return { name: pick.name, aiReason: pick.reason, score: null, fees: '—', location: '—' };
  });
}

// ── STEPS ────────────────────────────────────────────────
const STEPS = [
  {
    id: 'stream', emoji: '📚', q: 'What was your stream in 12th?',
    sub: 'Helps us match the right programs', type: 'chip',
    options: [
      { l: 'PCM', i: '⚙️' }, { l: 'PCB', i: '🧬' },
      { l: 'Commerce', i: '📊' }, { l: 'Arts', i: '🎨' }, { l: 'Other', i: '✦' }
    ]
  },
  {
    id: 'marks', emoji: '📝', q: 'Your 12th percentage?',
    sub: 'Be honest — this determines realistic options', type: 'marks'
  },
  {
    id: 'field', emoji: '🎯', q: 'What do you want to study?',
    sub: 'Pick the closest match', type: 'chip',
    options: [
      { l: 'B.Tech', i: '⚙️' }, { l: 'BCA', i: '💻' }, { l: 'BBA', i: '📈' },
      { l: 'B.Sc', i: '🔬' }, { l: 'MBBS', i: '🏥' }, { l: 'Law', i: '⚖️' },
      { l: 'Design', i: '🎨' }, { l: 'Any', i: '✦' }
    ]
  },
  {
    id: 'budget', emoji: '💰', q: 'Annual fee budget?',
    sub: 'Slide to set your max per year', type: 'slider'
  },
  {
    id: 'city', emoji: '📍', q: 'Preferred city or state?',
    sub: 'Leave blank for all India', type: 'text',
    placeholder: 'e.g. Delhi, Mumbai, Karnataka...', optional: true
  }
];

let curStep = 0, answers = {}, busy = false;

// ── STYLES ───────────────────────────────────────────────
function injectStyles() {
  if (document.getElementById('mm-styles')) return;
  const s = document.createElement('style');
  s.id = 'mm-styles';
  s.textContent = `
    #mm-ov { display:none; position:fixed; inset:0;
      background:rgba(26,23,20,0.7); z-index:9999;
      align-items:flex-end; justify-content:center; }
    @media(min-width:560px){ #mm-ov { align-items:center; } }
    #mm-ov.open { display:flex; }
    #mm-box { background:var(--surface,#fff); border:1px solid var(--border,#E8E4DE);
      border-radius:22px 22px 0 0; width:100%; max-width:480px;
      max-height:92dvh; display:flex; flex-direction:column;
      font-family:'DM Sans',sans-serif; }
    @media(min-width:560px){ #mm-box { border-radius:20px; } }
    body.dark #mm-box { background:var(--surface,#1E1C19); border-color:#2e2b28; }
    #mm-drag { width:36px; height:4px; border-radius:2px;
      background:var(--border,#E8E4DE); margin:12px auto 0; flex-shrink:0; }
    @media(min-width:560px){ #mm-drag { display:none; } }
    body.dark #mm-drag { background:#3a3835; }
    #mm-hd { padding:16px 20px 0; display:flex;
      align-items:center; justify-content:space-between; flex-shrink:0; }
    #mm-lbl { font-size:11px; font-weight:600; letter-spacing:1.1px;
      text-transform:uppercase; color:var(--accent,#C17E4A); }
    #mm-x { width:30px; height:30px; border-radius:50%;
      border:1.5px solid var(--border,#E8E4DE); background:none; cursor:pointer;
      color:var(--muted,#7A7570); display:flex; align-items:center; justify-content:center; font-size:13px; }
    #mm-x:hover { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A); }
    body.dark #mm-x { border-color:#3a3835; }
    #mm-bar { margin:12px 20px 0; height:3px; border-radius:2px;
      background:var(--border,#E8E4DE); flex-shrink:0; overflow:hidden; }
    body.dark #mm-bar { background:#2e2b28; }
    #mm-fill { height:100%; border-radius:2px; background:var(--accent,#C17E4A); transition:width .3s ease; }
    #mm-body { padding:20px 20px 0; flex:1; overflow-y:auto;
      -webkit-overflow-scrolling:touch; min-height:0; }
    .mm-q { font-family:'DM Serif Display',serif; font-size:1.22rem;
      line-height:1.3; color:var(--text,#1A1714); margin-bottom:4px; }
    body.dark .mm-q { color:#F0EDE8; }
    .mm-sub { font-size:.78rem; color:var(--muted,#7A7570); margin-bottom:16px; }
    .mm-chips { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
    .mm-chip { padding:11px; border:1.5px solid var(--border,#E8E4DE);
      border-radius:12px; background:var(--surface,#fff); color:var(--text,#1A1714);
      cursor:pointer; font-size:.86rem; font-family:'DM Sans',sans-serif; font-weight:500;
      display:flex; align-items:center; gap:7px; user-select:none; }
    body.dark .mm-chip { background:#28261F; border-color:#3a3835; color:#F0EDE8; }
    .mm-chip.sel { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A);
      background:rgba(193,126,74,0.08); }
    .mm-ci { font-size:15px; flex-shrink:0; }
    .mm-ck { margin-left:auto; width:15px; height:15px; border-radius:50%;
      border:1.5px solid var(--border,#E8E4DE); display:flex;
      align-items:center; justify-content:center; font-size:8px; flex-shrink:0; color:transparent; }
    .mm-chip.sel .mm-ck { background:var(--accent,#C17E4A); border-color:var(--accent,#C17E4A); color:#fff; }
    .mm-marks-wrap { position:relative; }
    .mm-marks-inp { width:100%; padding:14px 46px 14px 16px; box-sizing:border-box;
      border:1.5px solid var(--border,#E8E4DE); border-radius:12px;
      font-size:1.6rem; font-family:'DM Serif Display',serif;
      color:var(--text,#1A1714); background:var(--surface2,#F7F5F2);
      outline:none; -webkit-appearance:none; }
    body.dark .mm-marks-inp { background:#28261F; border-color:#3a3835; color:#F0EDE8; }
    .mm-marks-inp:focus { border-color:var(--accent,#C17E4A); }
    .mm-pct { position:absolute; right:16px; top:50%; transform:translateY(-50%);
      font-size:1rem; color:var(--muted,#7A7570); pointer-events:none; }
    .mm-badge { display:none; margin-top:10px; }
    .mm-badge.show { display:inline-flex; align-items:center; gap:6px;
      padding:5px 12px; border-radius:20px; font-size:.76rem; font-weight:600; }
    .mm-badge.t1 { background:rgba(193,126,74,0.12); color:#C17E4A; }
    .mm-badge.t2 { background:rgba(34,197,94,0.1); color:#16a34a; }
    .mm-badge.t3 { background:rgba(234,179,8,0.1); color:#ca8a04; }
    .mm-badge.t4 { background:rgba(239,68,68,0.1); color:#dc2626; }
    .mm-slid-disp { font-family:'DM Serif Display',serif; font-size:1.8rem;
      color:var(--accent,#C17E4A); margin-bottom:3px; }
    .mm-slid-sub { font-size:.77rem; color:var(--muted,#7A7570); margin-bottom:14px; }
    .mm-range { -webkit-appearance:none; appearance:none; width:100%; height:5px;
      border-radius:3px; background:var(--border,#E8E4DE); cursor:pointer; outline:none; }
    body.dark .mm-range { background:#3a3835; }
    .mm-range::-webkit-slider-thumb { -webkit-appearance:none; width:22px; height:22px;
      border-radius:50%; background:var(--accent,#C17E4A); cursor:pointer; }
    .mm-range::-moz-range-thumb { width:22px; height:22px; border-radius:50%; border:none;
      background:var(--accent,#C17E4A); cursor:pointer; }
    .mm-range-labs { display:flex; justify-content:space-between;
      font-size:.7rem; color:var(--muted,#7A7570); margin-top:8px; }
    .mm-presets { display:flex; gap:6px; margin-top:12px; flex-wrap:wrap; }
    .mm-preset { padding:5px 12px; border-radius:20px; font-size:.73rem; font-weight:600;
      border:1.5px solid var(--border,#E8E4DE); background:none;
      color:var(--muted,#7A7570); cursor:pointer; font-family:'DM Sans',sans-serif; }
    .mm-preset.act { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A);
      background:rgba(193,126,74,0.08); }
    body.dark .mm-preset { border-color:#3a3835; }
    .mm-txt { width:100%; padding:13px 16px; box-sizing:border-box;
      border:1.5px solid var(--border,#E8E4DE); border-radius:12px;
      font-size:.93rem; color:var(--text,#1A1714); background:var(--surface2,#F7F5F2);
      outline:none; font-family:'DM Sans',sans-serif; }
    body.dark .mm-txt { background:#28261F; border-color:#3a3835; color:#F0EDE8; }
    .mm-txt:focus { border-color:var(--accent,#C17E4A); }
    .mm-txt::placeholder { color:var(--muted,#7A7570); }
    #mm-ft { padding:14px 20px 22px; flex-shrink:0; display:flex; gap:9px; }
    #mm-bk { width:40px; height:40px; border-radius:50%; flex-shrink:0;
      border:1.5px solid var(--border,#E8E4DE); background:none; cursor:pointer;
      color:var(--muted,#7A7570); display:flex; align-items:center; justify-content:center; font-size:15px; }
    #mm-bk:hover { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A); }
    body.dark #mm-bk { border-color:#3a3835; }
    #mm-nxt { flex:1; padding:12px; background:var(--accent,#C17E4A); color:#fff;
      border:none; border-radius:50px; font-size:.88rem; font-weight:600;
      cursor:pointer; font-family:'DM Sans',sans-serif; letter-spacing:.3px; }
    #mm-nxt:hover { filter:brightness(1.07); }
    #mm-nxt:disabled { opacity:.35; cursor:default; filter:none; }
    #mm-load { padding:44px 20px; text-align:center; color:var(--muted,#7A7570); font-size:.86rem; }
    .mm-spin { width:24px; height:24px; border:2px solid var(--border,#E8E4DE);
      border-top-color:var(--accent,#C17E4A); border-radius:50%;
      margin:0 auto 12px; animation:mmSpin .8s linear infinite; }
    body.dark .mm-spin { border-color:#3a3835; border-top-color:var(--accent,#C17E4A); }
    @keyframes mmSpin { to { transform:rotate(360deg); } }
    #mm-res { padding:20px; overflow-y:auto; flex:1; min-height:0; }
    .mm-rh { display:flex; align-items:center; gap:9px; margin-bottom:10px; }
    .mm-rh h2 { font-family:'DM Serif Display',serif; font-size:1.1rem;
      color:var(--text,#1A1714); margin:0; }
    body.dark .mm-rh h2 { color:#F0EDE8; }
    .mm-cnt { background:rgba(193,126,74,0.1); color:var(--accent,#C17E4A);
      padding:3px 9px; border-radius:20px; font-size:.72rem; font-weight:600; }
    .mm-summary { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:16px; }
    .mm-stag { background:var(--surface2,#F7F5F2); color:var(--muted,#7A7570);
      padding:3px 9px; border-radius:20px; font-size:.72rem; }
    body.dark .mm-stag { background:#28261F; }
    .mm-card { border:1px solid var(--border,#E8E4DE); border-radius:13px;
      padding:14px 15px; margin-bottom:8px; background:var(--surface,#fff); cursor:pointer; }
    body.dark .mm-card { background:#28261F; border-color:#3a3835; }
    .mm-card:hover { border-color:var(--accent,#C17E4A); }
    .mm-card-top { display:flex; justify-content:space-between; align-items:flex-start; }
    .mm-cn { font-weight:600; font-size:.9rem; color:var(--text,#1A1714); }
    body.dark .mm-cn { color:#F0EDE8; }
    .mm-cm { font-size:.73rem; color:var(--muted,#7A7570); margin-top:2px; }
    .mm-cr { text-align:right; flex-shrink:0; margin-left:12px; }
    .mm-cs { font-family:'DM Serif Display',serif; font-size:1.2rem; color:var(--accent,#C17E4A); }
    .mm-csl { font-size:.62rem; color:var(--muted,#7A7570); }
    .mm-reason { margin-top:8px; padding-top:8px;
      border-top:1px solid var(--border,#E8E4DE);
      font-size:.75rem; color:var(--muted,#7A7570); line-height:1.5; }
    body.dark .mm-reason { border-color:#3a3835; }
    .mm-reason strong { color:var(--accent,#C17E4A); font-weight:600; }
    .mm-err { background:rgba(239,68,68,0.07); border:1px solid rgba(239,68,68,0.2);
      border-radius:12px; padding:14px; font-size:.82rem; color:#dc2626; margin-bottom:12px; }
    .mm-empty { text-align:center; padding:36px 0; color:var(--muted,#7A7570); font-size:.86rem; }
    .mm-rf { display:flex; gap:8px; margin-top:14px; flex-wrap:wrap; padding-bottom:4px; }
    .mm-rbtn { flex:1; min-width:110px; padding:10px; border-radius:50px;
      border:1.5px solid var(--border,#E8E4DE); background:none;
      color:var(--muted,#7A7570); font-size:.8rem; font-family:'DM Sans',sans-serif; cursor:pointer; }
    .mm-rbtn:hover { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A); }
    body.dark .mm-rbtn { border-color:#3a3835; }
  `;
  document.head.appendChild(s);
}

// ── SHELL ─────────────────────────────────────────────────
function buildShell() {
  if (document.getElementById('mm-ov')) return;
  const el = document.createElement('div');
  el.id = 'mm-ov';
  el.innerHTML = `<div id="mm-box">
    <div id="mm-drag"></div>
    <div id="mm-hd">
      <span id="mm-lbl"></span>
      <button id="mm-x" onclick="MatchMe.close()">✕</button>
    </div>
    <div id="mm-bar"><div id="mm-fill"></div></div>
    <div id="mm-body"></div>
    <div id="mm-ft" style="display:none">
      <button id="mm-bk" onclick="MatchMe.back()">←</button>
      <button id="mm-nxt" onclick="MatchMe.next()">Next →</button>
    </div>
    <div id="mm-load" style="display:none">
      <div class="mm-spin"></div>
      <div id="mm-load-msg">Finding your matches...</div>
    </div>
    <div id="mm-res" style="display:none"></div>
  </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', e => { if (e.target === el) MatchMe.close(); });
}

// ── RENDER STEP ──────────────────────────────────────────
function renderStep() {
  const st  = STEPS[curStep];
  const body = document.getElementById('mm-body');
  const nxt  = document.getElementById('mm-nxt');
  const bk   = document.getElementById('mm-bk');

  document.getElementById('mm-lbl').textContent = `Step ${curStep + 1} of ${STEPS.length}`;
  document.getElementById('mm-fill').style.width = `${((curStep + 1) / STEPS.length) * 100}%`;
  document.getElementById('mm-ft').style.display = 'flex';
  bk.style.visibility = curStep === 0 ? 'hidden' : 'visible';

  let inner = `<div class="mm-q">${st.q}</div><div class="mm-sub">${st.sub}</div>`;

  if (st.type === 'chip') {
    inner += `<div class="mm-chips">${st.options.map(o =>
      `<div class="mm-chip${answers[st.id] === o.l ? ' sel' : ''}" data-v="${o.l}">
        <span class="mm-ci">${o.i}</span><span>${o.l}</span><span class="mm-ck">✓</span>
      </div>`).join('')}</div>`;
  } else if (st.type === 'marks') {
    inner += `<div class="mm-marks-wrap">
      <input class="mm-marks-inp" id="mm-mi" type="number" min="0" max="100"
        step="0.1" placeholder="85" value="${answers.marks || ''}" inputmode="decimal"/>
      <span class="mm-pct">%</span>
    </div><div class="mm-badge" id="mm-badge"></div>`;
  } else if (st.type === 'slider') {
    const v = answers.budget !== undefined ? answers.budget : 1.5;
    inner += `<div class="mm-slid-disp" id="mm-sd">${budgetLabel(v)}</div>
      <div class="mm-slid-sub">Approximate annual tuition fee</div>
      <input class="mm-range" id="mm-sl" type="range" min="0.5" max="5" step="0.25" value="${v}"/>
      <div class="mm-range-labs"><span>₹50K</span><span>₹2.5L</span><span>₹5L+</span></div>
      <div class="mm-presets">
        <button class="mm-preset${v <= 0.5 ? ' act':''}" data-bv="0.5">Under ₹50K</button>
        <button class="mm-preset${v === 1 ? ' act':''}" data-bv="1">~₹1L</button>
        <button class="mm-preset${v === 2 ? ' act':''}" data-bv="2">~₹2L</button>
        <button class="mm-preset${v >= 5 ? ' act':''}" data-bv="5">₹5L+</button>
      </div>`;
  } else if (st.type === 'text') {
    inner += `<input class="mm-txt" id="mm-ti" type="text"
      placeholder="${st.placeholder}" value="${answers[st.id] || ''}"/>`;
  }

  body.innerHTML = inner;

  if (st.type === 'chip') {
    nxt.disabled = !answers[st.id];
    nxt.textContent = curStep === STEPS.length - 1 ? 'Find My Colleges ✦' : 'Next →';
    body.querySelectorAll('.mm-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        body.querySelectorAll('.mm-chip').forEach(c => c.classList.remove('sel'));
        chip.classList.add('sel');
        answers[st.id] = chip.dataset.v;
        nxt.disabled = false;
      });
    });

  } else if (st.type === 'marks') {
    nxt.textContent = 'Next →';
    nxt.disabled = !answers.marks;
    const inp = document.getElementById('mm-mi');
    const badge = document.getElementById('mm-badge');
    const upd = v => {
      answers.marks = v; nxt.disabled = !v;
      const n = parseFloat(v);
      if (isNaN(n)||!v) { badge.className='mm-badge'; return; }
      if (n>=90)      { badge.className='mm-badge t1 show'; badge.textContent='✦ Tier 1 unlocked'; }
      else if (n>=75) { badge.className='mm-badge t2 show'; badge.textContent='✓ Tier 1–2 available'; }
      else if (n>=60) { badge.className='mm-badge t3 show'; badge.textContent='~ Tier 2–3 available'; }
      else            { badge.className='mm-badge t4 show'; badge.textContent='Tier 3 colleges'; }
    };
    if (answers.marks) upd(answers.marks);
    inp.addEventListener('input', e => upd(e.target.value));
    inp.addEventListener('keydown', e => { if (e.key==='Enter' && !nxt.disabled) MatchMe.next(); });
    setTimeout(() => inp.focus(), 200);

  } else if (st.type === 'slider') {
    nxt.textContent = 'Next →'; nxt.disabled = false;
    if (answers.budget === undefined) answers.budget = 1.5;
    const sl = document.getElementById('mm-sl');
    const sd = document.getElementById('mm-sd');
    const syncP = val => body.querySelectorAll('.mm-preset').forEach(p =>
      p.classList.toggle('act', parseFloat(p.dataset.bv) === val));
    sl.addEventListener('input', e => {
      const v = parseFloat(e.target.value);
      answers.budget = v; sd.textContent = budgetLabel(v); syncP(v);
    });
    body.querySelectorAll('.mm-preset').forEach(p => {
      p.addEventListener('click', () => {
        const v = parseFloat(p.dataset.bv);
        answers.budget = v; sl.value = v; sd.textContent = budgetLabel(v); syncP(v);
      });
    });

  } else if (st.type === 'text') {
    nxt.textContent = 'Find My Colleges ✦'; nxt.disabled = false;
    const ti = document.getElementById('mm-ti');
    ti.addEventListener('input', e => { answers[st.id] = e.target.value; });
    ti.addEventListener('keydown', e => { if (e.key==='Enter') MatchMe.next(); });
    setTimeout(() => ti.focus(), 200);
  }
}

// ── RESULTS ──────────────────────────────────────────────
async function showResults() {
  document.getElementById('mm-body').style.display = 'none';
  document.getElementById('mm-ft').style.display   = 'none';
  document.getElementById('mm-bar').style.display  = 'none';
  document.getElementById('mm-load').style.display = 'block';
  document.getElementById('mm-lbl').textContent    = 'AI is thinking...';

  let colleges = [], errorMsg = null;
  try {
    document.getElementById('mm-load-msg').textContent = 'Asking Groq for best matches...';
    const picks = await findCollegesWithGroq(answers);
    document.getElementById('mm-load-msg').textContent = 'Enriching with college data...';
    colleges = enrichWithDB(picks);
  } catch (e) {
    console.error('Groq error:', e);
    errorMsg = 'AI matching failed — check your /api/groq proxy. Showing partial results.';
    colleges = [];
  }

  document.getElementById('mm-load').style.display = 'none';
  document.getElementById('mm-lbl').textContent    = `${colleges.length} matches found`;
  const res = document.getElementById('mm-res');
  res.style.display = 'block';

  let html = `<div class="mm-rh"><h2>Your Matches</h2>
    <span class="mm-cnt">${colleges.length} colleges</span></div>
    <div class="mm-summary">
      <span class="mm-stag">${answers.stream||'—'}</span>
      <span class="mm-stag">${answers.marks}%</span>
      <span class="mm-stag">${answers.field||'Any'}</span>
      <span class="mm-stag">${budgetLabel(answers.budget||1.5)}</span>
      ${answers.city?`<span class="mm-stag">${answers.city}</span>`:''}
    </div>`;

  if (errorMsg) html += `<div class="mm-err">⚠️ ${errorMsg}</div>`;

  if (!colleges.length) {
    html += `<div class="mm-empty"><div style="font-size:28px">🔍</div>
      <div style="margin-top:8px">No matches found. Try adjusting your answers.</div></div>`;
  } else {
    colleges.forEach(c => {
      const fee   = c.fees?.split('\n')[0] || '—';
      const score = c.score ? `<div class="mm-cs">${c.score}</div><div class="mm-csl">/10</div>` : '';
      html += `<div class="mm-card" data-name="${c.name}">
        <div class="mm-card-top">
          <div><div class="mm-cn">${c.name}</div>
            <div class="mm-cm">${c.location||'—'} · ${fee}</div></div>
          <div class="mm-cr">${score}</div>
        </div>
        ${c.aiReason?`<div class="mm-reason"><strong>AI pick:</strong> ${c.aiReason}</div>`:''}
      </div>`;
    });
  }

  html += `<div class="mm-rf">
    <button class="mm-rbtn" onclick="MatchMe.restart()">← Start Over</button>
    <button class="mm-rbtn" onclick="MatchMe.close()">Done</button>
  </div>`;

  res.innerHTML = html;
  res.querySelectorAll('.mm-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.dataset.name;
      MatchMe.close();
      const inp = document.getElementById('hero-input') ||
                  document.querySelector('input[placeholder*="college"]');
      if (inp) { inp.value = name; inp.dispatchEvent(new Event('input',{bubbles:true})); window.scrollTo({top:0,behavior:'smooth'}); }
      if (typeof search === 'function') search(name);
    });
  });
}

// ── PUBLIC API ────────────────────────────────────────────
function open() {
  injectStyles(); buildShell();
  curStep = 0; answers = {}; busy = false;
  document.getElementById('mm-body').style.display = 'block';
  document.getElementById('mm-bar').style.display  = 'block';
  document.getElementById('mm-load').style.display = 'none';
  document.getElementById('mm-res').style.display  = 'none';
  document.getElementById('mm-ft').style.display   = 'none';
  document.getElementById('mm-lbl').textContent    = '';
  renderStep();
  document.getElementById('mm-ov').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function close() {
  const el = document.getElementById('mm-ov');
  if (el) el.classList.remove('open');
  document.body.style.overflow = '';
}

function next() {
  if (busy) return;
  const st = STEPS[curStep];
  if (!answers[st.id] && !st.optional && st.type !== 'slider') return;
  if (st.type === 'slider' && answers.budget === undefined) answers.budget = 1.5;
  if (curStep < STEPS.length - 1) {
    busy = true; curStep++; renderStep();
    setTimeout(() => busy = false, 100);
  } else { showResults(); }
}

function back() {
  if (busy || curStep === 0) return;
  busy = true; curStep--; renderStep();
  setTimeout(() => busy = false, 100);
}

function restart() {
  curStep = 0; answers = {};
  document.getElementById('mm-res').style.display  = 'none';
  document.getElementById('mm-bar').style.display  = 'block';
  document.getElementById('mm-body').style.display = 'block';
  renderStep();
}

return { open, close, next, back, restart };
})();