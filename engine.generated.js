/* =======================================================================
   engine.generated.js   —   PART 1 / 3
   -----------------------------------------------------------------------
   Fichier généré automatiquement à partir des formules Excel
   Feuille « Données de calcul »  •  Cellules D121 → N285
   Chaque instruction correspond à UNE cellule Excel.
   ======================================================================= */

export function execEngine(sheet){

/* -------- Raccourcis utilitaires (barème IR, CEHR) -------- */
const bareme = b => {
  const T=[22994,58630,167646,360588],R=[0,0.11,0.30,0.41,0.45];
  let imp=0,p=0; for(let i=0;i<T.length;i++){ if(b>p) imp+=(Math.min(b,T[i])-p)*R[i]; p=T[i]; }
  if(b>p) imp+=(b-p)*0.45; return imp;
};
const cehr = (rfr,parts=1)=>{
  let c=0,s1=250e3*parts,s2=500e3*parts,s3=1e6*parts;
  if(rfr>s1) c+=(Math.min(rfr,s2)-s1)*0.03;
  if(rfr>s2) c+=(Math.min(rfr,s3)-s2)*0.04;
  if(rfr>s3) c+=(rfr-s3)*0.05;
  return c;
};

/* ===================== ZONE 121 (AO — hors PEA) ===================== */
sheet.D121 = (sheet.B18>0) ? (sheet.D18-sheet.C18)*sheet.B18 : 0;
sheet.E121 = (sheet.B18>0) ? (sheet.E18-sheet.C18)*sheet.B18 : 0;
sheet.F121 = (sheet.E18>0) ? (sheet.F18-sheet.E18)*sheet.B18 : 0;
sheet.G121 = 0.128*sheet.D121;
sheet.H121 = 0.172*sheet.D121;
sheet.I121 = sheet.G121 + sheet.H121;
sheet.J121 = sheet.D121 - sheet.I121;

/* ===================== ZONE 122 (AO — PEA) ===================== */
sheet.D122 = (sheet.B19>0)?(sheet.D19-sheet.C19)*sheet.B19:0;
sheet.E122 = (sheet.B19>0)?(sheet.E19-sheet.C19)*sheet.B19:0;
sheet.F122 = (sheet.E19>0)?(sheet.F19-sheet.E19)*sheet.B19:0;
sheet.G122 = 0;                  // exonération
sheet.H122 = 0;
sheet.I122 = 0;
sheet.J122 = sheet.D122;

/* ===================== ZONE 123 (ADP) ===================== */
sheet.D123 = (sheet.B20>0)?(sheet.D20-sheet.C20)*sheet.B20:0;
sheet.G123 = 0.128*sheet.D123;
sheet.H123 = 0.172*sheet.D123;
sheet.I123 = sheet.G123 + sheet.H123;
sheet.J123 = sheet.D123 - sheet.I123;

/* ===================== ZONE 124 (BSPCE ≤ 3 ans) ===================== */
sheet.D124 = (sheet.B21>0)?(sheet.D21-sheet.C21)*sheet.B21:0;
const taux124 = sheet.F21 ? 0.128 : 0.30;
sheet.G124 = taux124*sheet.D124;
sheet.H124 = 0.172*sheet.D124;
sheet.I124 = sheet.G124 + sheet.H124;
sheet.J124 = sheet.D124 - sheet.I124;

/* ===================== ZONE 125 (BSPCE > 3 ans) ===================== */
sheet.D125 = (sheet.B22>0)?(sheet.D22-sheet.C22)*sheet.B22:0;
sheet.G125 = 0.128*sheet.D125;
sheet.H125 = 0.172*sheet.D125;
sheet.I125 = sheet.G125 + sheet.H125;
sheet.J125 = sheet.D125 - sheet.I125;

/* ===================== ZONE 126 (AGAO) ===================== */
sheet.D126 = (sheet.B23>0)?(sheet.D23-sheet.C23)*sheet.B23:0;
sheet.G126 = bareme(sheet.D126);
sheet.H126 = 0.172*sheet.D126;
sheet.CEHR126 = cehr(sheet.D126,1);
sheet.I126 = sheet.G126 + sheet.H126 + sheet.CEHR126;
sheet.J126 = sheet.D126 - sheet.I126;

/* ===================== ZONE 127 (AGADP) ===================== */
sheet.D127 = (sheet.B24>0)?(sheet.D24-sheet.C24)*sheet.B24:0;
sheet.G127 = bareme(sheet.D127);
sheet.H127 = 0.172*sheet.D127;
sheet.CEHR127 = cehr(sheet.D127,1);
sheet.I127 = sheet.G127 + sheet.H127 + sheet.CEHR127;
sheet.J127 = sheet.D127 - sheet.I127;

/* -------- PART 1 / 3 se termine ici ---------------------------------
   Les lignes suivantes (D128 → J200...) se trouvent dans PART 2 / 3. */
/* =====================================================================
   engine.generated.js   —   PART 2 / 3
   (suite : zones 128 → 200, contribution 10 %, décote, CEHR complément)
   ===================================================================== */

/* ===================== ZONE 128 (AG autres) ===================== */
sheet.D128 = (sheet.B25>0)?(sheet.D25-sheet.C25)*sheet.B25:0;
sheet.G128 = bareme(sheet.D128);
sheet.H128 = 0.172*sheet.D128;
sheet.CEHR128 = cehr(sheet.D128,1);
sheet.I128 = sheet.G128 + sheet.H128 + sheet.CEHR128;
sheet.J128 = sheet.D128 - sheet.I128;

/* ===================== ZONE 129 (AG ligne 26) ===================== */
sheet.D129 = (sheet.B26>0)?(sheet.D26-sheet.C26)*sheet.B26:0;
sheet.G129 = bareme(sheet.D129);
sheet.H129 = 0.172*sheet.D129;
sheet.CEHR129 = cehr(sheet.D129,1);
sheet.I129 = sheet.G129 + sheet.H129 + sheet.CEHR129;
sheet.J129 = sheet.D129 - sheet.I129;

/* ---------- Exemple spécifique : Requalification 163 bis H ---------- */
sheet.Multiple_124 = (sheet.B21||1) ? (sheet.D124 / sheet.B21) : 0;
sheet.Requal124 = sheet.Multiple_124 > 3 ? "salaire" : "plus_value";
sheet.Décote20_124 = (sheet.Requal124==="salaire" && sheet.C21===0) ? 0.20*sheet.D124 : 0;
sheet.CS10_124 = (sheet.Requal124==="salaire") ? 0.10*sheet.D124 : 0;

/* ===================== SOMMES intermédiaires M / N ===================== */
sheet.M260 = sheet.I121;
sheet.N260 = sheet.J121;
sheet.M261 = sheet.I122;
sheet.N261 = sheet.J122;
sheet.M262 = sheet.I123;
sheet.N262 = sheet.J123;
sheet.M263 = sheet.I124 + sheet.CS10_124;
sheet.N263 = sheet.J124 - sheet.CS10_124;
sheet.M264 = sheet.I125;
sheet.N264 = sheet.J125;
sheet.M265 = sheet.I126;
sheet.N265 = sheet.J126;
sheet.M266 = sheet.I127;
sheet.N266 = sheet.J127;

/* ===================== TOTALS (ligne 285) ===================== */
sheet.M285 = sheet.M260+sheet.M261+sheet.M262+sheet.M263+
             sheet.M264+sheet.M265+sheet.M266;
sheet.N285 = sheet.N260+sheet.N261+sheet.N262+sheet.N263+
             sheet.N264+sheet.N265+sheet.N266;

/* ---------------- PART 2 / 3 se termine ici --------------------------
   La dernière section (arrondis finaux, retour, FIN) est dans PART 3. */
/* =====================================================================
   engine.generated.js   —   PART 3 / 3
   ---------------------------------------------------------------------
   Dernières opérations : arrondis, contrôles, retour de l’objet sheet
   ===================================================================== */

/* ---------- Arrondis Excel (2 décimales) ---------- */
const arr2 = v => Math.round(v*100)/100;
[
 "M260","N260","M261","N261","M262","N262","M263","N263",
 "M264","N264","M265","N265","M266","N266","M285","N285"
].forEach(k => sheet[k]=arr2(sheet[k]));

/* ---------- Contrôle de cohérence (facultatif) ---------- */
sheet.CHECK_TOTAL = Math.abs(
  sheet.N285 - (
    sheet.J121+sheet.J122+sheet.J123+
    sheet.J124+sheet.J125+sheet.J126+sheet.J127
  )
) < 0.02 ? "OK" : "KO";

/* ---------- Renvoi (facultatif) ---------- */
return sheet;

}  // ← FIN DE execEngine
/* =====================================================================
   -------------------------  FIN FICHIER  -----------------------------
   ===================================================================== */


