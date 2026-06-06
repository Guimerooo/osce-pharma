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
function openAdmin() { buildAdminList(); adminBackupNote(); showScreen("screen-admin"); }

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
      const nPts = (c.sections || []).reduce((s, sec) => s + sec.items.reduce((n, it) => n + ((it && it.subs && it.subs.length) ? it.subs.length : 1), 0), 0);
      const row = document.createElement("div");
      row.className = "admin-row";
      row.innerHTML =
        `<div class="ar-main"><div class="ar-variant">${esc(c.variant)} ${badge}</div>` +
        `<div class="ar-open">${esc(c.opening)}</div>` +
        `<div class="ar-meta">${(c.answers || []).length} réponses · ${nPts} points</div></div>` +
        `<div class="ar-actions">` +
          (edited ? `<button class="btn ghost" onclick="resetCase('${c.id}')" title="Revenir à la version d'origine">Réinit.</button>` : "") +
          `<button class="btn ghost" onclick="duplicateCase('${c.id}')" title="Créer une copie de ce cas"><svg class="ic"><use href="#ic-copy"/></svg> Dupliquer</button>` +
          `<button class="btn" onclick="editCase('${c.id}')"><svg class="ic"><use href="#ic-copy"/></svg> Éditer</button>` +
          `<button class="ed-del" title="Supprimer" onclick="deleteCase('${c.id}')"><svg class="ic"><use href="#ic-x"/></svg></button>` +
        `</div>`;
      g.appendChild(row);
    });
    wrap.appendChild(g);
  });
}

/* ---------- Éditeur ---------- */
function normItems(items) {
  return (items || []).map(raw => {
    if (raw && typeof raw === "object") return { label: raw.label || "", subs: Array.isArray(raw.subs) ? raw.subs.slice() : [] };
    return { label: raw, subs: [] };
  });
}

function newCase() {
  editCaseId = null;
  editTitle = "Nouveau cas";
  editModel = { plainte: "", variant: "", opening: "", answers: [{ q: "", a: "" }],
                sections: [{ title: "Interrogatoire", items: [{ label: "", subs: [] }] }], pitfalls: [] };
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
    sections: (c.sections || []).map(s => ({ title: s.title, items: normItems(s.items) })),
    pitfalls: (c.pitfalls || []).slice(),
  };
  if (!editModel.answers.length) editModel.answers = [];
  if (!editModel.sections.length) editModel.sections = [{ title: "Interrogatoire", items: [{ label: "", subs: [] }] }];
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
    s.items.forEach((it, ii) => {
      it.label = _qval(`[data-item="${si}-${ii}"]`);
      it.subs.forEach((sub, k) => { it.subs[k] = _qval(`[data-sub="${si}-${ii}-${k}"]`); });
    });
  });
}

function addAnswer() { syncEditorFromDOM(); editModel.answers.push({ q: "", a: "" }); renderEditor(); }
function removeAnswer(i) { syncEditorFromDOM(); editModel.answers.splice(i, 1); renderEditor(); }
function addSection() { syncEditorFromDOM(); editModel.sections.push({ title: "Nouvelle section", items: [""] }); renderEditor(); }
function removeSection(si) { syncEditorFromDOM(); editModel.sections.splice(si, 1); renderEditor(); }
function addItem(si) { syncEditorFromDOM(); editModel.sections[si].items.push({ label: "", subs: [] }); renderEditor(); }
function removeItem(si, ii) { syncEditorFromDOM(); editModel.sections[si].items.splice(ii, 1); renderEditor(); }
function addSub(si, ii) { syncEditorFromDOM(); editModel.sections[si].items[ii].subs.push(""); renderEditor(); }
function removeSub(si, ii, k) { syncEditorFromDOM(); editModel.sections[si].items[ii].subs.splice(k, 1); renderEditor(); }
function addPitfall() { syncEditorFromDOM(); editModel.pitfalls.push(""); renderEditor(); }
function removePitfall(i) { syncEditorFromDOM(); editModel.pitfalls.splice(i, 1); renderEditor(); }

/* --- Réordonnancement / insertion --- */
function arrMove(arr, i, dir) {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return;
  const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
}
function moveAnswer(i, dir) { syncEditorFromDOM(); arrMove(editModel.answers, i, dir); renderEditor(); }
function insertAnswerAt(i) { syncEditorFromDOM(); editModel.answers.splice(i + 1, 0, { q: "", a: "" }); renderEditor(); }
function moveSection(si, dir) { syncEditorFromDOM(); arrMove(editModel.sections, si, dir); renderEditor(); }
function moveItem(si, ii, dir) { syncEditorFromDOM(); arrMove(editModel.sections[si].items, ii, dir); renderEditor(); }
function insertItemAt(si, ii) { syncEditorFromDOM(); editModel.sections[si].items.splice(ii + 1, 0, { label: "", subs: [] }); renderEditor(); }
function moveSub(si, ii, k, dir) { syncEditorFromDOM(); arrMove(editModel.sections[si].items[ii].subs, k, dir); renderEditor(); }

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
    const lastA = m.answers.length - 1;
    h += `<div class="ed-answer"><input data-ans-q="${i}" value="${esc(a.q)}" placeholder="Étiquette — ex. Qui ?"><textarea data-ans-a="${i}" rows="2" placeholder="Réponse du patient">${esc(a.a)}</textarea><div class="ed-ctrls"><button class="ed-mv" ${i === 0 ? "disabled" : ""} onclick="moveAnswer(${i},-1)" title="Monter"><svg class="ic"><use href="#ic-up"/></svg></button><button class="ed-mv" ${i === lastA ? "disabled" : ""} onclick="moveAnswer(${i},1)" title="Descendre"><svg class="ic"><use href="#ic-down"/></svg></button><button class="ed-del" onclick="removeAnswer(${i})" title="Supprimer"><svg class="ic"><use href="#ic-x"/></svg></button></div></div>`;
  });
  h += `<button class="ed-add" onclick="addAnswer()">+ Ajouter une réponse</button></div>`;

  h += `<div class="ed-block"><div class="ed-block-head"><h3>Grille d'évaluation</h3></div>`;
  m.sections.forEach((s, si) => {
    const lastSec = m.sections.length - 1;
    h += `<div class="ed-section"><div class="ed-section-head"><input data-sec-title="${si}" value="${esc(s.title)}" placeholder="Titre de section — ex. Interrogatoire"><div class="ed-ctrls"><button class="ed-mv" ${si === 0 ? "disabled" : ""} onclick="moveSection(${si},-1)" title="Monter la section"><svg class="ic"><use href="#ic-up"/></svg></button><button class="ed-mv" ${si === lastSec ? "disabled" : ""} onclick="moveSection(${si},1)" title="Descendre la section"><svg class="ic"><use href="#ic-down"/></svg></button><button class="ed-del" onclick="removeSection(${si})" title="Supprimer la section"><svg class="ic"><use href="#ic-x"/></svg></button></div></div>`;
    const lastIt = s.items.length - 1;
    s.items.forEach((it, ii) => {
      const lastK = it.subs.length - 1;
      const subsHtml = it.subs.map((sub, k) =>
        `<div class="ed-sub"><textarea data-sub="${si}-${ii}-${k}" rows="1" placeholder="Sous-point">${esc(sub)}</textarea><div class="ed-ctrls"><button class="ed-mv" ${k === 0 ? "disabled" : ""} onclick="moveSub(${si},${ii},${k},-1)" title="Monter"><svg class="ic"><use href="#ic-up"/></svg></button><button class="ed-mv" ${k === lastK ? "disabled" : ""} onclick="moveSub(${si},${ii},${k},1)" title="Descendre"><svg class="ic"><use href="#ic-down"/></svg></button><button class="ed-del" onclick="removeSub(${si},${ii},${k})" title="Supprimer"><svg class="ic"><use href="#ic-x"/></svg></button></div></div>`
      ).join("");
      h += `<div class="ed-item-wrap"><div class="ed-item"><textarea data-item="${si}-${ii}" rows="2" placeholder="Point d'évaluation">${esc(it.label)}</textarea><div class="ed-ctrls"><button class="ed-mv" ${ii === 0 ? "disabled" : ""} onclick="moveItem(${si},${ii},-1)" title="Monter"><svg class="ic"><use href="#ic-up"/></svg></button><button class="ed-mv" ${ii === lastIt ? "disabled" : ""} onclick="moveItem(${si},${ii},1)" title="Descendre"><svg class="ic"><use href="#ic-down"/></svg></button><button class="ed-del" onclick="removeItem(${si},${ii})" title="Supprimer"><svg class="ic"><use href="#ic-x"/></svg></button></div></div>${it.subs.length ? `<div class="ed-subs">${subsHtml}</div>` : ""}<div class="ed-itemfoot"><button class="ed-add-sub" onclick="addSub(${si},${ii})">+ sous-point</button><button class="ed-insert" onclick="insertItemAt(${si},${ii})" title="Insérer un nouveau point juste en dessous"><svg class="ic"><use href="#ic-insert"/></svg> insérer ici</button></div></div>`;
    });
    h += `<button class="ed-add" onclick="addItem(${si})">+ Ajouter un point à la fin</button></div>`;
  });
  h += `<button class="ed-add" onclick="addSection()">+ Ajouter une section</button></div>`;

  if (editCaseId) {
    h += `<button class="btn danger-ghost" style="align-self:flex-start;" onclick="deleteCase('${editCaseId}')"><svg class="ic"><use href="#ic-x"/></svg> Supprimer ce cas</button>`;
  }

  document.getElementById("admin-editor").innerHTML = h;
  const editActive = document.getElementById("screen-admin-edit").classList.contains("active");
  if (editActive) {
    const y = window.scrollY;
    requestAnimationFrame(() => window.scrollTo(0, y));
  } else {
    showScreen("screen-admin-edit");
  }
}

function saveCase() {
  syncEditorFromDOM();
  const m = editModel;
  if (!m.plainte.trim() || !m.variant.trim()) { alert("Renseignez au moins la plainte et la variante."); return; }
  const answers = m.answers.filter(a => a.a.trim()).map(a => ({ q: a.q.trim() || "Info", a: a.a.trim() }));
  const sections = m.sections
    .map(s => ({
      title: s.title.trim() || "Section",
      items: s.items.map(it => {
        const label = (it.label || "").trim();
        const subs = (it.subs || []).map(x => x.trim()).filter(Boolean);
        if (!label) return null;
        return subs.length ? { label, subs } : label;
      }).filter(Boolean)
    }))
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

/* ---------- Dupliquer ---------- */
function duplicateCase(id) {
  const c = getCase(id);
  if (!c) return;
  const copy = {
    id: "custom-" + Date.now(),
    plainte: c.plainte,
    variant: (c.variant || "Cas") + " (copie)",
    opening: c.opening,
    answers: (c.answers || []).map(a => ({ q: a.q, a: a.a })),
    sections: (c.sections || []).map(s => ({
      title: s.title,
      items: (s.items || []).map(it => (it && typeof it === "object" && it.subs && it.subs.length) ? { label: it.label, subs: it.subs.slice() } : (it && typeof it === "object" ? it.label : it))
    }))
  };
  const store = loadAdminStore();
  store.overrides[copy.id] = copy;
  store.hidden = store.hidden.filter(h => h !== copy.id);
  saveAdminStore(store);
  editCase(copy.id);
}

/* ---------- Exporter le fichier de base (cases.js) ---------- */
function exportBaseFile() {
  function stripCase(c) {
    return {
      id: c.id, plainte: c.plainte, variant: c.variant, opening: c.opening,
      answers: (c.answers || []).map(a => ({ q: a.q, a: a.a })),
      sections: (c.sections || []).map(s => ({
        title: s.title,
        items: (s.items || []).map(it => (it && typeof it === "object" && it.subs && it.subs.length) ? { label: it.label, subs: it.subs.slice() } : (it && typeof it === "object" ? it.label : it))
      }))
    };
  }
  const list = effectiveCases().map(stripCase);
  let src = "";
  src += "/* Catalogue OSCE Pharmacie — fichier de base généré depuis le mode admin\n";
  src += "   le " + new Date().toLocaleString("fr-FR") + ". " + list.length + " cas.\n";
  src += "   Remplace simplement ton cases.js par celui-ci sur GitHub. */\n\n";
  src += "const CASES = " + JSON.stringify(list, null, 2) + ";\n\n";
  src += "const PITFALLS = " + JSON.stringify(PITFALLS, null, 2) + ";\n\n";
  src += "const ADMIN_STORE_KEY = " + JSON.stringify(ADMIN_STORE_KEY) + ";\n";
  src += loadAdminStore.toString() + "\n";
  src += saveAdminStore.toString() + "\n";
  src += isBaseCase.toString() + "\n";
  src += effectiveCases.toString() + "\n";
  src += casesByPlainte.toString() + "\n";
  src += getCase.toString() + "\n";
  const blob = new Blob([src], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "cases.js";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  const el = document.getElementById("admin-backup-note");
  if (el) { el.className = "admin-backup-note ok"; el.innerHTML = "<b>✓ Fichier cases.js téléchargé.</b> Mets-le sur GitHub à la place de l'ancien : tes " + list.length + " cas deviennent la base."; }
}

/* ---------- Sauvegarde / restauration ---------- */
function adminBackupNote() {
  const el = document.getElementById("admin-backup-note");
  if (!el) return;
  const store = loadAdminStore();
  const nOver = Object.keys(store.overrides || {}).length;
  const nHidden = (store.hidden || []).length;
  const cloud = (window.cloudEnabled && window.cloudEnabled());
  el.className = "admin-backup-note";
  el.innerHTML =
    `<b>${nOver} cas personnalisés/modifiés` + (nHidden ? `, ${nHidden} masqués` : "") + `.</b> ` +
    (cloud
      ? `Synchro en ligne <b>active</b> — tes cas sont sauvegardés sur Firebase et partagés en direct. `
      : `Synchro en ligne inactive (mode local). `) +
    `Clique <b>Exporter cases.js</b> pour figer tes cas comme fichier de base (à mettre sur GitHub), ` +
    `<b>Sauvegarde</b> pour une copie de sécurité <i>.json</i>, ou <b>Importer</b> pour la restaurer.`;
}

function exportCases() {
  const store = loadAdminStore();
  const payload = {
    type: "osce-pharma-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    overrides: store.overrides || {},
    hidden: store.hidden || []
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const d = new Date();
  const stamp = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  a.href = url;
  a.download = "osce-cas-sauvegarde-" + stamp + ".json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  const el = document.getElementById("admin-backup-note");
  if (el) { el.className = "admin-backup-note ok"; el.innerHTML = "<b>✓ Sauvegarde téléchargée.</b> Garde ce fichier en lieu sûr — tu pourras le réimporter à tout moment."; }
}

function importCases(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    let data;
    try { data = JSON.parse(e.target.result); }
    catch (err) { alert("Fichier illisible : ce n'est pas une sauvegarde valide."); return; }
    if (!data || typeof data !== "object" || !("overrides" in data)) {
      alert("Ce fichier n'est pas une sauvegarde OSCE valide.");
      return;
    }
    const incOver = data.overrides || {};
    const incHidden = data.hidden || [];
    const nInc = Object.keys(incOver).length;
    const mode = confirm(
      "Importer " + nInc + " cas.\n\n" +
      "• OK = FUSIONNER avec tes cas actuels (les cas du même identifiant seront remplacés).\n" +
      "• Annuler = REMPLACER entièrement par la sauvegarde."
    );
    const store = loadAdminStore();
    let next;
    if (mode) {
      next = {
        overrides: Object.assign({}, store.overrides, incOver),
        hidden: Array.from(new Set([].concat(store.hidden || [], incHidden)))
      };
    } else {
      next = { overrides: incOver, hidden: incHidden };
    }
    saveAdminStore(next);
    event.target.value = "";
    buildAdminList();
    adminBackupNote();
    const el = document.getElementById("admin-backup-note");
    if (el) { el.className = "admin-backup-note ok"; el.innerHTML = "<b>✓ Import réussi.</b> " + nInc + " cas chargés" + ((window.cloudEnabled && window.cloudEnabled()) ? " et synchronisés en ligne pour tout le monde." : "."); }
  };
  reader.readAsText(file);
}
