(function () {
  "use strict";

  function keyState(code) {
    var b = KEY_BINDINGS[code];
    var normal = (b && b.normal) || [];
    var f3 = (b && b.f3) || [];
    var state = "free";
    if (normal.length >= 2) state = "multi";
    else if (normal.length === 1) state = "used";
    else if (f3.length >= 1) state = "adv";
    return { normal: normal, f3: f3, state: state };
  }

  function renderKey(def) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "key";
    btn.style.flexGrow = def.w;

    if (!def.code) {
      btn.classList.add("key-spacer");
      btn.tabIndex = -1;
      return btn;
    }

    var info = keyState(def.code);
    btn.classList.add("state-" + info.state);

    var physical = document.createElement("span");
    physical.className = "key-physical";
    physical.textContent = def.label;
    btn.appendChild(physical);

    var action = document.createElement("span");
    action.className = "key-action";
    if (info.normal.length === 1) {
      action.textContent = info.normal[0].label;
    } else if (info.normal.length >= 2) {
      action.textContent = info.normal.length + " cosas";
    } else if (info.f3.length >= 1) {
      action.textContent = "con F3";
    } else {
      action.textContent = "";
    }
    btn.appendChild(action);

    Hint.attach(btn, function () {
      return buildHint(def.label, info);
    });

    return btn;
  }

  /* One hint card layout shared by keys and mouse buttons. */
  function buildHint(label, info) {
    var frag = document.createDocumentFragment();

    var title = document.createElement("div");
    title.className = "hint-title";
    title.textContent = label;
    frag.appendChild(title);

    if (!info.normal.length && !info.f3.length) {
      var free = document.createElement("p");
      free.className = "hint-empty";
      free.textContent = "Esta tecla no hace nada.";
      frag.appendChild(free);
      return frag;
    }

    if (info.normal.length >= 2) {
      var note = document.createElement("p");
      note.className = "hint-note";
      note.textContent = "Hace cosas distintas según dónde estés:";
      frag.appendChild(note);
    }

    info.normal.forEach(function (a) {
      frag.appendChild(hintRow(a.label, a.mod));
    });

    if (info.f3.length) {
      var adv = document.createElement("p");
      adv.className = "hint-note hint-adv";
      adv.textContent = "Manteniendo F3 (avanzado):";
      frag.appendChild(adv);
      info.f3.forEach(function (a) {
        frag.appendChild(hintRow(a.label, a.mod));
      });
    }

    return frag;
  }

  function hintRow(label, mod) {
    var row = document.createElement("div");
    row.className = "hint-row";
    var what = document.createElement("span");
    what.className = "hint-what";
    what.textContent = label;
    row.appendChild(what);
    if (mod && mod !== "Minecraft (vanilla)") {
      var from = document.createElement("span");
      from.className = "hint-from";
      from.textContent = mod;
      row.appendChild(from);
    }
    return row;
  }

  function renderBlock(rows, container) {
    var block = document.createElement("div");
    block.className = "kb-block";
    rows.forEach(function (row) {
      var rowEl = document.createElement("div");
      rowEl.className = "kb-row";
      row.forEach(function (def) {
        rowEl.appendChild(renderKey(def));
      });
      block.appendChild(rowEl);
    });
    container.appendChild(block);
  }

  function renderMouse() {
    document.querySelectorAll("#mouse-svg .ms-region").forEach(function (el) {
      var code = el.getAttribute("data-code");
      var def = MOUSE_BUTTONS.find(function (m) { return m.code === code; });
      var label = def ? def.label : code;
      var info = keyState(code);
      el.classList.add("state-" + info.state);
      Hint.attach(el, function () { return buildHint(label, info); });
    });
  }

  renderBlock(KEYBOARD_ROWS, document.getElementById("kb-main"));
  renderBlock(NAV_CLUSTER_ROWS, document.getElementById("kb-nav"));
  renderBlock(NUMPAD_ROWS, document.getElementById("kb-numpad"));
  renderMouse();
})();
