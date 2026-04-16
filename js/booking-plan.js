/**
 * Plan-specific booking UI (month calendar + time slots).
 * URL: ?plan=fcb-museum (default) | ?plan=karaoke-holey-moley
 */
(function () {
  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  /** 10:00–18:00 every 30 minutes (24h HH:MM for data-time + JS) */
  var SLOTS_TEN_TO_SIX = (function () {
    var o = [];
    var h;
    for (h = 10; h <= 17; h++) {
      o.push(pad2(h) + ":00");
      o.push(pad2(h) + ":30");
    }
    o.push("18:00");
    return o;
  })();

  var PLANS = {
    "fcb-museum": {
      timeSlots: SLOTS_TEN_TO_SIX,
      defaultTime: "10:00",
      selectedDate: [2026, 5, 21],
      viewMonth: [2026, 5],
      minDate: [2026, 3, 15],
      calendarFromPrice: "€35.10"
    },
    "karaoke-holey-moley": {
      timeSlots: SLOTS_TEN_TO_SIX,
      defaultTime: "12:00",
      selectedDate: [2026, 5, 20],
      viewMonth: [2026, 5],
      minDate: [2026, 3, 15],
      calendarFromPrice: "€35.10"
    }
  };

  var slug = new URLSearchParams(window.location.search).get("plan") || "fcb-museum";
  window.FCB_BOOKING_PLAN_SLUG = slug;
  window.FCB_BOOKING_CONFIG = PLANS[slug] || PLANS["fcb-museum"];
})();
