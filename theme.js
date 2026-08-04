/* Shared light/dark toggle, used by every page. Needs a
   <button id="theme-toggle"> in the header and this script loaded after it. */
(function () {
  "use strict";

  var themeBtn = document.getElementById("theme-toggle");
  if (!themeBtn) return;

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
})();
