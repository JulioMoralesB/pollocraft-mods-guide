(function () {
  "use strict";

  /* Players care about what they can actually press, so actions with no key
     are hidden until they ask for them. */
  var state = { query: "", mod: "", showUnbound: false };

  var groupsEl = document.getElementById("kb-groups");
  var resultsCount = document.getElementById("results-count");
  var noResults = document.getElementById("no-results");
  var searchInput = document.getElementById("search");
  var modFilter = document.getElementById("mod-filter");
  var showUnboundCheckbox = document.getElementById("show-unbound");

  function visiblePool() {
    return state.showUnbound ? KEYBINDS : KEYBINDS.filter(function (k) { return k.bound; });
  }

  function buildModFilter() {
    var pool = KEYBINDS.filter(function (k) { return k.bound; });
    var mods = [];
    var seen = {};
    pool.forEach(function (k) {
      if (!seen[k.mod]) { seen[k.mod] = true; mods.push(k.mod); }
    });
    var allOpt = document.createElement("option");
    allOpt.value = "";
    allOpt.textContent = "Todo (" + pool.length + " acciones)";
    modFilter.appendChild(allOpt);
    mods.forEach(function (m) {
      var count = pool.filter(function (k) { return k.mod === m; }).length;
      var opt = document.createElement("option");
      opt.value = m;
      opt.textContent = m + " (" + count + ")";
      modFilter.appendChild(opt);
    });
  }

  function matches(k, q) {
    if (!q) return true;
    var hay = (k.label + " " + k.mod + " " + k.key).toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function render() {
    var q = state.query.trim().toLowerCase();
    var pool = visiblePool();
    var filtered = pool.filter(function (k) {
      if (state.mod && k.mod !== state.mod) return false;
      return matches(k, q);
    });

    groupsEl.innerHTML = "";

    var order = [];
    var byMod = {};
    filtered.forEach(function (k) {
      if (!byMod[k.mod]) { byMod[k.mod] = []; order.push(k.mod); }
      byMod[k.mod].push(k);
    });

    order.forEach(function (mod) {
      groupsEl.appendChild(renderGroup(mod, byMod[mod]));
    });

    noResults.hidden = filtered.length !== 0;
    resultsCount.textContent = filtered.length === pool.length
      ? filtered.length + " acciones"
      : filtered.length + " de " + pool.length + " acciones";
  }

  function renderGroup(mod, items) {
    var wrap = document.createElement("div");
    wrap.className = "kb-group";

    var header = document.createElement("div");
    header.className = "kb-group-header";
    var h2 = document.createElement("h2");
    h2.textContent = mod;
    var count = document.createElement("span");
    count.className = "kb-group-count";
    count.textContent = items.length + (items.length === 1 ? " acción" : " acciones");
    header.appendChild(h2);
    header.appendChild(count);
    wrap.appendChild(header);

    var table = document.createElement("div");
    table.className = "kb-table";
    items.forEach(function (k) {
      table.appendChild(renderRow(k));
    });
    wrap.appendChild(table);

    return wrap;
  }

  function renderRow(k) {
    var row = document.createElement("div");
    row.className = "kb-row" + (k.bound ? "" : " is-unbound");

    var label = document.createElement("span");
    label.className = "kb-label";
    label.textContent = k.label;
    row.appendChild(label);

    var key = document.createElement("kbd");
    key.className = "kb-key" + (k.bound ? "" : " unbound");
    key.textContent = k.key;
    row.appendChild(key);

    return row;
  }

  var debounceTimer;
  searchInput.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    var val = searchInput.value;
    debounceTimer = setTimeout(function () {
      state.query = val;
      render();
    }, 80);
  });

  modFilter.addEventListener("change", function () {
    state.mod = modFilter.value;
    render();
  });

  showUnboundCheckbox.addEventListener("change", function () {
    state.showUnbound = showUnboundCheckbox.checked;
    render();
  });

  // ---- Theme toggle (shared logic with index.html) ----
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

  buildModFilter();
  render();
})();
