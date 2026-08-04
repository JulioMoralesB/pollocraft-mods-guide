/* Shared floating hint card.
   Used by the controller, keyboard and mouse diagrams so that hovering any
   button explains it immediately — no clicking, no looking away from the
   diagram. On touch devices (no hover) a tap opens the same card. */
window.Hint = (function () {
  "use strict";

  var el = null;
  var current = null;

  function ensure() {
    if (el) return el;
    el = document.createElement("div");
    el.className = "hint-card";
    el.setAttribute("role", "tooltip");
    el.hidden = true;
    document.body.appendChild(el);
    return el;
  }

  function show(target, content) {
    var card = ensure();
    card.innerHTML = "";
    card.appendChild(content);
    card.hidden = false;
    current = target;
    position(target);
  }

  function position(target) {
    var card = ensure();
    var r = target.getBoundingClientRect();
    var cw = card.offsetWidth;
    var ch = card.offsetHeight;
    var margin = 10;
    var pad = 8;
    var vh = window.innerHeight;

    // Prefer above the element, flip below when there's no room up there,
    // then clamp so a tall card near an edge still stays fully on screen.
    var top = r.top - ch - margin;
    if (top < pad) {
      var below = r.bottom + margin;
      top = (below + ch <= vh - pad) ? below : Math.max(pad, vh - ch - pad);
    }

    var left = r.left + r.width / 2 - cw / 2;
    left = Math.max(pad, Math.min(left, window.innerWidth - cw - pad));

    card.style.top = Math.round(top) + "px";
    card.style.left = Math.round(left) + "px";
  }

  function hide(target) {
    if (!el) return;
    if (target && current && target !== current) return;
    el.hidden = true;
    current = null;
  }

  function hideAll() {
    if (el) { el.hidden = true; current = null; }
  }

  /* buildContent() is called lazily so callers can build rich markup. */
  function attach(target, buildContent) {
    var open = false;

    function doShow() {
      show(target, buildContent());
      open = true;
    }
    function doHide() {
      hide(target);
      open = false;
    }

    target.addEventListener("mouseenter", doShow);
    target.addEventListener("mouseleave", doHide);
    // keyboard users get the same info on focus
    target.addEventListener("focus", doShow);
    target.addEventListener("blur", doHide);

    // Touch devices have no hover, so a tap opens the card there. On a real
    // pointer we skip this: hover already shows it, and a click would only
    // toggle it back off, which feels broken.
    // Note this always *shows* rather than toggling — some mobile browsers
    // fire a synthetic mouseenter before click, and toggling would then
    // immediately close the card the tap just opened. Tapping elsewhere
    // closes it via the document handler below.
    target.addEventListener("click", function (e) {
      e.stopPropagation();
      if (window.matchMedia("(hover: hover)").matches) return;
      hideAll();
      doShow();
    });

    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "0");
  }

  document.addEventListener("click", hideAll);
  window.addEventListener("scroll", hideAll, true);
  window.addEventListener("resize", hideAll);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hideAll();
  });

  return { attach: attach, hide: hideAll };
})();
