import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Wood & Tile — Links",
  description: "Call, WhatsApp, brochure and location for Wood & Tile.",
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "size-5 shrink-0",
  "aria-hidden": true,
};

const buttons: { label: string; href: string; external?: boolean; icon: ReactNode }[] = [
  {
    label: "Please Call",
    href: "tel:+971509128444",
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971509128444",
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    ),
  },
  {
    label: "Brochure(s)",
    href: "https://bespoke-unicorn-baa3ce.netlify.app/assets/wood-tile-brochure.pdf",
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    label: "Google Location",
    href: "https://maps.app.goo.gl/BnM7q9qQhoGuZcSp7?g_st=iw",
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/woodandtile.ae/",
    icon: (
      <svg {...iconProps} className="size-4.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/in/about",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden>
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.35-2.49V9.66a5.73 5.73 0 0 0-.75-.05A5.69 5.69 0 0 0 4.18 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.68-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/woodandtile.ae/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden>
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.33-.04-1.56-.14-2.86-.14C11.93 2 10 3.66 10 6.7v2.8H7v4h3V22h4z" />
      </svg>
    ),
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/t/LKXjlqWI",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden>
        <path d="M12 2c3.3 0 5.6 2.5 5.6 5.7v2.6c.5.2 1.1 0 1.6-.2.6-.2 1.2.4.9 1-.4.7-1.6 1-2.2 1.3.6 2 2.3 3.6 4.1 4.1.4.1.5.6.2.9-.6.5-1.7.7-2.6.9-.2.5-.1 1.2-.7 1.3-.9.1-1.8-.2-2.7.2-1 .4-1.9 1.6-4.2 1.6s-3.2-1.2-4.2-1.6c-.9-.4-1.8-.1-2.7-.2-.6-.1-.5-.8-.7-1.3-.9-.2-2-.4-2.6-.9-.3-.3-.2-.8.2-.9 1.8-.5 3.5-2.1 4.1-4.1-.6-.3-1.8-.6-2.2-1.3-.3-.6.3-1.2.9-1 .5.2 1.1.4 1.6.2V7.7C6.4 4.5 8.7 2 12 2z" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-10 text-center">
      <Image
        src="/wood-tile-logo.png"
        alt="Wood & Tile — Renovation & Property Maintenance"
        width={472}
        height={430}
        loading="eager"
        fetchPriority="high"
        className="h-auto w-40 sm:w-44"
      />

      <nav className="mt-8 flex w-full max-w-xs flex-col gap-3">
        {buttons.map(({ label, href, external, icon }) => (
          <a
            key={label}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex h-12 items-center justify-center gap-3 rounded-full bg-[#1f4778] text-base font-semibold text-white transition hover:bg-[#183a63] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f4778]"
          >
            {icon}
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-10 flex gap-3">
        {socials.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full bg-[#1f4778] text-white transition hover:bg-[#183a63]"
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="mt-2 text-sm text-[#1f4778]">Please follow us</p>

      <hr className="mt-8 w-full max-w-60 border-stone-200" />
      <p className="mt-5 text-sm text-[#9a3412]">Your Space, Our Expertise.</p>
    </main>
  );
}
