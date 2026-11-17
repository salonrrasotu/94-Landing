# Project memory

## Product intent & audience

- Site for veterinary clinic + grooming salon «ВетЛапка» (Russian language).
- Target audience: pet owners seeking vet care, grooming, booking, reviews, contacts.
- Goal: complete marketing/service site with booking and inquiry flows.

## Brand personality & voice

- Warm, caring, professional; pet-friendly tone.
- All UI copy in Russian.

## Visual design & UX direction

- Color theme: turquoise-green + peach.
- shadcn/ui components used: Card, Button, Badge, Avatar, Tabs, Accordion, Dialog, Sheet, HoverCard, Tooltip, Calendar, Table, Input, Textarea, Select, Checkbox, Pagination, Progress, ScrollArea, Separator, Switch, Label, Alert, Toast, Breadcrumb.
- Layout: persistent Header (nav, phone, booking button; mobile Sheet menu) + Footer (contacts, nav, socials, newsletter).
- Responsive; animations across sections; ~24 pet/clinic images.
- Homepage sections: Hero (with floating stat card), Stats, Services (HoverCard details), About (progress bars), Prices (Tabs: vet/grooming), Team (avatars + tooltips), Gallery (Dialog lightbox), Booking (Calendar + time slots + form), Reviews (pagination + star form), FAQ (Accordion + CTA), CTA (discount + Switch subscribe), Contacts (form + cards + map).
- Data and images extracted into separate file(s).
- Themed 404 page.

## Decisions, constraints & rationale

- Framework: Vite + React.
- Build verified passing; key files (index.tsx, App.tsx, NotFound.tsx, index.html) confirmed updated.
- Booking/review/contact forms are frontend-only (no backend indicated).
- Homepage is single long page with multiple sections rather than multi-route.

## Open questions & assumptions

- No backend/API for bookings/reviews/newsletter — assumed static/mock handling.
- Image sources assumed provided/placeholder; no CMS.
- Routing limited to home + 404 unless additional pages requested.
- No analytics/SEO config discussed yet.