(function () {
  "use strict";
  var root = document.documentElement;
  var T = {
    ru: { title: "QusCode — маленькая команда, много крови", desc: "QusCode — независимая игровая команда, основанная Qusderlol. Маленькая команда. Много крови. Сделано кодом." },
    en: { title: "QusCode — small team, big gore", desc: "QusCode — an independent game team founded by Qusderlol. Small team. Big gore. Made with code." }
  };
  var btns = document.querySelectorAll(".lang button");

  function setLang(l, save) {
    if (l !== "ru" && l !== "en") l = "ru";
    root.lang = l;
    document.title = T[l].title;
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", T[l].desc);
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].dataset.lang === l ? "true" : "false");
    }
    if (save) { try { localStorage.setItem("lang", l); } catch (e) {} }
  }

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () { setLang(this.dataset.lang, true); });
  }

  var stored = null;
  try { stored = localStorage.getItem("lang"); } catch (e) {}
  setLang(stored || ((navigator.language || "").slice(0, 2).toLowerCase() === "ru" ? "ru" : "en"), false);
})();
