# FC Barcelona Museum — product page (PV)

English copy and a **Fever-style** layout preview: light UI, blue CTAs (`#3257ff`), ticket **carousel** (arrows + dots, scroll-snap, padded viewport so cards are not clipped).

- **`index.html`** — Full page mock (header, hero grid, quick info, sidebar + mobile sticky CTA) for GitHub Pages.
- **`html-pv-description-barca-museum.html`** — Embeddable block: `<style>` + description + carousel + inline script for Fever/CMS.

## GitHub Pages

Site root serves `index.html`: `https://anaterolfever.github.io/fcb-museum-pv-redesign/`

Optional query (session picker presets in `js/booking-plan.js`): `?plan=fcb-museum` (default) or `?plan=karaoke-holey-moley` (wider evening time-slot list). Barça ticket tiers are unchanged.

Ticket prices (“From €…”) follow the public Barça museum tiers; confirm on [fcbarcelona.com](https://www.fcbarcelona.com/en/entradas/camp-nou-experience/visitas-museo-barca) before go-live.
