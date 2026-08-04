(function () {
  "use strict";

  document.querySelectorAll("#gamepad-svg .gp-region").forEach(function (el) {
    var data = CONTROLLER_BUTTONS[el.getAttribute("data-region")];
    if (!data) return;

    el.classList.add("gp-used");
    Hint.attach(el, function () {
      var frag = document.createDocumentFragment();

      var title = document.createElement("div");
      title.className = "hint-title";
      title.textContent = data.label;
      frag.appendChild(title);

      if (data.actions.length > 1) {
        var note = document.createElement("p");
        note.className = "hint-note";
        note.textContent = "Hace cosas distintas según dónde estés:";
        frag.appendChild(note);
      }

      data.actions.forEach(function (a) {
        var row = document.createElement("div");
        row.className = "hint-row";
        var what = document.createElement("span");
        what.className = "hint-what";
        what.textContent = a.text;
        row.appendChild(what);
        frag.appendChild(row);
      });

      return frag;
    });
  });

  var radialEl = document.getElementById("radial-menu-list");
  RADIAL_MENU_ACTIONS.forEach(function (a) {
    var li = document.createElement("li");
    li.textContent = a;
    radialEl.appendChild(li);
  });
})();
