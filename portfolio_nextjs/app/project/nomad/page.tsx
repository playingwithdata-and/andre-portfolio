"use client";

import { useState } from "react";
import Link from "next/link";

export default function NomadCaseStudy() {
  const [copied, setCopied] = useState(false);
  const email = "andre.analytics@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#0e100f] text-[#edece8] antialiased selection:bg-[#c5a059] selection:text-black">
      {/* Navigation Bar */}
      <header className="fixed left-0 top-0 z-[1000] w-full py-4 bg-[#0e100f]/85 backdrop-blur-[14px] border-b border-white/[0.08]">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-[clamp(20px,4vw,56px)]">
          <Link
            href="/"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-white/10 text-xl font-bold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:scale-105 hover:bg-white/15"
            aria-label="Back to Homepage"
          >
            A
          </Link>

          <Link
            href="/#workSection"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-[#c7c6c1] shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:-translate-x-0.5 hover:text-white hover:border-white/30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Projects
          </Link>

          <div className="flex items-center gap-2.5 max-sm:hidden">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:-translate-y-px hover:border-white/30"
            >
              Linkedin
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a
              href="#copyEmailBtn"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#c5a059]/40 bg-[#c5a059] px-4 py-2 text-sm font-semibold text-[#0e100f] shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:-translate-y-px hover:bg-[#d6b26b]"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] pt-[clamp(95px,10vw,130px)] pb-24">
        {/* HERO */}
        <section className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#a6a59f]">
            <span className="h-2 w-2 rounded-full bg-[#c5a059]" />
            Luxury Travel Experience
          </div>

          <h1 className="text-[clamp(36px,4.8vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
            NOMAD
          </h1>
          <p className="mt-3.5 text-[clamp(19px,2.2vw,26px)] font-semibold leading-[1.35] tracking-[-0.015em] text-[#c7c6c1]">
            Journeys shaped around the way you want to feel.
          </p>
          <p className="mt-3.5 max-w-[720px] text-[clamp(15.5px,1.5vw,18px)] leading-[1.55] text-[#93928c]">
            A cinematic digital experience for discovering highly curated luxury travel, where destinations are revealed through atmosphere, quiet restraint, and visual pacing.
          </p>

          {/* Metadata Row */}
          <div className="my-8 grid grid-cols-3 gap-6 border-y border-white/10 py-4 max-sm:grid-cols-1">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#7d7c76]">ROLE</div>
              <div className="mt-1 text-[14px] font-semibold text-white leading-snug">
                Art Direction / Digital Experience
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#7d7c76]">TYPE</div>
              <div className="mt-1 text-[14px] font-semibold text-white">Luxury Travel Experience</div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#7d7c76]">FOCUS</div>
              <div className="mt-1 text-[14px] font-semibold text-white">Editorial Discovery / Interaction</div>
            </div>
          </div>

          {/* Primary Cinematic Visual - Rich Full-Width Desktop Presentation */}
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#080908] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
            <img
              src="/assets/images/projects/nomad/nomad_full.png"
              alt="NOMAD Cinematic Luxury Travel Experience showcasing Patagonia landscape and quiet editorial typography"
              width={1440}
              height={1000}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </section>

        {/* 01 / CONCEPT */}
        <section className="border-t border-white/10 py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c5a059]">01 / Concept</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
            LUXURY TRAVEL STARTS BEFORE THE JOURNEY.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#a6a59f]">
            Most travel interfaces prioritize inventory and transactions. NOMAD explores a more editorial approach where destinations are discovered through atmosphere, narrative, and visual pacing.
          </p>

          <div className="mt-7 rounded-[18px] border border-white/10 border-l-4 border-l-[#c5a059] bg-white/[0.03] p-6 sm:p-7">
            <div className="text-[clamp(20px,2.4vw,28px)] font-extrabold tracking-[-0.02em] text-white">
              ATMOSPHERE PRECEDES LOGISTICS.
            </div>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[#93928c]">
              When exploring rare or transformative journeys, travelers seek an emotional connection to the land first. NOMAD replaces rigid booking calendars with evocative visual narratives that spark genuine anticipation.
            </p>
          </div>
        </section>

        {/* 02 / EXPERIENCE */}
        <section className="border-t border-white/10 py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c5a059]">02 / Experience</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
            DISCOVER A FEELING BEFORE A DESTINATION.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#a6a59f]">
            Guests journey through states of contemplation, progressing seamlessly from landscape immersion into personalized expedition curation.
          </p>

          {/* Flow Strip */}
          <div className="my-6 flex flex-wrap items-center gap-2.5">
            {["Discover", "Immerse", "Explore Destination", "Curate Journey", "Continue / Enquire"].map((step, idx) => (
              <div key={step} className="flex items-center gap-2.5">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13.5px] font-semibold text-white">
                  {step}
                </span>
                {idx < 4 && <span className="text-sm text-[#7d7c76]">→</span>}
              </div>
            ))}
          </div>

          {/* Atmospheric Landscape Visual */}
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#080908] shadow-lg">
            <img
              src="/assets/images/projects/nomad/nomad_atmosphere.png"
              alt="NOMAD Atmospheric Landscape Experience showing glacial waters and snowcapped mountains"
              width={920}
              height={1000}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* 03 / ART DIRECTION */}
        <section className="border-t border-white/10 py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c5a059]">03 / Art Direction</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
            QUIET INTERFACE. CINEMATIC DESTINATIONS.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#a6a59f]">
            The visual system steps back to give dramatic landscapes absolute primacy:
          </p>

          {/* Paired Visual Proof: Landscape Atmosphere + Refined Interface Column */}
          <div className="my-7 grid grid-cols-[1.2fr_0.8fr] gap-5 max-md:grid-cols-1">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#080908] shadow-md">
              <img
                src="/assets/images/projects/nomad/nomad_atmosphere.png"
                alt="NOMAD Destination landscape photography leads the experience"
                width={920}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#080908] shadow-md">
              <img
                src="/assets/images/projects/nomad/nomad_interface.png"
                alt="NOMAD Restrained typography and dark interface chrome"
                width={560}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* 6 Art Direction Principle Cards */}
          <div className="mt-7 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {[
              { title: "Destination Photography Leads", desc: "Full-bleed imagery serves as the primary canvas, transporting the viewer directly onto the terrain." },
              { title: "Dark Restrained Interface", desc: "Charcoal tones (#0e100f) recede visually, allowing glaciers, skies, and golden sunlight to resonate." },
              { title: "Editorial Typography", desc: "Refined typographic scale paired with generous line height for immersive storytelling." },
              { title: "Generous Negative Space", desc: "Uncluttered margins and open breathing room echo the vast solitude of remote destinations." },
              { title: "Minimal Controls", desc: "Restrained navigation controls stay out of the way until the traveler intentionally interacts." },
              { title: "Slower Visual Pacing", desc: "Transitions and composition rhythms designed for thoughtful discovery rather than hasty checkout." },
            ].map((point) => (
              <div key={point.title} className="rounded-[16px] border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[15px] font-bold text-white">{point.title}</div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-[#93928c]">{point.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 / DECISIONS */}
        <section className="border-t border-white/10 py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c5a059]">04 / Decisions</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
            THE INTERFACE STEPS BACK.
          </h2>

          <div className="mt-7 grid grid-cols-2 gap-x-9 gap-y-7 max-md:grid-cols-1">
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-white">
                01 — Photography before interface
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#93928c]">
                Atmosphere and natural landscapes establish the emotional anchor before controls and filters ever appear.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-white">
                02 — Editorial pacing over dense navigation
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#93928c]">
                Generous negative space and intentional vertical rhythms replace crowded navigation bars and overwhelming sidebars.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-white">
                03 — Restraint over feature overload
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#93928c]">
                Focus is deliberately concentrated on bespoke journey curation rather than mass catalog comparison tables.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-white">
                04 — Destination mood before transaction
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#93928c]">
                Inviting guests to feel the terrain and atmospheric silence before prompting private expedition enquiry.
              </p>
            </div>
          </div>
        </section>

        {/* 05 / EXPERIENCE GALLERY */}
        <section className="border-t border-white/10 py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c5a059]">05 / Experience Gallery</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
            RESTRAINED CONTROLS &amp; EXPEDITION INQUIRY.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#a6a59f]">
            The right-hand interface panel features warm gold accents, concise expedition specs, and quiet booking inquiry touchpoints.
          </p>

          {/* 1. Paired Screens: Atmospheric Detail + Interface Highlights */}
          <div className="mt-7 grid grid-cols-[1.15fr_0.85fr] gap-5 max-md:grid-cols-1">
            <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#080908] shadow-md">
              <img
                src="/assets/images/projects/nomad/nomad_atmosphere.png"
                alt="Atmospheric glacial reflections in Patagonia"
                width={920}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#080908] shadow-md">
              <img
                src="/assets/images/projects/nomad/nomad_interface.png"
                alt="NOMAD Typographic Panel with Bespoke Itinerary Highlights and Gold Call-to-Action"
                width={560}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2. Full-Width Wide Screen Overview */}
          <div className="mt-7 overflow-hidden rounded-[20px] border border-white/10 bg-[#080908] shadow-2xl">
            <img
              src="/assets/images/projects/nomad/nomad_full.png"
              alt="Complete NOMAD desktop experience combining cinematic scenery with restrained inquiry UI"
              width={1440}
              height={1000}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* CLOSING & NEXT PROJECT NAVIGATION */}
        <section className="border-t border-white/10 pt-14">
          <div className="rounded-[24px] bg-[#141715] border border-white/10 px-6 py-12 sm:px-12 sm:py-14 text-center text-white shadow-2xl">
            <div className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#c5a059]">Closing Reflection</div>
            <h2 className="text-[clamp(26px,3.6vw,40px)] font-extrabold tracking-[-0.02em]">
              THE INTERFACE DISAPPEARS.<br />THE JOURNEY TAKES OVER.
            </h2>
            <p className="mx-auto mt-3 max-w-[580px] text-[clamp(15px,1.6vw,17.5px)] leading-relaxed text-[#93928c]">
              By stepping back and letting cinematic landscape photography lead, NOMAD delivers a digital travel experience that feels as rare, tranquil, and memorable as the destination itself.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#workSection"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-white/10"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                All Projects
              </Link>

              <Link
                href="/project/digital-receipt"
                className="inline-flex items-center gap-2 rounded-full bg-[#c5a059] px-7 py-3 text-sm font-bold text-[#0e100f] shadow-sm transition-all duration-150 hover:scale-105 hover:bg-[#d6b26b]"
              >
                View Next Project: Digital Receipt
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-10 pt-20">
        <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)]">
          <div className="flex flex-col gap-12">
            <h2 className="max-w-[680px] text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.25] tracking-[-0.025em] text-white">
              Some things start with a simple conversation.
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-5 max-md:flex-col max-md:items-stretch">
              <button
                id="copyEmailBtn"
                type="button"
                aria-label="Copy Email Address"
                onClick={copyEmail}
                className="inline-flex select-none items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-base font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/30 max-md:w-full max-md:justify-between"
              >
                <span className="tracking-[-0.01em]">{email}</span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 ${
                    copied ? "bg-[#c5a059] text-black" : "bg-white/10 text-[#c7c6c1]"
                  }`}
                >
                  {copied ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
              <div className="flex items-center gap-3 max-md:w-full">
                {["Linkedin", "Resume"].map((label) => (
                  <a
                    key={label}
                    href={label === "Linkedin" ? "https://linkedin.com" : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/30 max-md:flex-1 max-md:justify-center"
                  >
                    {label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-8 text-sm font-medium text-[#7d7c76]">
              <span>&copy; 2026 Andre</span>
              <span>Thanks for visiting!</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
