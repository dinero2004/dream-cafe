(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  if (typeof L === "undefined") {
    return;
  }

  var mapEl = document.getElementById("map");
  if (!mapEl) {
    return;
  }

  var locations = [
    {
      name: "Dream Café — Vitosha",
      city: "Sofia, Bulgaria",
      lat: 42.6904,
      lng: 23.3208,
    },
    {
      name: "Dream Café — Lozenets",
      city: "Sofia, Bulgaria",
      lat: 42.6668,
      lng: 23.3112,
    },
    {
      name: "Dream Café — Kolonaki",
      city: "Athens, Greece",
      lat: 37.9795,
      lng: 23.7413,
    },
    {
      name: "Dream Café — Ladadika",
      city: "Thessaloniki, Greece",
      lat: 40.634,
      lng: 22.942,
    },
  ];

  var map = L.map(mapEl, {
    scrollWheelZoom: false,
    attributionControl: true,
  });

  map.once("click", function () {
    map.scrollWheelZoom.enable();
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }).addTo(map);

  var blush = "#f4d0d0";
  var ink = "#1a1a1a";

  var icon = L.divIcon({
    className: "dream-pin",
    html:
      '<span style="display:block;width:14px;height:14px;border-radius:50%;background:' +
      blush +
      ";border:2px solid " +
      ink +
      ';box-shadow:0 2px 8px rgba(0,0,0,0.15)"></span>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  var bounds = [];
  locations.forEach(function (loc) {
    var m = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(map);
    m.bindPopup("<strong>" + loc.name + "</strong><br>" + loc.city);
    bounds.push([loc.lat, loc.lng]);
  });

  map.fitBounds(bounds, { padding: [48, 48], maxZoom: 7 });
})();
