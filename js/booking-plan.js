/**
 * Plan-specific booking UI (calendar strip + time slots).
 * URL: ?plan=fcb-museum (default) | ?plan=karaoke-holey-moley
 * Ticket tier pills stay Barça museum in index.html; only session picker varies.
 */
(function () {
  var PLANS = {
    "fcb-museum": {
      timeSlots: ["10:30", "14:00", "16:30"],
      defaultTime: "10:30",
      selectedDate: [2026, 5, 21],
      viewMonth: [2026, 5],
      minDate: [2026, 3, 15]
    },
    "karaoke-holey-moley": {
      timeSlots: [
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
      ],
      defaultTime: "19:00",
      selectedDate: [2026, 5, 20],
      viewMonth: [2026, 5],
      minDate: [2026, 3, 15]
    }
  };

  var slug = new URLSearchParams(window.location.search).get("plan") || "fcb-museum";
  window.FCB_BOOKING_PLAN_SLUG = slug;
  window.FCB_BOOKING_CONFIG = PLANS[slug] || PLANS["fcb-museum"];
})();
