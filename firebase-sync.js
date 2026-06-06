/* ============================================================
   Couche de synchronisation temps réel (Firebase Realtime DB).
   - Sessions live  : nœud  sessions/<CODE>
   - Cas admin      : nœud  adminCases   (partagés pour tout le monde)
   Si Firebase n'est pas configuré, tout reste en mode local et
   ces fonctions ne font rien (l'appli marche comme avant).
   ============================================================ */
window.CLOUD = { enabled: false, db: null, sessionRef: null, adminRef: null, watchedCode: null };

window.cloudEnabled = function () { return CLOUD.enabled; };

function cloudConfigured() {
  const c = window.FIREBASE_CONFIG;
  return !!(c && c.apiKey && !/COLLEZ_ICI/i.test(c.apiKey) && c.databaseURL && !/COLLEZ_ICI/i.test(c.databaseURL));
}

function cloudInit() {
  if (!cloudConfigured()) {
    console.info("[OSCE] Firebase non configuré → mode local (même appareil).");
    return;
  }
  if (typeof firebase === "undefined" || !firebase.initializeApp) {
    console.warn("[OSCE] SDK Firebase non chargé (vérifiez votre connexion).");
    return;
  }
  try {
    firebase.initializeApp(window.FIREBASE_CONFIG);
    CLOUD.db = firebase.database();
    CLOUD.enabled = true;
    console.info("[OSCE] Firebase connecté ✓ — synchro temps réel active.");
    cloudWatchAdmin();
  } catch (e) {
    console.error("[OSCE] Erreur d'initialisation Firebase :", e);
  }
}

/* ---------- Sessions ---------- */
window.cloudPushSession = function (code, data) {
  if (!CLOUD.enabled || !code) return;
  try { CLOUD.db.ref("sessions/" + code).set(data); } catch (e) {}
};

window.cloudWatchSession = function (code) {
  if (!CLOUD.enabled || !code) return;
  if (CLOUD.sessionRef) CLOUD.sessionRef.off();
  CLOUD.watchedCode = code;
  CLOUD.sessionRef = CLOUD.db.ref("sessions/" + code);
  CLOUD.sessionRef.on("value", function (snap) {
    const v = snap.val();
    if (v) { try { localStorage.setItem("osce_" + code, JSON.stringify(v)); } catch (e) {} }
  });
};

window.cloudUnwatchSession = function () {
  if (CLOUD.sessionRef) { CLOUD.sessionRef.off(); CLOUD.sessionRef = null; }
  CLOUD.watchedCode = null;
};

window.cloudGetSession = function (code, cb) {
  if (!CLOUD.enabled || !code) { cb(null); return; }
  CLOUD.db.ref("sessions/" + code).once("value")
    .then(function (snap) { cb(snap.val() || null); })
    .catch(function () { cb(null); });
};

/* ---------- Cas administrateur partagés ---------- */
window.cloudPushAdmin = function (store) {
  if (!CLOUD.enabled) return;
  try { CLOUD.db.ref("adminCases").set({ overrides: store.overrides || {}, hidden: store.hidden || [] }); } catch (e) {}
};

function cloudWatchAdmin() {
  if (!CLOUD.enabled) return;
  CLOUD.db.ref("adminCases").on("value", function (snap) {
    const v = snap.val();
    if (!v) return;
    try { localStorage.setItem(ADMIN_STORE_KEY, JSON.stringify({ overrides: v.overrides || {}, hidden: v.hidden || [] })); } catch (e) {}
    if (typeof refreshAfterAdminSync === "function") refreshAfterAdminSync();
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", cloudInit);
else cloudInit();
