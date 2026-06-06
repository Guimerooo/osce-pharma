/* ====== Minuteur, signalement d'erreurs et débrief de fin ======
   S'appuie sur les variables/fonctions globales définies dans la page
   (role, sessionCode, checkedItems, GRILLE, activeCase, flaggedPitfalls,
   errorNotes, timerState, phase, timerInterval, persistState, getFromStorage,
   showScreen, countAll, countChecked, esc, RING_C, renderPharmaInfos, updateScore). */

function fmt(s) {
  s = Math.max(0, Math.round(s));
  const m = Math.floor(s / 60), ss = s % 60;
  return m + ":" + String(ss).padStart(2, "0");
}

/* ---------- Boucle 1s ---------- */
function startTicker() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(tick, 1000);
  tick();
}

function tick() {
  let t, ph;
  if (role === "pharmacien") {
    const d = getFromStorage(sessionCode) || {};
    t = d.timer; ph = d.phase || "running";
    flaggedPitfalls = d.flagged || flaggedPitfalls;
    errorNotes = d.notes || errorNotes;
    checkedItems = d.checked || checkedItems;
  } else {
    t = timerState; ph = phase;
  }
  if (ph === "debrief") {
    showDebrief();
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    return;
  }
  if (!t) { renderTimer(null, false); return; }
  if (t.paused) { renderTimer(t.remaining, true); return; }
  if (!t.running) { renderTimer(null, false); return; }
  const remaining = t.duration - (Date.now() - t.startedAt) / 1000;
  renderTimer(remaining, false);
  if (remaining <= 0) endByTime();
}

function renderTimer(remaining, paused) {
  const active = remaining != null;
  const eIdle = document.getElementById("timer-idle");
  const eRun = document.getElementById("timer-running");
  if (eIdle && eRun) { eIdle.style.display = active ? "none" : "flex"; eRun.style.display = active ? "flex" : "none"; }
  const pIdle = document.getElementById("pharma-timer-idle");
  const pRun = document.getElementById("pharma-timer-running");
  if (pIdle && pRun) { pIdle.style.display = active ? "none" : "block"; pRun.style.display = active ? "block" : "none"; }
  const pauseBtn = document.getElementById("timer-pause-btn");
  const resumeBtn = document.getElementById("timer-resume-btn");
  if (pauseBtn && resumeBtn) { pauseBtn.style.display = paused ? "none" : ""; resumeBtn.style.display = paused ? "" : "none"; }
  const pPaused = document.getElementById("pharma-timer-paused");
  if (pPaused) pPaused.style.display = paused ? "block" : "none";
  if (active) {
    const ec = document.getElementById("exam-timer-count");
    const pc = document.getElementById("pharma-timer-count");
    const txt = fmt(remaining);
    if (ec) ec.textContent = txt;
    if (pc) pc.textContent = txt;
    const warn = !paused && remaining <= 30;
    [ec, pc].forEach(el => { if (el) el.classList.toggle("warn", warn); });
  }
}

/* ---------- Contrôle (examinateur) ---------- */
function startTimer() {
  const mins = parseFloat(document.getElementById("timer-min").value);
  if (!mins || mins <= 0) { alert("Entrez une durée en minutes."); return; }
  timerState = { startedAt: Date.now(), duration: Math.round(mins * 60), running: true, paused: false };
  phase = "running";
  persistState();
  startTicker();
}

function pauseTimer() {
  if (!timerState || !timerState.running || timerState.paused) return;
  const remaining = Math.max(0, timerState.duration - (Date.now() - timerState.startedAt) / 1000);
  timerState = { running: false, paused: true, remaining: remaining };
  persistState();
  startTicker();
}

function resumeTimer() {
  if (!timerState || !timerState.paused) return;
  timerState = { startedAt: Date.now(), duration: timerState.remaining, running: true, paused: false };
  phase = "running";
  persistState();
  startTicker();
}

function endNow() {
  if (timerState) timerState.running = false;
  phase = "debrief";
  persistState();
  showDebrief();
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function endByTime() {
  if (role === "examinateur") {
    if (timerState) timerState.running = false;
    phase = "debrief";
    persistState();
  }
  showDebrief();
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

/* ---------- Pièges & notes (examinateur) ---------- */
function buildPitfalls() {
  const wrap = document.getElementById("pitfalls-list");
  if (!wrap) return;
  const pits = (activeCase && activeCase.pitfalls) || [];
  wrap.innerHTML = "";
  if (!pits.length) { wrap.innerHTML = '<div class="answers-empty">Aucun piège prédéfini pour ce cas.</div>'; return; }
  pits.forEach(p => {
    const on = flaggedPitfalls.includes(p);
    const d = document.createElement("div");
    d.className = "pitfall" + (on ? " on" : "");
    d.onclick = () => togglePitfall(p);
    d.innerHTML = `<div class="pf-box">${on ? '<svg class="ic" style="width:13px;height:13px;color:#fff"><use href="#ic-x"/></svg>' : ""}</div><span>${esc(p)}</span>`;
    wrap.appendChild(d);
  });
}

function togglePitfall(p) {
  if (flaggedPitfalls.includes(p)) flaggedPitfalls = flaggedPitfalls.filter(x => x !== p);
  else flaggedPitfalls.push(p);
  persistState();
  buildPitfalls();
}

function addNote() {
  const inp = document.getElementById("note-input");
  const v = inp.value.trim();
  if (!v) return;
  errorNotes.push(v);
  inp.value = "";
  persistState();
  renderNotes();
}
function removeNote(i) { errorNotes.splice(i, 1); persistState(); renderNotes(); }

function renderNotes() {
  const wrap = document.getElementById("notes-list");
  if (!wrap) return;
  wrap.innerHTML = "";
  errorNotes.forEach((n, i) => {
    const d = document.createElement("div");
    d.className = "note-chip";
    d.innerHTML = `<span>${esc(n)}</span><button onclick="removeNote(${i})" title="Retirer"><svg class="ic"><use href="#ic-x"/></svg></button>`;
    wrap.appendChild(d);
  });
}

/* ---------- Débrief ---------- */
function showDebrief() {
  if (role === "pharmacien") {
    const d = getFromStorage(sessionCode) || {};
    checkedItems = d.checked || {};
    flaggedPitfalls = d.flagged || [];
    errorNotes = d.notes || [];
  }
  phase = "debrief";
  buildDebrief();
  showScreen("screen-debrief");
}

function buildDebrief() {
  const total = countAll(), done = countChecked();
  const pct = total ? Math.round(done / total * 100) : 0;
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set("debrief-title", activeCase ? activeCase.plainte : "");
  set("debrief-variant", activeCase ? (activeCase.plainte + " · " + activeCase.variant) : "");
  set("debrief-pct", pct + "%");
  set("debrief-sub", done + " / " + total + " points validés par l'examinateur");
  const ring = document.getElementById("debrief-ring");
  if (ring) {
    ring.style.strokeDashoffset = RING_C * (1 - pct / 100);
    ring.style.stroke = pct >= 80 ? "var(--success)" : (pct >= 50 ? "var(--pharma)" : "var(--danger)");
  }
  const gr = document.getElementById("debrief-grille");
  gr.innerHTML = "";
  GRILLE.forEach(sec => {
    const leaves = (typeof sectionLeafIds === "function") ? sectionLeafIds(sec) : sec.items.map(i => i.id);
    const d = leaves.filter(id => checkedItems[id]).length;
    const block = document.createElement("div");
    block.className = "db-section";
    const items = sec.items.map(it => {
      if (it.subs && it.subs.length) {
        const subs = it.subs.map(s => {
          const ok = !!checkedItems[s.id];
          return `<div class="db-item db-sub ${ok ? "ok" : "miss"}"><span class="db-mark">${ok ? "✓" : "✗"}</span><span>${esc(s.label)}</span></div>`;
        }).join("");
        return `<div class="db-group"><div class="db-grouphead">${esc(it.label)}</div>${subs}</div>`;
      }
      const ok = !!checkedItems[it.id];
      return `<div class="db-item ${ok ? "ok" : "miss"}"><span class="db-mark">${ok ? "✓" : "✗"}</span><span>${esc(it.label)}</span></div>`;
    }).join("");
    block.innerHTML = `<div class="db-section-head"><h4>${esc(sec.title)}</h4><span class="db-frac ${d === leaves.length ? "full" : ""}">${d}/${leaves.length}</span></div>${items}`;
    gr.appendChild(block);
  });
  const ew = document.getElementById("debrief-errors");
  ew.innerHTML = "";
  const errs = flaggedPitfalls.concat(errorNotes);
  if (!errs.length) {
    ew.innerHTML = '<div class="db-noerr">Aucune erreur signalée.</div>';
  } else {
    errs.forEach(e => {
      const d = document.createElement("div");
      d.className = "db-error";
      d.innerHTML = `<svg class="ic"><use href="#ic-alert"/></svg><span>${esc(e)}</span>`;
      ew.appendChild(d);
    });
  }
  const nb = document.getElementById("debrief-next");
  if (nb) nb.style.display = role === "examinateur" ? "inline-flex" : "none";
}
