// Flat line/solid SVG icons — no 3D icons used anywhere.
import React from "react";

type P = React.SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const TruckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 6h11v9H3z" />
    <path d="M14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const DollarIcon = (p: P) => (
  <svg {...base(p)}>
    <line x1="12" y1="3" x2="12" y2="21" />
    <path d="M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 3 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3" />
  </svg>
);

export const CheckBadgeIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2l2.4 1.8 3 .3 1 2.8L21 9.5l-1.3 2.7L20 15l-2.9 1 -1.5 2.6-3-.6-2.7 1.5-2.2-2.1-3-.6.3-3-1.9-2.4L4.7 7 7 5.4 8 2.6l3 .6z" />
    <path d="M8.5 12l2.5 2.5 4.5-4.8" />
  </svg>
);

export const TagIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 12l9-9h7v7l-9 9z" />
    <circle cx="15.5" cy="8.5" r="1.3" />
  </svg>
);

export const BoxIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 7l9-4 9 4-9 4-9-4z" />
    <path d="M3 7v10l9 4 9-4V7" />
    <path d="M12 11v10" />
  </svg>
);

export const HeadsetIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 13v-1a8 8 0 0116 0v1" />
    <rect x="3" y="13" width="4" height="6" rx="1.2" />
    <rect x="17" y="13" width="4" height="6" rx="1.2" />
    <path d="M21 19v1a3 3 0 01-3 3h-3" />
  </svg>
);

export const EngineIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 8h6v3h3l3 2v4h-3v2H6l-2-3H3v-4h3l1-1V8z" />
    <path d="M9 8V6h4v2" />
    <path d="M16 11h3" />
  </svg>
);

export const WrenchIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M15 4a4.5 4.5 0 00-5.6 5.9L4 15.3 6.7 18l5.4-5.4A4.5 4.5 0 0018 7l-2.6 2.6-2-2L16 5z" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 3h3l2 5-2.5 1.5a12 12 0 006 6L16 13l5 2v3a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const UsersIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0112 0" />
    <path d="M16 6a3 3 0 010 6" />
    <path d="M16 14a6 6 0 015 6" />
  </svg>
);

export const GearIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);

export const CarIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 11l1.5-4A2 2 0 018.4 6h7.2a2 2 0 011.9 1l1.5 4" />
    <path d="M3 11h18v6H3z" />
    <circle cx="7" cy="17" r="1.4" />
    <circle cx="17" cy="17" r="1.4" />
  </svg>
);

export const FacebookIcon = (p: P) => (
  <svg {...{ ...base(p), fill: "currentColor", stroke: "none" }}>
    <path d="M13 22v-8h2.6l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7v3h2.6v8H13z" />
  </svg>
);

export const TwitterIcon = (p: P) => (
  <svg {...{ ...base(p), fill: "currentColor", stroke: "none" }}>
    <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4 4 0 0012 8.8c0 .3 0 .6.1.9A11.4 11.4 0 013.8 4.6a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5a4 4 0 003.2 4c-.5.1-1 .2-1.6.1a4 4 0 003.7 2.8A8 8 0 012 18a11.3 11.3 0 006.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2z" />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowLeftIcon = (p: P) => (
  <svg {...base(p)}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ArrowRightIcon = (p: P) => (
  <svg {...base(p)}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const MapPinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
