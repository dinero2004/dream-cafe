(function () {
  "use strict";

  var STORAGE_LANG = "dreamcafe-lang";
  var STORAGE_THEME = "dreamcafe-theme";

  var STRINGS = {
    en: {
      doc_title: "Dream Café — Coffee & Patisserie",
      meta_desc:
        "Dream Café — minimalist coffee and patisserie in Sofia and Greece. Pastries, specialty coffee, and light fare by Ivana Pencheva.",
      aria_open_menu: "Open menu",
      aria_close_menu: "Close menu",
      aria_nav_primary: "Primary",
      aria_theme_group: "Color theme",
      aria_lang_group: "Language",
      nav_home: "Home",
      nav_information: "Information",
      nav_menu: "Menu",
      nav_testimonials: "Testimonials",
      nav_locations: "Locations",
      nav_about: "About",
      theme_blush: "Blush",
      theme_lavender: "Lavender",
      theme_peach: "Peach",
      hero_img_alt: "Dream Café exterior: white walls, wood-framed glass, and pink bougainvillea",
      hero_eyebrow: "Sofia · Greece",
      hero_tagline: "A quiet room for coffee, pastry, and unhurried afternoons.",
      hero_cta: "View menu",
      info_title: "Information",
      info_lead:
        "Dream Café is a small collection of spaces built around light, plants, and careful craft. We serve specialty coffee, house-made lemonades and iced teas, pastries, and a concise savory menu for lunch or a light bite.",
      info_hours_lbl: "Hours",
      info_hours_val: "Daily 8:00 — 20:00",
      info_res_lbl: "Reservations",
      info_res_val: "Walk-in welcome; groups of 6+ by request",
      info_diet_lbl: "Dietary",
      info_diet_val: "Vegetarian options; please ask staff for allergens",
      info_fig_alt:
        "Contemporary Dream Café building with concrete façade, wood-framed windows, and flowering vines",
      gal_1_alt: "Pastry counter with croissants, fruit danishes, and viennoiserie",
      gal_2_alt: "Stack of blueberry muffins with coarse sugar tops",
      gal_3_alt: "Peach iced tea with mint in a tall glass on a wooden table",
      menu_title: "Menu",
      menu_subtitle: "Seasonal items may rotate. All drinks can be prepared iced on request.",
      mb_coffee: "Coffee",
      mb_cold: "Cold & creamy",
      mb_pastries: "Pastries & cakes",
      mb_savory: "Light & savory",
      menu_coffee_img_alt: "Cappuccino with latte art in a white cup on a wooden table",
      menu_cold_img_alt: "Homemade lemonade with ice, lemon, and fresh mint",
      menu_pastry_img_alt: "Display of cakes, tarts, and viennoiserie in the pastry case",
      menu_savory_img_alt: "Outdoor seating with yellow climbing flowers and a chalkboard menu",
      coffee_1n: "Espresso",
      coffee_1m: "Classic",
      coffee_2n: "Macchiato",
      coffee_2m: "Short",
      coffee_3n: "Cappuccino",
      coffee_3m: "Single origin",
      coffee_4n: "Flat white",
      coffee_4m: "Velvet microfoam",
      coffee_5n: "Filter coffee",
      coffee_5m: "Rotating beans",
      coffee_6n: "Signature latte",
      coffee_6m: "House syrup optional",
      cold_1n: "Homemade lemonade",
      cold_1m: "Citrus, berry",
      cold_2n: "Iced tea",
      cold_2m: "Black, green, herbal",
      cold_3n: "Milkshakes",
      cold_3m: "Vanilla, chocolate, seasonal",
      cold_4n: "Iced latte",
      cold_4m: "Espresso & milk",
      past_1n: "Seasonal cake slices",
      past_1m: "Fruit & cream",
      past_2n: "Muffins & viennoiserie",
      past_2m: "Morning",
      past_3n: "Tarts & petits gâteaux",
      past_3m: "Afternoon",
      sav_1n: "Garden salads",
      sav_1m: "Leaves, grains, vinaigrette",
      sav_2n: "Wraps",
      sav_2m: "Grilled vegetables, herbs",
      sav_3n: "Sandwiches",
      sav_3m: "Sourdough, daily fillings",
      testimonials_title: "Testimonials",
      testimonials_sub: "Notes from guests who like their coffee quiet and their pastry first.",
      test_1_quote:
        "The calmest coffee ritual in Sofia. The pastry case is dangerous—in the best way.",
      test_1_author: "— Mira K., designer · Sofia",
      test_2_quote: "Feels like a private salon, not a crowded café. The iced tea was unforgettable.",
      test_2_author: "— Alex P. · Athens",
      test_3_quote: "We booked the terrace for six. Service was quiet, warm, and precise.",
      test_3_author: "— Elena S. · Sofia",
      loc_title: "Locations",
      loc_subtitle: "Four houses — two in Sofia and two in Greece. Tap a pin for the address.",
      loc_vitosha_name: "Dream Café — Vitosha",
      loc_lozenets_name: "Dream Café — Lozenets",
      loc_kolonaki_name: "Dream Café — Kolonaki",
      loc_ladadika_name: "Dream Café — Ladadika",
      loc_sofia_meta: "Sofia, Bulgaria",
      loc_athens_meta: "Athens, Greece",
      loc_thess_meta: "Thessaloniki, Greece",
      addr_vitosha_1: "12 Vitosha Boulevard",
      addr_vitosha_2: "1000 Sofia",
      addr_lozenets_1: "4 Lozenets Street",
      addr_lozenets_2: "1421 Sofia",
      addr_kolonaki_1: "8 Tsakalof Street",
      addr_kolonaki_2: "106 73 Athens",
      addr_ladadika_1: "3 Katouni Street",
      addr_ladadika_2: "546 25 Thessaloniki",
      map_aria: "Map of Dream Café locations",
      about_title: "About us",
      about_lead_a: "Dream Café was founded by",
      about_lead_b:
        "as a place where precision meets warmth — the same care in a cup of espresso as in the room you drink it in.",
      about_p2:
        "Ivana trained in specialty coffee and pastry before opening the first Dream Café in Sofia. Today the brand grows slowly, one space at a time, always with the same brief: soft light, honest ingredients, and calm service.",
      about_quote: "“We don’t rush the pour — or the afternoon.”",
      about_cite: "— Ivana Pencheva, founder",
      about_img_alt: "Ivana Pencheva, founder of Dream Café",
      footer_rights: " Dream Café. Sofia & Greece.",
    },
    bg: {
      doc_title: "Dream Café — кафе и сладкарница",
      meta_desc:
        "Dream Café — минималистично кафе и сладкарница в София и Гърция. Сладки изделия, специално кафе и лека кухня от Ивана Пенчева.",
      aria_open_menu: "Отвори меню",
      aria_close_menu: "Затвори меню",
      aria_nav_primary: "Основна навигация",
      aria_theme_group: "Цветова тема",
      aria_lang_group: "Език",
      nav_home: "Начало",
      nav_information: "Информация",
      nav_menu: "Меню",
      nav_testimonials: "Отзиви",
      nav_locations: "Локации",
      nav_about: "За нас",
      theme_blush: "Розово",
      theme_lavender: "Лавандула",
      theme_peach: "Праскова",
      hero_img_alt: "Dream Café отвън: бели стени, дървени рамки на прозорци и розова бугенвилея",
      hero_eyebrow: "София · Гърция",
      hero_tagline: "Тиха стая за кафе, сладки изделия и следобеди без бързане.",
      hero_cta: "Виж менюто",
      info_title: "Информация",
      info_lead:
        "Dream Café е малка верига пространства около светлина, растения и внимателна работа. Предлагаме специално кафе, домашни лимонади и студени чайове, сладки изделия и кратко солено меню за обяд или лека хапка.",
      info_hours_lbl: "Работно време",
      info_hours_val: "Всеки ден 8:00 — 20:00",
      info_res_lbl: "Резервации",
      info_res_val: "Без резервация; групи над 6 души — по заявка",
      info_diet_lbl: "Хранене",
      info_diet_val: "Вегетариански опции; за алергени попитайте персонала",
      info_fig_alt: "Съвременна сграда на Dream Café с бетон, дървени прозорци и цъфтящи лози",
      gal_1_alt: "Витрина с кроасани, плодови датски и виенски изделия",
      gal_2_alt: "Купчина боровинкови мъфини с захар отгоре",
      gal_3_alt: "Прасковен студен чай с мента в висока чаша на дървена маса",
      menu_title: "Меню",
      menu_subtitle: "Сезонните позиции се сменят. Всички напитки могат и студени.",
      mb_coffee: "Кафе",
      mb_cold: "Студени и кремообразни",
      mb_pastries: "Сладки и торти",
      mb_savory: "Леки и солени",
      menu_coffee_img_alt: "Капучино с лате арт в бяла чаша на дървена маса",
      menu_cold_img_alt: "Домашна лимонада с лед, лимон и мента",
      menu_pastry_img_alt: "Витрина с торти, тартове и виенски изделия",
      menu_savory_img_alt: "Външни маси с жълти цветя и меню дъска",
      coffee_1n: "Еспресо",
      coffee_1m: "Класика",
      coffee_2n: "Макиато",
      coffee_2m: "Късо",
      coffee_3n: "Капучино",
      coffee_3m: "Един произход",
      coffee_4n: "Флат уайт",
      coffee_4m: "Кадифен микрофоум",
      coffee_5n: "Филтър кафе",
      coffee_5m: "Сменящи се зърна",
      coffee_6n: "Сигнатур лате",
      coffee_6m: "Сироп по избор",
      cold_1n: "Домашна лимонада",
      cold_1m: "Цитрус, горски плодове",
      cold_2n: "Студен чай",
      cold_2m: "Черен, зелен, билков",
      cold_3n: "Млечен шейк",
      cold_3m: "Ванилия, шоколад, сезонен",
      cold_4n: "Студено лате",
      cold_4m: "Еспресо и мляко",
      past_1n: "Сезонни парчета торта",
      past_1m: "Плодове и крем",
      past_2n: "Мъфини и виенски",
      past_2m: "Сутрин",
      past_3n: "Тартове и мини десерти",
      past_3m: "Следобед",
      sav_1n: "Градински салати",
      sav_1m: "Листа, зърна, винегрет",
      sav_2n: "Рапове",
      sav_2m: "Зеленчуци на скара, билки",
      sav_3n: "Сандвичи",
      sav_3m: "Заквасен хляб, дневни плънки",
      testimonials_title: "Отзиви",
      testimonials_sub: "Думи от гости, които обичат тихото кафе и сладкото на първо място.",
      test_1_quote:
        "Най-спокойното кафе в София. Витрината със сладки е изкушение — в най-добрия смисъл.",
      test_1_author: "— Мира К., дизайнер · София",
      test_2_quote: "Като частен салон, не шумно кафе. Студеният чай беше незабравим.",
      test_2_author: "— Алекс П. · Атина",
      test_3_quote: "Резервирахме терасата за шестима. Обслужването — тихо, топло и точно.",
      test_3_author: "— Елена С. · София",
      loc_title: "Локации",
      loc_subtitle: "Четири дома — два в София и два в Гърция. Докоснете пин за адрес.",
      loc_vitosha_name: "Dream Café — Витоша",
      loc_lozenets_name: "Dream Café — Лозенец",
      loc_kolonaki_name: "Dream Café — Колонаки",
      loc_ladadika_name: "Dream Café — Лададика",
      loc_sofia_meta: "София, България",
      loc_athens_meta: "Атина, Гърция",
      loc_thess_meta: "Солун, Гърция",
      addr_vitosha_1: "бул. „Витоша“ 12",
      addr_vitosha_2: "1000 София",
      addr_lozenets_1: "ул. „Лозенец“ 4",
      addr_lozenets_2: "1421 София",
      addr_kolonaki_1: "ул. „Цакалоф“ 8",
      addr_kolonaki_2: "106 73 Атина",
      addr_ladadika_1: "ул. „Катуни“ 3",
      addr_ladadika_2: "546 25 Солун",
      map_aria: "Карта с локациите на Dream Café",
      about_title: "За нас",
      about_lead_a: "Dream Café е основана от",
      about_lead_b:
        "като място, където точността среща топлината — същата грижа в чаша еспресо, както и в стаята, в която го пиете.",
      about_p2:
        "Ивана се е обучавала в специално кафе и сладкарство преди първата Dream Café в София. Днес марката расте бавно, място по място, с един и същ принцип: мека светлина, честни продукти и спокойно обслужване.",
      about_quote: "„Не бързаме с излива — нито с следобеда.“",
      about_cite: "— Ивана Пенчева, основател",
      about_img_alt: "Ивана Пенчева, основател на Dream Café",
      footer_rights: " Dream Café. София и Гърция.",
    },
  };

  var LOCATIONS = [
    { lat: 42.6904, lng: 23.3208, nameKey: "loc_vitosha_name", cityKey: "loc_sofia_meta" },
    { lat: 42.6668, lng: 23.3112, nameKey: "loc_lozenets_name", cityKey: "loc_sofia_meta" },
    { lat: 37.9795, lng: 23.7413, nameKey: "loc_kolonaki_name", cityKey: "loc_athens_meta" },
    { lat: 40.634, lng: 22.942, nameKey: "loc_ladadika_name", cityKey: "loc_thess_meta" },
  ];

  var dreamState = {
    map: null,
    markers: [],
  };

  function getLang() {
    var stored = localStorage.getItem(STORAGE_LANG);
    if (stored === "bg" || stored === "en") {
      return stored;
    }
    return "en";
  }

  function getTheme() {
    var stored = localStorage.getItem(STORAGE_THEME);
    if (stored === "lavender" || stored === "peach" || stored === "blush") {
      return stored;
    }
    return "blush";
  }

  function t(lang, key) {
    var table = STRINGS[lang] || STRINGS.en;
    if (table[key] != null) {
      return table[key];
    }
    return STRINGS.en[key] != null ? STRINGS.en[key] : key;
  }

  function applyI18n(lang) {
    document.documentElement.setAttribute("lang", lang === "bg" ? "bg" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && t(lang, key)) {
        el.textContent = t(lang, key);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key && t(lang, key)) {
        el.setAttribute("alt", t(lang, key));
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key && t(lang, key)) {
        el.setAttribute("aria-label", t(lang, key));
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (key && t(lang, key)) {
        el.setAttribute("title", t(lang, key));
      }
    });

    document.title = t(lang, "doc_title");

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t(lang, "meta_desc"));
    }

    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-label", t(lang, open ? "aria_close_menu" : "aria_open_menu"));
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isEn = btn.getAttribute("data-set-lang") === "en";
      var active = (lang === "en" && isEn) || (lang === "bg" && !isEn);
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem(STORAGE_LANG, lang);
    refreshMapPopups(lang);
  }

  function getPinColor() {
    var v = getComputedStyle(document.documentElement).getPropertyValue("--blush").trim();
    return v || "#f4d0d0";
  }

  function getInkColor() {
    var v = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();
    return v || "#1a1a1a";
  }

  function makeMapIcon() {
    if (typeof L === "undefined") {
      return null;
    }
    var blush = getPinColor();
    var ink = getInkColor();
    return L.divIcon({
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
  }

  function popupHtml(lang, loc) {
    var name = t(lang, loc.nameKey);
    var city = t(lang, loc.cityKey);
    return "<strong>" + name + "</strong><br>" + city;
  }

  function refreshMapPopups(lang) {
    if (!dreamState.map || !dreamState.markers.length) {
      return;
    }
    dreamState.markers.forEach(function (marker, i) {
      var loc = LOCATIONS[i];
      if (!loc) {
        return;
      }
      var html = popupHtml(lang, loc);
      var pu = marker.getPopup();
      if (pu) {
        pu.setContent(html);
      } else {
        marker.bindPopup(html);
      }
    });
  }

  function refreshMapIcons() {
    if (typeof L === "undefined" || !dreamState.markers.length) {
      return;
    }
    var icon = makeMapIcon();
    if (!icon) {
      return;
    }
    dreamState.markers.forEach(function (marker) {
      marker.setIcon(icon);
    });
  }

  function initMap(lang) {
    var mapEl = document.getElementById("map");
    if (!mapEl || typeof L === "undefined") {
      return;
    }

    dreamState.map = L.map(mapEl, {
      scrollWheelZoom: false,
      attributionControl: true,
    });

    dreamState.map.once("click", function () {
      dreamState.map.scrollWheelZoom.enable();
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(dreamState.map);

    var bounds = [];
    var icon = makeMapIcon();

    LOCATIONS.forEach(function (loc) {
      var m = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(dreamState.map);
      m.bindPopup(popupHtml(lang, loc));
      dreamState.markers.push(m);
      bounds.push([loc.lat, loc.lng]);
    });

    dreamState.map.fitBounds(bounds, { padding: [48, 48], maxZoom: 7 });
  }

  function setMetaThemeColor() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      return;
    }
    var c = getComputedStyle(document.documentElement).getPropertyValue("--meta-theme").trim();
    if (c) {
      meta.setAttribute("content", c);
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);

    document.querySelectorAll(".theme-btn").forEach(function (btn) {
      var th = btn.getAttribute("data-set-theme");
      var active = th === theme;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    setMetaThemeColor();
    refreshMapIcons();
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var lang = getLang();
  var theme = getTheme();

  applyTheme(theme);
  applyI18n(lang);
  initMap(lang);

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = btn.getAttribute("data-set-lang");
      if (next === "en" || next === "bg") {
        applyI18n(next);
      }
    });
  });

  document.querySelectorAll("[data-set-theme]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = btn.getAttribute("data-set-theme");
      if (next === "blush" || next === "lavender" || next === "peach") {
        applyTheme(next);
      }
    });
  });

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      var lg = getLang();
      toggle.setAttribute("aria-label", t(lg, open ? "aria_close_menu" : "aria_open_menu"));
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        var lg = getLang();
        toggle.setAttribute("aria-label", t(lg, "aria_open_menu"));
      });
    });
  }
})();
