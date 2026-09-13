/* ==========================================================================
   Sam Woods — Engineering Physics portfolio

   There is exactly one piece of motion on this site: section rules strike
   themselves in, left to right, as they come into view — the way a line gets
   struck on a drawing. Content is never hidden to animate it, so the page is
   fully readable with JavaScript off, with motion reduced, or before this
   file loads.

   The `js` class is set inline in each page's <head> so the rules start
   collapsed rather than flashing in drawn and resetting.
   ========================================================================== */

(function () {
  "use strict";

  var rules = document.querySelectorAll(".section__rule, .hero__rule, .page-head__rule");
  if (!rules.length) return;

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function strike(el) {
    el.classList.add("is-struck");
  }

  // No IntersectionObserver, or the visitor asked for less motion: draw
  // everything immediately and don't observe anything.
  if (reduced || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(rules, strike);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        strike(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0 }
  );

  Array.prototype.forEach.call(rules, function (rule) {
    observer.observe(rule);
  });

  // Anything already on screen at load strikes on the next frame, so the
  // first rule animates rather than appearing pre-drawn.
  requestAnimationFrame(function () {
    Array.prototype.forEach.call(rules, function (rule) {
      var box = rule.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) {
        strike(rule);
        observer.unobserve(rule);
      }
    });
  });
})();
