/* Wash Kings — interactions */
(function () {
  "use strict";

  /* ---- current year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- before / after slider ---- */
  var ba = document.getElementById("ba");
  var range = document.getElementById("ba-range");
  var before = document.getElementById("ba-before");
  var handle = document.getElementById("ba-handle");

  function setBA(pct) {
    pct = Math.max(0, Math.min(100, pct));
    if (before) before.style.width = pct + "%";
    if (handle) handle.style.left = pct + "%";
  }
  if (range) {
    range.addEventListener("input", function () { setBA(parseFloat(range.value)); });
    setBA(parseFloat(range.value));
  }
  /* let pointer-drag anywhere on the image move the slider too */
  if (ba && range) {
    var dragging = false;
    function moveTo(clientX) {
      var rect = ba.getBoundingClientRect();
      var pct = ((clientX - rect.left) / rect.width) * 100;
      range.value = pct;
      setBA(pct);
    }
    ba.addEventListener("pointerdown", function (e) { dragging = true; moveTo(e.clientX); });
    window.addEventListener("pointermove", function (e) { if (dragging) moveTo(e.clientX); });
    window.addEventListener("pointerup", function () { dragging = false; });
  }

  /* ---- quote form (mockup) ---- */
  var form = document.getElementById("quote-form");
  var ok = document.getElementById("quote-ok");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (ok) ok.hidden = false;
      form.querySelector("button[type=submit]").textContent = "Sent 👑";
    });
  }
})();
