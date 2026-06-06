/* ====== Mode administrateur : créer / éditer / supprimer des cas ======
   Cas stockés dans localStorage (par navigateur). Changez le mot de passe ci-dessous. */
const ADMIN_PASSWORD = "pharma2026";

let editCaseId = null;     // null = nouveau cas
let editModel = null;      // brouillon en cours d'édition
let editTitle = "Éditer le cas";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function _val(id) { const e = document.getElementById(id); return e ? e.value : ""; }
function _qval(sel) { const e = document.querySelector(sel); return e ? e.value : ""; }

/* ---------- Connexion ---------- */
function submitAdminPass() {
  const v = document.getElementById("admin-pass").value;
  const msg = document.getElementById("admin-login-msg");
  if (v === ADMIN_PASSWORD) {
    document.getElementById("admin-pass").value = "";
    msg.textContent = "";
    openAdmin();
  } else {
    msg.textContent = "Mot de passe incorrect";
    msg.className = "error-msg";
  }
}
function exitAdmin() { showScreen("screen-role"); }

/* ---------- Liste des cas ---------- */
function openAdmin() { buildAdminList(); showScreen("screen-admin"); }

function buildAdminList() {
  const wrap = document.getElementById("admin-list");
  wrap.innerHTML = "";
  const store = loadAdminStore();
  casesByPlainte().forEach(group => {
    const g = document.createElement("div");
    g.className = "admin-group";
    g.innerHTML = `<div class="plainte-head"><h3>${esc(group.plainte)}</h3><span class="plainte-count">${group.cases.length} cas</span></div>`;
    group.cases.forEach(c => {
      const base = isBaseCase(c.id);
      const edited = base && store.overrides[c.id];
      const badge = !base
        ? '<span class="ar-badge custom">perso</span>'
        : (edited ? '<span class="ar-badge edited">modifié</span>' : '<span class="ar-badge base">base</span>');
      const nPts = (c.sections || []).reduce((s, sec) => s + sec.items.length, 0);
      const row = document.createElement("div");
      row.className = "admin-row";
      row.innerHTML =
        `<div class="ar-main"><div class="ar-variant">${esc(c.variant)} ${badge}</div>` +
        `<div class="ar-open">${esc(c.opening)}</div>` +
        `<div class="ar-meta">${(c.answers || []).length} réponses · ${nPts} points</div></div>` +
        `<div class="ar-actions">` +
          (edited ? `<button class="btn ghost" onclick="resetCase('${c.id}')" title="Revenir à la version d'origine">Réinit.</button>` : "") +
          `<button class="btn" onclick="editCase('${c.id}')"><svg class="ic"><use href="#ic-copy"/></svg> Éditer</button>` +
          `<button class="ed-del" title="Supprimer" onclick="deleteCase('${c.id}')"><svg class="ic"><use href="#ic-x"/></svg></button>` +
        `</div>`;
      g.appendChild(row);
    });
    wrap.appendChild(g);
  });
}

/* ---------- Éditeur ---------- */
function newCase() {
  editCaseId = null;
  editTitle = "Nouveau cas";
  editModel = { plainte: "", variant: "", opening: "", answers: [{ q: "", a: "" }],
                sections: [{ title: "Interrogatoire", items: [""] }], pitfalls: [] };
  renderEditor();
}
function editCase(id) {
  const c = getCase(id);
  if (!c) return;
  editCaseId = id;
  editTitle = "Éditer le cas";
  editModel = {
    plainte: c.plainte, variant: c.variant, opening: c.opening,
    answers: (c.answers || []).map(a => ({ q: a.q, a: a.a })),
    sections: (c.sections || []).map(s => ({ title: s.title, items: s.items.slice() })),
    pitfalls: (c.pitfalls || []).slice(),
  };
  if (!editModel.answers.length) editModel.answers = [];
  if (!editModel.sections.length) editModel.sections = [{ title: "Interrogatoire", items: [""] }];
  if (!editModel.pitfalls) editModel.pitfalls = [];
  renderEditor();
}

function syncEditorFromDOM() {
  if (!editModel) return;
  editModel.plainte = _val("ed-plainte");
  editModel.variant = _val("ed-variant");
  editModel.opening = _val("ed-opening");
  editModel.answers.forEach((a, i) => { a.q = _qval(`[data-ans-q="${i}"]`); a.a = _qval(`[data-ans-a="${i}"]`); });
  editModel.sections.forEach((s, si) => {
    s.title = _qval(`[data-sec-title="${si}"]`);
    s.items.forEach((it, ii) => { s.items[ii] = _qval(`[data-item="${si}-${ii}"]`); });
  });
  editModel.pitfalls.forEach((p, i) => { editModel.pitfalls[i] = _qval(`[data-pit="${i}"]`); });
}

function addAnswer() { syncEditorFromDOM(); editModel.answers.push({ q: "", a: "" }); renderEditor(); }
function removeAnswer(i) { syncEditorFromDOM(); editModel.answers.splice(i, 1); renderEditor(); }
function addSection() { syncEditorFromDOM(); editModel.sections.push({ title: "Nouvelle section", items: [""] }); renderEditor(); }
function removeSection(si) { syncEditorFromDOM(); editModel.sections.splice(si, 1); renderEditor(); }
function addItem(si) { syncEditorFromDOM(); editModel.sections[si].items.push(""); renderEditor(); }
function removeItem(si, ii) { syncEditorFromDOM(); editModel.sections[si].items.splice(ii, 1); renderEditor(); }
function addPitfall() { syncEditorFromDOM(); editModel.pitfalls.push(""); renderEditor(); }
function removePitfall(i) { syncEditorFromDOM(); editModel.pitfalls.splice(i, 1); renderEditor(); }

function renderEditor() {
  document.getElementById("edit-screen-title").textContent = editTitle;
  const m = editModel;
  let h = "";
  h += `<div class="ed-row2">
    <div class="ed-field"><label>Plainte</label><input id="ed-plainte" value="${esc(m.plainte)}" placeholder="ex. Brûlure"></div>
    <div class="ed-field"><label>Variante</label><input id="ed-variant" value="${esc(m.variant)}" placeholder="ex. Bébé (10 mois)"></div>
  </div>`;
  h += `<div class="ed-field"><label>Phrase d'entrée (énoncé du patient)</label><textarea id="ed-opening" rows="2" placeholder="Bonjour, ...">${esc(m.opening)}</textarea></div>`;

  h += `<div class="ed-block"><div class="ed-block-head"><h3>Réponses préremplies (${m.answers.length})</h3></div>`;
  m.answers.forEach((a, i) => {
    h += `<div class="ed-answer"><input data-ans-q="${i}" value="${esc(a.q)}" placeholder="Étiquette — ex. Qui ?"><textarea data-ans-a="${i}" rows="2" placeholder="Réponse du patient">${esc(a.a)}</textarea><button class="ed-del" onclick="removeAnswer(${i})"><svg class="ic"><use href="#ic-x"/></svg></button></div>`;
  });
  h += `<button class="ed-add" onclick="addAnswer()">+ Ajouter une réponse</button></div>`;

  h += `<div class="ed-block"><div class="ed-block-head"><h3>Grille d'évaluation</h3></div>`;
  m.sections.forEach((s, si) => {
    h += `<div class="ed-section"><div class="ed-section-head"><input data-sec-title="${si}" value="${esc(s.title)}" placeholder="Titre de section — ex. Interrogatoire"><button class="ed-del" onclick="removeSection(${si})"><svg class="ic"><use href="#ic-x"/></svg></button></div>`;
    s.items.forEach((it, ii) => {
      h += `<div class="ed-item"><textarea data-item="${si}-${ii}" rows="2" placeholder="Point d'évaluation">${esc(it)}</textarea><button class="ed-del" onclick="removeItem(${si},${ii})"><svg class="ic"><use href="#ic-x"/></svg></button></div>`;
    });
    h += `<button class="ed-add" onclick="addItem(${si})">+ Ajouter un point</button></div>`;
  });
  h += `<button class="ed-add" onclick="addSection()">+ Ajouter une section</button></div>`;

  h += `<div class="ed-block"><div class="ed-block-head"><h3>Pièges / erreurs fréquentes (${m.pitfalls.length})</h3></div>`;
  m.pitfalls.forEach((p, i) => {
    h += `<div class="ed-item"><textarea data-pit="${i}" rows="2" placeholder="Erreur possible du pharmacien — ex. Délivre la Flammazine">${esc(p)}</textarea><button class="ed-del" onclick="removePitfall(${i})"><svg class="ic"><use href="#ic-x"/></svg></button></div>`;
  });
  h += `<button class="ed-add" onclick="addPitfall()">+ Ajouter un piège</button></div>`;

  if (editCaseId) {
    h += `<button class="btn danger-ghost" style="align-self:flex-start;" onclick="deleteCase('${editCaseId}')"><svg class="ic"><use href="#ic-x"/></svg> Supprimer ce cas</button>`;
  }

  document.getElementById("admin-editor").innerHTML = h;
  showScreen("screen-admin-edit");
}

function saveCase() {
  syncEditorFromDOM();
  const m = editModel;
  if (!m.plainte.trim() || !m.variant.trim()) { alert("Renseignez au moins la plainte et la variante."); return; }
  const answers = m.answers.filter(a => a.a.trim()).map(a => ({ q: a.q.trim() || "Info", a: a.a.trim() }));
  const sections = m.sections
    .map(s => ({ title: s.title.trim() || "Section", items: s.items.map(i => i.trim()).filter(Boolean) }))
    .filter(s => s.items.length);
  if (!sections.length) { alert("Ajoutez au moins un point d'évaluation."); return; }
  const pitfalls = m.pitfalls.map(p => p.trim()).filter(Boolean);
  const id = editCaseId || ("custom-" + Date.now());
  const store = loadAdminStore();
  store.overrides[id] = { id, plainte: m.plainte.trim(), variant: m.variant.trim(), opening: m.opening.trim(), answers, sections, pitfalls };
  store.hidden = store.hidden.filter(h => h !== id);
  saveAdminStore(store);
  openAdmin();
}

function deleteCase(id) {
  if (!confirm("Supprimer ce cas ?")) return;
  const store = loadAdminStore();
  if (isBaseCase(id)) { if (!store.hidden.includes(id)) store.hidden.push(id); delete store.overrides[id]; }
  else { delete store.overrides[id]; }
  saveAdminStore(store);
  openAdmin();
}

function resetCase(id) {
  if (!confirm("Revenir à la version d'origine de ce cas ? Vos modifications seront perdues.")) return;
  const store = loadAdminStore();
  delete store.overrides[id];
  saveAdminStore(store);
  buildAdminList();
}
