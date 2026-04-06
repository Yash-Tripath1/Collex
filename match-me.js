// ============================================================
// match-me.js — Collex "Match Me" v3 (Fixed)
// Before </body>: <script src="match-me.js"></script>
// Button: <button class="request-btn" onclick="MatchMe.open()">✦ Match Me</button>
// ============================================================

const MatchMe = (() => {

const GROQ_PROXY = '/api/groq';

// ── FILTER ───────────────────────────────────────────────
function getMaxScore(marks) {
  if (marks >= 95) return 10;
  if (marks >= 90) return 9.5;
  if (marks >= 85) return 9.0;
  if (marks >= 80) return 8.5;
  if (marks >= 75) return 8.0;
  if (marks >= 65) return 7.5;
  if (marks >= 55) return 7.0;
  return 6.5;
}

// Converts any fee string to Lakhs (float)
// Handles: "₹50K–₹80K/year", "₹1.5L/year", "₹80,000", "2.5 Lakhs", "25000"
function parseFee(feesStr) {
  if (!feesStr) return 0;
  const s = feesStr.toLowerCase().replace(/[,₹]/g, '');

  // Try to extract the LOWER bound of a range (e.g. "50k–80k" → 50k)
  // We parse all numeric tokens and take the first one (lower bound)
  const lakhMatch = s.match(/([\d.]+)\s*l/);
  if (lakhMatch) return parseFloat(lakhMatch[1]);

  const lakhs2 = s.match(/([\d.]+)\s*lakh/);
  if (lakhs2) return parseFloat(lakhs2[1]);

  const kMatch = s.match(/([\d.]+)\s*k/);
  if (kMatch) return parseFloat(kMatch[1]) / 100; // convert K → Lakhs

  // Raw number — if > 10000 assume rupees, convert to lakhs
  const rawMatch = s.match(/[\d.]+/);
  if (rawMatch) {
    const n = parseFloat(rawMatch[0]);
    return n > 100 ? n / 100000 : n; // if already small assume it's lakhs
  }
  return 0;
}

function filterColleges(ans) {
  const maxScore = getMaxScore(parseFloat(ans.marks) || 0);
  const budgetL  = parseFloat(ans.budget) || 3;
  const field    = ans.field || '';
  const city     = (ans.city || '').trim().toLowerCase();

  return Object.values(DB).filter(c => {
    // Score filter — don't show colleges way above student level
    if (c.score > maxScore) return false;

    // Fee filter
    const fee = parseFee(c.fees);
    if (fee > 0 && fee > budgetL) return false;

    // Field/program filter
    if (field && field !== 'Any') {
      if (!(c.programs || '').toLowerCase().includes(field.toLowerCase())) return false;
    }

    // City/state filter
    if (city) {
      if (!(c.location || '').toLowerCase().includes(city)) return false;
    }

    return true;
  });
}

// ── GROQ ─────────────────────────────────────────────────
async function getAI(ans, colleges) {
  if (!colleges.length) return null;

  const list = colleges.slice(0, 15).map(c =>
    `• ${c.name} | Score:${c.score}/10 | Fees:${c.fees?.split('\n')[0]} | ${c.location} | Placement:${c.placement?.slice(0,50)}`
  ).join('\n');

  const prompt = `You are a concise Indian college counselor. No intro, no fluff.

Student profile:
- Stream: ${ans.stream}
- 12th marks: ${ans.marks}%
- Preferred course: ${ans.field}
- Annual fee budget: ₹${ans.budget}L/year
- Preferred location: ${ans.city || 'Anywhere in India'}

Eligible colleges list:
${list}

Pick the TOP 3 best matches from the list above. Consider: marks eligibility, fees, placement, location preference.

Reply in EXACTLY this format (3 lines, nothing else):
1. [College Name] — [one sentence reason why it's the best fit]
2. [College Name] — [one sentence reason]
3. [College Name] — [one sentence reason]`;

  try {
    const res = await fetch(GROQ_PROXY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
        temperature: 0.3
      })
    });
    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || null;
  } catch (e) {
    console.warn('Groq AI error:', e);
    return null;
  }
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
    #mm-ov {
      display:none; position:fixed; inset:0;
      background:rgba(26,23,20,0.65); z-index:9999;
      align-items:flex-end; justify-content:center;
      backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
    }
    @media(min-width:560px){ #mm-ov { align-items:center; } }
    #mm-ov.open { display:flex; }
    #mm-ov.open #mm-box {
      animation:mmUp .38s cubic-bezier(0.16,1,0.3,1) forwards;
    }
    @keyframes mmUp { from{transform:translateY(36px);opacity:0} to{transform:translateY(0);opacity:1} }

    #mm-box {
      background:var(--surface,#fff); border:1px solid var(--border,#E8E4DE);
      border-radius:24px 24px 0 0; width:100%; max-width:480px;
      max-height:92dvh; display:flex; flex-direction:column;
      font-family:'DM Sans',sans-serif;
      box-shadow:0 -4px 40px rgba(0,0,0,0.1);
    }
    @media(min-width:560px){ #mm-box { border-radius:22px; box-shadow:0 20px 70px rgba(0,0,0,0.14); } }
    body.dark #mm-box { background:var(--surface,#1E1C19); border-color:#2e2b28; }

    #mm-drag { width:36px; height:4px; border-radius:2px;
      background:var(--border,#E8E4DE); margin:12px auto 0; flex-shrink:0; }
    @media(min-width:560px){ #mm-drag { display:none; } }
    body.dark #mm-drag { background:#3a3835; }

    #mm-hd {
      padding:16px 20px 0; display:flex;
      align-items:center; justify-content:space-between; flex-shrink:0;
    }
    #mm-lbl { font-size:11px; font-weight:600; letter-spacing:1.1px;
      text-transform:uppercase; color:var(--accent,#C17E4A); }
    #mm-x {
      width:30px; height:30px; border-radius:50%;
      border:1.5px solid var(--border,#E8E4DE); background:none;
      cursor:pointer; color:var(--muted,#7A7570);
      display:flex; align-items:center; justify-content:center;
      font-size:13px; transition:all .2s;
    }
    #mm-x:hover { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A); }
    body.dark #mm-x { border-color:#3a3835; }

    #mm-bar { margin:12px 20px 0; height:3px; border-radius:2px;
      background:var(--border,#E8E4DE); flex-shrink:0; overflow:hidden; }
    body.dark #mm-bar { background:#2e2b28; }
    #mm-fill { height:100%; border-radius:2px; background:var(--accent,#C17E4A);
      transition:width .4s cubic-bezier(0.16,1,0.3,1); }

    #mm-body { padding:20px 20px 0; flex:1; overflow-y:auto;
      -webkit-overflow-scrolling:touch; min-height:0; }
    #mm-body::-webkit-scrollbar { width:3px; }
    #mm-body::-webkit-scrollbar-thumb { background:var(--border,#E8E4DE); border-radius:2px; }

    .mm-emoji { font-size:26px; margin-bottom:8px; display:block;
      animation:mmPop .3s cubic-bezier(0.34,1.56,0.64,1); }
    @keyframes mmPop { from{transform:scale(0.5)} to{transform:scale(1)} }
    .mm-q { font-family:'DM Serif Display',serif; font-size:1.3rem;
      line-height:1.3; color:var(--text,#1A1714); margin-bottom:4px; }
    body.dark .mm-q { color:#F0EDE8; }
    .mm-sub { font-size:.78rem; color:var(--muted,#7A7570); margin-bottom:18px; }

    .mm-chips { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
    .mm-chip {
      padding:12px 11px; border:1.5px solid var(--border,#E8E4DE);
      border-radius:13px; background:var(--surface,#fff);
      color:var(--text,#1A1714); cursor:pointer;
      font-size:.86rem; font-family:'DM Sans',sans-serif; font-weight:500;
      display:flex; align-items:center; gap:7px;
      transition:all .18s cubic-bezier(0.34,1.2,0.64,1);
      -webkit-tap-highlight-color:transparent; user-select:none;
    }
    body.dark .mm-chip { background:#28261F; border-color:#3a3835; color:#F0EDE8; }
    .mm-chip:active { transform:scale(0.96); }
    .mm-chip.sel {
      border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A);
      background:rgba(193,126,74,0.08);
      box-shadow:0 0 0 3px rgba(193,126,74,0.13),0 2px 10px rgba(193,126,74,0.15);
      transform:translateY(-1px);
    }
    body.dark .mm-chip.sel { background:rgba(193,126,74,0.11); }
    .mm-ci { font-size:15px; flex-shrink:0; }
    .mm-ck {
      margin-left:auto; width:15px; height:15px; border-radius:50%;
      border:1.5px solid var(--border,#E8E4DE); display:flex;
      align-items:center; justify-content:center; font-size:8px;
      flex-shrink:0; transition:all .18s; color:transparent;
    }
    .mm-chip.sel .mm-ck { background:var(--accent,#C17E4A); border-color:var(--accent,#C17E4A); color:#fff; }

    .mm-marks-wrap { position:relative; }
    .mm-marks-inp {
      width:100%; padding:15px 46px 15px 16px; box-sizing:border-box;
      border:1.5px solid var(--border,#E8E4DE); border-radius:13px;
      font-size:1.7rem; font-family:'DM Serif Display',serif;
      color:var(--text,#1A1714); background:var(--surface2,#F7F5F2);
      outline:none; -webkit-appearance:none;
      transition:border-color .2s, box-shadow .2s;
    }
    body.dark .mm-marks-inp { background:#28261F; border-color:#3a3835; color:#F0EDE8; }
    .mm-marks-inp:focus { border-color:var(--accent,#C17E4A); box-shadow:0 0 0 3px rgba(193,126,74,0.12); }
    .mm-pct { position:absolute; right:16px; top:50%; transform:translateY(-50%);
      font-size:1rem; color:var(--muted,#7A7570); pointer-events:none; font-family:'DM Serif Display',serif; }
    .mm-badge { display:none; margin-top:10px; }
    .mm-badge.show { display:inline-flex; align-items:center; gap:6px;
      padding:5px 12px; border-radius:20px; font-size:.76rem; font-weight:600;
      animation:mmFade .25s; }
    @keyframes mmFade { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:none} }
    .mm-badge.t1 { background:rgba(193,126,74,0.12); color:#C17E4A; }
    .mm-badge.t2 { background:rgba(34,197,94,0.1); color:#16a34a; }
    .mm-badge.t3 { background:rgba(234,179,8,0.1); color:#ca8a04; }
    .mm-badge.t4 { background:rgba(239,68,68,0.1); color:#dc2626; }
    body.dark .mm-badge.t2 { color:#4ade80; }
    body.dark .mm-badge.t3 { color:#facc15; }

    /* ── SLIDER (fixed range) ── */
    .mm-slid-disp { font-family:'DM Serif Display',serif; font-size:1.9rem;
      color:var(--accent,#C17E4A); margin-bottom:3px; }
    .mm-slid-sub { font-size:.77rem; color:var(--muted,#7A7570); margin-bottom:14px; }
    .mm-range {
      -webkit-appearance:none; appearance:none; width:100%; height:5px;
      border-radius:3px; background:var(--border,#E8E4DE); cursor:pointer; outline:none;
    }
    body.dark .mm-range { background:#3a3835; }
    .mm-range::-webkit-slider-thumb {
      -webkit-appearance:none; width:22px; height:22px; border-radius:50%;
      background:var(--accent,#C17E4A); cursor:pointer;
      box-shadow:0 2px 8px rgba(193,126,74,0.4);
      transition:transform .15s, box-shadow .15s;
    }
    .mm-range:active::-webkit-slider-thumb {
      transform:scale(1.2); box-shadow:0 0 0 6px rgba(193,126,74,0.18),0 2px 8px rgba(193,126,74,0.4);
    }
    .mm-range::-moz-range-thumb { width:22px; height:22px; border-radius:50%; border:none;
      background:var(--accent,#C17E4A); box-shadow:0 2px 8px rgba(193,126,74,0.4); cursor:pointer; }
    .mm-range-labs { display:flex; justify-content:space-between;
      font-size:.7rem; color:var(--muted,#7A7570); margin-top:8px; }
    .mm-range-presets { display:flex; gap:6px; margin-top:12px; flex-wrap:wrap; }
    .mm-preset {
      padding:5px 11px; border-radius:20px; font-size:.73rem; font-weight:600;
      border:1.5px solid var(--border,#E8E4DE); background:none;
      color:var(--muted,#7A7570); cursor:pointer; transition:all .15s;
      font-family:'DM Sans',sans-serif;
    }
    .mm-preset:hover, .mm-preset.act {
      border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A);
      background:rgba(193,126,74,0.08);
    }
    body.dark .mm-preset { border-color:#3a3835; }

    .mm-txt {
      width:100%; padding:13px 16px; box-sizing:border-box;
      border:1.5px solid var(--border,#E8E4DE); border-radius:13px;
      font-size:.93rem; color:var(--text,#1A1714);
      background:var(--surface2,#F7F5F2); outline:none;
      font-family:'DM Sans',sans-serif;
      transition:border-color .2s, box-shadow .2s;
    }
    body.dark .mm-txt { background:#28261F; border-color:#3a3835; color:#F0EDE8; }
    .mm-txt:focus { border-color:var(--accent,#C17E4A); box-shadow:0 0 0 3px rgba(193,126,74,0.12); }
    .mm-txt::placeholder { color:var(--muted,#7A7570); }

    #mm-ft { padding:14px 20px 22px; flex-shrink:0; display:flex; gap:9px; }
    #mm-bk {
      width:40px; height:40px; border-radius:50%; flex-shrink:0;
      border:1.5px solid var(--border,#E8E4DE); background:none;
      cursor:pointer; color:var(--muted,#7A7570);
      display:flex; align-items:center; justify-content:center;
      font-size:15px; transition:all .2s;
    }
    #mm-bk:hover { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A); }
    body.dark #mm-bk { border-color:#3a3835; }
    #mm-nxt {
      flex:1; padding:12px; background:var(--accent,#C17E4A);
      color:#fff; border:none; border-radius:50px;
      font-size:.88rem; font-weight:600; cursor:pointer;
      font-family:'DM Sans',sans-serif; letter-spacing:.3px;
      transition:all .2s; position:relative; overflow:hidden;
    }
    #mm-nxt:hover { filter:brightness(1.07); transform:translateY(-1px); }
    #mm-nxt:active { transform:scale(0.98); filter:none; }
    #mm-nxt:disabled { opacity:.35; cursor:default; transform:none; filter:none; }

    .mm-sw { opacity:0; transform:translateX(28px);
      transition:opacity .2s, transform .2s cubic-bezier(0.4,0,0.2,1); }
    .mm-sw.in { opacity:1; transform:none; }

    #mm-load { padding:44px 20px; text-align:center; color:var(--muted,#7A7570); font-size:.86rem; }
    .mm-spin { width:26px; height:26px; border:2px solid var(--border,#E8E4DE);
      border-top-color:var(--accent,#C17E4A); border-radius:50%;
      margin:0 auto 12px; animation:mmSpin .7s linear infinite; }
    body.dark .mm-spin { border-color:#3a3835; border-top-color:var(--accent,#C17E4A); }
    @keyframes mmSpin { to { transform:rotate(360deg); } }
    .mm-dots span { display:inline-block; width:5px; height:5px; border-radius:50%;
      background:var(--accent,#C17E4A); margin:0 2px;
      animation:mmB 1.2s infinite; }
    .mm-dots span:nth-child(2){animation-delay:.2s}
    .mm-dots span:nth-child(3){animation-delay:.4s}
    @keyframes mmB { 0%,80%,100%{transform:scale(0.6);opacity:.4} 40%{transform:scale(1);opacity:1} }

    #mm-res { padding:20px; overflow-y:auto; flex:1; min-height:0; }
    #mm-res::-webkit-scrollbar { width:3px; }
    #mm-res::-webkit-scrollbar-thumb { background:var(--border,#E8E4DE); border-radius:2px; }
    .mm-rh { display:flex; align-items:center; gap:9px; margin-bottom:16px; }
    .mm-rh h2 { font-family:'DM Serif Display',serif; font-size:1.15rem;
      color:var(--text,#1A1714); margin:0; }
    body.dark .mm-rh h2 { color:#F0EDE8; }
    .mm-cnt { background:rgba(193,126,74,0.1); color:var(--accent,#C17E4A);
      padding:3px 9px; border-radius:20px; font-size:.73rem; font-weight:600; }
    .mm-ai-lbl { font-size:.69rem; font-weight:600; letter-spacing:1px;
      text-transform:uppercase; color:var(--accent,#C17E4A); margin-bottom:8px; display:flex; align-items:center; gap:6px; }
    .mm-ai-lbl::before { content:''; display:inline-block; width:6px; height:6px;
      border-radius:50%; background:var(--accent,#C17E4A);
      animation:mmPulse 1.5s ease-in-out infinite; }
    @keyframes mmPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(0.7)} }
    .mm-ai-box {
      background:var(--surface2,#F7F5F2); border:1px solid var(--border,#E8E4DE);
      border-left:3px solid var(--accent,#C17E4A); border-radius:12px;
      padding:13px 15px; font-size:.82rem; line-height:1.8;
      color:var(--text,#1A1714); margin-bottom:18px; white-space:pre-wrap;
    }
    body.dark .mm-ai-box { background:#28261F; border-color:#3a3835; color:#D0CEC8; }
    .mm-card {
      border:1px solid var(--border,#E8E4DE); border-radius:13px;
      padding:13px 15px; margin-bottom:7px; background:var(--surface,#fff);
      display:flex; justify-content:space-between; align-items:center;
      cursor:pointer; transition:all .2s;
      animation:mmCI .3s cubic-bezier(0.16,1,0.3,1) both;
      -webkit-tap-highlight-color:transparent;
    }
    body.dark .mm-card { background:#28261F; border-color:#3a3835; }
    @keyframes mmCI { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
    .mm-card:hover { border-color:var(--accent,#C17E4A);
      box-shadow:0 4px 18px rgba(193,126,74,0.12); transform:translateY(-1px); }
    .mm-card:active { transform:scale(0.99); }
    .mm-cn { font-weight:600; font-size:.88rem; color:var(--text,#1A1714); }
    body.dark .mm-cn { color:#F0EDE8; }
    .mm-cm { font-size:.73rem; color:var(--muted,#7A7570); margin-top:2px; }
    .mm-cr { text-align:right; flex-shrink:0; }
    .mm-cs { font-family:'DM Serif Display',serif; font-size:1.2rem; color:var(--accent,#C17E4A); }
    .mm-csl { font-size:.63rem; color:var(--muted,#7A7570); }
    .mm-ca { font-size:.73rem; color:var(--muted,#7A7570); margin-top:3px; transition:all .2s; }
    .mm-card:hover .mm-ca { transform:translateX(3px); color:var(--accent,#C17E4A); }
    .mm-empty { text-align:center; padding:36px 0; color:var(--muted,#7A7570); font-size:.86rem; }
    .mm-empty-ico { font-size:30px; margin-bottom:8px; }
    .mm-rf { display:flex; gap:8px; margin-top:14px; flex-wrap:wrap; padding-bottom:4px; }
    .mm-rbtn {
      flex:1; min-width:110px; padding:10px; border-radius:50px;
      border:1.5px solid var(--border,#E8E4DE); background:none;
      color:var(--muted,#7A7570); font-size:.8rem;
      font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s;
    }
    .mm-rbtn:hover { border-color:var(--accent,#C17E4A); color:var(--accent,#C17E4A); }
    body.dark .mm-rbtn { border-color:#3a3835; }
    .mm-summary {
      background:var(--surface2,#F7F5F2); border-radius:12px;
      padding:10px 14px; margin-bottom:16px; font-size:.78rem;
      color:var(--muted,#7A7570); display:flex; flex-wrap:wrap; gap:6px;
    }
    body.dark .mm-summary { background:#28261F; }
    .mm-stag {
      background:rgba(193,126,74,0.1); color:var(--accent,#C17E4A);
      padding:2px 8px; border-radius:20px; font-weight:600; font-size:.72rem;
    }
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
      <div>Finding your matches</div>
      <div class="mm-dots" style="margin-top:8px"><span></span><span></span><span></span></div>
    </div>
    <div id="mm-res" style="display:none"></div>
  </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', e => { if (e.target === el) MatchMe.close(); });
}

// ── RENDER STEP ──────────────────────────────────────────
function renderStep(dir = 1) {
  const st   = STEPS[curStep];
  const body = document.getElementById('mm-body');
  const ft   = document.getElementById('mm-ft');
  const nxt  = document.getElementById('mm-nxt');
  const bk   = document.getElementById('mm-bk');

  document.getElementById('mm-lbl').textContent = `Step ${curStep + 1} of ${STEPS.length}`;
  document.getElementById('mm-fill').style.width = `${((curStep + 1) / STEPS.length) * 100}%`;
  bk.style.visibility = curStep === 0 ? 'hidden' : 'visible';
  ft.style.display = 'flex';

  const wrap = document.createElement('div');
  wrap.className = 'mm-sw';

  let inner = `<span class="mm-emoji">${st.emoji}</span>
    <div class="mm-q">${st.q}</div>
    <div class="mm-sub">${st.sub}</div>`;

  if (st.type === 'chip') {
    inner += `<div class="mm-chips">${st.options.map(o =>
      `<div class="mm-chip${answers[st.id] === o.l ? ' sel' : ''}" data-v="${o.l}">
        <span class="mm-ci">${o.i}</span><span>${o.l}</span>
        <span class="mm-ck">✓</span>
      </div>`
    ).join('')}</div>`;

  } else if (st.type === 'marks') {
    inner += `<div class="mm-marks-wrap">
      <input class="mm-marks-inp" id="mm-mi" type="number" min="0" max="100"
        step="0.1" placeholder="85" value="${answers.marks || ''}" inputmode="decimal"/>
      <span class="mm-pct">%</span>
    </div>
    <div class="mm-badge" id="mm-badge"></div>`;

  } else if (st.type === 'slider') {
    // Budget: ₹50K–₹5L range (realistic Indian college fees)
    const v = answers.budget !== undefined ? answers.budget : 1.5;
    const disp = budgetLabel(v);
    inner += `<div class="mm-slid-disp" id="mm-sd">${disp}</div>
      <div class="mm-slid-sub">Approximate annual tuition fee</div>
      <input class="mm-range" id="mm-sl" type="range" min="0.5" max="5" step="0.25" value="${v}"/>
      <div class="mm-range-labs"><span>₹50K</span><span>₹2.5L</span><span>₹5L+</span></div>
      <div class="mm-range-presets">
        <button class="mm-preset${v <= 0.5 ? ' act' : ''}" data-bv="0.5">Under ₹50K</button>
        <button class="mm-preset${v === 1 ? ' act' : ''}" data-bv="1">~₹1L</button>
        <button class="mm-preset${v === 2 ? ' act' : ''}" data-bv="2">~₹2L</button>
        <button class="mm-preset${v >= 5 ? ' act' : ''}" data-bv="5">₹5L+</button>
      </div>`;

  } else if (st.type === 'text') {
    inner += `<input class="mm-txt" id="mm-ti" type="text"
      placeholder="${st.placeholder}" value="${answers[st.id] || ''}"/>`;
  }

  wrap.innerHTML = inner;

  // Slide out old
  const old = body.querySelector('.mm-sw');
  if (old) {
    old.style.transition = 'opacity .17s, transform .17s';
    old.style.opacity = '0';
    old.style.transform = `translateX(${dir < 0 ? '20px' : '-20px'})`;
    setTimeout(() => old.remove(), 170);
  }

  body.appendChild(wrap);
  requestAnimationFrame(() => requestAnimationFrame(() => wrap.classList.add('in')));

  // ── Wire interactions ──
  if (st.type === 'chip') {
    nxt.disabled = !answers[st.id];
    nxt.textContent = curStep === STEPS.length - 1 ? 'Find My Colleges ✦' : 'Next →';
    wrap.querySelectorAll('.mm-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        wrap.querySelectorAll('.mm-chip').forEach(c => c.classList.remove('sel'));
        chip.classList.add('sel');
        answers[st.id] = chip.dataset.v;
        nxt.disabled = false;
        setTimeout(() => { if (!busy) MatchMe.next(); }, 260);
      });
    });

  } else if (st.type === 'marks') {
    nxt.textContent = 'Next →';
    nxt.disabled = !answers.marks;
    const inp   = document.getElementById('mm-mi');
    const badge = document.getElementById('mm-badge');
    const upd = v => {
      answers.marks = v;
      nxt.disabled = !v;
      const n = parseFloat(v);
      if (isNaN(n) || !v) { badge.className = 'mm-badge'; return; }
      if (n >= 90)      { badge.className = 'mm-badge t1 show'; badge.textContent = '✦ Tier 1 unlocked'; }
      else if (n >= 75) { badge.className = 'mm-badge t2 show'; badge.textContent = '✓ Tier 1–2 available'; }
      else if (n >= 60) { badge.className = 'mm-badge t3 show'; badge.textContent = '~ Tier 2–3 available'; }
      else              { badge.className = 'mm-badge t4 show'; badge.textContent = 'Tier 3 colleges'; }
    };
    if (answers.marks) upd(answers.marks);
    inp.addEventListener('input', e => upd(e.target.value));
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !nxt.disabled) MatchMe.next(); });
    setTimeout(() => inp.focus(), 300);

  } else if (st.type === 'slider') {
    nxt.textContent = 'Next →';
    nxt.disabled = false;
    if (answers.budget === undefined) answers.budget = 1.5;

    const sl = document.getElementById('mm-sl');
    const sd = document.getElementById('mm-sd');

    const syncPresets = val => {
      wrap.querySelectorAll('.mm-preset').forEach(p => {
        p.classList.toggle('act', parseFloat(p.dataset.bv) === val);
      });
    };

    sl.addEventListener('input', e => {
      const v = parseFloat(e.target.value);
      answers.budget = v;
      sd.textContent = budgetLabel(v);
      syncPresets(v);
    });

    wrap.querySelectorAll('.mm-preset').forEach(p => {
      p.addEventListener('click', () => {
        const v = parseFloat(p.dataset.bv);
        answers.budget = v;
        sl.value = v;
        sd.textContent = budgetLabel(v);
        syncPresets(v);
      });
    });

  } else if (st.type === 'text') {
    nxt.textContent = 'Find My Colleges ✦';
    nxt.disabled = false;
    const ti = document.getElementById('mm-ti');
    ti.addEventListener('input', e => { answers[st.id] = e.target.value; });
    ti.addEventListener('keydown', e => { if (e.key === 'Enter') MatchMe.next(); });
    setTimeout(() => ti.focus(), 300);
  }
}

function budgetLabel(v) {
  if (v >= 5) return '₹5L+ / year';
  if (v < 1)  return `₹${Math.round(v * 100)}K / year`;
  return `₹${v}L / year`;
}

// ── RESULTS ──────────────────────────────────────────────
async function showResults() {
  const body = document.getElementById('mm-body');
  const ft   = document.getElementById('mm-ft');
  const load = document.getElementById('mm-load');
  const res  = document.getElementById('mm-res');
  const bar  = document.getElementById('mm-bar');

  body.style.display = 'none';
  ft.style.display   = 'none';
  bar.style.display  = 'none';
  document.getElementById('mm-lbl').textContent = 'Searching...';
  load.style.display = 'block';

  const filtered = filterColleges(answers);
  const aiText   = await getAI(answers, filtered);

  load.style.display = 'none';
  document.getElementById('mm-lbl').textContent = `${filtered.length} colleges found`;
  res.style.display = 'block';

  // Summary tags
  const budgetDisp = budgetLabel(answers.budget || 1.5);
  let html = `
    <div class="mm-rh">
      <h2>Your Matches</h2>
      <span class="mm-cnt">${filtered.length} colleges</span>
    </div>
    <div class="mm-summary">
      <span class="mm-stag">${answers.stream || '—'}</span>
      <span class="mm-stag">${answers.marks}%</span>
      <span class="mm-stag">${answers.field || 'Any'}</span>
      <span class="mm-stag">Budget: ${budgetDisp}</span>
      ${answers.city ? `<span class="mm-stag">${answers.city}</span>` : ''}
    </div>`;

  if (aiText) {
    html += `<div class="mm-ai-lbl">AI Top Picks</div>
      <div class="mm-ai-box">${aiText}</div>`;
  }

  if (!filtered.length) {
    html += `<div class="mm-empty">
      <div class="mm-empty-ico">🔍</div>
      <div>No colleges match these filters.</div>
      <div style="margin-top:4px;font-size:.76rem">Try increasing budget or leaving city blank.</div>
    </div>`;
  } else {
    filtered.sort((a, b) => b.score - a.score).forEach((c, i) => {
      const fee = c.fees?.split('\n')[0] || '';
      html += `<div class="mm-card" style="animation-delay:${i * 0.04}s" data-name="${c.name}">
        <div>
          <div class="mm-cn">${c.name}</div>
          <div class="mm-cm">${c.location} · ${fee}</div>
        </div>
        <div class="mm-cr">
          <div class="mm-cs">${c.score}</div>
          <div class="mm-csl">/10</div>
          <div class="mm-ca">→</div>
        </div>
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
      if (inp) {
        inp.value = name;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (typeof search === 'function') search(name);
    });
  });
}

// ── PUBLIC API ────────────────────────────────────────────
function open() {
  injectStyles(); buildShell();
  curStep = 0; answers = {}; busy = false;
  ['mm-body', 'mm-bar'].forEach(id => document.getElementById(id).style.display = 'block');
  ['mm-load', 'mm-res'].forEach(id => document.getElementById(id).style.display = 'none');
  document.getElementById('mm-ft').style.display = 'none';
  document.getElementById('mm-lbl').textContent = '';
  renderStep(1);
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
    busy = true; curStep++; renderStep(1);
    setTimeout(() => busy = false, 220);
  } else {
    showResults();
  }
}

function back() {
  if (busy || curStep === 0) return;
  busy = true; curStep--; renderStep(-1);
  setTimeout(() => busy = false, 220);
}

function restart() {
  curStep = 0; answers = {};
  document.getElementById('mm-res').style.display = 'none';
  document.getElementById('mm-bar').style.display = 'block';
  document.getElementById('mm-body').style.display = 'block';
  document.getElementById('mm-body').innerHTML = '';
  document.getElementById('mm-ft').style.display = 'flex';
  renderStep(1);
}

return { open, close, next, back, restart };
})();