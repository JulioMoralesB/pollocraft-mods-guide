(function () {
  "use strict";

  var CATEGORY_META = {
    perf:     { label: "Rendimiento",               icon: "⚡", color: "var(--cat-perf)" },
    visual:   { label: "Gráficos y Ambientación",    icon: "🎨", color: "var(--cat-visual)" },
    ui:       { label: "Interfaz y Comodidad",       icon: "🖥️", color: "var(--cat-ui)" },
    world:    { label: "Mundo, Biomas y Estructuras",icon: "🗺️", color: "var(--cat-world)" },
    mobs:     { label: "Criaturas y Aldeanos",       icon: "🐮", color: "var(--cat-mobs)" },
    food:     { label: "Comida y Granjas",           icon: "🍲", color: "var(--cat-food)" },
    combat:   { label: "Combate",                    icon: "⚔️", color: "var(--cat-combat)" },
    items:    { label: "Objetos y Decoración",       icon: "🎒", color: "var(--cat-items)" },
    social:   { label: "Multijugador y Social",      icon: "👥", color: "var(--cat-social)" },
    building: { label: "Construcción y Mapas",       icon: "🧱", color: "var(--cat-building)" },
    lib:      { label: "Librería técnica",           icon: "🔧", color: "var(--cat-lib)" }
  };

  var byId = {};
  MODS.forEach(function (m) { byId[m.id] = m; });

  var state = {
    query: "",
    category: null
  };

  var grid = document.getElementById("mod-grid");
  var resultsCount = document.getElementById("results-count");
  var noResults = document.getElementById("no-results");
  var searchInput = document.getElementById("search");
  var filtersEl = document.getElementById("category-filters");
  var modCountEl = document.getElementById("mod-count");

  modCountEl.textContent = MODS.length;

  function badge(cat) {
    var meta = CATEGORY_META[cat] || { label: cat, icon: "❓", color: "var(--cat-lib)" };
    var span = document.createElement("span");
    span.className = "badge";
    span.style.background = meta.color;
    span.textContent = meta.icon + " " + meta.label;
    return span;
  }

  function buildFilters() {
    var counts = {};
    MODS.forEach(function (m) { counts[m.category] = (counts[m.category] || 0) + 1; });

    var allBtn = makeFilterBtn(null, "Todos", "⭐", "var(--accent)", MODS.length);
    filtersEl.appendChild(allBtn);

    Object.keys(CATEGORY_META).forEach(function (cat) {
      if (!counts[cat]) return;
      var meta = CATEGORY_META[cat];
      filtersEl.appendChild(makeFilterBtn(cat, meta.label, meta.icon, meta.color, counts[cat]));
    });
  }

  function makeFilterBtn(cat, label, icon, color, count) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-btn" + (state.category === cat ? " active" : "");
    btn.dataset.cat = cat === null ? "" : cat;
    var dot = document.createElement("span");
    dot.className = "dot";
    dot.style.background = color;
    btn.appendChild(dot);
    btn.appendChild(document.createTextNode(icon + " " + label + " (" + count + ")"));
    btn.addEventListener("click", function () {
      state.category = cat;
      render();
    });
    return btn;
  }

  function matches(m, q) {
    if (!q) return true;
    var hay = (m.name + " " + m.desc_es + " " + m.id).toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function render() {
    var q = state.query.trim().toLowerCase();
    var filtered = MODS.filter(function (m) {
      if (state.category && m.category !== state.category) return false;
      return matches(m, q);
    });

    // update filter buttons active state
    Array.prototype.forEach.call(filtersEl.children, function (btn) {
      var cat = btn.dataset.cat || null;
      btn.classList.toggle("active", cat === state.category);
    });

    grid.innerHTML = "";
    filtered.forEach(function (m) {
      grid.appendChild(renderCard(m));
    });

    noResults.hidden = filtered.length !== 0;
    resultsCount.textContent = filtered.length === MODS.length
      ? "Mostrando los " + MODS.length + " mods"
      : "Mostrando " + filtered.length + " de " + MODS.length + " mods";
  }

  function renderCard(m) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "mod-card";
    card.addEventListener("click", function () { openDetail(m.id); });

    if (!m.enabled) card.classList.add("is-disabled");

    // tags first, then the name on its own full-width line (see .mod-card-top)
    var top = document.createElement("div");
    top.className = "mod-card-top";
    top.appendChild(badge(m.category));
    if (!m.enabled) {
      var offTag = document.createElement("span");
      offTag.className = "badge disabled-badge";
      offTag.textContent = "⏸️ No activo";
      top.appendChild(offTag);
    }
    card.appendChild(top);

    var h2 = document.createElement("h2");
    h2.textContent = m.name;
    card.appendChild(h2);

    var desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = m.desc_es;
    card.appendChild(desc);

    var rel = document.createElement("div");
    rel.className = "card-relations";
    if (m.depends.length) {
      var d = document.createElement("span");
      d.textContent = "⬇️ Necesita " + m.depends.length;
      rel.appendChild(d);
    }
    if (m.required_by.length) {
      var r = document.createElement("span");
      r.textContent = "⬆️ Usado por " + m.required_by.length;
      rel.appendChild(r);
    }
    if (rel.children.length) card.appendChild(rel);

    return card;
  }

  // ---- Detail overlay ----
  var overlay = document.getElementById("overlay");
  var detailBadge = document.getElementById("detail-badge");
  var detailName = document.getElementById("detail-name");
  /* The .jar filename was dropped from the dialog — it means nothing to a
     player and just added noise above the description. */
  var detailDesc = document.getElementById("detail-desc");
  var detailAuthors = document.getElementById("detail-authors");
  var detailDepends = document.getElementById("detail-depends");
  var detailRequiredBy = document.getElementById("detail-required-by");
  var detailRecommends = document.getElementById("detail-recommends");
  var recommendsBlock = document.getElementById("recommends-block");
  var detailModrinth = document.getElementById("detail-modrinth");
  var detailDisabledBadge = document.getElementById("detail-disabled-badge");

  function chipFor(id) {
    var target = byId[id];
    var chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = target ? target.name : id;
    chip.addEventListener("click", function () { openDetail(id); });
    return chip;
  }

  function fillChips(container, ids) {
    container.innerHTML = "";
    ids.forEach(function (id) { container.appendChild(chipFor(id)); });
  }

  function openDetail(id) {
    var m = byId[id];
    if (!m) return;

    detailBadge.innerHTML = "";
    detailBadge.appendChild(badge(m.category));
    detailName.textContent = m.name;
    detailDesc.textContent = m.desc_es;
    detailAuthors.textContent = m.authors && m.authors.length
      ? "Autor" + (m.authors.length > 1 ? "es" : "") + ": " + m.authors.join(", ")
      : "";

    detailDisabledBadge.hidden = !!m.enabled;

    if (m.modrinth_url) {
      detailModrinth.href = m.modrinth_url;
      detailModrinth.hidden = false;
    } else {
      detailModrinth.hidden = true;
    }

    fillChips(detailDepends, m.depends);
    fillChips(detailRequiredBy, m.required_by);
    fillChips(detailRecommends, m.recommends);
    recommendsBlock.hidden = m.recommends.length === 0;

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    overlay.scrollTop = 0;
    history.replaceState(null, "", "#" + id);
  }

  function closeDetail() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
  }

  overlay.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeDetail();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeDetail();
  });

  // ---- Search ----
  var debounceTimer;
  searchInput.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    var val = searchInput.value;
    debounceTimer = setTimeout(function () {
      state.query = val;
      render();
    }, 80);
  });

  // ---- Theme toggle ----
  var themeBtn = document.getElementById("theme-toggle");
  function applyTheme(theme) {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    themeBtn.textContent = (theme === "dark" || (!theme && matchMedia("(prefers-color-scheme: dark)").matches)) ? "☀️" : "🌙";
  }
  var savedTheme = localStorage.getItem("wiki-theme");
  applyTheme(savedTheme);
  themeBtn.addEventListener("click", function () {
    var current = document.documentElement.getAttribute("data-theme");
    var isDark = current === "dark" || (!current && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = isDark ? "light" : "dark";
    localStorage.setItem("wiki-theme", next);
    applyTheme(next);
  });

  // ---- Init ----
  buildFilters();
  render();

  if (location.hash.length > 1) {
    var initialId = decodeURIComponent(location.hash.slice(1));
    if (byId[initialId]) openDetail(initialId);
  }
})();
