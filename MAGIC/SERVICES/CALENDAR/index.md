---
layout: default
scope: CALENDAR
title: "CALENDAR"
description: "CALENDAR is the time axis of the galaxy — every meeting governed, every participant resolved, every event visualized."
footerTagline: "CALENDAR"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/CALENDAR/calendar.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/CALENDAR/calendar.pdf"
hero:
  badge: CALENDAR
  title: "CALENDAR"
  description: "CALENDAR is the time axis of the galaxy — every meeting governed, every participant resolved, every event visualized."
  cta:
    - label: "Open CALENDAR"
      href: /MAGIC/SERVICES/CALENDAR/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **CALENDAR_IS_TIME_AXIS** — CALENDAR is the time axis of the galaxy; events project into TIMELINE as a governed lane.
- **PARTICIPANT_VIA_CONTACTS** — participants resolve through the CONTACTS service; no hardcoded participant mappings.
- **PRIVATE_EVENTS_STAY_PRIVATE** — private calendar data is never exposed on public surfaces; every recurring event is governed.
## Constraints

```
MUST:     Resolve participants via CONTACTS service
MUST:     Emit CALENDAR lane events to TIMELINE
MUST:     Govern every recurring event
MUST NOT: Hardcode participant mappings
MUST NOT: Expose private calendar data on public surfaces
```

---

*CALENDAR | CANON | SERVICES*
