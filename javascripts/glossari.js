// Dades i lògica del cercador del glossari (índex.md).
// Cada terme té les tres llengües, una descripció curta i un enllaç
// a la pàgina del temari on es desenvolupa amb més detall.
const GLOSSARI_TERMES = [
  {
    ca: "Cartró ploma",
    es: "Cartón pluma",
    en: "Foam board",
    desc: "Plafó lleuger format per dues làmines de cartolina amb un nucli de poliestirè expandit, usat per a maquetes i presentacions.",
    link: "temes/materials/paper_cartolina/paper_cartolina/",
  },
  {
    ca: "Tremp",
    es: "Temple",
    en: "Quenching / hardening",
    desc: "Tractament tèrmic que consisteix a escalfar l'acer i refredar-lo bruscament per augmentar-ne la duresa.",
    link: "temes/materials/metalls/metalls/",
  },
  {
    ca: "Reveniment",
    es: "Revenido",
    en: "Tempering",
    desc: "Tractament tèrmic posterior al tremp que redueix la fragilitat de l'acer temperat, escalfant-lo a una temperatura moderada.",
    link: "temes/materials/metalls/metalls/",
  },
  {
    ca: "Bufador",
    es: "Soplete",
    en: "Blowtorch / torch",
    desc: "Eina que produeix una flama concentrada, emprada per a soldar, tallar o escalfar metalls.",
    link: "temes/unio/soldadura/soldadura/",
  },
  {
    ca: "Escafandre",
    es: "Escafandra",
    en: "Diving / respirator hood",
    desc: "Casc o màscara integral que aïlla les vies respiratòries; al taller s'utilitza com a equip de protecció individual davant pols o vapors.",
    link: "temes/gestio/prl/prl/",
  },
  {
    ca: "Aliatge",
    es: "Aleación",
    en: "Alloy",
    desc: "Combinació d'un metall amb un o més elements, metàl·lics o no, per millorar-ne les propietats.",
    link: "temes/materials/metalls/metalls/",
  },
  {
    ca: "Trefilatge",
    es: "Trefilado",
    en: "Wire drawing",
    desc: "Procés de conformació en fred que redueix la secció d'un fil metàl·lic fent-lo passar per una filera.",
    link: "temes/processos/tec_bas_metall/tec_bas_metall/",
  },
  {
    ca: "Cementita",
    es: "Cementita",
    en: "Cementite",
    desc: "Compost cristal·lí de ferro i carboni (Fe₃C), molt dur i fràgil, present en els aliatges ferris.",
    link: "temes/materials/metalls/metalls/",
  },
  {
    ca: "Troquelar",
    es: "Troquelar",
    en: "To die-cut / to stamp",
    desc: "Tallar o conformar una xapa fent-la passar per un troquel mitjançant pressió.",
    link: "temes/processos/treball_en_fred/treball_en_fred/",
  },
  {
    ca: "Encunyar",
    es: "Acuñar",
    en: "To coin / to stamp",
    desc: "Imprimir en fred un relleu o una forma sobre una peça metàl·lica mitjançant la pressió d'un encuny, com en la fabricació de monedes.",
    link: "temes/processos/treball_en_fred/treball_en_fred/",
  },
  {
    ca: "Embotit",
    es: "Embutido",
    en: "Deep drawing",
    desc: "Procés de conformació en fred que transforma una xapa plana en una peça buida mitjançant un punxó i una matriu.",
    link: "temes/processos/treball_en_fred/treball_en_fred/",
  },
  {
    ca: "Repujar",
    es: "Repujar",
    en: "To emboss / repoussé",
    desc: "Tècnica de treball del metall que consisteix a martellejar una xapa des del revers per crear-hi relleus decoratius.",
    link: "temes/processos/treball_en_fred/treball_en_fred/",
  },
  {
    ca: "Xamfrà",
    es: "Chaflán",
    en: "Chamfer",
    desc: "Aresta biselada que s'obté en substituir un angle viu per un pla inclinat.",
    link: "temes/normalitzacio/normalitzacio/normalitzacio/",
  },
  {
    ca: "Lúpia",
    es: "Lupia",
    en: "Burl",
    desc: "Protuberància o nus arrodonit en el tronc d'un arbre, apreciada en ebenisteria per la seua veta irregular.",
    link: "temes/materials/fusta/fusta/",
  },
  {
    ca: "Osca",
    es: "Muesca",
    en: "Notch",
    desc: "Tall o entrant practicat en una peça, sovint per encaixar-hi una altra o marcar-hi una posició.",
    link: "temes/processos/foradament_roscatge_mandrinatge/foradament_roscatge_mandrinatge/",
  },
  {
    ca: "Escatar",
    es: "Lijar",
    en: "To sand",
    desc: "Polir o allisar una superfície fregant-la amb paper de vidre o un abrasiu similar.",
    link: "temes/acabats/acabats_fusta/acabats_fusta/",
  },
];

function glossariNormalitza(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function glossariRenderitza(termes, contenidor) {
  contenidor.innerHTML = "";

  if (termes.length === 0) {
    const buit = document.createElement("p");
    buit.className = "glossari-buit";
    buit.textContent = "Cap terme coincideix amb la cerca.";
    contenidor.appendChild(buit);
    return;
  }

  termes.forEach((terme) => {
    const item = document.createElement("article");
    item.className = "glossari-item";

    const capcalera = document.createElement("div");
    capcalera.className = "glossari-item-capcalera";
    capcalera.innerHTML = `
      <span class="glossari-terme glossari-terme-ca">${terme.ca}</span>
      <span class="glossari-terme glossari-terme-es">${terme.es}</span>
      <span class="glossari-terme glossari-terme-en">${terme.en}</span>
    `;

    const desc = document.createElement("p");
    desc.className = "glossari-desc";
    desc.textContent = terme.desc;

    const enllac = document.createElement("a");
    enllac.className = "glossari-enllac";
    enllac.href = terme.link;
    enllac.textContent = "Veure el tema desenvolupat →";

    item.appendChild(capcalera);
    item.appendChild(desc);
    item.appendChild(enllac);
    contenidor.appendChild(item);
  });
}

function glossariFiltra(consulta) {
  const q = glossariNormalitza(consulta.trim());
  if (q === "") return GLOSSARI_TERMES;

  return GLOSSARI_TERMES.filter((terme) => {
    return (
      glossariNormalitza(terme.ca).includes(q) ||
      glossariNormalitza(terme.es).includes(q) ||
      glossariNormalitza(terme.en).includes(q) ||
      glossariNormalitza(terme.desc).includes(q)
    );
  });
}

function glossariInicialitza() {
  const input = document.getElementById("glossari-input");
  const contenidor = document.getElementById("glossari-resultats");
  const comptador = document.getElementById("glossari-comptador");
  if (!input || !contenidor) return;

  const actualitza = () => {
    const resultats = glossariFiltra(input.value);
    glossariRenderitza(resultats, contenidor);
    if (comptador) {
      comptador.textContent = `${resultats.length} / ${GLOSSARI_TERMES.length} termes`;
    }
  };

  input.addEventListener("input", actualitza);
  actualitza();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", glossariInicialitza);
} else {
  glossariInicialitza();
}
